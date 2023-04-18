import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Registration.module.css';

const Register = () => {
    return (
        <div>
            <h1>Register</h1>
            <form className={styles.form}>
                <label htmlFor="username"> UserName:</label>
                <input type="username" id="username" name="username" required/>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required />
                <button type="submit" className={styles.Register}>Register</button>
            </form>
            <h3>Already have an account?  <Link to ='/login'>Login</Link></h3>

        </div>
    );
};

//changes
export default Register;


