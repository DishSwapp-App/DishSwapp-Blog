import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import MediaCard from "../Card/card";
import "./main.css";
import { client } from "../client";
import { useState, useEffect } from "react";

function Main() {
  const [posts, setPosts] = useState([]);
  async function GetPosts() {
    const data = await client.fetch('*[_type == "post"]');
    setPosts(data);
  }
  useEffect(() => {
    GetPosts();
  }, []);

  return (
    <div className="main">
      <ButtonGroup
        variant="outlined"
        aria-label="outlined button group"
        className="btn-group"
      >
        <Button>Recipes</Button>
        <Button>Updates</Button>
        <Button>Top Tools</Button>
        <Button>DishSwapp ROTM</Button>
      </ButtonGroup>

      <div className="posts">
        {posts.map((post, i) => (
          <MediaCard key={i} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Main;
