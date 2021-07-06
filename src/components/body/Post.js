import { Avatar } from "@material-ui/core";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpOutlined,
} from "@material-ui/icons";
import React from "react";
import InputOption from "./InputOption";
import classes from "./Post.module.css";

function Post(props) {
  return (
    <div className={classes.post}>
      <div className={classes.post__header}>
        <Avatar />
        <div className={classes.post__info}>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
        </div>
      </div>
      <div className={classes.post__body}>
        <p>{props.message}</p>
      </div>

      <div className={classes.post__buttons}>
        <InputOption Icon={ThumbUpOutlined} title="Like" color="gray" />
        <InputOption Icon={ChatOutlined} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlined} title="Share" color="gray" />
        <InputOption Icon={SendOutlined} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Post;
