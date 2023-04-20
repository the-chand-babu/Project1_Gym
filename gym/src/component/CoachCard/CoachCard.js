import React from "react";
import Styles from "./CoachCard.module.css";

export default function CoachCard(props) {
  return (
    <div className={Styles.card}>
      <img
        className={Styles.image}
    
        src={props.image}
        alt="image"
      />
      <h2 className={Styles.name}>{props.name}</h2>
      <p className={Styles.profession}>{props.profession}</p>
    </div>
  );
}
