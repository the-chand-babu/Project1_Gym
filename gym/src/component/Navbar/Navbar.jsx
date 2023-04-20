import style from "./Navbar.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaWindowClose } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";

export default function Navbar() {
  const Navigate = useNavigate();
  const [ismenuchange, setIsmenuchange] = useState(false);

  const handelMenubar = () => {
    setIsmenuchange(!ismenuchange);
    console.log(ismenuchange);
  };
  return (
    <div  className={`${ismenuchange ? style.active : "no"}`}>
      <nav className={style.navbar}>
        <div className={style.logo}>
          <a href="#home">
            <img
              className={style.logImage}
              src="./images/logo.png"
              alt="logo"
            />
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
            <a href="#Trainer">Trainer</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
        </ul>

        <button
          onClick={() => {
            Navigate("/Register");
          }}
          className={style.loginBtn}
        >
          Join US
        </button>
        <div className={style.manubar}>
          <span className={style.menu} onClick={handelMenubar}>
            <BiMenu />
          </span>
          <span className={style.closeIcon} onClick={handelMenubar}>
            <FaWindowClose />
          </span>
        </div>
      </nav>
    </div>
  );
}