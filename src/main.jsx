import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import CreatePost, { createPostAction } from "./Components/CreatePost.jsx";
import App from "./components/routes/App";
import PostList, { postLoader } from "./components/PostList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList />, loader: postLoader },
      {
        path: "/create-post",
        element: <CreatePost />,
        action: createPostAction,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
