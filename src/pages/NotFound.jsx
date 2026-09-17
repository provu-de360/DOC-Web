import { useEffect } from "react";
import PageTransition from "../components/PageTransition";
import Button from "../components/Button";

// Shown for any URL that doesn't match a real page.
function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found | Ducati Official Club";
  }, []);

  return (
    <PageTransition>
      <section className="section text-center">
        <h1 style={{ fontSize: "4rem", color: "var(--ducati-red)" }}>404</h1>
        <p style={{ marginTop: 12, marginBottom: 28 }}>The page you're looking for doesn't exist.</p>
        <Button to="/" variant="outline-dark">BACK TO HOME</Button>
      </section>
    </PageTransition>
  );
}

export default NotFound;
