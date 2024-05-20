import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddInstructor = () => {
    const navigate = useNavigate();

  const name = useRef();
  const email = useRef();
  const username = useRef();
  const image = useRef();
  const password = useRef();


  const handleAdd = () => {

    const formData = new FormData();
    formData.append("name", name.current.value);
    formData.append("email", email.current.value);
    formData.append("username", username.current.value);
    formData.append("password", password.current.value);
    formData.append("image", image.current.files[0]);
    
    fetch(`${process.env.REACT_APP_BACKENDURL}/api/user/signup`, {
      method: "POST",
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: formData
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
        encType="multipart/form-data"
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
          type="file"
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
