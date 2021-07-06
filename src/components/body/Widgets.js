import { Info, FiberManualRecord } from "@material-ui/icons";
import React from "react";
import classes from "./Widgets.module.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className={classes.widgets__article}>
      <div className={classes.widgets__articleLeft}>
        <FiberManualRecord />
      </div>
      <div className={classes.widgets__articleRight}>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className={classes.widgets}>
      <div className={classes.widgets__header}>
        <h2>Linkedin News</h2>
        <Info />
      </div>
      {newsArticle(
        "Ajay is back",
        "Best developer just got a massive opportunity - 9999 readers"
      )}
      {newsArticle(
        "Ajay is back",
        "Best developer just got a massive opportunity - 9999 readers"
      )}
      {newsArticle(
        "Ajay is back",
        "Best developer just got a massive opportunity - 9999 readers"
      )}
      {newsArticle(
        "Ajay is back",
        "Best developer just got a massive opportunity - 9999 readers"
      )}
    </div>
  );
}

export default Widgets;
