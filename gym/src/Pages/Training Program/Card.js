
import React from 'react'
import Styles from './Card.module.css'

export default function Card(props) {
    return (

        <div className='card'>
            <img className={Styles.image} height="450px" width="550px" src={props.image} alt="image" />
            <h2>{props.heading}</h2>
        </div>

    )
}
