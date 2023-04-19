import React, { useRef, useState } from "react";
import styles from "./Login.module.css"; // Import CSS module
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const obj = {
    email: "",
    password: "",
  };

  const formRef = useRef();
  const [errors, setErrors] = useState({});
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("userdata")) || []
  );
  const [isUser, setIsuser] = useState("");
  const [formValues, setFormValues] = useState(obj);
  const Navigate = useNavigate();

  const handelChange = (e) => {
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


        <div className={styles.loginContainer}> {/* Apply CSS module class to container */}
            <h1>Login</h1>
            

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


                <input onChange={handelChange} type="password" id="password" name="password" required />
                {/* <button type="submit" className={styles.loginButton}>Login</button> Apply CSS module class to button */}

                {/* <input type="password" id="password" name="password" required /> */}
                <button type="submit" className={styles.loginButton}>Login</button> 

            </form>
            <h3>Don't have an account? <Link to='/register'>Register</Link></h3>
        </div>
        </div>

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
        user.email == formValues.email && user.password == formValues.password

    );
    return value;
  };

  return (
    <div className={styles.loginContainer}>
      <h1>Login</h1>
      <div className={styles.loginContainer}>
        <p>{isUser}</p>
        <form onSubmit={handlesubmit}>
          <label htmlFor="email">Email:</label>
          <input
            value={formValues.email}
            onChange={handelChange}
            type="text"
            name="email"
          />
          <p>{errors.email}</p>
          <label htmlFor="password">Password:</label>
          <input
            value={formValues.password}
            onChange={handelChange}
            type="password"
            name="password"
          />
          <p>{errors.password}</p>
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
        <h3>
          Don't have an account? <Link to="/register">Register</Link>
        </h3>
      </div>
    </div>
  );
};

export default Login;
