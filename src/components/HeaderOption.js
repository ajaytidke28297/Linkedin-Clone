import React from "react";
import classes from "./HeaderOption.module.css";
import { Avatar } from "@material-ui/core";

function HeaderOption(props) {
  return (
    <div onClick={props.onClick} className={classes.headerOption}>
      {props.Icon && <props.Icon className={classes.headerOption__icon} />}
      {props.avatar && (
        <Avatar className={classes.headerOption__icon} src={props.avatar} />
      )}
      <h3 className={classes.headerOption__title}>{props.title}</h3>
    </div>
  );
}

export default HeaderOption;
