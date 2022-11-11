import { Home } from "./pages/Home";
import { createReactRouter, createRouteConfig } from "@tanstack/react-router";
import { About } from "./pages/About";
import { NotFoundError } from "./utils/errors/NotFoundError/NotFound";
import { Posts } from "./pages/Posts";
import { PostPage } from "./pages/Posts/PostPage";
import { LostConnectionError } from "./utils/errors/LostConnectionError";
import { fetchPostById, fetchPosts } from "./utils/services/fetch";

const routeConfig = createRouteConfig().createChildren((createRoute) => [
  createRoute({
    path: "/",
    element: <Home />,
    errorElement: <NotFoundError />,
  }),
  createRoute({ path: "/about", element: <About /> }),
  createRoute({ path: "/contact" }),
  createRoute({
    path: "/posts",
    element: <Posts />,
    errorElement: <NotFoundError />,
    loader: async() => {
      return {
        posts: await fetchPosts(),
      };
    },
  }).createChildren((createRoute) => [
    createRoute({
      path: "/:postId",
      element: <PostPage />,
      errorElement: <LostConnectionError />,
      loader: async ({ params: { postId } }) => {
        return {
          post: await fetchPostById(postId),
        };
      },
    }),
    // createRoute({ path: "/:slug" }),
  ]),
]);

export const router = createReactRouter({ routeConfig });
