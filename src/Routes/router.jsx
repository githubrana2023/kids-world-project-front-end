import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllToysPage from "../Pages/AllToys/AllToysPage";
import MyToysPage from "../Pages/MyToys/MyToysPage";
import BlogPage from "../Pages/Blog/BlogPage";
import LoginPage from "../Pages/Login/LoginPage";
import RegisterPage from "../Pages/Register/RegisterPage";
import HomePage from "../Pages/Home/HomePage";
import AddToy from "../Pages/AddToy/AddToy";
import AuthRequired from "../Components/AuthRequired/AuthRequired";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import UpdateToy from "../Pages/UpdateToy/Updatetoy";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/all-toys",
        element: <AllToysPage />,
        loader: () =>
          fetch("https://back-end-assignment-11.vercel.app/toys?limit=20"),
      },
      {
        path: "/my-toys",
        element: (
          <AuthRequired>
            <MyToysPage />
          </AuthRequired>
        )
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/add-toy",
        element: <AddToy />,
      },
      {
        path: "/toys/:id",
        element: (
          <AuthRequired>
            <ToyDetails />
          </AuthRequired>
        ),
        loader: ({ params }) =>
          fetch(`https://back-end-assignment-11.vercel.app/toys/${params.id}`),
      },
      {
        path: "/toys/update/:id",
        element: <UpdateToy />,
        loader: ({ params }) =>
          fetch(`https://back-end-assignment-11.vercel.app/toys/${params.id}`),
      },
    ],
  },
]);

export default router;
