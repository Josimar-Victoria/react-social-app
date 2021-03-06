import { Button, IconButton } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { User } from "../../dummyData";
import "./post.css";

export default function Post({ posts }) {
  const [like, setLike] = useState(posts.like);
  const [isliked, setIsLiked] = useState(false);

  const likeHeandler = (e) => {
    e.preventDefault();
    setLike(isliked ? like - 1 : like + 1);
    setIsLiked(!isliked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/person/1.jpeg"
              alt="person"
              className="postProfileImg"
            />
            <span className="postUserName">
              {User.filter((u) => u.id === posts.userId)[0].username}
            </span>
            <span className="postDate">{posts?.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{posts?.desc}</span>
          <img className="postImg" src={posts?.photo} alt={posts?.desc} />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <IconButton onClick={likeHeandler}>
              <img className="likeIcon" src="/assets/like.png" alt="like" />
            </IconButton>

            <IconButton onClick={likeHeandler}>
              <img className="likeIcon" src="/assets/heart.png" alt="like" />
            </IconButton>

            <span className="postLikeCounter">
              {like} {""} me guanto
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommenText">
              {posts?.comment} {""} Comentarios
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
