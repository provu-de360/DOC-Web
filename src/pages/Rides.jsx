import { useEffect, useState } from "react";
import PageTransition from "../components/PageTransition";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import RideCard from "../components/RideCard";
import rides from "../data/rides";

// Rides listing page with a simple ALL / UPCOMING / COMPLETED filter.
function Rides() {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    document.title = "Upcoming Rides | Ducati Official Club";
  }, []);

  const filtered = filter === "all" ? rides : rides.filter((r) => r.status === filter);

  return (
    <PageTransition>
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Get On The Road" title="UPCOMING RIDES" align="center" />

          <div className="filter-bar" style={{ justifyContent: "center" }}>
            {["all", "upcoming", "completed"].map((f) => (
              <button
                key={f}
                className={`filter-btn ${filter === f ? "active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="card-grid">
            {filtered.map((ride, i) => (
              <ScrollReveal key={ride.id} delay={i * 0.08}>
                <RideCard ride={ride} />
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center" style={{ marginTop: 40 }}>
              No rides found in this category yet.
            </p>
          )}
        </div>
      </section>
    </PageTransition>
  );
}

export default Rides;
