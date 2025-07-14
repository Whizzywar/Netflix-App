import React from "react";
import "./Footer.css";
import youtube_icon from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="netflix-footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://facebook.com">
            <img src={facebook_icon} alt="Facebook" />
          </a>
          <a href="https://instagram.com">
            <img src={instagram_icon} alt="Instagram" />
          </a>
          <a href="https://twitter.com">
            <img src={twitter_icon} alt="Twitter" />
          </a>
          <a href="https://youtube.com">
            <img src={youtube_icon} alt="Youtube" />
          </a>
        </div>
        <div className="footer-links">
          <div className="links-column">
            <ul>
              <li>
                <a href="#">Audio Description</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Legal Notices</a>
              </li>
            </ul>
          </div>
          <div className="links-column">
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Cookie Preferences</a>
              </li>
            </ul>
          </div>
          <div className="links-column">
            <ul>
              <li>
                <a href="#">Gift Cards</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Corporate Information</a>
              </li>
            </ul>
          </div>
          <div className="links-column">
            <ul>
              <li>
                <a href="#">Media Center</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="service-code">
          <button className="service-code-btn">Service Code</button>
        </div>

        <div className="copyright">
          <p>© 1997-{currentYear} Netflix, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
