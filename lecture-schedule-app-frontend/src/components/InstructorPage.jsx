import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import { setUser } from "../utils/userSlice";
import Loader from "./Loader";

const InstructorPage = () => {
  const { instructorId } = useParams();
  const navigate = useNavigate();
    const [instructor, setInstructor] = useState();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.userSlice);

  //   const instructor = instructors?.find(
  //     (instructor) => instructor._id === instructorId
  //   );

  useEffect(() => {
  
    fetch(`${process.env.REACT_APP_BACKENDURL}/api/user/${instructorId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((json) => {
  
        setInstructor(json?.success);
        // dispatch(setUser(json?.success));
        // setInstructors(json?.success);
        // dispatch(setStoreInstructor(json?.success));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!instructor) {
    // Handle the case where the course is not found
    return <div><Loader/></div>;
  }

  return (
    <div className="flex items-center justify-center pt-10">
      <div className="p-10 border-2 w-3/4 ">
        <div className="flex items-center justify-evenly">
          <div>
            <img
              className="w-96 rounded-lg"
              src={instructor.image}
              alt="Instructor"
            />
            <h1 className="pl-2 text-2xl font-bold">
              Instructor Name: {instructor.name}
            </h1>
          </div>

          <div>
            {instructor.courses?.map((course) => {
              return (
                <div key={course._id} className="border-b border-spacing-11 py-1">
                  <h3>Course Name: {course.name}</h3>
                  <p>Date: {course.date}</p>
                </div>
              );
            })}
          </div>
        </div>
        {user?.type === "admin" && (
          <div className="flex items-center justify-center pt-5">
            <Link to={"/instructor/" + instructorId + "/assign"}>
              <button className="px-5 bg-green-500 py-2 text-xl rounded-full hover:text-white">
                Assign Course
              </button>
            </Link>
          </div>
         )} 
      </div>
    </div>
  );
};

export default InstructorPage;
