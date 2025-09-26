export type LeaderboardEntry = {
    id: string; // uuid-ish string
    name: string;
    score: number; // 0..20
    date: number; // epoch ms
};

const STORAGE_KEY = "quiz_leaderboard_v1";

export function loadLeaderboard(): LeaderboardEntry[] {
    if (typeof window === "undefined") {
        return [];
    }
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw) as LeaderboardEntry[];
        return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
        return [];
    }
}

export function saveLeaderboard(entries: LeaderboardEntry[]): void {
    if (typeof window === "undefined") {
        return;
    }
    const sorted = entries.slice().sort((a, b) => b.score - a.score || b.date - a.date);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sorted.slice(0, 50)));
}

export function addLeaderboardEntry(name: string, score: number): LeaderboardEntry[] {
    const entries = loadLeaderboard();
    const entry: LeaderboardEntry = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        name: name.trim().slice(0, 30) || "Anonymous",
        score,
        date: Date.now()
    };
    const next = entries.concat(entry);
    saveLeaderboard(next);
    return loadLeaderboard();
}


