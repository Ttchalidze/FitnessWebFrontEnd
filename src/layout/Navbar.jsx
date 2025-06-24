import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import "../styles/Navbar.css";
export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Listen for scroll only on homepage
  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        const offset = window.scrollY;
        setScrolled(offset > 80);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setScrolled(false); // Disable scroll effect on other pages
    }
  }, [location]);

  // Check if we're on home
  const isHome = location.pathname === "/";

  return (
    <header
      className={`navbar ${scrolled ? "scrolled" : ""} ${
        isHome ? "home" : "inner"
      }`}
    >
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">FitnessPro</Link>{" "}
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/workouts">Workouts</Link>
          <Link to="myworkouts">My Workouts</Link>
          <Link to="/login">Logout</Link>
        </nav>
      </div>
    </header>
  );
}
