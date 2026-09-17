import { motion, useScroll, useSpring } from "framer-motion";

// Animated top scroll line indicator with smooth physics-based motion
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="scroll-progress-line"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}

export default ScrollProgress;
