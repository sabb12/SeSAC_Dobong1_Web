import axios from "axios";
import { useEffect, useState } from "react";
import PostItem from "../components/PostItem";
// import "../styles/post.css";

export default function PostList() {
  //https://jsonplaceholder.typicode.com/posts

  const [posts, setPosts] = useState([]);

  // async await 사용 하고 싶을 때: useEffect에서는 지원 안해줌
  // 그래서 useEffect 밖에서 funciton을 만들어 줘야 된다
  const getPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    // console.log(res.data);
    // setPosts(res.data.slice(0, 10)); // 0 ~ 9번 index 가지고 오도록
    setPosts(res.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  }, []);
  return (
    <div className="post-list">
      <h1>실습문제</h1>
      {posts.length > 0
        ? posts.map((post) => {
            return <PostItem key={post.id} post={post} />;
          })
        : "loading..."}
    </div>
  );
}
