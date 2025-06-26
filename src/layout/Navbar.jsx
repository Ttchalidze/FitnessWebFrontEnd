import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import "../styles/Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll styling for homepage only
  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        setScrolled(window.scrollY > 80);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setScrolled(true);
    }
  }, [location]);

  // Prevent scrolling behind menu on mobile
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <header
      className={`navbar ${scrolled ? "scrolled" : ""} ${
        location.pathname === "/" ? "home" : "inner"
      }`}
    >
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            FITNESSPRO
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div
          className={`hamburger${menuOpen ? " open hide-hamburger" : ""}`}
          style={menuOpen ? { display: "none" } : {}}
          onClick={() => setMenuOpen(!menuOpen)}
          role="button"
          tabIndex={0}
          aria-label="Toggle menu"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Desktop nav */}
        <nav className={`nav-links${menuOpen ? " mobile-open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/workouts" onClick={() => setMenuOpen(false)}>
            Workouts
          </Link>
          <Link to="/myworkouts" onClick={() => setMenuOpen(false)}>
            My Workouts
          </Link>
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <>
          <div className="mobile-backdrop" onClick={() => setMenuOpen(false)} />
          <div className="mobile-overlay">
            <div className="mobile-header">
              <div className="mobile-logo">FITNESSPRO</div>
              <div
                className="mobile-close"
                onClick={() => setMenuOpen(false)}
                role="button"
                tabIndex={0}
                aria-label="Close menu"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setMenuOpen(false);
                }}
              >
                &times;
              </div>
            </div>
            <nav className="mobile-menu">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link to="/workouts" onClick={() => setMenuOpen(false)}>
                Workouts
              </Link>
              <Link to="/myworkouts" onClick={() => setMenuOpen(false)}>
                My Workouts
              </Link>
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
