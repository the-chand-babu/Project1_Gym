import React, { useRef, useState } from "react";
import styles from "./Login.module.css"; // Import CSS module
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const obj = {
    email: "",
    password: "",
  };

  const [errors, setErrors] = useState({});
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("userdata")) || []
  );
  const [isUser, setIsuser] = useState("");
  const [formValues, setFormValues] = useState(obj);
  const Navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    obj[name] = value;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  //   console.log(formValues)

  const handlesubmit = (e) => {
    e.preventDefault();
    const error = validate(formValues);
    if (Object.keys(error).length !== 0) {
      setErrors(error);

      return;
    }

    const user = FindUser(data);
    if (user) {
      setIsuser("Login SuccesFully");
      setTimeout(() => {
        Navigate("/");
      }, 2500);
    } else {
      setIsuser("something went wrong");
    }

    setFormValues(obj);
  };

  const validate = (validate) => {
    const error = {};
    const email = validate.email;
    const password = validate.password;

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!email) {
      error.email = "email is required !";
    } else if (!regex.test(email)) {
      error.email = "this email is not valid !";
    }

    if (!password) {
      error.password = "Password is required !";
    } else if (password.length < 6) {
      error.password = "Password should be greater than 6";
    } else if (password.length > 16) {
      error.password = "password should be less than 16";
    }

    return error;
  };

  const FindUser = (data) => {
    const value = data.find(
      (user) =>
        user.email === formValues.email && user.password === formValues.password
    );
    return value;
  };

  return (
    <div className={styles.loginMian}>
     <img className={styles.sideimg} src="https://c0.wallpaperflare.com/preview/722/933/115/active-adult-athlete-biceps.jpg" alt="demo"  />
    
       
        <form className={styles.loginContainer} onSubmit={handlesubmit}>
        <h1>Login</h1>
          <label htmlFor="email">Email:</label>
          <input
            value={formValues.email}
            onChange={handleChange}
            type="text"
            name="email"
          />
          <p>{errors.email}</p>
          <label htmlFor="password">Password:</label>
          <input
            value={formValues.password}
            onChange={handleChange}
            type="password"
            name="password"
          />
          <p>{errors.password}</p>
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
          <h3>
          Don't have an account? <Link className={styles.spanlogin} to="/register">Register</Link>
        </h3>
        <h1>{isUser}</h1>
        </form>
       
        
      </div>
   
  );
};

export default Login;
