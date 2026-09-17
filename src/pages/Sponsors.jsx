import { useEffect } from "react";
import PageTransition from "../components/PageTransition";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import SponsorCard from "../components/SponsorCard";
import sponsors from "../data/sponsors";

// Sponsors page. Edit sponsor data in src/data/sponsors.js
function Sponsors() {
  useEffect(() => {
    document.title = "Sponsors | Ducati Official Club";
  }, []);

  return (
    <PageTransition>
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Thank You" title="OUR SPONSORS" align="center" />
          <div className="sponsor-grid">
            {sponsors.map((sponsor, i) => (
              <ScrollReveal key={sponsor.id} delay={i * 0.08}>
                <SponsorCard sponsor={sponsor} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export default Sponsors;
