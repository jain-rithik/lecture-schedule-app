import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";

const Lectures = () => {
  const instructors = useSelector((state) => state.instructorSlice);

  if (!instructors) {
    // Handle the case where the course is not found
    return <div>Instructor not found</div>;
  }

  return (
    <div className="flex flex-col pt-10">
      {instructors.map((instructor) =>
        instructor?.type === "admin" ? null : (
          <div
            className="flex items-center justify-center pt-10"
            key={instructor.id}
          >
            <div className="p-10 border-2 w-3/4 ">
              <div className="flex items-center justify-evenly">
                <div>
                  <img
                    className="w-96 rounded-lg"
                    src={instructor.image.url}
                    alt="Instructor"
                  />
                  <h1 className="pl-2 text-2xl font-bold">
                    Instructor Name: {instructor.name}
                  </h1>
                </div>

                <div>
                  {instructor.courses?.map((course) => (
                    <div className="border-b border-black border-spacing-2" key={course._id}>
                      <h3>Course Name: {course.name}</h3>
                      <p>Date: {course.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Lectures;
