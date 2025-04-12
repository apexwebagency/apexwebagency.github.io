import React from "react";
import {motion} from "framer-motion";
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
      "We'll talk about your goals and how we can build the perfect website just for you.",
  },
  {
    icon: <FaLightbulb />,
    title: "Strategy & Planning",
    description:
      "Plan the site layout and design for easy navigation and smooth user experience.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Design & Development",
    description:
      "Build a beautiful, fast, and functional website that grabs attention.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Testing & Optimization",
    description:
      "Test for speed, SEO, and mobile-friendliness to ensure a flawless experience.",
  },
  {
    icon: <FaRocket />,
    title: "Launch & Support",
    description:
      "We’ll be there to support your website’s growth and keep it performing at its best.",
  },
];

const WorkProcess = () => {
  return (
    <div className="work-process-section">
      <motion.h2
        initial={{opacity: 0, y: -50}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.6}}
        className="section-title"
      >
        How We Deliver Results
      </motion.h2>
      <div className="process-steps">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="process-card"
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.3}}
            transition={{duration: 0.5, delay: index * 0.2}}
            whileHover={{scale: 1.05}}
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
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.6, delay: 1.5}}
        whileHover={{scale: 1.1}}
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
