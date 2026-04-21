import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #1a1a1a", backgroundColor: "#0a0a0a", padding: "48px 24px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 16 }}>
              <Image
                src="https://assets.kiloapps.io/user_371994ae-70ac-48b9-a9f5-28bb53147dfb/fe3c1c73-0564-469c-888e-50f24b4a417d/9a378225-9e4b-4f89-bcad-15501ef586c5.jpg"
                alt="BlankWork logo"
                width={32}
                height={32}
                style={{ borderRadius: 6, filter: "invert(1) brightness(2)" }}
              />
              <span style={{ fontWeight: 700, fontSize: 18, color: "#f5f5f5" }}>
                Blank<span style={{ color: "#22c55e" }}>Work</span>
              </span>
            </Link>
            <p style={{ color: "#555555", fontSize: 14, lineHeight: 1.7, maxWidth: 220 }}>
              Work to earn. Post tasks, complete work, get rewarded — with quality ensured by manual review.
            </p>
          </div>

          {/* Platform */}
          <div>
            <p style={{ color: "#888888", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 16 }}>Platform</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link href="/tasks" style={{ color: "#555555", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }} className="footer-link">Browse Tasks</Link>
              <Link href="/create-task" style={{ color: "#555555", fontSize: 14, textDecoration: "none" }} className="footer-link">Post a Task</Link>
              <Link href="/submit-work" style={{ color: "#555555", fontSize: 14, textDecoration: "none" }} className="footer-link">Submit Work</Link>
            </div>
          </div>

          {/* How it works */}
          <div>
            <p style={{ color: "#888888", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 16 }}>How It Works</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span style={{ color: "#555555", fontSize: 14 }}>Post a task with reward</span>
              <span style={{ color: "#555555", fontSize: 14 }}>Workers submit proof</span>
              <span style={{ color: "#555555", fontSize: 14 }}>Manual review & payout</span>
            </div>
          </div>

          {/* Status */}
          <div>
            <p style={{ color: "#888888", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 16 }}>Status</p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block", boxShadow: "0 0 8px #22c55e" }} />
              <span style={{ color: "#4ade80", fontSize: 14 }}>All systems operational</span>
            </div>
            <p style={{ color: "#555555", fontSize: 13 }}>Review time: ~24 hours</p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "#3a3a3a", fontSize: 13 }}>© 2025 BlankWork. All rights reserved.</p>
          <p style={{ color: "#3a3a3a", fontSize: 13 }}>Built for workers, by workers.</p>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: #f5f5f5 !important; }
      `}</style>
    </footer>
  );
}
