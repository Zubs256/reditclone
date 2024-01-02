
import React from "react";

import Posts from "@/components/posts";

import Subreddits from "./subreddits/page";

export default function Home() {
  return (
    <div className="main-container">
      <div className="body-container">
        <div className="subreddit-div">
          <Subreddits />
        </div>
        <div className="posts-div">
          {" "}
          <Posts />
        </div>
      </div>
    </div>
  );
}