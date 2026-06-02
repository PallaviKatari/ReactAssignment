import React from "react";
import { useFetch } from "../Hooks/FetchHook";

export default function PostComponent() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div style={{ margin: "20px", color: "blue" }}>
      <h6>{data.title}</h6>
      <p>{data.body}</p>
    </div>
  );
}
