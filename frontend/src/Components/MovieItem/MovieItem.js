import "./movieItem.scss";
import { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import Star from "@mui/icons-material/Star";
import axios from "axios";

// Retrieve the genre from api and add it to this list of genres
let genres = [];

axios
  .get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=dbe4608d19182e24de51d5d4e342e8df&language=en-GB"
  )
  .then((response) => {
    let temp = response.data.genres;
    for (let i = 0; i < temp.length; i++) {
      let genre = [temp[i].id, temp[i].name];
      genres.push(genre);
    }
  })
  .catch((err) => {
    console.log(err);
  });

// Set the genre of the movie.
const setGenre = (genre_ids) => {
  let genre = "";
  // Get genre
  for (let i = 0; i < genre_ids.length; i++) {
    for (let j = 0; j < genres.length; j++) {
      if (genres[j][0] == genre_ids[i]) {
        if (i < genre_ids.length - 1) {
          genre += genres[j][1] + ", ";
        } else {
          genre += genres[j][1] + ".";
        }
      }
    }
  }
  return genre
}

// Get the service provider
const setProvider = (id) => {
  axios.get(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=dbe4608d19182e24de51d5d4e342e8df`).then((response) => {
    let rentPath = response.data.results.GB.flatrate; 
    for (let i = 0; i < rentPath.length; i++) {
      return rentPath[i].provider_name 
    }
  }).catch((err) => {
    console.log(err)
  })
}


// Retrieves the correct path for the poster image
const getPosterURL = (poster_path) => {
  return `https://www.themoviedb.org/t/p/w440_and_h660_face/${poster_path}`;
};

// Retrieves the correct path for the backdrop image
const getBackDropURL = (backdrop_path) => {
  return `https://www.themoviedb.org/t/p/w440_and_h660_face/${backdrop_path}`;
};

// Ensures the description is only 150 characters long.
const description = (overview) => {
  const length = 180; // Change length of text
  if (overview.length > length) {
    return overview.slice(0, length) + "...";
  } else {
    return overview;
  }
};

// Checks to see how well rated the movie is out of 10 then translates it into stars.
const starRating = (vote_average) => {
  const stars = [
    <StarOutlineIcon className="star" />,
    <StarOutlineIcon className="star" />,
    <StarOutlineIcon className="star" />,
    <StarOutlineIcon className="star" />,
    <StarOutlineIcon className="star" />,
  ];

  const outOfFive = vote_average / 2;
  const decimalPart = outOfFive.toString().split(".")[1];
  for (let i = 0; i + 0.9 < outOfFive; i++) {
    stars[i] = <StarIcon className="star" />;
  }
  if (decimalPart != 0 && decimalPart >= 5) {
    stars[outOfFive] = <StarHalfIcon className="star" />;
  }
  return stars;
};

export default function MovieItem({ index, id, backdrop_path, poster_path, title, release_date, overview, genre_ids, vote_average}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="movieItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img id="poster" src={getPosterURL(poster_path)} alt="" />
      {isHovered && (
        <>
          <div id="backdrop-container">
            <img id="backdrop" src={getBackDropURL(backdrop_path)} alt="" />
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
            <div id="provider"></div>
            <div id="genre">{setGenre(genre_ids)}</div>
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
        <div id="stars">{starRating(vote_average)}</div>
      </div>
    </div>
  );
}
