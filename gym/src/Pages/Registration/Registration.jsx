import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h1>Register</h1>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required />
                <button type="submit">Register</button>
            </form>
            <h3>Already have an account?  <Link to ='/login'>Login</Link></h3>

        </div>
    );
};

export default Register;
