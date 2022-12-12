import Navbar from "../../Components/Navbar/Navbar";
import "./home.scss";
import List from "../../Components/List/List";
import Footer from "../../Components/Footer/Footer"

const movieLists = ['Netflix', 'Disney Plus', 'Sky', 'Amazon Prime Video', 'Now TV'] // API is only working for these providers.

// const movieLists = ['Netflix', 'Disney Plus', 'Sky', 'Hulu', 'Horizon', 'HBO', 'Peacock', 'Amazon Prime Video', 'Apple iTunes', 'Google Play Movies', 'Paramount Plus', 'Now TV']


const Home = () => {
  return (
    <div className="home">
      <Navbar />
      {movieLists.map(item => {
        return <><h1 className="streamingProvider">{item}</h1><List provider={item}/></>
      })}
      <Footer />
    </div>
  );
};

export default Home;