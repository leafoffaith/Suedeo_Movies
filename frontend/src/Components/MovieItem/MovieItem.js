import "./movieItem.scss";
import { useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Star from "@mui/icons-material/Star";

export default function MovieItem({ index, imageURL, title, duration, parentalRating, date, desc, genre, userRating }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="movieItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageURL}
        alt=""
      />
      {isHovered && (
        <>
          <div id="itemInfo">
          <span id="title">{title}</span>
            <div id="itemInfoTop">
              <span id="duration">{duration}</span>
              <span id="rating">{parentalRating}</span>
              <span id="year">{date}</span>
            </div>
            <div id="desc">
              {desc}
            </div>
            <div id="genre">{genre}</div>
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
          {userRating}
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