import React from "react";
import classes from "./Feed.module.css";
import { Create } from "@material-ui/icons";

function Feed() {
  return (
    <div className={classes.feed}>
      <div className={classes.feed__inputContainer}>
        <div className={classes.feed__input}>
          <Create />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Feed;
