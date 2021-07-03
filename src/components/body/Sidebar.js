import React from "react";
import classes from "./Sidebar.module.css";
import { Avatar } from "@material-ui/core";

function Sidebar() {
  const recentItem = (topic) => (
    <div className={classes.sidebar__recentItem}>
      <span className={classes.sidebar__hash}>#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__top}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPKeDAIyUk2eBn31apu_LaF2tNykQWApiyUA&usqp=CAU"
          alt=""
        />
        <Avatar className={classes.sidebar__avatar} />
        <h2>Ajay Tidke</h2>
        <h2>ajaytidke28297@gmail.com</h2>
      </div>
      <div className={classes.sidebar__stats}>
        <div className={classes.sidebar__stat}>
          <p>Who viewed you</p>
          <p className={classes.sidebar__statNumber}>2,543</p>
        </div>
        <div className={classes.sidebar__stat}>
          <p>Views on post</p>
          <p className={classes.sidebar__statNumber}>2,448</p>
        </div>
      </div>
      <div className={classes.sidebar__bottom}>
        <p>Recent</p>
        {recentItem("reactJs")}
        {recentItem("Programming")}
        {recentItem("NodeJS")}
        {recentItem("Python")}
        {recentItem("Java")}
        {recentItem("JavaScript")}
        {recentItem("CSS")}
      </div>
    </div>
  );
}

export default Sidebar;
