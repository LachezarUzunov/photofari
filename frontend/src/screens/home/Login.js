import React, { useState } from "react";
import classes from "./Login.module.css";

const Login = ({ onComponentChange }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = () => {};
  const onSubmit = () => {};

  const handleComponentChange = () => {
    onComponentChange(true);
  };

  return (
    <section className={classes.bg}>
      <div className={classes.form}>
        <form onSubmit={onSubmit}>
          <label className="genLabel" htmlFor="email">
            И-мейл адрес
          </label>
          <input
            placeholder="dimitar@abv.bg"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          ></input>
          <label className="genLabel" htmlFor="password">
            Парола
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Въведете парола"
            required
          ></input>
          <button className="primaryBtn" type="submit">
            Влез
          </button>
        </form>
        <p>
          Все още нямаш акаунт?{" "}
          <button onClick={handleComponentChange}>Регистрирай се тук</button>
        </p>
      </div>
    </section>
  );
};

export default Login;
