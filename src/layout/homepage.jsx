import QuoteSection from "../components/QuoteSection";
import FAQSection from "../components/FAQSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TestimonialSlider from "../components/TestimonialSlider";
import "../styles/home.css";
import "../styles/features.css";
import warmUp from "../videos/warmUp.mp4";
import workOut from "../videos/workOut.mp4";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="home-page">
      {/* HERO SECTION 1 */}
      <div className="hero-section">
        <video autoPlay muted loop className="background-video">
          <source src={warmUp} type="video/mp4" />
        </video>
        <div className="hero-content" data-aos="zoom-in">
          <h1>Track Your Fitness Journey</h1>
          <p>Build routines. Track progress. Stay motivated.</p>
          <a href="/menu" className="cta-button">
            Explore Workouts
          </a>
        </div>
      </div>

      {/* WHY US SECTION */}
      <section className="features-section container" data-aos="fade-up">
        <h2>Why Choose FitnessPro?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Personalized Workouts</h3>
            <p>Tailored routines matching your fitness level & goals.</p>
          </div>

          <div className="feature-card">
            <h3>Wellness Tracking</h3>
            <p>Monitor sleep, hydration, mood & wellness every day.</p>
          </div>

          <div className="feature-card">
            <h3>Progress Visualization</h3>
            <p>Stay motivated by tracking your growth over time.</p>
          </div>

          <div className="feature-card">
            <h3>Clean Interface</h3>
            <p>
              No clutter. Just your fitness journey made simple & beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* HERO SECTION 2 */}
      <div className="hero-section second-hero">
        <video autoPlay muted loop className="background-video">
          <source src={workOut} type="video/mp4" />
        </video>
        <div className="hero-content" data-aos="fade-up">
          <h1>Consistency Creates Results</h1>
          <p>Your fitness journey is more than workouts — it’s lifestyle.</p>
          <a href="/login" className="cta-button">
            Start Today
          </a>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <TestimonialSlider />
      </section>
      <FAQSection />
      <QuoteSection />
    </div>
  );
}
