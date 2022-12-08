import MovieItem from "../MovieItem/MovieItem";
import axios from "axios"
import "./list.scss";
import { useEffect, useState} from "react"

const convertProvider = (provider) => {
  switch (provider) {
    case 'Netflix':
      return 8
    case 'Horizon':
      return 
    case 'Disney Plus':
      return 337
    case 'Hulu':
      return 
    case 'HBO':
      return 
    case 'Now TV':
      return 591
    case 'Amazon Prime Video':
      return 10
    case 'Peacock':
      return 
    case 'Apple iTunes':
      return 
    case 'Paramount Plus':
      return 
    case 'Google Play Movies':
      return 3
    case 'Sky':
      return 29
    default:
      return -1
  }
}
export default function List(pages) {
  const [movies, setMovies] = useState([])
  const [movies2, setMovies2] = useState([])
  const [movies3, setMovies3] = useState([])
  const [movies4, setMovies4] = useState([])
  let pageNumber = pages.pages + 1
  let provider = convertProvider(pages.provider)
  
  useEffect(() => {
    // fetch movie
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=dbe4608d19182e24de51d5d4e342e8df&language=en-US&region=GB&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_providers=${provider}&watch_region=GB&with_watch_monetization_types=flatrate`).then((response) => {
        setMovies(response.data.results)
      }).catch((err) => {
        console.log(err)
      })
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=dbe4608d19182e24de51d5d4e342e8df&language=en-US&region=GB&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber += 1}&with_watch_providers=${provider}&watch_region=GB&with_watch_monetization_types=flatrate`).then((response) => {
        setMovies2(response.data.results)
      }).catch((err) => {
        console.log(err)
      })
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=dbe4608d19182e24de51d5d4e342e8df&language=en-US&region=GB&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber += 1}&with_watch_providers=${provider}&watch_region=GB&with_watch_monetization_types=flatrate`).then((response) => {
        setMovies3(response.data.results)
      }).catch((err) => {
        console.log(err)
      })
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=dbe4608d19182e24de51d5d4e342e8df&language=en-US&region=GB&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber += 1}&with_watch_providers=${provider}&watch_region=GB&with_watch_monetization_types=flatrate`).then((response) => {
        setMovies4(response.data.results)
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
        {movies2.map((movie, index) => {
          return <MovieItem key={index} {...movie}/>
        })}
        {movies3.map((movie, index) => {
          return <MovieItem key={index} {...movie}/>
        })}
        {movies4.map((movie, index) => {
          return <MovieItem key={index} {...movie}/>
        })}
        </div>
      </div>
    </div>
  );
}