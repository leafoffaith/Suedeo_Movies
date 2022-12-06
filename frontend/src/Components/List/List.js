import MovieItem from "../MovieItem/MovieItem";
import tmdbAPI from "../../api/tmdb";
import axios from "axios";
import "./list.scss";
import { useEffect, useState } from "react";

let moviesData = [];
let movieData = {};

const getServiceProvider = (id) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=dbe4608d19182e24de51d5d4e342e8df`
    )
    .then((response) => {
      if (response.data.results.hasOwnProperty("GB")) {
        let rentPath = response.data.results.GB.flatrate[0].provider_name;
        console.log(rentPath);
        return rentPath.provider_name;
      }
    });
};
const checkServiceProvider = (id, service) => {
  let providers = "";
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=dbe4608d19182e24de51d5d4e342e8df`
    )
    .then((response) => {
      let rentPath = response.data.results.GB.flatrate;
      if (rentPath != null && rentPath.length < 0) {
        for (let i = 0; i < rentPath.length; i++) {
          providers += rentPath[i].provider_name;
        }
      }
      return providers;
    })
    .catch((err) => {
      console.log(err);
    });
};
export default function List(service) {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    // fetch movie
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=dbe4608d19182e24de51d5d4e342e8df&language=en-GB&page=${pageNumber}`
      )
      .then((response) => {
        let endPoint = response.data.results;
        for (let i = 0; i < endPoint.length; i++) {
          let serviceProvider = getServiceProvider(endPoint[i].id);
          // console.log(serviceProvider)
          let movieData = { ...endPoint[i], provider: `${serviceProvider}` };
          if ((movieData.provider = service)) {
            moviesData.push(movieData[0]);
          }
          movieData = {};
        }

        setMovies(moviesData);

        // Repeat unless the movies list is full
        if (moviesData.length != 20) {
          setPageNumber(pageNumber + 1);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="list">
      <div className="wrapper">
        <div className="container">
          {movies.map((movie, index) => {
            return <MovieItem key={index} {...movie} />;
          })}
        </div>
      </div>
    </div>
  );
}
