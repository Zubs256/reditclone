"use client";
import { useEffect, useState } from "react";

import Link from "next/link";

import CreateSubreddit from "@/components/subreddit";

export default function Subreddits() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [subreddits, setSubreddits] = useState([]);

  const fetchSubreddits = async () => {
    try {
      const response = await fetch("/api/subreddits");
      const info = await response.json();
      console.log(info);
      setSubreddits(info.subreddits);
    } catch (error) {
      console.error("Error fetching subreddits:", error.message);
    }
  };

  useEffect(() => {
    fetchSubreddits();
  }, []);

  const handleCreateSubreddit = (subreddit) => {
    setSubreddits((prevSubreddits) => [...prevSubreddits, subreddit]);
    setShowCreateForm(false);
  };
  console.log(subreddits);
  return (
    <div>
      <button
        className="create-sub-btn"
        onClick={() => setShowCreateForm(true)}
      >
        + Create Community
      </button>

      {showCreateForm && <CreateSubreddit onCreate={handleCreateSubreddit} />}

      {subreddits.map((subreddit) => (
        <div key={subreddit.id}>
          <Link href={`/subreddits/${subreddit.id}`}>{subreddit.name}</Link>
        </div>
      ))}
    </div>
  );
}