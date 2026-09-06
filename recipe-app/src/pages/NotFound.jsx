import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="page" style={{ textAlign: "center", padding: "80px 24px" }}>
      <h1>404 — Page not found</h1>
      <p style={{ color: "var(--muted)", margin: "12px 0 24px" }}>
        The page you are looking for does not exist.
      </p>
      <Link to="/" style={{ color: "var(--primary)", fontWeight: 600 }}>
        Go home
      </Link>
    </main>
  );
}
