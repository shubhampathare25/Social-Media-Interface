import { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();
  const { postList: contextPostList, addInitialPosts } = useContext(PostListData);

  // Loader madhun aalele posts store madhe taknyasathi
  useEffect(() => {
    if (contextPostList.length === 0) {
      addInitialPosts(postList);
    }
  }, [postList, contextPostList, addInitialPosts]);

  return (
    <>
      {contextPostList.length === 0 && <WelcomeMessage />}
      {contextPostList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;