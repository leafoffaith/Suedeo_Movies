import "./navbar.scss";
import SettingsIcon from "@mui/icons-material/Settings";
// import SearchIcon from "@mui/icons-material/Search";
// import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const { isLoggedIn, user } = useContext(AuthContext); 
  const [mediaType, setMediaType] = useState("movie");
  const navigate = useNavigate; 

  const openWatchList = () => {
    console.log("Watch List Clicked")
  }

  const changeType = () => {
    if (mediaType === "movie") {
      setMediaType("tv");
    } else {
      setMediaType("movie");
    }
  }

  useEffect(() => {
    console.log("Media Type Changed")
  }, [mediaType]);

  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="navLeft">
          <img
            id="logo"
            src={require("../../Logos/RectangleLogo.png")}
            alt="Suedeo Logo"
          />
          <span 
            className="navBarLink" 
            id="series-link"
            onClick={changeType}>
            Series
          </span>
          <span 
            className="navBarLink" 
            id="movies-link"
            onClick={changeType}>
            Movies
          </span>
          <span 
            className="navBarLink" 
            id="watch-list-link"
            onClick={openWatchList}
            >
            Watch List
          </span>
        </div>
        <div className="navRight">
        
          {/*  Search Bar
          
          <TextField
            id="search"
            label="Search"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon className="icon" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          /> */}
          <SettingsIcon className="icon" />
          <Link to="/logout" id="userName">
            {isLoggedIn && user["name"] + " (Logout)"}
          </Link>
          <div className="icon" />
          <img
            id="profile-img"
            src={require("../../Logos/Suedeo_Movies_Logo.jpeg")}
            alt="Profile Pic"
          />
          <div className="profile">
            <div className="icon" />
            <div className="options">
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
