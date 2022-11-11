import React from "react";
import { Link } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";
const cl = classNames.bind(styles);

function Header() {
  return (
    <div className={cl("wrapper")}>
      <div className={cl("top")}>
        <ul className={cl("nav")}>
          <Link
            to="/"
            className={cl("nav-item")}
          >
            Shop
          </Link>
          <Link
            to="/"
            className={cl("nav-item")}
          >
            About us
          </Link>
          <Link
            to="/"
            className={cl("nav-item")}
          >
            Contact us
          </Link>
          <Link
            to="/"
            className={cl("nav-item")}
          >
            Faqs
          </Link>
        </ul>
        <ul className={cl("auth")}>
          <Link
            to="/"
            className={cl("nav-item")}
          >
            Login
          </Link>
          <Link
            to="/"
            className={cl("nav-item")}
          >
            Register
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
