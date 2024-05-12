import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const username = useRef();
  const password = useRef();

  const handleAdd = () => {
    console.log("add course called");
    fetch(`${process.env.REACT_APP_BACKENDURL}/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        username: username?.current.value,
        password: password?.current.value,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        navigate(`/instructor/${json.success}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold p-5 m-5 uppercase">
        Login
      </h1>
      <div className="w-full flex justify-center items-center">
        <form
          className="flex flex-col items-center border-2 p-5 gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="rounded-md w-full h-full p-4 font-semibold border border-gray-200/50"
            type="text"
            placeholder="Username"
            name="username"
            ref={username}
          />
          <input
            className="rounded-md w-full h-full p-4 font-semibold border border-gray-200/50"
            type="password"
            placeholder="Password"
            name="password"
            ref={password}
          />
          <button
            onClick={handleAdd}
            className="p-2 my-2 rounded-md w-full bg-green-600"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
