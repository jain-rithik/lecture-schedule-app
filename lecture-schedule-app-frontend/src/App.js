import { Outlet, RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import { Provider, useSelector } from "react-redux"
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import Courses from "./components/Courses";
import Instructors from "./components/Instructors";
import Login from "./components/Login";
import AddCourse from "./components/AddCourse";
import Test from "./components/Test";
import AddInstructor from "./components/AddInstructor";
import store from "./utils/store";
import CoursePage from "./components/CoursePage";
import CourseEdit from "./components/CourseEdit";
import InstructorPage from "./components/InstructorPage";
import AssignInstructor from "./components/AssignInstructor";
import Lectures from "./components/Lectures";
import { useEffect } from "react";

const AppLayout = () => {
  const navigate = useNavigate();
  const instructor = useSelector((store) => store.userSlice);

  useEffect(() => {
    if (instructor?.type !== "admin") {
      navigate("/login");
    }
    }, [])
    
  return (
    <div className="App">
      <Head />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/course/",
        element: <Courses />,
      },
      {
        path: "/course/add",
        element: <AddCourse />,
      },
      {
        path: "/instructor",
        element: <Instructors />,
      },
      {
        path: "/instructor/add",
        element: <AddInstructor />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/course/:courseId",
        element: <CoursePage />,
      },
      {
        path: "/course/:courseId/edit",
        element: <CourseEdit />
      },
      {
        path: "/instructor/:instructorId",
        element: <InstructorPage />,
      },
      {
        path: "/instructor/:instructorId/assign",
        element: <AssignInstructor />,
      },
      {
        path: "/lectures",
        element: <Lectures />,
      }
    ],
  },
  {
    path: "/*",
    element: <h1>404 Not Found</h1>,
  }
]);

function App() {
  return (
    <Provider store={store}>
      <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
    </Provider>
  
  );
}

export default App;
