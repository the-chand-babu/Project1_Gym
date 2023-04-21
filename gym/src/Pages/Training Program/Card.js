import React from "react";
import Styles from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={Styles.container}>
      <img
        className={Styles.image}
        src={props.image}
        alt="image"
      />
      <h2 className={Styles.section}>{props.heading}</h2>
    </div>
  );
}
