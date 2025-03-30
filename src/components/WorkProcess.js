import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaLightbulb,
  FaLaptopCode,
  FaRocket,
  FaClipboardCheck,
} from "react-icons/fa";
import "../styles/workprocess.css";

const steps = [
  {
    icon: <FaSearch />,
    title: "Discovery Call",
    description:
      "Understand your goals & requirements for a tailored website experience.",
  },
  {
    icon: <FaLightbulb />,
    title: "Strategy & Planning",
    description:
      "Define website structure & user experience to ensure smooth navigation.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Design & Development",
    description:
      "Create a stunning, high-performance website with engaging visuals.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Testing & Optimization",
    description:
      "Ensure speed, SEO, and mobile responsiveness for a seamless experience.",
  },
  {
    icon: <FaRocket />,
    title: "Launch & Support",
    description:
      "Ongoing assistance for growth, updates, and top-tier performance.",
  },
];

const WorkProcess = () => {
  return (
    <div className="work-process-section">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        How We Deliver Results
      </motion.h2>
      <div className="process-steps">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="process-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="icon-container">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </div>
      <motion.a
        href="tel:+2347083652671"
        className="cta-button"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        onClick={(e) => {
          if (!/Mobi|Android/i.test(navigator.userAgent)) {
            e.preventDefault();
            alert("Please use a mobile device to call.");
          }
        }}
      >
        Book a Strategy Call to Get Started
      </motion.a>
    </div>
  );
};

export default WorkProcess;
