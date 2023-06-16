import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import MediaCard from "../Card/card";
import "./main.css";
function Main() {
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
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </div>
    </div>
  );
}

export default Main;
