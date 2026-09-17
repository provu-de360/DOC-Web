// A single sponsor card, showing logo, name and website link.
function SponsorCard({ sponsor }) {
  return (
    <div className="sponsor-card">
      <img src={sponsor.logo} alt={sponsor.name} loading="lazy" />
      <div className="sponsor-name">{sponsor.name}</div>
      <a className="sponsor-link" href={sponsor.website} target="_blank" rel="noreferrer">
        Visit Website
      </a>
    </div>
  );
}

export default SponsorCard;
