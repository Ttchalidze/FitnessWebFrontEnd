// src/components/FAQSection.jsx

import { useState } from "react";
import "../styles/faq.css";

const faqData = [
  {
    question: "Is FitnessPro free to use?",
    answer:
      "Yes! FitnessPro is free to get started. You can track workouts and progress at no cost.",
  },
  {
    question: "Do I need special equipment?",
    answer:
      "Nope. FitnessPro works for gym, home workouts, or bodyweight routines — fully customizable.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We take your privacy seriously and securely store your progress data.",
  },
  {
    question: "Can I use FitnessPro on my phone?",
    answer:
      "Yes! FitnessPro is fully responsive. You can log your workouts and track progress on any device.",
  },
  {
    question: "Can I create my own custom workouts?",
    answer:
      "Definitely! You can build your own routines, choose your favorite exercises, and set personal goals.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section container" data-aos="fade-up">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{item.question}</div>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
