import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import Button from "../components/Button";
import { contactInfo } from "../data/siteData";

// Contact page with club info and a contact form.
// The form is frontend-only — see handleSubmit() below for
// where to connect a real backend/email service later.
function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact | Ducati Official Club";
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Connect this form to a real backend or email API.
    setSubmitted(true);
  }

  return (
    <PageTransition>
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Get In Touch" title="CONTACT US" align="center" />

          <div className="about-grid" style={{ gridTemplateColumns: "1fr 1.2fr", marginTop: 48 }}>
            <ScrollReveal>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <Mail color="var(--ducati-red)" size={22} />
                  <span>{contactInfo.email}</span>
                </div>
                <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <Phone color="var(--ducati-red)" size={22} />
                  <span>{contactInfo.phone}</span>
                </div>
                <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <MapPin color="var(--ducati-red)" size={22} />
                  <span>{contactInfo.location}</span>
                </div>
                <div className="footer-social" style={{ marginTop: 12 }}>
                  <a href={contactInfo.social.facebook} target="_blank" rel="noreferrer" style={{ borderColor: "#ddd" }}>
                    <Facebook size={16} color="#000" />
                  </a>
                  <a href={contactInfo.social.instagram} target="_blank" rel="noreferrer" style={{ borderColor: "#ddd" }}>
                    <Instagram size={16} color="#000" />
                  </a>
                  <a href={contactInfo.social.youtube} target="_blank" rel="noreferrer" style={{ borderColor: "#ddd" }}>
                    <Youtube size={16} color="#000" />
                  </a>
                </div>
                <div className="map-placeholder" style={{ marginTop: 12 }}>
                  MAP PLACEHOLDER
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="placeholder-note"
                  style={{ fontSize: "1rem" }}
                >
                  Thanks for reaching out! (frontend demo only — no message was actually sent)
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="form-grid">
                  <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email2">Email</label>
                    <input id="email2" type="email" required />
                  </div>
                  <div className="form-field full">
                    <label htmlFor="phone2">Phone</label>
                    <input id="phone2" type="tel" />
                  </div>
                  <div className="form-field full">
                    <label htmlFor="message2">Message</label>
                    <textarea id="message2" rows="5" required></textarea>
                  </div>
                  <div className="full">
                    <Button type="submit" variant="primary">SEND MESSAGE</Button>
                  </div>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export default Contact;
