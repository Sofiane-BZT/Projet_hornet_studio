import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="parent-informations">
          <div className="adress positioning box">
            7 Boulevard Amiral Ganteaume 13400 Aubagne
          </div>
          <div className="phone-number positioning box">
            Tel : 04 42 72 54 91
          </div>
          <div className="opening-hours positioning box">
            Lundi - Samedi : 10H-19H{" "}
          </div>
        </div>
        <div className="social-network">
          <a
            href="https://www.instagram.com/hornetstudio/?hl=fr"
            target="_blanck"
            rel="noopener noreferrer"
            className="insta-social-network mrg"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="xl"
              style={{ color: "#fcfcfd" }}
            />
          </a>
          <a
            href="https://www.facebook.com/HornetStudio/"
            target="_blanck mrg"
            rel="noopener noreferrer"
            className="fb-social-network mrg"
          >
            <FontAwesomeIcon
              icon={faSquareFacebook}
              size="xl"
              style={{ color: "#ffffff" }}
            />
          </a>
        </div>
        {/* <hr className="solid" /> */}

        {/* <div className="copy-right">
          <FontAwesomeIcon icon={faCopy} ria-label="Copy Right" />
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
