import { useEffect } from "react";
import PageTransition from "../components/PageTransition";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import MemberCard from "../components/MemberCard";
import management from "../data/management";

// Full management / team page.
// To add or remove members, edit src/data/management.js
function Management() {
  useEffect(() => {
    document.title = "Management | Ducati Official Club";
  }, []);

  return (
    <PageTransition>
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Leadership" title="CLUB MANAGEMENT" align="center" />
          <div className="member-grid">
            {management.map((member, i) => (
              <ScrollReveal key={member.id} delay={i * 0.08}>
                <MemberCard member={member} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export default Management;
