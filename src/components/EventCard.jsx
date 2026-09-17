import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// A single event card. Used on the homepage and Events page.
function EventCard({ event }) {
  return (
    <motion.div
      className="event-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/events/${event.id}`}>
        <div className="card-image-wrap">
          <img src={event.image} alt={event.title} loading="lazy" />
        </div>
        <div className="card-body">
          <div className="card-meta">
            <span>{event.date}</span>
            <span>{event.location}</span>
          </div>
          <h3 className="card-title">{event.title}</h3>
          <p className="card-description">{event.description}</p>
          <span className="card-link">VIEW EVENT</span>
        </div>
      </Link>
    </motion.div>
  );
}

export default EventCard;
