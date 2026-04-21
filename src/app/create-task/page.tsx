import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CATEGORIES = [
  "Translation",
  "Research",
  "Writing",
  "Survey",
  "Audio",
  "Testing",
  "Data Entry",
  "Design",
  "Other",
];

export default function CreateTaskPage() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh" }}>
      <Navbar />

      <section style={{ padding: "60px 24px 100px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {/* Header */}
          <div style={{ marginBottom: 40 }}>
            <Link href="/tasks" style={{ color: "#555555", fontSize: 13, textDecoration: "none", display: "flex", alignItems: "center", gap: 6, marginBottom: 24 }}>
              ← Back to Tasks
            </Link>
            <span className="badge badge-green" style={{ marginBottom: 16 }}>Task Creator</span>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 12 }}>
              Post a New Task
            </h1>
            <p style={{ color: "#555555", fontSize: 15, lineHeight: 1.7 }}>
              Describe what you need done and set the reward. Workers will complete your task and submit proof of work for manual review.
            </p>
          </div>

          {/* Form card */}
          <div className="card" style={{ padding: 40 }}>
            <form style={{ display: "flex", flexDirection: "column", gap: 28 }}>

              {/* Task Title */}
              <div>
                <label className="form-label">Task Title *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Translate 500 words English to Indonesian"
                  maxLength={120}
                />
                <p style={{ fontSize: 12, color: "#3a3a3a", marginTop: 6 }}>Be clear and specific. Max 120 characters.</p>
              </div>

              {/* Description */}
              <div>
                <label className="form-label">Task Description *</label>
                <textarea
                  className="form-input"
                  placeholder="Explain exactly what needs to be done, what format the submission should be in, and any requirements workers must follow..."
                  rows={5}
                  style={{ resize: "vertical", minHeight: 120 }}
                />
                <p style={{ fontSize: 12, color: "#3a3a3a", marginTop: 6 }}>Be detailed — better descriptions attract better workers.</p>
              </div>

              {/* Category & Difficulty row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div>
                  <label className="form-label">Category *</label>
                  <select className="form-input" style={{ appearance: "none", cursor: "pointer" }}>
                    <option value="">Select category...</option>
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="form-label">Difficulty *</label>
                  <select className="form-input" style={{ appearance: "none", cursor: "pointer" }}>
                    <option value="">Select difficulty...</option>
                    <option value="easy">Easy — Anyone can do it</option>
                    <option value="medium">Medium — Some skill needed</option>
                    <option value="hard">Hard — Requires expertise</option>
                  </select>
                </div>
              </div>

              {/* Reward & Slots row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div>
                  <label className="form-label">Reward per Worker (USD) *</label>
                  <div style={{ position: "relative" }}>
                    <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#555555", fontSize: 15, fontWeight: 600 }}>$</span>
                    <input
                      type="number"
                      className="form-input"
                      placeholder="0.00"
                      min="0.10"
                      step="0.10"
                      style={{ paddingLeft: 28 }}
                    />
                  </div>
                  <p style={{ fontSize: 12, color: "#3a3a3a", marginTop: 6 }}>Minimum $0.10 per worker</p>
                </div>
                <div>
                  <label className="form-label">Number of Worker Slots *</label>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="e.g. 10"
                    min="1"
                    max="500"
                  />
                  <p style={{ fontSize: 12, color: "#3a3a3a", marginTop: 6 }}>How many workers can complete this task</p>
                </div>
              </div>

              {/* Estimated time */}
              <div>
                <label className="form-label">Estimated Completion Time</label>
                <select className="form-input" style={{ appearance: "none", cursor: "pointer" }}>
                  <option value="">Select estimated time...</option>
                  <option value="5">Under 5 minutes</option>
                  <option value="15">5–15 minutes</option>
                  <option value="30">15–30 minutes</option>
                  <option value="60">30–60 minutes</option>
                  <option value="120">1–2 hours</option>
                  <option value="more">More than 2 hours</option>
                </select>
              </div>

              {/* Proof requirements */}
              <div>
                <label className="form-label">Accepted Proof of Work *</label>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { id: "text", label: "Text submission (written response)" },
                    { id: "screenshot", label: "Screenshot(s)" },
                    { id: "file", label: "File upload (doc, pdf, audio, etc.)" },
                    { id: "link", label: "Link / URL" },
                  ].map((opt) => (
                    <label
                      key={opt.id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "12px 16px",
                        border: "1px solid #222222",
                        borderRadius: 8,
                        cursor: "pointer",
                        transition: "border-color 0.2s",
                        fontSize: 14,
                        color: "#aaaaaa",
                      }}
                    >
                      <input type="checkbox" value={opt.id} style={{ width: 16, height: 16, accentColor: "#22c55e", cursor: "pointer" }} />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional instructions */}
              <div>
                <label className="form-label">Additional Review Instructions</label>
                <textarea
                  className="form-input"
                  placeholder="Any specific criteria reviewers should check when approving submissions? (optional)"
                  rows={3}
                  style={{ resize: "vertical" }}
                />
              </div>

              {/* Budget summary */}
              <div
                style={{
                  background: "rgba(34,197,94,0.05)",
                  border: "1px solid rgba(34,197,94,0.2)",
                  borderRadius: 12,
                  padding: "20px 24px",
                }}
              >
                <p style={{ fontSize: 13, color: "#888888", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>
                  Budget Summary
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <span style={{ fontSize: 14, color: "#555555" }}>Reward × Slots</span>
                  <span style={{ fontSize: 14, color: "#f5f5f5" }}>$0.00</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <span style={{ fontSize: 14, color: "#555555" }}>Platform fee (5%)</span>
                  <span style={{ fontSize: 14, color: "#f5f5f5" }}>$0.00</span>
                </div>
                <div style={{ borderTop: "1px solid rgba(34,197,94,0.15)", paddingTop: 10, marginTop: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: "#f5f5f5" }}>Total to Lock in Escrow</span>
                  <span style={{ fontSize: 20, fontWeight: 800, color: "#22c55e" }}>$0.00</span>
                </div>
              </div>

              {/* Agreement */}
              <label style={{ display: "flex", alignItems: "flex-start", gap: 12, cursor: "pointer" }}>
                <input type="checkbox" style={{ width: 16, height: 16, marginTop: 2, accentColor: "#22c55e", cursor: "pointer", flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: "#555555", lineHeight: 1.6 }}>
                  I agree to the BlankWork task creator terms. Reward funds will be held in escrow and released only upon approved submissions.
                </span>
              </label>

              {/* Submit */}
              <button type="submit" className="btn-primary" style={{ fontSize: 16, padding: "15px 24px", justifyContent: "center" }}>
                Post Task & Lock Funds →
              </button>
            </form>
          </div>

          {/* Tips */}
          <div style={{ marginTop: 32, padding: "24px", background: "#111111", border: "1px solid #1a1a1a", borderRadius: 12 }}>
            <p style={{ fontSize: 14, fontWeight: 600, color: "#f5f5f5", marginBottom: 12 }}>💡 Tips for a great task</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                "Be specific about exactly what output you expect",
                "Include examples if possible",
                "Set a fair reward — better pay attracts better workers",
                "Define clear acceptance criteria for reviewers",
              ].map((tip, i) => (
                <li key={i} style={{ fontSize: 13, color: "#555555", display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <span style={{ color: "#22c55e", flexShrink: 0 }}>→</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
