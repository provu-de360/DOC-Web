import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Button from "../components/Button";
import ScrollReveal from "../components/ScrollReveal";
import rides from "../data/rides";

// Details page for a single ride. The ride is found using the
// ":id" from the URL, e.g. /rides/2 shows the ride with id 2.
function RideDetails() {
  const { id } = useParams();
  const ride = rides.find((r) => r.id === Number(id));

  useEffect(() => {
    document.title = ride ? `${ride.title} | Ducati Official Club` : "Ride Not Found";
  }, [ride]);

  if (!ride) {
    return (
      <PageTransition>
        <section className="section text-center">
          <h2>Ride Not Found</h2>
          <p style={{ marginTop: 12 }}>This ride does not exist or was removed.</p>
          <div style={{ marginTop: 24 }}>
            <Button to="/rides" variant="outline-dark">BACK TO RIDES</Button>
          </div>
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <section className="details-hero">
        <img src={ride.image} alt={ride.title} />
        <div className="hero-overlay" />
        <div className="details-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
          >
            {ride.title}
          </motion.h1>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <ScrollReveal>
            <div className="details-info-grid">
              <div className="details-info-item">
                <div className="label">Date</div>
                <div className="value">{ride.date}</div>
              </div>
              <div className="details-info-item">
                <div className="label">Location</div>
                <div className="value">{ride.location}</div>
              </div>
              <div className="details-info-item">
                <div className="label">Meeting Point</div>
                <div className="value">{ride.meetingPoint}</div>
              </div>
              <div className="details-info-item">
                <div className="label">Meeting Time</div>
                <div className="value">{ride.meetingTime}</div>
              </div>
              <div className="details-info-item">
                <div className="label">Start Time</div>
                <div className="value">{ride.startTime}</div>
              </div>
              <div className="details-info-item">
                <div className="label">Distance</div>
                <div className="value">{ride.distance}</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3 style={{ marginBottom: 12 }}>DESCRIPTION</h3>
            <p style={{ marginBottom: 32 }}>{ride.description}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <h3 style={{ marginBottom: 12 }}>ROUTE INFORMATION</h3>
            <p style={{ marginBottom: 32 }}>{ride.route}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h3 style={{ marginBottom: 12 }}>MAP</h3>
            <div className="map-placeholder" style={{ marginBottom: 32 }}>
              MAP PLACEHOLDER — CONNECT GOOGLE MAPS LATER
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <h3 style={{ marginBottom: 12 }}>SAFETY INFORMATION</h3>
            <p style={{ marginBottom: 32 }}>{ride.safety}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <h3 style={{ marginBottom: 12 }}>WHAT TO BRING</h3>
            <ul style={{ marginBottom: 40, paddingLeft: 20, color: "var(--gray)" }}>
              {ride.whatToBring.map((item) => (
                <li key={item} style={{ marginBottom: 8 }}>{item}</li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <Button variant="primary">REGISTER FOR RIDE</Button>
          </ScrollReveal>

          <div style={{ marginTop: 40 }}>
            <Link to="/rides" style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--ducati-red)" }}>
              ← Back to all rides
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export default RideDetails;
