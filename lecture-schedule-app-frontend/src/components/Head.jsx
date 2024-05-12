import React, { useState } from "react";
import Logo from "../assets/logo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../utils/userSlice";

const Head = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const instructor = useSelector((store) => store.userSlice);

  const handleLogout = () => {
    console.log("add course called");
    fetch(`${process.env.REACT_APP_BACKENDURL}/api/user/logout`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if(json.success ) {
          dispatch(clearUser())
          navigate(`/login`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex items-center justify-between border-b-2">
      <img className="w-28" src={Logo} alt="Logo" />
      {/* {instructor?.type === "admin" && ( */}
        <ul className="flex items-center gap-9 text-xl font-semibold uppercase cursor-pointer">
          <Link to={"/instructor"}>
            <li>Instructors</li>
          </Link>
          <Link to={"/course"}>
            <li>Courses</li>
          </Link>
          <Link to={"/lectures"}>
            <li>Lectures</li>
          </Link>
        </ul>
      {/* )} */}
      {!instructor ? (
        <Link
          className="px-5 bg-green-500 mx-5 py-3 rounded-full hover:text-white"
          to={"/login"}
        >
          <button>Login</button>
        </Link>
      ) : (
        <button
          className="px-5 bg-red-500 mx-5 py-3 rounded-full hover:text-white"
          onClick={handleLogout}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Head;
