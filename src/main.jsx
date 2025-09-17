import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

/* Screen Imports */
import App from "./App";
import Error from "./Screens/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <Error />
  }
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);