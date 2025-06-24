import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "../styles/testimonials.css";

const testimonials = [
  { name: "John", text: "Amazing app for my fitness journey." },
  { name: "Sarah", text: "The personalized workouts are great!" },
  { name: "Alex", text: "I finally found consistency thanks to this!" },
  { name: "Emily", text: "The community support keeps me motivated!" },
  { name: "Mike", text: "Simple interface and great tracking features!" },
  { name: "Rachel", text: "Love seeing my progress every week!" },
];

export default function TestimonialSlider() {
  useEffect(() => {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: { delay: 4000 },
      pagination: { el: ".swiper-pagination", clickable: true },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }, []);

  return (
    <section id="testimonials" className="testimonials" data-aos="fade-up">
      <h2 className="testimonial-heading">Testimonials</h2>
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          {testimonials.map((t, i) => (
            <div className="swiper-slide" key={i}>
              <div className="testimonial-card">
                <p className="testimonial-text">{t.text}</p>
                <p className="testimonial-name">– {t.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}
