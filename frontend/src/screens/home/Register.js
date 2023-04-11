import React, { useState } from "react";
import classes from "./Register.module.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = ({ onComponentChange }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repass, setRepass] = useState("");

  const nameInputHandler = (e) => {
    setName(e.target.value);
  };

  const emailInputHandler = (e) => {
    setEmail(e.target.value);
  };

  const passInputHandler = (e) => {
    setPassword(e.target.value);
  };

  const repassInputHandler = (e) => {
    setRepass(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 8) {
      toast.error("Паролата трябва да е поне 8 символа");
      return;
    }

    if (password !== repass) {
      toast.error("Паролите не съвпадат!");
    }

    const profileData = {
      name,
      email,
      password,
    };
  };

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
            onChange={nameInputHandler}
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
            onChange={emailInputHandler}
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
            onChange={passInputHandler}
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
            onChange={repassInputHandler}
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
