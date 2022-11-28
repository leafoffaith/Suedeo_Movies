import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="navLeft">
          <img
            id="logo"
            src={require("../../Logos/Suedo_Movies_Logo.jpeg")}
            alt="Suedeo Logo"
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
        </div>
        <div className="navRight">
          <div className="icon" />
          <span id="userName">UserName</span>
          <div className="icon" />
          <img
            id="profile-img"
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="Users profile picture"
          />
          <div className="profile">
            <div className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;