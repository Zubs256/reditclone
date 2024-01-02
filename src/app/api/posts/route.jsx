import { NextResponse } from "next/server";

import { fetchUser } from "@/lib/fetchUser";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const posts = await prisma.post.findMany();
    return NextResponse.json({ success: true, posts });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function POST(request) {
  try {
    const { title, message, subredditId, userId } = await request.json();
    const user = fetchUser(userId);
    const parentId = null;
    if (!title) {
      return NextResponse.json({
        success: false,
        error: "You must provide a title to create a post.",
      });
    }

    const post = await prisma.post.create({
      data: {
        title,
        message,
        subredditId,
        userId,
        parentId,
      },
    });

    return NextResponse.json({ success: true, post });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}