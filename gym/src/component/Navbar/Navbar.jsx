import style from './Navbar.module.css'
import React from 'react'
// import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className={style.navbar}>
        <div  className={style.logo}> Logo</div>

        <ul className={style.navlist}>
            <li>Home</li>
            <li>About Us</li>
            <li>Classes</li>
            <li>Blogs</li>
            

        </ul>

        <button className={style.loginBtn}>Join US</button>

        {/* <Link>Join Us</Link> */}

        

    </nav>
  )
}
