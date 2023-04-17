import style from './Navbar.module.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const Navigate = useNavigate()
  return (
    <nav className={style.navbar}>
      <div className={style.logo}>

        <img className={style.logImage} src="./images/logo.png" alt="logo" />

      </div>

      <ul className={style.navlist}>
        <li>Home</li>
        <li>About Us</li>
        <li>Classes</li>
        <li>Blogs</li>


      </ul>

      <button onClick={() => { Navigate('/login') }} className={style.loginBtn}>Join US</button>

      {/* <Link>Join Us</Link> */}



    </nav>
  )
}
