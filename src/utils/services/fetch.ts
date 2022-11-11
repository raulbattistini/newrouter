import axios from "axios";
import { IPost } from "../../interfaces/IPost";
import { api } from "./api";

export async function fetchPostById(postId: string) {
  console.log(`Fetching post with id ${postId}...`);
  const res = await api.get<IPost>(`/${postId}`);
  return res.data;
}

export async function fetchPosts() {
  const res = await api.get<IPost[]>("/posts");
  return res.data;
}
