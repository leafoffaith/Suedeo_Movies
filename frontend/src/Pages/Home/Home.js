import Navbar from "../../Components/Navbar/Navbar";
import "./home.scss";
import List from "../../Components/List/List";
import Footer from "../../Components/Footer/Footer"

const movieLists = ['Netflix', 'Amazon Video', 'Disney+', 'Hulu', 'YouTube', 'HBO Max', 'Apple iTunes', 'Peacock', 'ITV']

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      {movieLists.map((item, index) => {
        return <><h1 className="streamingProvider">{item}</h1><List service={item} /></>
      })}
      <Footer />
    </div>
  );
};

export default Home;