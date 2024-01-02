"use client";
import { useState } from "react";

import { useRouter } from "next/navigation.js";

const NewPost = ({ subreddits, onSubmit }) => {
  const [postType, setPostType] = useState("text");
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [selectedSubreddit, setSelectedSubreddit] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: postType,
          title,
          content: postText,
          subreddit: selectedSubreddit,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }
      const post = await response.json();

      onSubmit(post);

      setTitle("");
      setPostText("");
      setSelectedSubreddit("");
    } catch (error) {
      console.error("Error creating post:", error.message);
    }
  };

  return (
    <div className="create-post-container">
      <form className="create-post-form" onSubmit={handleSubmit}>
        <label>
          Select Post Type:
          <select
            value={postType}
            onChange={(e) => setPostType(e.target.value)}
            required
          >
            <option value="text">Text</option>
            <option value="image">Image</option>
            <option value="link">Link</option>
          </select>
        </label>
        <label>
          Select a Subreddit:
          <select
            value={selectedSubreddit}
            onChange={(e) => setSelectedSubreddit(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a subreddit
            </option>
            {subreddits?.map((subreddit) => (
              <option key={subreddit.id} value={subreddit.id}>
                {subreddit.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Title:
          <input
            className="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your title"
            required
          />
        </label>
        <textarea
          value={postText}
          placeholder="What are your thoughts?"
          onChange={(e) => setPostText(e.target.value)}
          required
          title="Please enter a post"
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default NewPost;