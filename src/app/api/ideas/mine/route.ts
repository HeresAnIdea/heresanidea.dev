import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { User } from "next-auth";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, description, authorEmail } = body;
    const author = await prisma.users.findUnique({
      where: {
        email: authorEmail,
      },
    });
    if (!author) {
      return NextResponse.json(
        {
          error: "Author not found",
        },
        { status: 404 }
      );
    }
    const result = await prisma.ideas.create({
      data: {
        title,
        description,
        authorId: author.id,
      },
    });
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const session = await getToken({ req });
    if (!session) {
      return NextResponse.next();
    }
    const { user } = session as { user: User };
    const userId = (
      await prisma.users.findUnique({
        where: {
          email: user.email as string | undefined,
        },
      })
    )?.id;
    if (!userId) {
      return NextResponse.json(
        {
          error: "User not found",
        },
        { status: 404 }
      );
    }
    const result = await prisma.ideas.findMany({
      where: {
        authorId: userId,
      },
    });
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
