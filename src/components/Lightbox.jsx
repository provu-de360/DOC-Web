import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Fullscreen image viewer with next/previous/close and
// keyboard support (arrow keys + escape).
function Lightbox({ images, index, onClose, onChangeIndex }) {
  const goNext = () => onChangeIndex((index + 1) % images.length);
  const goPrev = () => onChangeIndex((index - 1 + images.length) % images.length);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  const current = images[index];

  return (
    <AnimatePresence>
      <motion.div
        className="lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <button className="lightbox-close" aria-label="Close" onClick={onClose}>
          <X size={28} />
        </button>
        <button
          className="lightbox-nav lightbox-prev"
          aria-label="Previous image"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
        >
          <ChevronLeft size={24} />
        </button>

        <motion.div
          className="lightbox-img-wrap"
          key={current.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <img src={current.image} alt={current.alt} />
        </motion.div>

        <button
          className="lightbox-nav lightbox-next"
          aria-label="Next image"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
        >
          <ChevronRight size={24} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

export default Lightbox;
