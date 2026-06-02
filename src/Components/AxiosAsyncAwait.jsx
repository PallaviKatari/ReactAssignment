import axios from "axios";
import React, {useState,useEffect} from "react";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts" 
});

export default function AwaitAsync() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function getPost() {
      const response = await client.get("/1");
      setPost(response.data);
      console.log(response.data);
    }
    getPost();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  async function deletePost() {
    await client.delete("/1");
    alert("Post deleted!");
    setPost(null);
  }

  if (!post) return "No post!"

  return (
    <div style={{ color: 'blue', marginTop: 50, padding: 2 }}>
      <h6>{post.title}</h6>
      <p>{post.body}</p>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}