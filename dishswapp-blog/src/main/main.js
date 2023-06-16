import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import MediaCard from "../Card/card";
import "./main.css";
import { client } from "../client";
import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LazyLoad from "react-lazyload";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

function Main() {
  const [posts, setPosts] = useState([]);
  const [selectedTag, setSelectedTag] = useState("All");

  async function GetPosts() {
    const data = await client.fetch('*[_type == "post"]');
    setPosts(data);
  }

  useEffect(() => {
    GetPosts();
  }, []);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const filteredPosts =
    selectedTag === "All"
      ? posts
      : posts.filter((post) => post.tags.includes(selectedTag));

  return (
    <div className="main">
      <ThemeProvider theme={theme}>
        <ButtonGroup
          variant="contained"
          aria-label="outlined button group"
          className="btn-group"
        >
          <Button
            onClick={() => handleTagClick("All")}
            className={selectedTag === "All" ? "active" : ""}
          >
            All
          </Button>
          <Button
            onClick={() => handleTagClick("Recipes")}
            className={selectedTag === "Recipes" ? "active" : ""}
          >
            Recipes
          </Button>
          <Button
            onClick={() => handleTagClick("Updates")}
            className={selectedTag === "Updates" ? "active" : ""}
          >
            Updates
          </Button>
          <Button
            onClick={() => handleTagClick("Top Tools")}
            className={selectedTag === "Top Tools" ? "active" : ""}
          >
            Top Tools
          </Button>
          <Button
            onClick={() => handleTagClick("DishSwapp ROTM")}
            className={selectedTag === "DishSwapp ROTM" ? "active" : ""}
          >
            DishSwapp ROTM
          </Button>
        </ButtonGroup>
      </ThemeProvider>

      <LazyLoad>
        <div className="posts">
          {filteredPosts.map((post, i) => (
            <MediaCard key={i} post={post} />
          ))}
        </div>
      </LazyLoad>
    </div>
  );
}

export default Main;
