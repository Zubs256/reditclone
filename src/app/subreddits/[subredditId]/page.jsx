import Link from "next/link";

import Post from "@/components/post";
import { prisma } from "@/lib/prisma.jsx";

export default async function Subreddit({ params }) {
  const { subredditId } = params;

  const { username } = params;

  const subreddit = await prisma.subreddit.findFirst({
    where: { id: subredditId },
  });

  const posts = await prisma.post.findMany({
    where: { subredditId },
    include: { user: true, subreddit: true },
  });
  console.log(posts);
  return (
    <div className="post-containers">
      {posts.map((post) => (
        <div className="post-containers" key={post.id}>
          <Link href={"/submit"} className="sub">
            ➕ Create a Post
          </Link>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
}