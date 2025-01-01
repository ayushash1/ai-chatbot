import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";

// elements
import { createBrowserRouter, RouterProvider } from "react-router";
import Homepage from "./routes/homepage/Homepage.jsx";
import DashboardPage from "./routes/dashboardpage/DashboardPage.jsx";
import Chatpage from "./routes/chatpage/Chatpage.jsx";
import SingnInPage from "./routes/signInPage/SingnInPage.jsx";
import SignUpPage from "./routes/signuppage/SignUpPage.jsx";

// layouts
import RootLayout from "./layouts/rootLayout/RootLayout.jsx";
import DashboardLayout from "./layouts/dashboardlayout/DashboardLayout.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/sign-in/*",
        element: <SingnInPage />,
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <Chatpage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
