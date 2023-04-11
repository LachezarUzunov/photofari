import React, { useState } from "react";
import LastTen from "./LastTen";
import Register from "./Register";
import classes from "./Home.module.css";
import Login from "./Login";

// import redux hoods
import { useSelector } from "react-redux";

const Home = () => {
  const [regComponent, setRegComponent] = useState(true);

  const { user } = useSelector((state) => state.auth);

  const onComponentChange = (prop) => {
    setRegComponent(prop);
  };
  return (
    <section className={classes.main}>
      <LastTen />
      {!user && (
        <div>
          {regComponent ? (
            <Register onComponentChange={onComponentChange} />
          ) : (
            <Login onComponentChange={onComponentChange} />
          )}
        </div>
      )}
    </section>
  );
};

export default Home;
