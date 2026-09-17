import { Facebook, Instagram } from "lucide-react";

// A single team / management member card.
function MemberCard({ member }) {
  return (
    <div className="member-card">
      <div className="member-photo-wrap">
        <img src={member.photo} alt={member.name} loading="lazy" />
      </div>
      <div className="member-position">{member.position}</div>
      <div className="member-name">{member.name}</div>
      <div className="member-social">
        <a href={member.facebook} aria-label={`${member.name} Facebook`} target="_blank" rel="noreferrer">
          <Facebook size={16} />
        </a>
        <a href={member.instagram} aria-label={`${member.name} Instagram`} target="_blank" rel="noreferrer">
          <Instagram size={16} />
        </a>
      </div>
    </div>
  );
}

export default MemberCard;
