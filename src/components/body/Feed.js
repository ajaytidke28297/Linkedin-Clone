import React, { useEffect, useState } from "react";
import classes from "./Feed.module.css";
import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@material-ui/icons";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "../../firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector((state) => state.user.user);
  const [enteredText, setEnteredText] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user?.displayName,
      description: user?.email,
      message: enteredText,
      photoUrl: user?.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setEnteredText("");
  };

  return (
    <div className={classes.feed}>
      <div className={classes.feed__inputContainer}>
        <div className={classes.feed__input}>
          <Create />
          <form>
            <input
              value={enteredText}
              onChange={(e) => setEnteredText(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className={classes.feed_inputOptions}>
          <InputOption Icon={Image} title={"Photo"} color="#70B5f9" />
          <InputOption Icon={Subscriptions} title={"Video"} color="#E7A33E" />
          <InputOption Icon={EventNote} title={"Event"} color="#C0C0CD" />
          <InputOption
            Icon={CalendarViewDay}
            title={"Wrie article"}
            color="#7FC15E"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            name={post.name}
            description={post.description}
            message={post.message}
            photoUrl={post.photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
