import "./movieItem.scss";
import { useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Star from "@mui/icons-material/Star";

const getPosterURL = (poster_path) => {
  return `https://www.themoviedb.org/t/p/w440_and_h660_face/${poster_path}`
}

const description = (overview) => {
  if (overview.length > 150) {
    return overview.slice(0, 150) + "..."
  } else {
    return overview
  }
}

const starRating = (vote_average) => {
  const stars = [
    <StarOutlineIcon className="star" />,
     <StarOutlineIcon className="star" />,
     <StarOutlineIcon className="star" />,
 <StarOutlineIcon className="star" />,
<StarOutlineIcon className="star" />,
  ]
  const outOfFive = vote_average / 2
  const decimalPart = outOfFive.toString().split('.')[1]
  for (let i = 0; i + 0.9 < outOfFive; i++) {
    stars[i] = <StarIcon className="star" />
  }
  if (decimalPart != 0 && decimalPart >= 5) {
    stars[outOfFive] = <StarHalfIcon className="star" />
  }
  for (let i = outOfFive; i < 5; i++) {
    stars[i] = <StarOutlineIcon className="star" />
  }
  return stars

}

export default function MovieItem({ index, poster_path, title, duration, parentalRating, release_date, overview, genre, vote_average }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="movieItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={getPosterURL(poster_path)}
        alt=""
      />
      {isHovered && (
        <>
          <div id="itemInfo">
          <span id="title">{title}</span>
            <div id="itemInfoTop">
              <span id="duration">{duration}</span>
              <span id="rating">{parentalRating}</span>
              <span id="year">{release_date}</span>
            </div>
            <div id="desc">
            <p>{description(overview)}</p>
            </div>
            <div id="genre">{genre}</div>
            <div id="rating">
            <ThumbDownIcon className="rating" size="small"/>
            <ThumbUpIcon className="rating" size="small"/>
          </div>
          </div>
        </>
      )}
      <div id="bottom">
        <span id="firstTitle">{title}</span>
        <div id="stars">
          {starRating(vote_average)}
        </div>
      </div>
    </div>
  );
}