import { useState } from "react";
import { Outlet, RouterProvider } from "@tanstack/react-router";
import { router } from "./routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <RouterProvider router={router}>
        <router.Link
          to="/"
          activeOptions={{ exact: true }}
          activeProps={{ className: "font-bold" }}
        >
          Home
        </router.Link>
        <router.Link to="/about">About page</router.Link>
        <router.Link
          to="/posts"
          activeProps={{
            className: "font-bold",
          }}
        >
          Posts
        </router.Link>
      </RouterProvider>
      </div>
  );
}

export default App;
