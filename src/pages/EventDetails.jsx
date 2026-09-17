import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import ScrollReveal from "../components/ScrollReveal";
import gallery from "../data/gallery";
import events from "../data/events";

// Details page for a single event, found by ":id" in the URL.
function EventDetails() {
  const { id } = useParams();
  const event = events.find((e) => e.id === Number(id));
  const relatedPhotos = gallery.filter((g) => g.category === "events").slice(0, 4);

  useEffect(() => {
    document.title = event ? `${event.title} | Ducati Official Club` : "Event Not Found";
  }, [event]);

  if (!event) {
    return (
      <PageTransition>
        <section className="section text-center">
          <h2>Event Not Found</h2>
          <p style={{ marginTop: 12 }}>
            <Link to="/events" style={{ color: "var(--ducati-red)", fontWeight: 700 }}>
              ← Back to all events
            </Link>
          </p>
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <section className="details-hero">
        <img src={event.image} alt={event.title} />
        <div className="hero-overlay" />
        <div className="details-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
          >
            {event.title}
          </motion.h1>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <ScrollReveal>
            <div className="details-info-grid">
              <div className="details-info-item">
                <div className="label">Date</div>
                <div className="value">{event.date}</div>
              </div>
              <div className="details-info-item">
                <div className="label">Location</div>
                <div className="value">{event.location}</div>
              </div>
              <div className="details-info-item">
                <div className="label">Status</div>
                <div className="value">{event.status.toUpperCase()}</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3 style={{ marginBottom: 12 }}>DESCRIPTION</h3>
            <p style={{ marginBottom: 32 }}>{event.description}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <h3 style={{ marginBottom: 12 }}>EVENT INFORMATION</h3>
            <p style={{ marginBottom: 32 }}>{event.info}</p>
          </ScrollReveal>

          {relatedPhotos.length > 0 && (
            <ScrollReveal delay={0.2}>
              <h3 style={{ marginBottom: 16 }}>GALLERY</h3>
              <div className="card-grid" style={{ marginTop: 0, marginBottom: 32 }}>
                {relatedPhotos.map((photo) => (
                  <div key={photo.id} className="card-image-wrap" style={{ borderRadius: 4 }}>
                    <img src={photo.image} alt={photo.alt} loading="lazy" />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          )}

          <ScrollReveal delay={0.25}>
            <h3 style={{ marginBottom: 12 }}>LOCATION</h3>
            <div className="map-placeholder" style={{ marginBottom: 20 }}>
              MAP PLACEHOLDER — CONNECT GOOGLE MAPS LATER
            </div>
          </ScrollReveal>

          <Link to="/events" style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--ducati-red)" }}>
            ← Back to all events
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}

export default EventDetails;
