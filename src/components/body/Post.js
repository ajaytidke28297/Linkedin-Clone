import { Avatar } from "@material-ui/core";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpOutlined,
} from "@material-ui/icons";
import React, { forwardRef } from "react";
import InputOption from "./InputOption";
import classes from "./Post.module.css";

const Post = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={classes.post}>
      <div className={classes.post__header}>
        <Avatar src={props.photoUrl}>{props.name[0].toUpperCase()}</Avatar>
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
});

export default Post;
