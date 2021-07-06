import React from "react";
import classes from "./InputOption.module.css";

function InputOption(props) {
  return (
    <div className={classes.inputOption}>
      <props.Icon style={{ color: props.color }} />
      <h4>{props.title}</h4>
    </div>
  );
}

export default InputOption;
