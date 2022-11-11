import { Outlet } from "@tanstack/react-router";
import { Key } from "react";
import { IPost } from "../../interfaces/IPost";
import { router } from "../../routes";
import * as C from "./styles";

export const Posts = () => {
  const {
    loaderData: { posts },
    Link,
  } = router.useMatch("/posts");
  return (
    <C.Container>
      <div>
        <div
          style={{
            float: "left",
            marginRight: "1rem",
          }}
        >
          {posts?.map((post: IPost) => {
            return (
              <div key={post.id}>
                <Link
                  to="/posts/:postId"
                  params={{
                    postId: post.id,
                  }}
                  activeProps={{ className: "font-bold" }}
                >
                  <p> {post.body}</p>
                  <pre>{post.title.substring(0, 20)}</pre>
                </Link>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    </C.Container>
  );
};
