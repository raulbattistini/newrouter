import { IPost } from "./IPost";

export interface IFetchPost{ 
   posts: () => IPost[]
}