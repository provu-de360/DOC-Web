import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { contactInfo } from "../data/siteData";

// Site footer. Edit contact info in src/data/siteData.js
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <div className="footer-brand">
            DUCATI <span>CLUB</span>
          </div>
          <p>{contactInfo.location}</p>
          <div className="footer-social">
            <a href={contactInfo.social.facebook} aria-label="Facebook" target="_blank" rel="noreferrer">
              <Facebook size={16} />
            </a>
            <a href={contactInfo.social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
              <Instagram size={16} />
            </a>
            <a href={contactInfo.social.youtube} aria-label="YouTube" target="_blank" rel="noreferrer">
              <Youtube size={16} />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>CLUB</h4>
          <Link to="/">About</Link>
          <Link to="/membership">Membership</Link>
          <Link to="/management">Management</Link>
        </div>

        <div className="footer-col">
          <h4>RIDES & EVENTS</h4>
          <Link to="/rides">Upcoming Rides</Link>
          <Link to="/events">Events</Link>
          <Link to="/gallery">Gallery</Link>
        </div>

        <div className="footer-col">
          <h4>INFORMATION</h4>
          <Link to="/sponsors">Sponsors</Link>
          <Link to="/club-rules">Club Rules</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Ducati Official Club. All Rights Reserved.</span>
        <div className="footer-bottom-links">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
