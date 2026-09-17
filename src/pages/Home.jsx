import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RoadAnimation from "../components/RoadAnimation";
import PageTransition from "../components/PageTransition";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import Button from "../components/Button";
import RideCard from "../components/RideCard";
import EventCard from "../components/EventCard";
import MemberCard from "../components/MemberCard";
import StatCounter from "../components/StatCounter";

import rides from "../data/rides";
import events from "../data/events";
import management from "../data/management";
import { hero, about, stats } from "../data/siteData";

// The homepage. Built from smaller sections stacked together.
// To edit text: change src/data/siteData.js
// To edit rides/events/team shown here: change src/data/*.js
function Home() {
  const [accentIndex, setAccentIndex] = useState(0);

  const rotatingTaglines = [
    hero.title3,
    "FEEL THE DESMO.",
    "ONE RED HEARTBEAT.",
    "PURE ADRENALINE.",
  ];

  useEffect(() => {
    document.title = "Ducati Official Club | Home";

    const interval = setInterval(() => {
      setAccentIndex((prev) => (prev + 1) % rotatingTaglines.length);
    }, 3400);

    return () => clearInterval(interval);
  }, []);

  return (
    <PageTransition>
      {/* SECTION 1: HERO */}
      <section className="hero">
        <motion.div
          className="hero-media"
          initial={{ scale: 1 }}
          animate={{ scale: 1.12 }}
          transition={{ duration: 20, ease: "linear" }}
        >
          <img src={hero.image} alt="Ducati riders on the road" />
        </motion.div>
        <div className="hero-overlay" />
        <div className="hero-content">
          {/* Animated Eyebrow Badge */}
          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="hero-eyebrow-dot" />
            <span>{hero.title1}</span>
          </motion.div>

          {/* Animated Title with Word Mask / Split Animation */}
          <div className="hero-title-wrap">
            <h1 className="hero-title">
              <div className="hero-title-line">
                {hero.title2.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    className="hero-word"
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2 + i * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </div>

              {/* Dynamic Animated Rotating Red Tagline */}
              <div className="hero-title-accent-wrap">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={accentIndex}
                    className="accent animated-accent"
                    initial={{ opacity: 0, y: 35, skewY: 2 }}
                    animate={{ opacity: 1, y: 0, skewY: 0 }}
                    exit={{ opacity: 0, y: -28, skewY: -2 }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {rotatingTaglines[accentIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>
          </div>

          {/* Animated Description */}
          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            {hero.description}
          </motion.p>

          {/* Animated Action Buttons */}
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button to="/membership" variant="primary">JOIN THE CLUB</Button>
            <Button to="/rides" variant="outline">UPCOMING RIDES</Button>
          </motion.div>
        </div>
        <RoadAnimation />
      </section>

      {/* SECTION 2: ABOUT */}
      <section className="section section-about-red">
        <div className="container about-grid">
          <ScrollReveal>
            <div className="about-image-wrap">
              <img src={about.image} alt="About Ducati Official Club" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="about-content">
              <span className="about-eyebrow">Who We Are</span>
              <h2 className="about-title">
                {about.title}
              </h2>
              <p className="about-text">{about.text}</p>
              <div className="about-buttons">
                <Button to="/membership" variant="outline">READ MORE</Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 3: UPCOMING RIDES */}
      <section className="section" style={{ background: "var(--light-gray)" }}>
        <div className="container">
          <div className="section-heading-row">
            <SectionTitle eyebrow="Don't Miss Out" title="UPCOMING RIDES" />
          </div>
          <div className="card-grid">
            {rides.slice(0, 3).map((ride, i) => (
              <ScrollReveal key={ride.id} delay={i * 0.1}>
                <RideCard ride={ride} />
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 48 }}>
            <Button to="/rides" variant="outline-dark">VIEW ALL RIDES</Button>
          </div>
        </div>
      </section>

      {/* SECTION 4: CLUB STATS */}
      <section className="section section-dark">
        <div className="container">
          <SectionTitle eyebrow="Our Numbers" title="THE CLUB IN NUMBERS" light align="center" />
          <div className="stats-grid">
            {stats.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: MEMBERSHIP CTA */}
      <section className="cta-red">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container"
        >
          <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", marginBottom: 16 }}>
            BECOME PART OF THE CLUB
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", maxWidth: 560, margin: "0 auto 32px auto" }}>
            Join a community of riders who share the same passion for Ducati motorcycles.
          </p>
          <div className="hero-buttons" style={{ justifyContent: "center" }}>
            <Button to="/membership" variant="outline">JOIN NOW</Button>
            <Button to="/membership" variant="outline">MEMBERSHIP DETAILS</Button>
          </div>
        </motion.div>
      </section>

      {/* SECTION 6: EVENTS */}
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Get Involved" title="UPCOMING EVENTS" />
          <div className="card-grid">
            {events.slice(0, 3).map((event, i) => (
              <ScrollReveal key={event.id} delay={i * 0.1}>
                <EventCard event={event} />
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 48 }}>
            <Button to="/events" variant="outline-dark">VIEW ALL EVENTS</Button>
          </div>
        </div>
      </section>

      {/* SECTION 7: MANAGEMENT PREVIEW */}
      <section className="section" style={{ background: "var(--light-gray)" }}>
        <div className="container">
          <SectionTitle eyebrow="Meet The Team" title="CLUB MANAGEMENT" />
          <div className="member-grid">
            {management.slice(0, 4).map((member, i) => (
              <ScrollReveal key={member.id} delay={i * 0.08}>
                <MemberCard member={member} />
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 48 }}>
            <Button to="/management" variant="outline-dark">MEET THE TEAM</Button>
          </div>
        </div>
      </section>

      {/* SECTION 10: CLUB RULES PREVIEW */}
      <section className="section text-center">
        <div className="container" style={{ maxWidth: 700 }}>
          <ScrollReveal>
            <span className="eyebrow">Ride Responsibly</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", marginBottom: 20 }}>
              CLUB RULES & REGULATIONS
            </h2>
            <p style={{ marginBottom: 28 }}>
              Every member follows a simple set of rules that keep our rides safe, respectful and enjoyable for everyone.
            </p>
            <Button to="/club-rules" variant="outline-dark">READ CLUB RULES</Button>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 11: FINAL CTA */}
      <section className="cta-cinematic">
        <motion.img
          src="/assets/footer_banner_img.jpg"
          alt="Ride with Ducati Official Club"
          initial={{ scale: 1.12 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        />
        <div className="hero-overlay" />
        <motion.div
          className="cta-cinematic-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", marginBottom: 28 }}>
            READY TO RIDE WITH US?
          </h2>
          <Button to="/membership" variant="primary">BECOME A MEMBER</Button>
        </motion.div>
      </section>


      {/* section try */}

      <section className="test-1-end">
        </section>      


      
    </PageTransition>
  );
}

export default Home;
