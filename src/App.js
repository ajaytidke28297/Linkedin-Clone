import React, { useEffect } from "react";
import classes from "./App.module.css";
import Header from "./components/Header";
import Sidebar from "./components/body/Sidebar";
import Feed from "./components/body/Feed";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Login";
import { auth } from "./firebase";
import { userActions } from "./features/userSlice";
import Widgets from "./components/body/Widgets";

function App() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          userActions.login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl,
          })
        );
      } else {
        dispatch(userActions.logout());
      }
    });
  }, [dispatch]);

  return (
    <div className={classes.app}>
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className={classes.app__body}>
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
