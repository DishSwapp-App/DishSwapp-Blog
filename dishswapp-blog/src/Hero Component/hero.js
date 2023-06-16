import Nav from "../Nav/nav";
import "./hero.css";
import anim from "./hero.json";
import Lottie from "react-lottie";
export default function Hero() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: anim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="hero">
      <Nav />

      <div className="tag">
        <h2>A Food-lover’s Blog</h2>

        <div className="visual">
          <Lottie
            options={defaultOptions}
            height={370}
            width={350}
            animationDate={anim}
          ></Lottie>
        </div>
      </div>
      <div className="tag2">
        <h4>Start your journey...</h4>
      </div>
    </div>
  );
}
