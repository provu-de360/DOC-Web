import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../data/siteData";

// Site header with high-end glassmorphism, responsive navigation,
// and premium Ducati official club branding.
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu automatically whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock background scrolling when mobile menu is active
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-inner">
          <Link to="/" className="logo" aria-label="Ducati Club Home">
            <img src="/assets/logo.jpg" alt="Ducati Official Club logo" />
          </Link>

          <nav className="nav-desktop">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <Link to="/membership" className="header-cta">
              <span>JOIN DOC</span>
              <ArrowRight size={14} className="header-cta-arrow" />
            </Link>
            <button
              className="menu-btn"
              aria-label="Open mobile navigation menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen drawer portalled to document.body to avoid header stacking context & backdrop-filter clipping */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {menuOpen && (
              <div className="mobile-menu-backdrop" onClick={() => setMenuOpen(false)}>
                <motion.div
                  className="mobile-menu"
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "100%" }}
                  transition={{ type: "spring", damping: 28, stiffness: 280 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="mobile-menu-top">
                    <div className="mobile-menu-brand">
                      <img src="/assets/logo.jpg" alt="Ducati Official Club" />
                      <div className="mobile-brand-meta">
                        <span className="mobile-brand-title">DUCATI</span>
                        <span className="mobile-brand-sub">OFFICIAL CLUB</span>
                      </div>
                    </div>
                    <button
                      className="mobile-menu-close"
                      aria-label="Close menu"
                      onClick={() => setMenuOpen(false)}
                    >
                      <X size={22} />
                    </button>
                  </div>

                  <motion.nav
                    className="mobile-menu-links"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.04, delayChildren: 0.08 } },
                    }}
                  >
                    {navLinks.map((link) => (
                      <motion.div
                        key={link.path}
                        variants={{
                          hidden: { opacity: 0, x: 25 },
                          visible: { opacity: 1, x: 0 },
                        }}
                      >
                        <NavLink
                          to={link.path}
                          onClick={() => setMenuOpen(false)}
                          className={({ isActive }) =>
                            `mobile-nav-item ${isActive ? "active" : ""}`
                          }
                        >
                          <span className="mobile-nav-text">{link.name}</span>
                          <ChevronRight size={18} className="mobile-nav-arrow" />
                        </NavLink>
                      </motion.div>
                    ))}

                    <motion.div
                      className="mobile-menu-cta-wrap"
                      variants={{
                        hidden: { opacity: 0, y: 15 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <Link
                        to="/membership"
                        onClick={() => setMenuOpen(false)}
                        className="mobile-menu-cta"
                      >
                        <span>BECOME A MEMBER</span>
                        <ArrowRight size={16} />
                      </Link>
                    </motion.div>
                  </motion.nav>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}

export default Header;
