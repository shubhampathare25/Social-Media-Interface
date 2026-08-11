import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import CreatePost from "./Components/CreatePost.jsx";
import App from "./components/routes/App";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/create-post", element: <CreatePost /> },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
