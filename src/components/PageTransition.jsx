import { motion } from "framer-motion";

// Wraps every page so switching routes has a smooth fade/slide
// transition instead of an instant, jarring change.
function PageTransition({ children }) {
  return (
    <motion.div
      className="page-wrapper"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
