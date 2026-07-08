"use client";

import { useEffect, useState, FormEvent } from "react";

interface CommentItem {
  id: number;
  author_name: string;
  body: string;
  created_at: string;
}

export default function Comments({ slug }: { slug: string; title: string }) {
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  async function loadComments() {
    try {
      const res = await fetch(`/api/comments?slug=${encodeURIComponent(slug)}`);
      if (!res.ok) return;
      const data = await res.json();
      setComments(data.comments ?? []);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !body.trim()) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, name, comment: body, website }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
      setName("");
      setBody("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="card comments" aria-labelledby="comments-heading">
      <h2 id="comments-heading">コメント</h2>

      {!loading && comments.length === 0 && (
        <p className="section-note">まだコメントはありません。最初のコメントを投稿してみませんか？</p>
      )}

      {comments.length > 0 && (
        <ul className="comment-list">
          {comments.map((c) => (
            <li key={c.id}>
              <p className="comment-meta">
                {c.author_name} ・ {new Date(c.created_at).toLocaleDateString("ja-JP")}
              </p>
              <p>{c.body}</p>
            </li>
          ))}
        </ul>
      )}

      {status === "done" ? (
        <p className="section-note">
          コメントを送信しました。内容を確認の上、掲載されます（すぐには表示されません）。
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="comment-form">
          {/* Honeypot — hidden from real users via CSS, bots often fill every field. */}
          <input
            type="text"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="hp-field"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <label htmlFor="comment-name">お名前</label>
          <input
            id="comment-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={30}
            required
          />
          <label htmlFor="comment-body">コメント</label>
          <textarea
            id="comment-body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            maxLength={1000}
            rows={4}
            required
          />
          <button type="submit" className="button" disabled={status === "submitting"}>
            {status === "submitting" ? "送信中..." : "コメントを投稿する"}
          </button>
          {status === "error" && <p style={{ color: "#c23b3b" }}>送信に失敗しました。もう一度お試しください。</p>}
        </form>
      )}
    </section>
  );
}
