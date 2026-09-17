import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ScrollProgress from "./components/ScrollProgress";

import Home from "./pages/Home";
import Membership from "./pages/Membership";
import Rides from "./pages/Rides";
import RideDetails from "./pages/RideDetails";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Sponsors from "./pages/Sponsors";
import Management from "./pages/Management";
import Gallery from "./pages/Gallery";
import ClubRules from "./pages/ClubRules";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// This is the main app "shell". It stays the same on every page:
// Header on top, Footer on bottom, and the current page in the middle.
// Do NOT put whole sections of the website here — put them inside
// the individual files in src/pages/ instead.
function App() {
  const location = useLocation();

  return (
    <>
      <ScrollProgress />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/rides" element={<Rides />} />
          <Route path="/rides/:id" element={<RideDetails />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/management" element={<Management />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/club-rules" element={<ClubRules />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
