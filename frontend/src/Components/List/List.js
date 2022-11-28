import MovieItem from "../MovieItem/MovieItem";
import "./list.scss";

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
          <MovieItem index={5} />
          <MovieItem index={6} />
          <MovieItem index={7} />
          <MovieItem index={8} />
          <MovieItem index={9} />
        </div>
      </div>
    </div>
  );
}