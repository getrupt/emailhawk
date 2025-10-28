/**
 * This file is the entry point for the React app, it sets up the root
 * element and renders the App component to the DOM.
 *
 * It is included in `src/index.html`.
 */

import { createRoot } from "react-dom/client";
import { App } from "./App";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { LoginSimple } from "./pages/login";
import { RegisterSimple } from "./pages/register";
import { Dashboard } from "./pages/dashboard";
import { API } from "./pages/api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginSimple />,
  },
  {
    path: "/register",
    element: <RegisterSimple />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/api",
    element: <API />,
  },
]);

function start() {
  const root = createRoot(document.getElementById("root")!);
  root.render(<RouterProvider router={router} />);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}
