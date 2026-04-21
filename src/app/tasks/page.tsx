import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TASKS = [
  {
    id: 1,
    title: "Translate 500 words English to Indonesian",
    desc: "Translate a short article about technology from English to Indonesian. Must be natural and fluent.",
    reward: "$4.00",
    category: "Translation",
    slots: 10,
    difficulty: "Easy",
    timeEst: "~30 min",
    posted: "2h ago",
  },
  {
    id: 2,
    title: "Screenshot 3 competitor websites on mobile",
    desc: "Take full-page mobile screenshots of 3 specified websites and upload them as PNG files.",
    reward: "$1.50",
    category: "Research",
    slots: 5,
    difficulty: "Easy",
    timeEst: "~10 min",
    posted: "5h ago",
  },
  {
    id: 3,
    title: "Write a 200-word product review",
    desc: "Write an honest 200-word review for a given product. Must include pros, cons, and a rating.",
    reward: "$3.00",
    category: "Writing",
    slots: 20,
    difficulty: "Medium",
    timeEst: "~25 min",
    posted: "1d ago",
  },
  {
    id: 4,
    title: "Fill out a 10-question market survey",
    desc: "Answer 10 questions about your online shopping habits. Must be a genuine response.",
    reward: "$0.80",
    category: "Survey",
    slots: 50,
    difficulty: "Easy",
    timeEst: "~8 min",
    posted: "3h ago",
  },
  {
    id: 5,
    title: "Find 10 email contacts of tech startups",
    desc: "Research and compile 10 verified public contact emails from tech startups in Southeast Asia.",
    reward: "$6.00",
    category: "Research",
    slots: 3,
    difficulty: "Hard",
    timeEst: "~60 min",
    posted: "12h ago",
  },
  {
    id: 6,
    title: "Record a 30-second voice sample",
    desc: "Read a provided script aloud and submit a clear 30-second audio recording in MP3 format.",
    reward: "$2.50",
    category: "Audio",
    slots: 15,
    difficulty: "Easy",
    timeEst: "~15 min",
    posted: "6h ago",
  },
  {
    id: 7,
    title: "Caption 20 product photos",
    desc: "Write short, SEO-friendly captions for 20 product images. Max 80 characters each.",
    reward: "$5.00",
    category: "Writing",
    slots: 8,
    difficulty: "Medium",
    timeEst: "~40 min",
    posted: "2d ago",
  },
  {
    id: 8,
    title: "Test a mobile app and report bugs",
    desc: "Install a provided APK, complete 5 test scenarios, and submit a bug report with screenshots.",
    reward: "$8.00",
    category: "Testing",
    slots: 6,
    difficulty: "Medium",
    timeEst: "~45 min",
    posted: "4h ago",
  },
  {
    id: 9,
    title: "Classify 50 images into categories",
    desc: "Review 50 images and label each one with the correct category from a provided list.",
    reward: "$2.00",
    category: "Data",
    slots: 30,
    difficulty: "Easy",
    timeEst: "~20 min",
    posted: "8h ago",
  },
];

const CATEGORIES = ["All", "Translation", "Research", "Writing", "Survey", "Audio", "Testing", "Data"];

const DIFFICULTY_COLORS: Record<string, string> = {
  Easy: "badge-green",
  Medium: "badge-yellow",
  Hard: "badge-red",
};

const CATEGORY_COLORS: Record<string, string> = {
  Translation: "badge-blue",
  Research: "badge-blue",
  Writing: "badge-blue",
  Survey: "badge-blue",
  Audio: "badge-blue",
  Testing: "badge-blue",
  Data: "badge-blue",
};

export default function TasksPage() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh" }}>
      <Navbar />

      {/* Header */}
      <section style={{ padding: "60px 24px 40px", borderBottom: "1px solid #111111" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <span className="badge badge-green" style={{ marginBottom: 16 }}>Live Board</span>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
            <div>
              <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 8 }}>
                Browse Tasks
              </h1>
              <p style={{ color: "#555555", fontSize: 15 }}>
                {TASKS.length} tasks available · Pick one and start earning
              </p>
            </div>
            <Link href="/create-task" className="btn-primary">
              + Post a Task
            </Link>
          </div>

          {/* Category filters */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 32 }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                style={{
                  padding: "6px 16px",
                  borderRadius: 999,
                  border: cat === "All" ? "1px solid #22c55e" : "1px solid #222222",
                  background: cat === "All" ? "rgba(34,197,94,0.1)" : "transparent",
                  color: cat === "All" ? "#4ade80" : "#888888",
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: 500,
                  transition: "all 0.2s",
                  fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Task grid */}
      <section style={{ padding: "40px 24px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
            {TASKS.map((task) => (
              <div key={task.id} className="card" style={{ padding: 28 }}>
                {/* Top row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <span className={`badge ${CATEGORY_COLORS[task.category] ?? "badge-blue"}`} style={{ fontSize: 11 }}>
                    {task.category}
                  </span>
                  <span className={`badge ${DIFFICULTY_COLORS[task.difficulty] ?? "badge-green"}`} style={{ fontSize: 11 }}>
                    {task.difficulty}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#f5f5f5", marginBottom: 8, lineHeight: 1.4 }}>
                  {task.title}
                </h3>
                <p style={{ fontSize: 13, color: "#555555", lineHeight: 1.6, marginBottom: 20 }}>
                  {task.desc}
                </p>

                {/* Meta row */}
                <div style={{ display: "flex", gap: 16, marginBottom: 20, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 12, color: "#555555", display: "flex", alignItems: "center", gap: 4 }}>
                    ⏱ {task.timeEst}
                  </span>
                  <span style={{ fontSize: 12, color: "#555555", display: "flex", alignItems: "center", gap: 4 }}>
                    👥 {task.slots} slots
                  </span>
                  <span style={{ fontSize: 12, color: "#555555", display: "flex", alignItems: "center", gap: 4 }}>
                    🕐 {task.posted}
                  </span>
                </div>

                {/* Bottom row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 26, fontWeight: 800, color: "#22c55e" }}>{task.reward}</span>
                  <Link
                    href="/submit-work"
                    className="btn-primary"
                    style={{ padding: "9px 20px", fontSize: 13 }}
                  >
                    Accept →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Info banner */}
          <div
            style={{
              marginTop: 48,
              padding: "20px 28px",
              background: "#111111",
              border: "1px solid #1a1a1a",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: 24 }}>🔍</span>
            <div>
              <p style={{ fontSize: 14, fontWeight: 600, color: "#f5f5f5", marginBottom: 2 }}>
                All submissions are manually reviewed
              </p>
              <p style={{ fontSize: 13, color: "#555555" }}>
                Every task submission is reviewed by a human before payout. Review typically takes under 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
