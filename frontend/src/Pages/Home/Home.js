import Navbar from "../../Components/Navbar/Navbar";
import "./home.scss";
import List from "../../Components/List/List";
import Footer from "../../Components/Footer/Footer"

const movieLists = ['Netflix', 'Disney Plus', 'Amazon Prime Video', 'Apple TV Plus', 'Paramount Plus', 'Sky Go']

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      {movieLists.map((item, index) => {
        return <><h1 className="streamingProvider">{item}</h1><List pages={index} /></>
      })}
      <Footer />
    </div>
  );
};

export default Home;