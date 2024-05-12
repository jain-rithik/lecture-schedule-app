import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddInstructor = () => {
    const navigate = useNavigate();

  const name = useRef();
  const email = useRef();
  const username = useRef();
  const image = useRef();
  const password = useRef();

  // const handleAdd = () => {
  //     console.log(name?.current?.value);
  //     console.log(level?.current?.value);
  //     console.log(description?.current?.value);
  //     console.log(image?.current?.value);
  // }

  const handleAdd = () => {
    
    fetch(`${process.env.REACT_APP_BACKENDURL}/api/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name: name?.current.value,
        email: email?.current.value,
        username: username?.current.value,
        password: password?.current.value,
        image: image?.current.value,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        
        navigate("/instructor");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form
        method="post"
        action=""
        className="flex flex-col gap-5 w-full items-center pt-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={name}
          className="p-3 border border-gray-500 rounded-md w-1/2"
          type="text"
          name="name"
          placeholder="Instructor Name"
        />
        <input
          ref={email}
          className="p-3 border border-gray-500 rounded-md w-1/2"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          ref={username}
          className="p-3 border border-gray-500 rounded-md w-1/2"
          type="text"
          name="username"
          placeholder="Enter username"
        />
        <input
          ref={image}
          className="p-3 border border-gray-500 rounded-md w-1/2"
          type="url"
          name="image"
          placeholder="Enter Image URL"
        />
        <input
          ref={password}
          className="p-3 border border-gray-500 rounded-md w-1/2"
          type="password"
          name="password"
          placeholder="Enter password"
        />
        <button
          onClick={handleAdd}
          className="p-3 border border-gray-500 rounded-md w-1/2 bg-green-500"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddInstructor;
