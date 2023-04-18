import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Registration.module.css';

const Register = () => {
    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const [formValues, setFormValues] = useState(initialValues);
    const [error, setError] = useState({})


    const handelChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues, [name]: value
        })
    }

    const handelSubmit = (e) => {
        e.preventDefault()

       setError(Validation(formValues)) 
    }


    const Validation = (values) => {
            const errors = {};
            

    }


    return (
        <div>
            <h1>Register</h1>
            <form className={styles.form} onSubmit={handelSubmit}>
                <label htmlFor="username"> UserName:</label>
                <input onChange={handelChange} value={formValues.username} type="text" id="username" name="username" required />
                <label htmlFor="email">Email:</label>
                <input onChange={handelChange} value={formValues.email} type="text" id="email" name="email" required />
                <label htmlFor="password">Password:</label>
                <input onChange={handelChange} value={formValues.password} type="password" id="password" name="password" required />
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input onChange={handelChange} value={formValues.ConfirmPassword} type="password" id="confirmPassword" name="confirmPassword" required />
                <button type="submit" className={styles.Register}>Register</button>
            </form>
            <h3>Already have an account?  <Link to='/login'>Login</Link></h3>

        </div>
    );
};

export default Register;
