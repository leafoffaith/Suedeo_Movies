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
      {/* <h1 className="streamingProvider">Netflix</h1>
      <List pages="2"/>
      <h1 className="streamingProvider">Amazon Prime</h1>
      <List pages="3"/>
      <h1 className="streamingProvider">Disney+</h1>
      <List pages="4"/>
      <h1 className="streamingProvider">Hulu</h1>
      <List pages="5"/>
      <h1 className="streamingProvider">Netflix</h1>
      <List pages="6"/>
      <h1 className="streamingProvider">Amazon Prime</h1>
      <List pages="7"/>
      <h1 className="streamingProvider">Disney+</h1>
      <List pages="8"/>
      <h1 className="streamingProvider">Hulu</h1>
      <List pages="9"/> */}
      <Footer />
    </div>
  );
};

export default Home;