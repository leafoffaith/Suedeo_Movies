import Navbar from "../../Components/Navbar/Navbar";
import "./home.scss";
import List from "../../Components/List/List";
import Footer from "../../Components/Footer/Footer"

const movieLists = ['Netflix', 'Amazon Prime', 'Disney+', 'Hulu', 'YouTube', 'HBO', 'Apple TV', 'Peacock', 'ITV']

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      {movieLists.map((item, index) => {
        return <><h1 className="streamingProvider">{item}</h1><List pages={index + 1} /></>
      })}
      <Footer />
    </div>
  );
};

export default Home;