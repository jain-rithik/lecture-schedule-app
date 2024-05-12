import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import { useDispatch, useSelector } from "react-redux";
import { setStoreCourses } from "../utils/coursesSlice";
import { Link } from "react-router-dom";

const CourseList = () => {
  const dispatch = useDispatch();
  const [courseList, setCourseList] = useState(null);

  const courses = useSelector(store => store.courseSlice);

  useEffect(() => {
    console.log("add course called");
    fetch(`${process.env.REACT_APP_BACKENDURL}/api/course`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(setStoreCourses(json?.success));
      })
      .catch((err) => {
        console.log(err);
      });
  },[courseList]);

  if (!courses) return null;

  return (
    <div className="flex gap-5 p-3 m-3 flex-wrap">
      {courses?.map((course) => (
        <Link to={"/course/" + course._id}>
        <CardComponent
          key={course._id}
          name={course.name}
          level={course.level}
          description={course.description}
          image={course.image}
          id={course._id}
          setCourseList={setCourseList}
        />
        </Link>
      ))}
    </div>
  );
};

export default CourseList;
