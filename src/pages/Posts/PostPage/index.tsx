import { Outlet } from "@tanstack/react-router";
import { router } from "../../../routes";
import * as C from "./styles";

export function PostPage () {
  const {
    loaderData: { post },
  } = router.useMatch("/posts/:postId");

  return (
    <C.Container>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </C.Container>
  );
};
