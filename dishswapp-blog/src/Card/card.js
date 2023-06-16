import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./card.css";

export default function MediaCard(posts) {
  const post = posts.post;
  console.table(post);
  return (
    <div className="card">
      <Card sx={{ maxWidth: 345 }}>
        <img
          sx={{ height: 140 }}
          src={post.postImage}
          alt={post.title}
          className="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.subtitle}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Read</Button>
          <Button size="small">Share</Button>
        </CardActions>
      </Card>
    </div>
  );
}
