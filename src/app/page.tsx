import Image from "next/image";

export default function Home() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 16 }}>
      <h1 style={{ marginBottom: 12 }}>Quiz App</h1>
      <p style={{ marginBottom: 12 }}>Answer 20 random questions. Results can be saved to the leaderboard.</p>
      <div style={{ display: "flex", gap: 12 }}>
        <a href="/quiz" style={{ padding: "10px 12px", background: "#000", color: "#fff", borderRadius: 8 }}>Start Quiz</a>
        <a href="/leaderboard" style={{ padding: "10px 12px", border: "1px solid #ccc", borderRadius: 8 }}>View Leaderboard</a>
      </div>
    </div>
  );
}
