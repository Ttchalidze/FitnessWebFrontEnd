import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll effect only on home page
  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        const offset = window.scrollY;
        setScrolled(offset > 80);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setScrolled(false);
    }
  }, [location]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === "/";

  return (
    <header
      className={`navbar ${scrolled ? "scrolled" : ""} ${
        isHome ? "home" : "inner"
      }`}
    >
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">Fitness Pro</Link>
        </div>

        <nav className={`nav-links ${isMobileMenuOpen ? "mobile-menu" : ""}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/workouts">Workouts</Link>
            </li>
            <li>
              <Link to="/account">My Workouts</Link>
            </li>
            <li>
              <Link to="/login">Logout</Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger icon */}
        <div
          className="hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }
          }}
        >
          <div className={`bar ${isMobileMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMobileMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMobileMenuOpen ? "open" : ""}`}></div>
        </div>
      </div>
    </header>
  );
}
