import React from "react";
import classes from "./HeaderOption.module.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";

function HeaderOption(props) {
  const user = useSelector((state) => state.user.user);

  return (
    <div onClick={props.onClick} className={classes.headerOption}>
      {props.Icon && <props.Icon className={classes.headerOption__icon} />}
      {props.avatar && (
        <Avatar className={classes.headerOption__icon} src={user?.photoUrl}>
          {user?.email[0].toUpperCase()}
        </Avatar>
      )}
      <h3 className={classes.headerOption__title}>{props.title}</h3>
    </div>
  );
}

export default HeaderOption;
