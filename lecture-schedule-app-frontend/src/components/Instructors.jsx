import React from "react";
import InstructorList from "./InstructorList";
import { Link } from "react-router-dom";

const Instructors = () => {
  return (
    <div>
      <div className="flex justify-between items-center pt-3">
        <h1 className="font-bold text-3xl pl-6">Instructors</h1>
        <Link to={"/instructor/add"}>
          <button className='px-5 bg-green-500 mx-5 py-3 rounded-full hover:text-white'>Add Instructor</button>
        </Link>
      </div>
      <InstructorList />
    </div>
  );
};

export default Instructors;
