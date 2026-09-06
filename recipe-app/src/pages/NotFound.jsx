/**
 * NotFound.jsx
 * Friendly 404 error page with navigation back to Home.
 */

import { Link } from "react-router-dom";
import { Compass } from "lucide-react";
import Button from "../components/UI/Button";

export default function NotFound() {
  return (
    <main className="page" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "64px 24px" }}>
      <div
        style={{
          maxWidth: 480,
          textAlign: "center",
          background: "var(--card)",
          padding: "48px 32px",
          borderRadius: "var(--radius)",
          boxShadow: "var(--shadow)",
          border: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <Compass size={48} color="var(--primary)" style={{ marginBottom: 16 }} />
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>404: Page Not Found</h1>
        <p style={{ color: "var(--muted)", marginBottom: 24, fontSize: 15 }}>
          We couldn't find the page you were looking for. It may have been moved or doesn't exist.
        </p>
        <Link to="/">
          <Button variant="primary">Return to Home</Button>
        </Link>
      </div>
    </main>
  );
}
