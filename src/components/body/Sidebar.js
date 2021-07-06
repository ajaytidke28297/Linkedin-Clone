import React from "react";
import classes from "./Sidebar.module.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";

function Sidebar() {
  const user = useSelector((state) => state.user.user);

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
        <Avatar src={user?.photoUrl} className={classes.sidebar__avatar}>
          {user.email[0].toUpperCase()}
        </Avatar>
        <h2>{user?.displayName}</h2>
        <h2>{user?.email}</h2>
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
