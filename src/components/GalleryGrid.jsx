import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "./Lightbox";

// Filterable masonry gallery grid with a lightbox.
// "images" is an array from src/data/gallery.js
function GalleryGrid({ images }) {
  const categories = ["all", "rides", "events", "members", "bikes"];
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div>
      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filtered.map((img, index) => (
          <motion.div
            key={img.id}
            className="gallery-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
            onClick={() => setLightboxIndex(index)}
          >
            <img src={img.image} alt={img.alt} loading="lazy" />
          </motion.div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChangeIndex={setLightboxIndex}
        />
      )}
    </div>
  );
}

export default GalleryGrid;
