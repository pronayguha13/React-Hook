import React, { useState, useEffect } from "react";
import axios from "axios";
const DataFetching = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log("🚀 ~ file: DataFetching.js ~ line 11 ~ .then ~ res", res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(
          "🚀 ~ file: DataFetching.js ~ line 15 ~ fetchAllPosts ~ err",
          err
        );
      });
  }, []);

  const fetchPost = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((res) => {
        console.log("🚀 ~ file: DataFetching.js ~ line 30 ~ .then ~ res", res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(
          "🚀 ~ file: DataFetching.js ~ line 33 ~ fetchPost ~ err",
          err
        );
      });
  };

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={() => fetchPost()}>Fetch post</button>
      <button onClick={() => setPost({})}>Fetch All posts</button>
      <ul>
        {Object.keys(post).length ? (
          <li>{post.title}</li>
        ) : (
          posts.map((post) => <li key={post.id}>{post.title}</li>)
        )}
      </ul>
    </div>
  );
};

export default DataFetching;
