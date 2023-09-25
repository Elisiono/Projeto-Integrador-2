import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://media.istockphoto.com/id/1289383957/pt/foto/blurred-bangkok-city-night-background.jpg?s=612x612&w=is&k=20&c=RjWZL816RZ4tsJ-pK44xjofCIdS0qkKu2Qa3r6xRvHk="
          alt=""
          className="cover"
        />
        <img
          src="https://media.istockphoto.com/id/1289383957/pt/foto/blurred-bangkok-city-night-background.jpg?s=612x612&w=is&k=20&c=RjWZL816RZ4tsJ-pK44xjofCIdS0qkKu2Qa3r6xRvHk="
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>

          <div className="center">
            <span>Teste Tester</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Cidade</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>Estado</span>
              </div>
            </div>
            <button>Seguir</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <Posts />
    </div>
  );
};

export default Profile;
