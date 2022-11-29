import MovieItem from "../MovieItem/MovieItem";
import "./list.scss";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function List() {

  return (
    <div className="list">
      <div className="wrapper">
        <div className="container">
          <MovieItem index={0} />
          <MovieItem index={1} />
          <MovieItem index={2} />
          <MovieItem index={3} />
          <MovieItem index={4} />
          <ArrowForwardIosIcon
          id="nextMovies"
          size="medium" />
        </div>
      </div>
    </div>
  );
}