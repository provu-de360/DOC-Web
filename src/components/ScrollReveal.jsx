import { motion } from "framer-motion";

// Wrap any content in <ScrollReveal> to make it fade + slide up
// when it scrolls into view. Used all over the site for the
// "cards animate when entering viewport" requirement.
function ScrollReveal({ children, delay = 0, y = 35, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;
