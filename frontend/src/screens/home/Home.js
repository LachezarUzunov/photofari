import React, { useState } from "react";
import LastTen from "./LastTen";
import Register from "./Register";
import classes from "./Home.module.css";
import Login from "./Login";

const Home = () => {
  const [regComponent, setRegComponent] = useState(true);

  const onComponentChange = (prop) => {
    setRegComponent(prop);
  };
  return (
    <section className={classes.main}>
      <h1>HOME PAGE</h1>
      <LastTen />
      {regComponent ? (
        <Register onComponentChange={onComponentChange} />
      ) : (
        <Login onComponentChange={onComponentChange} />
      )}
    </section>
  );
};

export default Home;
