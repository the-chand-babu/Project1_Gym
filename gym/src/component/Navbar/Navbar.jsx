import style from "./Navbar.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const Navigate = useNavigate();
  return (
    <nav className={style.navbar}>
      <div className={style.logo}>
        <a href="#home">
        <img className={style.logImage} src="./images/logo.png" alt="logo" />

        </a>
      </div>

      <ul className={style.navlist}>
        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#Program">Program</a>
        </li>
        <li>
          <a href="#training">Training</a>
        </li>
        <li>
          <a href="#Pricing">Pricing</a>
        </li>
      </ul>

      <button
        onClick={() => {
          Navigate("/login");
        }}
        className={style.loginBtn}
      >
        Join US
      </button>

      {/* <Link>Join Us</Link> */}
    </nav>
  );
}
