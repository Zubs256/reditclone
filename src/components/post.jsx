"use client";
import { useState } from "react";



import DeletePost from "./DeletePost";
import EditPost from "./EditPost";

export default function Post({ post, userId, username, subreddit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isCommenting, setIsCommenting] = useState(false);
  console.log("pp", post);
  console.log("lll", userId);
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  // using Json.perse because it is an object
  // when saving we use JSON.stringfy
  return (
    <div className="post-containers">
      <div className="vote-btns">
        <button className="upvote">
        <img className="pic" src="/images/upvote.jpg"/>
          
        </button>
        
        0
        <button className="downvote">
          {" "}
          <img className="pic" src="/images/downvote.jpg"/>
        </button>
      </div>
      <div className="posts-div">
        {post ? (
          isEditing ? (
            <EditPost
              post={post}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
          ) : (
            <>
              <div className="name-sub">
                <h6 className="post-title">r/{post.subreddit?.name}</h6>
                <small>posted by {post.user?.username}</small>
              </div>

              <h3 className="post-title">{post.title}</h3>
              <p className="post-content">{post.message}</p>
            </>
          )
        ) : null}

        <div className="post-buttons-containers">
          <button className="btns" onClick={() => setIsCommenting(true)}>
             0 comments
          </button>
          {loggedInUser?.id === post.user?.id ? (
            <DeletePost post={post} />
          ) : null}
          {loggedInUser?.id === post.user?.id ? (
            <button className="btns" onClick={() => setIsEditing(true)}>
              
              {/* my editing button */}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}