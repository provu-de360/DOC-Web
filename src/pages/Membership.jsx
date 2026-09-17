import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import PageTransition from "../components/PageTransition";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import Button from "../components/Button";
import { hero } from "../data/siteData";

const benefits = [
  "Access to all official club rides",
  "Invitations to exclusive club events",
  "Discounts from official club sponsors",
  "A community of passionate Ducati riders",
  "Club merchandise and member card",
  "Priority registration for track days",
];

const process = [
  { number: "01", title: "APPLY", text: "Fill out the membership application form below." },
  { number: "02", title: "VERIFICATION", text: "Our team reviews your application and documents." },
  { number: "03", title: "APPROVAL", text: "You receive an approval email from the club." },
  { number: "04", title: "MEMBER", text: "Welcome! You're officially part of the club." },
];

// Membership page: hero, benefits, process, requirements, form.
// The form below is FRONTEND ONLY for now — see the comment
// near handleSubmit() for where to connect a real backend/API.
function Membership() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Membership | Ducati Official Club";
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Connect this form to a real backend or email API.
    // For example: fetch("https://your-api.com/apply", { method: "POST", body: ... })
    setSubmitted(true);
  }

  return (
    <PageTransition>
      <section className="details-hero">
        <img src={hero.image} alt="Become a member of Ducati Official Club" />
        <div className="hero-overlay" />
        <div className="details-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
          >
            MEMBERSHIP
          </motion.h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Why Join" title="MEMBERSHIP BENEFITS" />
          <div className="card-grid">
            {benefits.map((benefit, i) => (
              <ScrollReveal key={benefit} delay={i * 0.06}>
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <CheckCircle color="var(--ducati-red)" size={22} style={{ flexShrink: 0, marginTop: 2 }} />
                  <p>{benefit}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionTitle eyebrow="How It Works" title="MEMBERSHIP PROCESS" light align="center" />
          <div className="process-grid">
            {process.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.1}>
                <div className="process-step">
                  <div className="process-number">{step.number}</div>
                  <h3 style={{ fontSize: "1.1rem", margin: "12px 0" }}>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Requirements" title="WHO CAN JOIN" />
          <ScrollReveal>
            <div className="card-grid" style={{ gridTemplateColumns: "1fr" }}>
              <p>
                Membership is open to all Ducati owners and riders who are at least 18 years old,
                hold a valid motorcycle license, and agree to follow the club's rules and code of conduct.
                Placeholder requirement text — edit this in src/pages/Membership.jsx.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ background: "var(--light-gray)" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <SectionTitle eyebrow="Join Us" title="MEMBERSHIP APPLICATION" />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="placeholder-note"
              style={{ marginTop: 32, fontSize: "1rem" }}
            >
              Thank you! Your application has been received (frontend demo only — no data was actually sent).
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="form-grid">
              <div className="form-field">
                <label htmlFor="fullName">Full Name</label>
                <input id="fullName" type="text" required />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" required />
              </div>
              <div className="form-field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" required />
              </div>
              <div className="form-field">
                <label htmlFor="city">City</label>
                <input id="city" type="text" required />
              </div>
              <div className="form-field">
                <label htmlFor="model">Ducati Model</label>
                <input id="model" type="text" required />
              </div>
              <div className="form-field">
                <label htmlFor="regNumber">Registration Number</label>
                <input id="regNumber" type="text" required />
              </div>
              <div className="form-field full">
                <label htmlFor="experience">Riding Experience</label>
                <input id="experience" type="text" placeholder="e.g. 5 years" />
              </div>
              <div className="form-field full">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4"></textarea>
              </div>
              <div className="full">
                <Button type="submit" variant="primary">SUBMIT APPLICATION</Button>
              </div>
            </form>
          )}
        </div>
      </section>
    </PageTransition>
  );
}

export default Membership;
