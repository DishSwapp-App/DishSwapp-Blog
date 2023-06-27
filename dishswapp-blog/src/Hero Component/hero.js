import React from "react";

import Nav from "../Nav/nav";
import "./hero.css";
export default function Hero() {
  return (
    <div className="hero">
      <Nav />

      <div className="tag">
        <h2>A Food-lover’s Blog</h2>
        <h4>Start your journey...</h4>
      </div>
      <div className="tag2"></div>
    </div>
  );
}
