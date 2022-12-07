import MovieItem from "../MovieItem/MovieItem";
import axios from "axios"
import "./list.scss";
import { useEffect, useState} from "react"

export default function List(pages) {
  const [movies, setMovies] = useState([])
<<<<<<< HEAD
  let pageNumber = pages.pages + 1
=======
  let pageNumber = pages.page
>>>>>>> 1f4a640 (Frontend working now)

  useEffect(() => {
    // fetch movie
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=dbe4608d19182e24de51d5d4e342e8df&language=en-GB&page=${pageNumber}`).then((response) => {
        setMovies(response.data.results)
      }).catch((err) => {
        console.log(err)
      })
  },
  [])
  return (
    <div className="list">
      <div className="wrapper">
       <div className="container">
        {movies.map((movie, index) => {
          return <MovieItem key={index} {...movie}/>
        })}
        </div>
      </div>
    </div>
  );
}