import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Uses from "./pages/uses";
import Certicates from "./pages/certicates";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/uses",
        element: <Uses />,
      },
      {
        path: "/certicates",
        element: <Certicates />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
