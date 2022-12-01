import "./footer.scss";
import GitHubIcon from '@mui/icons-material/GitHub';
import GitHub from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="github">
          <GitHubIcon onClick={event =>  window.location.href='https://github.com/reeceawalsh/Suedeo_Movies'} className="clickable" />
          <span>Seudeo Movies</span>
        </div>
      <span>Under Construction</span>
      </div>
    </div>
  );
};

export default Footer;