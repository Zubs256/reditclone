import { fetchUser } from "@/lib/fetchUser";
import { prisma } from "@/lib/prisma";

import Post from "./post";

const Posts = async () => {
  const user = await fetchUser();
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: { user: true, subreddit: true },
    });
    console.log("userpost", user);
    return (
      <div id="posts-container">
        {posts.map((post) => (
          <Post key={post.id} post={post} userId={user.id} />
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error during fetch:", error);
    return null;
  }
};

export default Posts;