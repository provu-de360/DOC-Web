import { motion } from "framer-motion";

// A heading used at the top of most sections.
// Usage: <SectionTitle eyebrow="Rides" title="UPCOMING RIDES" />
function SectionTitle({ eyebrow, title, light = false, align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ textAlign: align }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: light ? "#fff" : "inherit" }}>
        {title}
      </h2>
    </motion.div>
  );
}

export default SectionTitle;
