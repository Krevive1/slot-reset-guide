"use client";

import { useEffect, useState } from "react";

interface PendingComment {
  id: number;
  machine_slug: string;
  author_name: string;
  body: string;
  created_at: string;
}

export default function AdminCommentsPage() {
  const [secret, setSecret] = useState("");
  const [submittedSecret, setSubmittedSecret] = useState("");
  const [comments, setComments] = useState<PendingComment[] | null>(null);
  const [error, setError] = useState("");

  async function loadComments(secretToUse: string) {
    setError("");
    const res = await fetch(`/api/admin/comments?secret=${encodeURIComponent(secretToUse)}`);
    if (!res.ok) {
      setError("認証に失敗しました。secretを確認してください。");
      setComments(null);
      return;
    }
    const data = await res.json();
    setComments(data.comments);
  }

  useEffect(() => {
    if (submittedSecret) {
      loadComments(submittedSecret);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submittedSecret]);

  async function handleModerate(id: number, action: "approve" | "reject") {
    await fetch(`/api/admin/comments?secret=${encodeURIComponent(submittedSecret)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, action }),
    });
    loadComments(submittedSecret);
  }

  if (!submittedSecret) {
    return (
      <div className="article" style={{ maxWidth: 400, margin: "40px auto" }}>
        <h1>管理者ログイン</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmittedSecret(secret);
          }}
        >
          <input
            type="password"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            placeholder="ADMIN_SECRET"
            style={{ width: "100%", padding: 8, marginBottom: 8 }}
          />
          <button type="submit" className="button">
            ログイン
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="article" style={{ maxWidth: 700, margin: "40px auto" }}>
      <h1>承認待ちコメント</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {comments === null ? (
        <p>読み込み中...</p>
      ) : comments.length === 0 ? (
        <p>承認待ちのコメントはありません。</p>
      ) : (
        comments.map((c) => (
          <div key={c.id} className="card" style={{ marginBottom: 16 }}>
            <p className="section-note">
              機種：{c.machine_slug} ／ 投稿者：{c.author_name} ／{" "}
              {new Date(c.created_at).toLocaleString("ja-JP")}
            </p>
            <p>{c.body}</p>
            <button className="button" onClick={() => handleModerate(c.id, "approve")}>
              承認
            </button>{" "}
            <button
              onClick={() => handleModerate(c.id, "reject")}
              style={{ marginLeft: 8, padding: "12px 18px", borderRadius: 10, border: "1px solid #ccc", background: "#fff" }}
            >
              却下
            </button>
          </div>
        ))
      )}
    </div>
  );
}
