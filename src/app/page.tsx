import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LOGO_URL =
  "https://assets.kiloapps.io/user_371994ae-70ac-48b9-a9f5-28bb53147dfb/fe3c1c73-0564-469c-888e-50f24b4a417d/9a378225-9e4b-4f89-bcad-15501ef586c5.jpg";

const STEPS = [
  {
    num: "01",
    title: "Create a Task",
    desc: "Anyone can post a task — write what needs to be done and set the reward amount. Tasks can be anything: data entry, surveys, creative work, micro-research, and more.",
    icon: "📋",
  },
  {
    num: "02",
    title: "Workers Accept & Submit",
    desc: "Workers browse available tasks, accept one that fits, complete it, and submit their proof of work — screenshots, text, files, or links.",
    icon: "🛠️",
  },
  {
    num: "03",
    title: "Manual Review",
    desc: "Every submission goes through a manual quality review. Reviewers verify the work meets the task requirements before approving the payout.",
    icon: "🔍",
  },
  {
    num: "04",
    title: "Get Rewarded",
    desc: "Once your submission is approved, the reward is released to your account instantly. Rejected submissions get detailed feedback for resubmission.",
    icon: "💰",
  },
];

const FEATURES = [
  {
    icon: "🏗️",
    title: "Open Task Board",
    desc: "All tasks are publicly listed. No gatekeeping — anyone can browse and start earning right away.",
  },
  {
    icon: "🔒",
    title: "Escrow Protection",
    desc: "Reward funds are locked in escrow when a task is posted. Workers always get paid for approved work.",
  },
  {
    icon: "👁️",
    title: "Manual Review System",
    desc: "Every submission is reviewed by a human. No bots, no spam payouts — only quality work gets rewarded.",
  },
  {
    icon: "⚡",
    title: "Fast Payouts",
    desc: "Approved submissions are paid out within 24 hours. No waiting weeks for your earnings.",
  },
  {
    icon: "🌐",
    title: "Open to Everyone",
    desc: "No experience required. If you can complete the task, you can earn. Works from any country.",
  },
  {
    icon: "📊",
    title: "Transparent History",
    desc: "Full audit trail for every task — see who submitted, review notes, and payout status at any time.",
  },
];

const SAMPLE_TASKS = [
  { title: "Translate 500 words EN → ID", reward: "$4.00", category: "Translation", status: "Open", slots: 10 },
  { title: "Screenshot 3 competitor websites", reward: "$1.50", category: "Research", status: "Open", slots: 5 },
  { title: "Write a 200-word product review", reward: "$3.00", category: "Writing", status: "Open", slots: 20 },
  { title: "Fill out a 10-question survey", reward: "$0.80", category: "Survey", status: "Open", slots: 50 },
];

const STATS = [
  { value: "12,400+", label: "Tasks Completed" },
  { value: "$48,200", label: "Total Paid Out" },
  { value: "3,800+", label: "Active Workers" },
  { value: "98%", label: "Approval Rate" },
];

