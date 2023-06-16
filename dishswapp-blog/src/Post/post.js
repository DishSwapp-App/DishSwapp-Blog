import { useState, useEffect } from "react";
import { useRoute } from "wouter";
import { client } from "../client";
import GetPosts from "./getPostSlug";
import "./post.css";
function Post() {
  const [post, setPost] = useState(null);
  const params = useRoute("/post/:slug");
  const slug = params[1].slug;

  useEffect(() => {
    // Fetch post data from API using slug
    GetPosts(slug)
      .then((response) => setPost(response[0]))
      .catch((error) => console.log(error));
  }, [slug]);

  console.log(post);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post">
      <img src={post.postImage} alt={post.title} />
      <h1>{post.title}</h1>
      <h2>{post.subtitle}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;
