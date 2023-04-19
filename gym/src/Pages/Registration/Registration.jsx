import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Registration.module.css";

const Register = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [error, setError] = useState({});
  const [userdata, setUserdata] = useState(
    JSON.parse(localStorage.getItem("userdata")) || []
  );
  const [isuserPresent, setIsuserPresent] = useState(false);
  const [isregister, setIsregister] = useState(false);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setIsuserPresent(false);
    setIsregister(false);

    const error = Validation(formValues);
    if (Object.keys(error).length == 0) {
      const result = userFind(formValues.email);

      if (result) {
        setIsuserPresent(true);

        return;
      }

      setUserdata([...userdata, formValues]);
      localStorage.setItem(
        "userdata",
        JSON.stringify([...userdata, formValues])
      );
      setIsregister(true);

      setFormValues({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      setError({});
    } else {
      setError(error);
    }
  };

  const Validation = (values) => {
    //hhhjjj//
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
      errors.username = "username is required !";
    }

    if (!values.email) {
      errors.email = "email is required !";
    } else if (!regex.test(values.email)) {
      errors.email = "this is not valid email";
    }

    if (!values.password) {
      errors.password = "Password is required !";
    } else if (values.password.length < 6) {
      errors.password = "Password should be greater than 6 character";
    } else if (values.password.length > 16) {
      errors.password = "Password should be less than 16 character";
    } else if (
      values.password.includes(123) ||
      values.password.includes(1234) ||
      values.password.includes(123456) ||
      values.password.includes(12345678)
    ) {
      errors.password = "Password should be Unique";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "confirm Password is required";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Password does'nt match";
    }

    return errors;
  };

  const userFind = (email) => {
    const data = userdata;

    let result = false;
    for (let i = 0; i < data.length; i++) {
      if (data[i].email == email) {
        result = true;
        break;
      }
    }
    return result;
  };

  return (
    <div>
      <h1>{isuserPresent ? "User Already exits please login" : ""}</h1>
      <h2>{isregister ? "Registration succesfully" : ""}</h2>
      <h1>Register</h1>
      <form className={styles.form} onSubmit={handelSubmit}>
        <label htmlFor="username"> UserName:</label>
        <input
          onChange={handelChange}
          value={formValues.username}
          type="text"
          id="username"
          name="username"
        />

        <p className={styles.errorMessage}>{error.username}</p>
        <label htmlFor="email">Email:</label>
        <input
          onChange={handelChange}
          value={formValues.email}
          type="text"
          id="email"
          name="email"
        />
        <p className={styles.errorMessage}>{error.email}</p>

        <label htmlFor="password">Password:</label>
        <input
          onChange={handelChange}
          value={formValues.password}
          type="password"
          id="password"
          name="password"
        />
        <p className={styles.errorMessage}>{error.password}</p>

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          onChange={handelChange}
          value={formValues.confirmPassword}
          type="password"
          id="confirmPassword"
          name="confirmPassword"
        />
        <p className={styles.errorMessage}>{error.confirmPassword}</p>

        <button type="submit" className={styles.Register}>
          Register
        </button>
      </form>
      <h3>
        Already have an account? <Link to="/login">Login</Link>
      </h3>
    </div>

     

  );
};

export default Register;
