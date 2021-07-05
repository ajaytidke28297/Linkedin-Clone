import React from "react";
import classes from "./App.module.css";
import Header from "./components/Header";
import Sidebar from "./components/body/Sidebar";
import Feed from "./components/body/Feed";

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <div className={classes.app__body}>
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
