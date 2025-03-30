import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/showcase.css";
import website2 from "../assets/images/website2.webp";
import website3 from "../assets/images/website3.webp";
import website1 from "../assets/images/website1.webp";

export default function Showcase() {
  const projects = [
    {
      title: "High-Performance E-Commerce Website 🛍️",
      client: "TechGear Hub",
      features: "Fast-loading, seamless UI, optimized checkout.",
      result: "Boosted sales by +320% in 3 months!",
      image: website1,
      link: "/portfolio/project1",
    },
    {
      title: "Luxury Brand Website 🎨",
      client: "Elite Fashion House",
      features:
        "Stunning visuals, silky-smooth animations, high-end aesthetics.",
      result: "Elevated brand perception, +250% engagement increase.",
      image: website2,
      link: "/portfolio/project2",
    },
    {
      title: "High-Converting SaaS Website 🚀",
      client: "InnovateX Software",
      features: "Engaging UI, smartly placed CTAs, conversion-driven design.",
      result: "Skyrocketed conversions with +400% sign-ups.",
      image: website3,
      link: "/portfolio/project3",
    },
  ];

  return (
    <div className="sh-showcase-work">
      <motion.h2
        className="sh-showcase-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Transforming Ideas into Reality
      </motion.h2>
      <motion.p
        className="sh-showcase-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        See how we've turned bold ideas into stunning, high-converting websites.
      </motion.p>

      <div className="sh-projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="sh-project-card"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
            >
              {project.title}
            </motion.h3>
            <p>
              <strong>Client:</strong> {project.client}
            </p>
            <p>
              <strong>Features:</strong> {project.features}
            </p>
            <p>
              <strong>Result:</strong> {project.result}
            </p>
            <motion.img
              src={project.image}
              alt={`${project.title} Preview`}
              className="sh-project-image"
              whileHover={{ scale: 1.02 }}
            />
            <Link to={project.link} className="sh-project-button">
              View Project
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.a
        href="/contact"
        className="sh-cta-button"
        whileHover={{ scale: 1.1, backgroundColor: "#0056b3" }}
        transition={{ duration: 0.3 }}
      >
        🔹 Get a Custom Website
      </motion.a>
    </div>
  );
}
