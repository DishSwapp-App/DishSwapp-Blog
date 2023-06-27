import { useState, useEffect } from "react";
import { useRoute } from "wouter";
import moment from "moment";
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

  console.table(post);

  if (!post) {
    return <div>Loading...</div>;
  }

  const formattedTime = moment(post.publishedAt).format("MMMM Do YYYY, h:mm a");
  console.log(formattedTime);
  return (
    <div className="post">
      <div className="header">
        <h1>{post.title}</h1>
        <h2>{post.subtitle}</h2>

        <p className="author">{post.author}</p>
        <p>{formattedTime}</p>
      </div>

      <div className="img-div">
        <img src={post.postImage} alt={post.title} />
      </div>

      <br />

      <div className="content">
        {post.content.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default Post;
