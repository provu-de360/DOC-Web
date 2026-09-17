import { motion } from "framer-motion";
import "../styles/roadAnimation.css";

// Ultra-premium Animated Road Down-Arrow Scroll Indicator
// Scaled up with high-definition racing kerbs, asphalt textures,
// moving center lane dashes, and glowing cascading road chevrons.
export default function RoadAnimation({ targetSelector = ".section-about-red" }) {
  const handleScrollDown = () => {
    const target = document.querySelector(targetSelector);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <motion.button
      type="button"
      className="road-scroll-indicator"
      onClick={handleScrollDown}
      aria-label="Scroll down to explore"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.85 }}
      whileHover={{ y: 5, scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
    >
      <div className="road-scroll-tag">
        <span className="road-tag-dot" />
        <span>RIDE DOWN</span>
      </div>

      <div className="road-track-capsule">
        {/* Left and right red/white racing kerbs */}
        <div className="road-curb road-curb-left" />
        <div className="road-curb road-curb-right" />

        {/* Animated road asphalt dashed center line */}
        <div className="road-dashes-vertical" />

        {/* Flowing animated road chevrons pointing downward */}
        <div className="road-chevrons-wrap">
          <svg
            className="road-chevron chevron-1"
            viewBox="0 0 28 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4L14 12L24 4"
              stroke="#ffffff"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            className="road-chevron chevron-2"
            viewBox="0 0 28 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4L14 12L24 4"
              stroke="#ff3838"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            className="road-chevron chevron-3"
            viewBox="0 0 28 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4L14 12L24 4"
              stroke="#E10600"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </motion.button>
  );
}
