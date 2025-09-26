"use client";

import { useMemo, useState } from "react";
import { ALL_QUESTIONS, Question } from "@/data/questions";
import { sampleWithoutReplacement, shuffleInPlace } from "@/lib/random";
import Link from "next/link";
import { addLeaderboardEntry } from "@/lib/leaderboard";

type DisplayQuestion = Question & { shuffledAnswers: Question["answers"] };

export default function QuizPage() {
    const questions: DisplayQuestion[] = useMemo(() => {
        const sampled = sampleWithoutReplacement(ALL_QUESTIONS, 20);
        return sampled.map(q => ({
            ...q,
            shuffledAnswers: shuffleInPlace(q.answers.slice())
        }));
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selected, setSelected] = useState<Record<string, number>>({});
    const [finished, setFinished] = useState(false);
    const [name, setName] = useState("");

    const current = questions[currentIndex];

    function handleSelect(answerIdx: number) {
        if (!current) return;
        setSelected(prev => ({ ...prev, [current.id]: answerIdx }));
    }

    function nextQuestion() {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setFinished(true);
        }
    }

    function prevQuestion() {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    const score = useMemo(() => {
        let s = 0;
        for (const q of questions) {
            const idx = selected[q.id];
            if (typeof idx === "number" && q.shuffledAnswers[idx]?.correct) s++;
        }
        return s;
    }, [questions, selected]);

    function submitScore() {
        addLeaderboardEntry(name || "Anonymous", score);
    }

    return (
        <div style={{ maxWidth: 800, margin: "0 auto", padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <h1>Quiz</h1>
                <Link href="/leaderboard">Leaderboard</Link>
            </div>

            {!finished && (
                <div>
                    <div style={{ marginBottom: 8 }}>Question {currentIndex + 1} / {questions.length}</div>
                    <div style={{ fontSize: 18, marginBottom: 12 }}>{current?.prompt}</div>
                    <div style={{ display: "grid", gap: 8 }}>
                        {current?.shuffledAnswers.map((a, idx) => {
                            const selectedIdx = selected[current.id];
                            const isSelected = selectedIdx === idx;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => handleSelect(idx)}
                                    style={{
                                        textAlign: "left",
                                        padding: "10px 12px",
                                        borderRadius: 8,
                                        border: "1px solid #ddd",
                                        background: isSelected ? "#eef" : "#fff",
                                        cursor: "pointer"
                                    }}
                                >
                                    {a.text}
                                </button>
                            );
                        })}
                    </div>
                    <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
                        <button onClick={prevQuestion} disabled={currentIndex === 0}>Prev</button>
                        <button onClick={nextQuestion}>{currentIndex === questions.length - 1 ? "Finish" : "Next"}</button>
                    </div>
                </div>
            )}

            {finished && (
                <div style={{ marginTop: 16 }}>
                    <h2>Your Score: {score} / {questions.length}</h2>
                    <div style={{ marginTop: 12, display: "flex", gap: 8, alignItems: "center" }}>
                        <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Your name"
                            style={{ padding: 8, border: "1px solid #ccc", borderRadius: 6 }}
                        />
                        <button onClick={submitScore}>Save to Leaderboard</button>
                        <Link href="/leaderboard" style={{ marginLeft: 8 }}>View Leaderboard</Link>
                    </div>
                    <div style={{ marginTop: 16 }}>
                        <Link href="/">Back Home</Link>
                    </div>
                </div>
            )}
        </div>
    );
}


