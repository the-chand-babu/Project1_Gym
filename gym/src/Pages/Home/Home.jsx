import React from 'react'
import style from './Home.module.css'

export default function Home() {
  return (
    <div id='home' className={style.homeContainer}>
      <img className={style.imageLink} src='./images/wall1.jpg' alt="homepage image" />
      <div className={style.contentContainer}>
        <h1>"Take Care of Your <span>Body</span></h1>
        <h1>It's the only place you</h1>
        <h1>have to <span>live</span>."</h1>
      </div>

    </div>
  )
}