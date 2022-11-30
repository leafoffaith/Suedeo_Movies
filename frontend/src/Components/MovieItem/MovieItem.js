import "./movieItem.scss";
import { useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Star from "@mui/icons-material/Star";

// Retrieves the correct path for the poster image
const getPosterURL = (poster_path) => {
  return `https://www.themoviedb.org/t/p/w440_and_h660_face/${poster_path}`
}

// Retrieves the correct path for the backdrop image
const getBackDropURL = (backdrop_path) => {
  return `https://www.themoviedb.org/t/p/w440_and_h660_face/${backdrop_path}`
}

// Ensures the description is only 150 characters long. 
const description = (overview) => {
  const length = 250 // Change length of text
  if (overview.length > length) {
    return overview.slice(0, length) + "..."
  } else {
    return overview
  }
}

// Checks to see how well rated the movie is out of 10 then translates it into stars. 
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
  return stars
}

export default function MovieItem({ index, backdrop_path, poster_path, title, release_date, overview, genre_ids, vote_average, genres }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="movieItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        id="poster"
        src={getPosterURL(poster_path)}
        alt=""
      />
      {isHovered && (
        <>
        <div id="backdrop-container">
          <img
          id="backdrop"
          src={getBackDropURL(backdrop_path)}
          alt=""
        />
          <div id="itemInfo">
          <span id="title">{title}</span>
            <div id="itemInfoTop">
              {/* <span id="duration">{duration}</span>
              <span id="rating">{parentalRating}</span> */}
              <span id="year">{release_date}</span>
            </div>
            <div id="desc">
            <p>{description(overview)}</p>
            </div>
            <div id="genre">Genre</div>
            <div id="rating">
            <ThumbDownIcon className="rating" id="thumb-down" size="small"/>
            <ThumbUpIcon className="rating" id="thumb-up" size="small"/>
          </div>
          <div id="movie-buttons">
            <button className="button">Watch Later</button>
            <button className="button">Add to Favourites</button>

          </div>
          </div>
          </div>
        </>
      )}
      <div id="bottom">
        {/* <span id="firstTitle">{title}</span> */}
        <div id="stars">
          {starRating(vote_average)}
        </div>
      </div>
    </div>
  );
}