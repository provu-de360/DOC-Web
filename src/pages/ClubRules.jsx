import { useEffect } from "react";
import PageTransition from "../components/PageTransition";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import Accordion from "../components/Accordion";
import { clubRules } from "../data/siteData";

// Club rules page. Edit the actual rule text in src/data/siteData.js
function ClubRules() {
  useEffect(() => {
    document.title = "Club Rules | Ducati Official Club";
  }, []);

  return (
    <PageTransition>
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <SectionTitle eyebrow="Ride Responsibly" title="CLUB RULES & REGULATIONS" align="center" />
          <ScrollReveal delay={0.1}>
            <p className="text-center" style={{ margin: "24px auto 40px auto", maxWidth: 600 }}>
              These rules keep every ride, event and member interaction safe, respectful and enjoyable.
              Please read through each section carefully.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Accordion items={clubRules} />
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}

export default ClubRules;
