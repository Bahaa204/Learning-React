import NavBar from "./NavBar";
import instagramLogo from "../../assets/Images/instagram.svg";
import twitterLogo from "../../assets/Images/twitter.svg";
import facebookLogo from "../../assets/Images/facebook.svg";
import "../../assets/CSS/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <h3>Cooking</h3>
        <div className="socials">
          <a href="https://www.instagram.com">
            <img src={instagramLogo} alt="Instagram Logo" />
          </a>
          <a href="https://www.x.com">
            <img src={twitterLogo} alt="Twitter Logo" />
          </a>
          <a href="https://www.facebook.com">
            <img src={facebookLogo} alt="Facebook Logo" />
          </a>
        </div>
      </div>
      <div className="footer-right">
        <NavBar />
      </div>
    </footer>
  );
}
