import "./movieItem.scss";
import { useState } from "react";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="movieItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={require("../../Logos/happyfeet.jpeg")}
        alt=""
      />
      {isHovered && (
        <>
          <div id="itemInfo">
          <span id="title">Happy Feet</span>
            <div id="itemInfoTop">
              <span id="duration">1 hour 48 mins</span>
              <span id="rating">U</span>
              <span id="year">2006</span>
            </div>
            <div id="desc">
              Into the world of the Emperor Penguins, who find their soul mates through song, a penguin is born who cannot sing. But he can tap dance something fierce!
            </div>
            <div id="genre">Comedy</div>
          </div>
        </>
      )}
    </div>
  );
}