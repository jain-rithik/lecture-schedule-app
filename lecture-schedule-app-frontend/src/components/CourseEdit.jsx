import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const CourseEdit = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const courses = useSelector((state) => state.courseSlice);
  const course = courses?.find((course) => course._id === courseId);

  const nameRef = useRef(null);
  const levelRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);

  if (!course) {
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", nameRef.current.value);
    formData.append("level", levelRef.current.value);
    formData.append("description", descriptionRef.current.value);
    formData.append("image", imageRef.current.files[0]);

    fetch(`${process.env.REACT_APP_BACKENDURL}/api/course/${courseId}`, {
      method: "PUT",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Course updated successfully:", data);
        navigate("/course");
      })
      .catch((error) => console.error("Error updating course:", error));
  };

  return (
    <div className="flex justify-center pt-10">
      <div className="flex flex-col w-full items-center">
        <h2 className="font-bold text-2xl pb-5 m-2">Edit Course</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex flex-col gap-5 w-1/2">
          <label className="flex gap-2 items-center">
            Course Name:
            <input
              type="text"
              defaultValue={course.name}
              ref={nameRef}
              className="border w-full p-1"
            />
          </label>

          <label className="flex gap-2 items-center">
            Course level:
            <input
              type="number"
              defaultValue={course.level}
              ref={levelRef}
              className="border w-full p-1"
            />
          </label>
          <label className="flex gap-2 items-center">
            Description:
            <input
              type="text"
              defaultValue={course.description}
              ref={descriptionRef}
              className="border w-full p-1"
            />
          </label>
          <label className="flex gap-2 items-center">
            Image:
            <input
              type="file"
              ref={imageRef}
              className="border w-full p-1"
            />
          </label>
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

export default CourseEdit;
