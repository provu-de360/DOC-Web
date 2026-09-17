import { useEffect, useState } from "react";
import PageTransition from "../components/PageTransition";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import EventCard from "../components/EventCard";
import events from "../data/events";

// Events listing page with ALL / UPCOMING / PAST filter.
function Events() {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    document.title = "Events | Ducati Official Club";
  }, []);

  const filtered = filter === "all" ? events : events.filter((e) => e.status === filter);

  return (
    <PageTransition>
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Get Involved" title="EVENTS" align="center" />

          <div className="filter-bar" style={{ justifyContent: "center" }}>
            {["all", "upcoming", "past"].map((f) => (
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
            {filtered.map((event, i) => (
              <ScrollReveal key={event.id} delay={i * 0.08}>
                <EventCard event={event} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export default Events;