export default function Home() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh" }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="pixel-bg"
        style={{
          padding: "100px 24px 80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Green glow orb */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", maxWidth: 800, margin: "0 auto" }}>
          {/* Logo */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
            <div
              style={{
                width: 96,
                height: 96,
                borderRadius: 20,
                background: "#111111",
                border: "1px solid #222222",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 40px rgba(34,197,94,0.2)",
              }}
            >
              <Image
                src={LOGO_URL}
                alt="BlankWork"
                width={72}
                height={72}
                style={{ borderRadius: 12, filter: "invert(1) brightness(2)" }}
              />
            </div>
          </div>

          {/* Badge */}
          <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
            <span className="badge badge-green">Work to Earn Platform</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: 24,
              color: "#f5f5f5",
            }}
          >
            Do Work.
            <br />
            <span className="gradient-text">Get Paid.</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "#888888",
              maxWidth: 560,
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            BlankWork is an open platform where anyone can create tasks with rewards, and anyone can earn by completing them — with every submission reviewed by a human for quality.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/tasks" className="btn-primary" style={{ fontSize: 16, padding: "14px 32px" }}>
              Browse Tasks →
            </Link>
            <Link href="/create-task" className="btn-secondary" style={{ fontSize: 16, padding: "14px 32px" }}>
              Post a Task
            </Link>
          </div>

          {/* Floating badges */}
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 40 }}>
            <span style={{ fontSize: 13, color: "#555555", display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ color: "#22c55e" }}>✓</span> No experience needed
            </span>
            <span style={{ fontSize: 13, color: "#555555", display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ color: "#22c55e" }}>✓</span> Manual review
            </span>
            <span style={{ fontSize: 13, color: "#555555", display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ color: "#22c55e" }}>✓</span> Instant payouts
            </span>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────── */}
      <section style={{ padding: "0 24px 80px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 2,
            border: "1px solid #1a1a1a",
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "36px 24px",
                textAlign: "center",
                background: "#111111",
                borderRight: i < STATS.length - 1 ? "1px solid #1a1a1a" : "none",
              }}
            >
              <p style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#22c55e", marginBottom: 6, letterSpacing: "-0.02em" }}>
                {s.value}
              </p>
              <p style={{ fontSize: 13, color: "#555555", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid #111111" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span className="badge badge-green" style={{ marginBottom: 16 }}>Simple Process</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>
              How BlankWork Works
            </h2>
            <p style={{ color: "#555555", fontSize: 16, maxWidth: 480, margin: "0 auto" }}>
              Four steps from task creation to payout. Transparent, fair, and human-reviewed.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
            }}
          >
            {STEPS.map((step, i) => (
              <div
                key={i}
                className="card"
                style={{ padding: 28 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div className="step-number">{step.num}</div>
                  <span style={{ fontSize: 28 }}>{step.icon}</span>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, color: "#f5f5f5" }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: "#555555", lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVE TASKS PREVIEW ───────────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "#0d0d0d", borderTop: "1px solid #111111" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 40 }}>
            <div>
              <span className="badge badge-green" style={{ marginBottom: 12 }}>Live Tasks</span>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
                Open Tasks Right Now
              </h2>
            </div>
            <Link href="/tasks" className="btn-secondary" style={{ padding: "10px 20px", fontSize: 14 }}>
              View all tasks →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {SAMPLE_TASKS.map((task, i) => (
              <div key={i} className="card" style={{ padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <span className="badge badge-blue" style={{ fontSize: 11 }}>{task.category}</span>
                  <span className="badge badge-green" style={{ fontSize: 11 }}>{task.status}</span>
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: "#f5f5f5", marginBottom: 16, lineHeight: 1.4 }}>{task.title}</h3>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 22, fontWeight: 800, color: "#22c55e" }}>{task.reward}</span>
                  <span style={{ fontSize: 12, color: "#555555" }}>{task.slots} slots left</span>
                </div>
                <Link
                  href="/tasks"
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center", marginTop: 16, padding: "10px 16px", fontSize: 14 }}
                >
                  Accept Task
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid #111111" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span className="badge badge-green" style={{ marginBottom: 16 }}>Why BlankWork</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Built for Trust & Quality
            </h2>
            <p style={{ color: "#555555", fontSize: 16, maxWidth: 440, margin: "0 auto" }}>
              Every feature is designed to protect both task creators and workers.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {FEATURES.map((f, i) => (
              <div key={i} className="card" style={{ padding: 28 }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, color: "#f5f5f5" }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "#555555", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEW PROCESS CALLOUT ───────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "#0d0d0d", borderTop: "1px solid #111111" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div
            style={{
              border: "1px solid rgba(34,197,94,0.2)",
              borderRadius: 20,
              padding: "48px 40px",
              background: "linear-gradient(135deg, rgba(34,197,94,0.05) 0%, transparent 60%)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 20 }}>🔍</div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Every Submission is Manually Reviewed
            </h2>
            <p style={{ color: "#888888", fontSize: 16, maxWidth: 560, margin: "0 auto 32px", lineHeight: 1.7 }}>
              Unlike automated systems, every piece of work submitted on BlankWork is reviewed by a human reviewer. This ensures fair payouts for workers and quality results for task creators.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 20, maxWidth: 600, margin: "0 auto 36px" }}>
              {[
                { icon: "📥", label: "Submission received" },
                { icon: "👤", label: "Human reviewer assigned" },
                { icon: "✅", label: "Approved & paid out" },
                { icon: "⏱️", label: "Within 24 hours" },
              ].map((item, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
                  <p style={{ fontSize: 13, color: "#555555", fontWeight: 500 }}>{item.label}</p>
                </div>
              ))}
            </div>
            <Link href="/submit-work" className="btn-primary" style={{ fontSize: 15, padding: "13px 28px" }}>
              Submit Your Work →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section style={{ padding: "100px 24px", textAlign: "center", borderTop: "1px solid #111111" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
            <Image
              src={LOGO_URL}
              alt="BlankWork"
              width={64}
              height={64}
              style={{ borderRadius: 12, filter: "invert(1) brightness(2)", opacity: 0.6 }}
            />
          </div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>
            Ready to Start Earning?
          </h2>
          <p style={{ color: "#555555", fontSize: 16, marginBottom: 36, lineHeight: 1.7 }}>
            Join thousands of workers already earning on BlankWork. Browse available tasks and start completing work today.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/tasks" className="btn-primary" style={{ fontSize: 16, padding: "14px 32px" }}>
              Browse Tasks →
            </Link>
            <Link href="/create-task" className="btn-secondary" style={{ fontSize: 16, padding: "14px 32px" }}>
              Post a Task
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
