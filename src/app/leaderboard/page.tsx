"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LeaderboardEntry, loadLeaderboard } from "@/lib/leaderboard";

export default function LeaderboardPage() {
    const [entries, setEntries] = useState<LeaderboardEntry[]>([]);

    useEffect(() => {
        setEntries(loadLeaderboard());
    }, []);

    return (
        <div style={{ maxWidth: 800, margin: "0 auto", padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <h1>Leaderboard</h1>
                <Link href="/quiz">Take Quiz</Link>
            </div>
            {entries.length === 0 ? (
                <div>No scores yet. Be the first!</div>
            ) : (
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th style={{ textAlign: "left", borderBottom: "1px solid #ddd", padding: "8px 4px" }}>#</th>
                            <th style={{ textAlign: "left", borderBottom: "1px solid #ddd", padding: "8px 4px" }}>Name</th>
                            <th style={{ textAlign: "left", borderBottom: "1px solid #ddd", padding: "8px 4px" }}>Score</th>
                            <th style={{ textAlign: "left", borderBottom: "1px solid #ddd", padding: "8px 4px" }}>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entries.map((e, idx) => (
                            <tr key={e.id}>
                                <td style={{ padding: "6px 4px" }}>{idx + 1}</td>
                                <td style={{ padding: "6px 4px" }}>{e.name}</td>
                                <td style={{ padding: "6px 4px" }}>{e.score}</td>
                                <td style={{ padding: "6px 4px" }}>{new Date(e.date).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <div style={{ marginTop: 16 }}>
                <Link href="/">Back Home</Link>
            </div>
        </div>
    );
}


