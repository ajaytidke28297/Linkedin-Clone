import React from "react";
import classes from "./Header.module.css";
import HeaderOption from "./HeaderOption";
import {
  BusinessCenter,
  Chat,
  Home,
  Notifications,
  Search,
  SupervisorAccount,
} from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { userActions } from "../features/userSlice";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    console.log("Logout Initiated");
    dispatch(userActions.logout());
    auth.signOut();
  };

  return (
    <div className={classes.header}>
      <div className={classes.header__left}>
        <img
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt="Linkedin logo"
        />
        <div className={classes.header__search}>
          <Search />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className={classes.header__right}>
        <HeaderOption title="Home" Icon={Home} />
        <HeaderOption title="My Network" Icon={SupervisorAccount} />
        <HeaderOption title="Jobs" Icon={BusinessCenter} />
        <HeaderOption title="Messaging" Icon={Chat} />
        <HeaderOption title="Notifications" Icon={Notifications} />
        <HeaderOption avatar={true} title="me" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
