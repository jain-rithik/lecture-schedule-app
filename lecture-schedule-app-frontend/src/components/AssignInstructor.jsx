import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const AssignInstructor = () => {
  const { instructorId } = useParams();
  const date = useRef();
  const course = useRef();
  const navigate = useNavigate();
  const courses = useSelector((state) => state.courseSlice);
  const [error, setError] = useState(false);

  const instructors = useSelector((state) => state.instructorSlice);

  const instructor = instructors?.find(
    (instructor) => instructor._id === instructorId
  );

  if (!instructor) {
    // Handle the case where the course is not found
    return <div>Instructor not found</div>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("ok")
    console.log(course.current.value)
    fetch(`${process.env.REACT_APP_BACKENDURL}/api/instructor/${instructorId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        course: course?.current.value,
        date: date?.current.value,
        
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("instructor updated successfully:", data);
        if(data.error) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 2000)
        } else {
            navigate("/instructor");
        }
      })
      .catch((error) => console.error("Error updating course:", error));
  };

  return (
    <div className="flex justify-center pt-10">
      <div className="flex flex-col w-full items-center">
        <h2 className="font-bold text-2xl pb-5 m-2">Edit Course</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-1/2">
          <label className="flex gap-2 items-center">
            Instructor Name:
            {instructor.name}
          </label>
          <input type="date" name="date" ref={date} />
          <select name="course" id="" ref={course}>
            <option value="" selected>--------Select Course---------</option>
            {courses?.map((course) => (
              <option key={course._id} value={course.name}>
                {course.name}
              </option>
            ))}
          </select>
          <div>
            <p className="text-red-800 font-bold text-xl text-center">
                {error && "Date is already assigned to instructor"}
            </p>
          </div>
          <button
            className="px-5 bg-green-500 mx-5 py-3 rounded-full hover:text-white"
            type="submit"
          >
            Save Changes
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default AssignInstructor;
