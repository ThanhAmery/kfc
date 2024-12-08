import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./page/home";
import Layout from "./components/layout";
import Login from "./page/login";
import Register from "./page/register";
import Dashboard from "./components/dashboard";

function App() {
  const router = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        children: [
          {path: "", element: <Home />},
          {path: "/login", element: <Login />},
          {path: "/register", element: <Register />},
          {path: "/dashboard", element: <Dashboard />},
        ], 
    },

]);


return (
  <RouterProvider router={router} />
  
  )
}

export default App