import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav_links}>
        <li>
          <Link to="/">Начало</Link>
        </li>
        <li>
          <Link to="/photos">Снимки</Link>
        </li>
        <li>
          <Link to="/profiles">Потребители</Link>
        </li>
        <li>
          <Link to="/contacts">Контакти</Link>
        </li>
        <li>
          <Link to="/">Изход</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
