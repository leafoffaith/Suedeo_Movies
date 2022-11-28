import Navbar from "../../Components/Navbar/Navbar";
import "./home.scss";
import List from "../../Components/List/List";
import Footer from "../../Components/Footer/Footer"

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <List />
      <List />
      <List />
      <List />
      <List />
      <Footer />
    </div>
  );
};

export default Home;