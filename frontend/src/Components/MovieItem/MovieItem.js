import "./movieItem.scss";
import { useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Star from "@mui/icons-material/Star";

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
            <div id="rating">
            <ThumbDownIcon class="rating" size="small"/>
            <ThumbUpIcon class="rating" size="small"/>
          </div>
          </div>
        </>
      )}
      <div id="bottom">
        <span id="firstTitle">Happy Feet</span>
        <div id="stars">
          <StarIcon class="star" />
          <StarIcon class="star" />
          <StarIcon class="star" />
          <StarHalfIcon class="star" />
          <StarOutlineIcon class="star" />
        </div>
      </div>
    </div>
  );
}