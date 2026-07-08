import { neon } from "@neondatabase/serverless";

// Set by Vercel's Neon/Postgres integration (Storage tab). Falls back to
// DATABASE_URL for local/manual setups.
const DATABASE_URL = process.env.POSTGRES_URL ?? process.env.DATABASE_URL ?? "";

export function getSql() {
  if (!DATABASE_URL) {
    throw new Error(
      "No database connection string found (POSTGRES_URL/DATABASE_URL). Add a Postgres database in the Vercel dashboard."
    );
  }
  return neon(DATABASE_URL);
}

let tableEnsured = false;

// Idempotent — safe to call on every request. Cheap once the table exists.
export async function ensureCommentsTable() {
  if (tableEnsured) return;
  const sql = getSql();
  await sql`
    CREATE TABLE IF NOT EXISTS comments (
      id SERIAL PRIMARY KEY,
      machine_slug TEXT NOT NULL,
      author_name TEXT NOT NULL,
      body TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'pending',
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
  await sql`CREATE INDEX IF NOT EXISTS comments_slug_status_idx ON comments (machine_slug, status)`;
  tableEnsured = true;
}

export interface Comment {
  id: number;
  machine_slug: string;
  author_name: string;
  body: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
}
