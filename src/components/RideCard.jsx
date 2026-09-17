import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// A single ride card. Used on the homepage and the Rides page.
function RideCard({ ride }) {
  return (
    <motion.div
      className="ride-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/rides/${ride.id}`}>
        <div className="card-image-wrap">
          <img src={ride.image} alt={ride.title} loading="lazy" />
        </div>
        <div className="card-body">
          <div className="card-meta">
            <span>{ride.date}</span>
            <span>{ride.location}</span>
          </div>
          <h3 className="card-title">{ride.title}</h3>
          <p className="card-description">{ride.description}</p>
          <span className="card-link">VIEW RIDE</span>
        </div>
      </Link>
    </motion.div>
  );
}

export default RideCard;
