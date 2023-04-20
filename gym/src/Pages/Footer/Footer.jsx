import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "./footer.module.css";

const Footer = () => {
  const handleSocialMediaClick = (url) => {
    window.location.href = url; // Update to use the passed URL
  };

  return (
    <footer className={styles["footer"]}>
      <div className={styles["footerContainer"]}>
        <div className={styles["footerContent"]}>
          <h3 className={styles["gym"]}>GYM</h3>
          <p>
            Welcome to our gym! We are dedicated to helping you achieve your
            fitness.
          </p>
          <div className={styles["social-media-icons"]}>
            <a
              href="https://www.facebook.com"
              target=""
              rel=""
              onClick={() => handleSocialMediaClick("https://www.facebook.com")}
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com"
              target=""
              rel=""
              onClick={() =>
                handleSocialMediaClick("https://www.instagram.com")
              }
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.twitter.com"
              target=""
              rel=""
              onClick={() => handleSocialMediaClick("https://www.twitter.com")}
            >
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className={styles["footerContent1"]}>
          <h3 className={styles["healthy"]}>Healthy living</h3>
          <ul>
            <li>Regular exercise</li>
            <li>Proper nutrition</li>
            <li>Professional guidance</li>
            <li>Clean and safe environment</li>
          </ul>
        </div>
        <div className={styles["footerSomething"]}>
          <h3 className={styles["sty"]}>Services</h3>
          <ul>
            <li>Exercise equipment </li>
            <li>Personal training</li>
            <li>Childcare services</li>
            <li>Group fitness classes</li>
          </ul>
        </div>
        <div className={styles["footeProgram"]}>
          <h3 className={styles["last"]}>Programs</h3>
          <ul>
            <li>Wellness Programs</li>
            <li>Specialty Programs</li>
            <li>Functional Fitness</li>
            <li>Cardiovascular Training</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;