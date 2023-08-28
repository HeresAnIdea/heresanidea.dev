import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

// get a specific idea by id
export async function GET(req: Request) {
  try {
    const result = await sql`SELECT * FROM ideas`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
