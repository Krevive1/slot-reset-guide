import { NextRequest, NextResponse } from "next/server";
import { ensureCommentsTable, getSql } from "@/lib/db";

function checkSecret(request: NextRequest): boolean {
  const secret = request.nextUrl.searchParams.get("secret") ?? request.headers.get("x-admin-secret");
  return !!process.env.ADMIN_SECRET && secret === process.env.ADMIN_SECRET;
}

export async function GET(request: NextRequest) {
  if (!checkSecret(request)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  await ensureCommentsTable();
  const sql = getSql();
  const comments = await sql`
    SELECT id, machine_slug, author_name, body, status, created_at
    FROM comments
    WHERE status = 'pending'
    ORDER BY created_at ASC
  `;

  return NextResponse.json({ comments });
}

export async function PATCH(request: NextRequest) {
  if (!checkSecret(request)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { id, action } = body ?? {};

  if (typeof id !== "number") {
    return NextResponse.json({ error: "id is required" }, { status: 400 });
  }
  if (action !== "approve" && action !== "reject") {
    return NextResponse.json({ error: "action must be approve or reject" }, { status: 400 });
  }

  await ensureCommentsTable();
  const sql = getSql();
  const status = action === "approve" ? "approved" : "rejected";
  await sql`UPDATE comments SET status = ${status} WHERE id = ${id}`;

  return NextResponse.json({ ok: true });
}
