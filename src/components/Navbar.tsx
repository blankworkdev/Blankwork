"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "rgba(10,10,10,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #1a1a1a",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Image
            src="https://assets.kiloapps.io/user_371994ae-70ac-48b9-a9f5-28bb53147dfb/fe3c1c73-0564-469c-888e-50f24b4a417d/9a378225-9e4b-4f89-bcad-15501ef586c5.jpg"
            alt="BlankWork logo"
            width={36}
            height={36}
            style={{ borderRadius: 8, filter: "invert(1) brightness(2)" }}
          />
          <span style={{ fontWeight: 700, fontSize: 20, color: "#f5f5f5", letterSpacing: "-0.01em" }}>
            Blank<span style={{ color: "#22c55e" }}>Work</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }} className="desktop-nav">
          <Link href="/tasks" className="nav-link">Browse Tasks</Link>
          <Link href="/create-task" className="nav-link">Post a Task</Link>
          <Link href="/submit-work" className="nav-link">Submit Work</Link>
          <Link href="/create-task" className="btn-primary" style={{ padding: "8px 20px", fontSize: 14 }}>
            + Create Task
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            display: "none",
            flexDirection: "column",
            gap: 5,
          }}
          className="hamburger"
          aria-label="Toggle menu"
        >
          <span style={{ width: 24, height: 2, background: "#f5f5f5", display: "block", transition: "0.2s", transform: open ? "rotate(45deg) translateY(7px)" : "none" }} />
          <span style={{ width: 24, height: 2, background: "#f5f5f5", display: "block", transition: "0.2s", opacity: open ? 0 : 1 }} />
          <span style={{ width: 24, height: 2, background: "#f5f5f5", display: "block", transition: "0.2s", transform: open ? "rotate(-45deg) translateY(-7px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            borderTop: "1px solid #1a1a1a",
            backgroundColor: "#0a0a0a",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
          className="mobile-menu"
        >
          <Link href="/tasks" className="nav-link" onClick={() => setOpen(false)}>Browse Tasks</Link>
          <Link href="/create-task" className="nav-link" onClick={() => setOpen(false)}>Post a Task</Link>
          <Link href="/submit-work" className="nav-link" onClick={() => setOpen(false)}>Submit Work</Link>
          <Link href="/create-task" className="btn-primary" style={{ justifyContent: "center" }} onClick={() => setOpen(false)}>
            + Create Task
          </Link>
        </div>
      )}

      <style>{`
        .nav-link {
          color: #aaaaaa;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          padding: 8px 12px;
          border-radius: 6px;
          transition: color 0.2s, background 0.2s;
        }
        .nav-link:hover {
          color: #f5f5f5;
          background: rgba(255,255,255,0.05);
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
