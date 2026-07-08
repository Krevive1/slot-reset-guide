import { NextRequest, NextResponse } from "next/server";
import { ensureCommentsTable, getSql } from "@/lib/db";

const MAX_NAME_LENGTH = 30;
const MAX_BODY_LENGTH = 1000;

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");
  if (!slug) {
    return NextResponse.json({ error: "slug is required" }, { status: 400 });
  }

  await ensureCommentsTable();
  const sql = getSql();
  const comments = await sql`
    SELECT id, author_name, body, created_at
    FROM comments
    WHERE machine_slug = ${slug} AND status = 'approved'
    ORDER BY created_at ASC
  `;

  return NextResponse.json({ comments });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { slug, name, comment, website } = body ?? {};

  // Honeypot: a real visitor never fills this hidden field. Silently
  // pretend success so bots don't learn to skip it.
  if (typeof website === "string" && website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (typeof slug !== "string" || !slug) {
    return NextResponse.json({ error: "slug is required" }, { status: 400 });
  }
  if (typeof name !== "string" || !name.trim()) {
    return NextResponse.json({ error: "name is required" }, { status: 400 });
  }
  if (typeof comment !== "string" || !comment.trim()) {
    return NextResponse.json({ error: "comment is required" }, { status: 400 });
  }
  if (name.length > MAX_NAME_LENGTH) {
    return NextResponse.json({ error: "name is too long" }, { status: 400 });
  }
  if (comment.length > MAX_BODY_LENGTH) {
    return NextResponse.json({ error: "comment is too long" }, { status: 400 });
  }

  await ensureCommentsTable();
  const sql = getSql();
  await sql`
    INSERT INTO comments (machine_slug, author_name, body, status)
    VALUES (${slug}, ${name.trim()}, ${comment.trim()}, 'pending')
  `;

  return NextResponse.json({ ok: true });
}
