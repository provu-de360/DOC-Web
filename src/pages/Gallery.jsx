import { useEffect } from "react";
import PageTransition from "../components/PageTransition";
import SectionTitle from "../components/SectionTitle";
import GalleryGrid from "../components/GalleryGrid";
import gallery from "../data/gallery";

// Full gallery page with category filters and a lightbox.
// To add photos: edit src/data/gallery.js and put the image
// files inside public/assets/gallery/
function Gallery() {
  useEffect(() => {
    document.title = "Gallery | Ducati Official Club";
  }, []);

  return (
    <PageTransition>
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Moments" title="GALLERY" align="center" />
          <GalleryGrid images={gallery} />
        </div>
      </section>
    </PageTransition>
  );
}

export default Gallery;
