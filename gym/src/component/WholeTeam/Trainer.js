import React from 'react';
import style from './Trainers.module.css'

const Trainer = ({ title, description, image }) => {
  return (
    <div className={style.card}>
      <img className={style.cardImg} src={image} alt={title} />
      <h2>{title}</h2>
      <p className={style.cardDescription}>{description}</p>
    </div>
  );
};

export default Trainer;