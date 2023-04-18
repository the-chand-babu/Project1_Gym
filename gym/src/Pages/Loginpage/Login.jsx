
import React, { useRef } from 'react';
import styles from './Login.module.css'; // Import CSS module
import { Link } from 'react-router-dom';

const Login = () => {

    const obj = {
        email: "",
        password: ""
    };

    const formRef = useRef();

    const handelChange = (e) => {

        const { name, value } = e.target;
        obj[name] = value;
        formRef.current = obj;
    }

    // const formSubmit=(e.pre)=>{

    // }
    // onSubmit = { formSubmit }

    return (
        <div className={styles.loginContainer}> {/* Apply CSS module class to container */}
            <h1>Login</h1>
            <form >
                <label htmlFor="email">Email:</label>
                <input onChange={handelChange} type="email" id="email" name="email" required />
                <label htmlFor="password">Password:</label>
                <input onChange={handelChange} type="password" id="password" name="password" required />
                <button type="submit" className={styles.loginButton}>Login</button> {/* Apply CSS module class to button */}
            </form>
            <h3>Don't have an account? <Link to='/register'>Register</Link></h3>
        </div>
    );
};

export default Login;
