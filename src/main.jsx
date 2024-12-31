import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";

// elements
import { createBrowserRouter, RouterProvider } from "react-router";
import Homepage from "./routes/homepage/Homepage.jsx";
import DashboardPage from "./routes/dashboardpage/DashboardPage.jsx";
import Chatpage from "./routes/chatpage/Chatpage.jsx";

// layouts
import RootLayout from "./layouts/rootLayout/RootLayout.jsx";
import DashboardLayout from "./layouts/dashboardlayout/DashboardLayout.jsx";
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />
      }, 
      {
        element: <DashboardLayout />, 
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />
          },
          {
            path: "/dashboard/chats/:id",
            element: <Chatpage />
          }
        ]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
