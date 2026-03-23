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
import Dashboard from "./Dashboard";
import Edit from "../pages/Edit/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "applicationForm",
        element: <ApplicationForm />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "services",
        element: <OurServices />,
      },
      {
        path: "checkInfo",
        element: <CheckInfo />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "admin", 
        element: <Admin />,
      },
      {
        path: "edit",
        element: <Edit />,
      }
    ],
  },
]);
export default router;