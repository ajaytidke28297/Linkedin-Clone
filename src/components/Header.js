import React from "react";
import classes from "./Header.module.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.header__left}>
        <img src="" alt="" />

        <div className={classes.header__search}>
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className={classes.header__right}></div>
    </div>
  );
}

export default Header;
