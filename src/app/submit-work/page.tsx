import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const REVIEW_STEPS = [
  { icon: "📥", title: "Submission Received", desc: "Your work is logged and queued for review" },
  { icon: "👤", title: "Reviewer Assigned", desc: "A human reviewer checks your submission against task criteria" },
  { icon: "📋", title: "Quality Check", desc: "Work is evaluated for completeness and accuracy" },
  { icon: "✅", title: "Approved & Paid", desc: "Reward is released to your account within 24h" },
];

export default function SubmitWorkPage() {
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
            <span className="badge badge-green" style={{ marginBottom: 16 }}>Submit Work</span>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 12 }}>
              Submit Your Work
            </h1>
            <p style={{ color: "#555555", fontSize: 15, lineHeight: 1.7 }}>
              Submit proof of completed work for manual review. Make sure your submission matches all task requirements before sending.
            </p>
          </div>

          {/* Review process */}
          <div
            style={{
              background: "rgba(34,197,94,0.04)",
              border: "1px solid rgba(34,197,94,0.15)",
              borderRadius: 14,
              padding: "24px 28px",
              marginBottom: 36,
            }}
          >
            <p style={{ fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "#888888", marginBottom: 20 }}>
              Review Process
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16 }}>
              {REVIEW_STEPS.map((step, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{step.icon}</div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "#f5f5f5", marginBottom: 4 }}>{step.title}</p>
                  <p style={{ fontSize: 11, color: "#555555", lineHeight: 1.5 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Submission form */}
          <div className="card" style={{ padding: 40 }}>
            <form style={{ display: "flex", flexDirection: "column", gap: 28 }}>

              {/* Task ID */}
              <div>
                <label className="form-label">Task ID or Task Title *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. #1024 or 'Translate 500 words English to Indonesian'"
                />
                <p style={{ fontSize: 12, color: "#3a3a3a", marginTop: 6 }}>Enter the task ID or paste the exact task title.</p>
              </div>

              {/* Worker handle */}
              <div>
                <label className="form-label">Your Username / Worker ID *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. worker_andi_123"
                />
              </div>

              {/* Submission type */}
              <div>
                <label className="form-label">Submission Type *</label>
                <select className="form-input" style={{ appearance: "none", cursor: "pointer" }}>
                  <option value="">Select type...</option>
                  <option value="text">Text Response</option>
                  <option value="screenshot">Screenshot(s)</option>
                  <option value="file">File Upload</option>
                  <option value="link">Link / URL</option>
                </select>
              </div>

              {/* Text submission */}
              <div>
                <label className="form-label">Text Submission</label>
                <textarea
                  className="form-input"
                  placeholder="Paste your completed work here — translated text, written content, survey responses, data, etc."
                  rows={7}
                  style={{ resize: "vertical", minHeight: 140 }}
                />
              </div>

              {/* Link submission */}
              <div>
                <label className="form-label">Link / URL (if applicable)</label>
                <input
                  type="url"
                  className="form-input"
                  placeholder="https://"
                />
                <p style={{ fontSize: 12, color: "#3a3a3a", marginTop: 6 }}>Google Drive, Dropbox, screenshot link, or any public URL.</p>
              </div>

              {/* File upload */}
              <div>
                <label className="form-label">File Upload (if applicable)</label>
                <div
                  style={{
                    border: "2px dashed #2d2d2d",
                    borderRadius: 8,
                    padding: "32px 24px",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "border-color 0.2s",
                    background: "#0d0d0d",
                  }}
                >
                  <div style={{ fontSize: 32, marginBottom: 10 }}>📎</div>
                  <p style={{ fontSize: 14, color: "#555555", marginBottom: 6 }}>
                    Drag & drop files here, or <span style={{ color: "#22c55e", fontWeight: 600 }}>click to browse</span>
                  </p>
                  <p style={{ fontSize: 12, color: "#3a3a3a" }}>PNG, JPG, PDF, MP3, DOCX — max 20MB</p>
                  <input type="file" style={{ display: "none" }} multiple />
                </div>
              </div>

              {/* Notes to reviewer */}
              <div>
                <label className="form-label">Notes to Reviewer (optional)</label>
                <textarea
                  className="form-input"
                  placeholder="Any context that might help the reviewer understand your submission..."
                  rows={3}
                  style={{ resize: "vertical" }}
                />
              </div>

              {/* Checklist */}
              <div
                style={{
                  background: "#0d0d0d",
                  border: "1px solid #1a1a1a",
                  borderRadius: 12,
                  padding: "20px 24px",
                }}
              >
                <p style={{ fontSize: 13, fontWeight: 600, color: "#888888", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 14 }}>
                  Pre-submission Checklist
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    "I have completed all parts of the task",
                    "My submission matches the required format",
                    "I have included all required proof",
                    "I understand this will be manually reviewed",
                  ].map((item, i) => (
                    <label key={i} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontSize: 13, color: "#888888" }}>
                      <input type="checkbox" style={{ width: 15, height: 15, accentColor: "#22c55e", cursor: "pointer", flexShrink: 0 }} />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit button */}
              <button type="submit" className="btn-primary" style={{ fontSize: 16, padding: "15px 24px", justifyContent: "center" }}>
                Submit for Review →
              </button>

              <p style={{ fontSize: 13, color: "#3a3a3a", textAlign: "center", lineHeight: 1.6 }}>
                Your submission will be reviewed within 24 hours. You will be notified when it is approved or rejected with feedback.
              </p>
            </form>
          </div>

          {/* What happens next */}
          <div style={{ marginTop: 32, padding: "24px", background: "#111111", border: "1px solid #1a1a1a", borderRadius: 12 }}>
            <p style={{ fontSize: 14, fontWeight: 600, color: "#f5f5f5", marginBottom: 12 }}>What happens after submission?</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { icon: "⏳", text: "Your submission enters the review queue immediately" },
                { icon: "🔍", text: "A human reviewer checks your work against the task criteria" },
                { icon: "✅", text: "If approved, the reward is credited to your account" },
                { icon: "❌", text: "If rejected, you receive detailed feedback and can resubmit" },
              ].map((item, i) => (
                <li key={i} style={{ fontSize: 13, color: "#555555", display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{ flexShrink: 0 }}>{item.icon}</span>
                  {item.text}
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
