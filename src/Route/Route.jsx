import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import ApplicationForm from "../pages/ApplicationForm/ApplicationForm";
import ContactPage from "../pages/Contact/Contact";
import OurServices from "../pages/OurServices/OurServices";
import CheckInfo from "../pages/CheckInfo/CheckInfo";
import Admin from "../pages/Admin/Admin";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,   // 👈 instead of path: "/"
        element: <Home />,
      },
      {
        path: "/applicationForm",
        element: <ApplicationForm/>
      },
      {
        path: "/contact",
        element: <ContactPage/>
      },
      {
        path:"/services",
        element: <OurServices/>
      },
      {
        path: "/checkInfo",
        element: <CheckInfo/>
      },
      {
        path: "/admin",
        element: <PrivateRoute><Admin/></PrivateRoute>

      }
    ],
  },
]);

export default router;