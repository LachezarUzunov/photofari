import React, { useState } from "react";
import classes from "./Register.module.css";
import { Link } from "react-router-dom";

const Register = ({ onComponentChange }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repass, setRepass] = useState("");

  const onChange = () => {};
  const onSubmit = () => {};

  const handleComponentChange = () => {
    onComponentChange(false);
  };

  return (
    <section className={classes.bg}>
      <div className={classes.form}>
        <form onSubmit={onSubmit}>
          <label className="genLabel" htmlFor="name">
            Потребителско име
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Димитър Иванов"
            required
          ></input>
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
          <p>Паролата трябва да е между 8 и 12 символа</p>
          <label className="genLabel" htmlFor="rePass">
            Повтори парола
          </label>
          <input
            type="password"
            id="repass"
            name="repass"
            value={repass}
            onChange={onChange}
            placeholder="Повторете паролата"
            required
          ></input>

          <button className="primaryBtn" type="submit">
            Регистрирай се
          </button>
        </form>
        <p>
          Вече имаш акаунт?{" "}
          <button onClick={handleComponentChange}>Влез тук</button>
        </p>
      </div>
    </section>
  );
};

export default Register;
