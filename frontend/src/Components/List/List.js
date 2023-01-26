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
export default function List(props) {
  const [movies, setMovies] = useState([])
  const [mediaType, setMediaType] = useState("movie")
  let provider = convertProvider(props.provider)

  const changeMediaType = () => {
    setMediaType(prevState => {
      return prevState === "movie" ? "tv" : "movie"
    })
    changeMedia()
    loadPages()
  }

  const changeMedia = () => {
      axios.get(`https://api.themoviedb.org/3/discover/${mediaType}?api_key=dbe4608d19182e24de51d5d4e342e8df&language=en-US&region=GB&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_providers=${provider}&watch_region=GB&with_watch_monetization_types=flatrate`).then((response) => {
        setMovies([...response.data.results])
    }).catch((err) => {
      console.log(err)
    })
  }

  let changeTo = mediaType === "movie" ? "Movies" : "Series"

  const loadPages = () => {
    for (let i = 2; i < 10; i++) {
      axios.get(`https://api.themoviedb.org/3/discover/${mediaType}?api_key=dbe4608d19182e24de51d5d4e342e8df&language=en-US&region=GB&sort_by=popularity.desc&include_adult=false&include_video=false&page=${i}&with_watch_providers=${provider}&watch_region=GB&with_watch_monetization_types=flatrate`).then((response) => {
        setMovies(prev => [...prev, ...response.data.results])
    }).catch((err) => {
      console.log(err)
    })
    }
  }

  useEffect(() => {
    changeMediaType()
  },
  [provider])

  return (
    <div className="list">
      {/* <button 
      type="button"
      className="toggleBtn" 
      onClick={changeMediaType}
      >
      {changeTo}
      </button> */}
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