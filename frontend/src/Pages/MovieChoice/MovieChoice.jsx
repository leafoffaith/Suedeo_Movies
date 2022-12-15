import Navbar from "../../Components/Navbar/Navbar";
import "./movieChoice.scss";
import List from "../../Components/List/List";
import Footer from "../../Components/Footer/Footer"

const movieLists = ['Netflix', 'Disney Plus', 'Sky', 'Amazon Prime Video', 'Now TV']

const MovieChoice = () => {
  return (
    <div className="movieChoice">
      <Navbar />
      {movieLists.map(item => {
        return <>{item}<List provider={item}/></>
      })}
      <Footer />
    </div>
  );
};

export default MovieChoice;