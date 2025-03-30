import React, { useEffect } from "react";
import {
  FaGlobe,
  FaShoppingCart,
  FaTachometerAlt,
  FaRedo,
  FaFunnelDollar,
} from "react-icons/fa";
import { Button } from "../components/ui/button.js";
import "../styles/services.css";

const services = [
  {
    icon: <FaGlobe className="service-icon" />,
    title: "Custom Website Design",
    description:
      "We design stunning, high-performance websites that grab attention and turn visitors into loyal customers.",
    features: [
      "Visually stunning designs",
      "Built for maximum conversions",
      "Future-ready technology",
    ],
    cta: "Get My Custom Website",
  },
  {
    icon: <FaShoppingCart className="service-icon" />,
    title: "E-Commerce Development",
    description:
      "We build online stores that make shopping easy, engaging, and profitable for you.",
    features: [
      "Fast-loading, user-friendly design",
      "Optimized product pages",
      "Effortless checkout process",
    ],
    cta: "Start Selling Online",
  },
  {
    icon: <FaTachometerAlt className="service-icon" />,
    title: "SEO & Speed Optimization",
    description:
      "A slow website is a lost opportunity. We boost your speed and ranking to drive more traffic and sales.",
    features: [
      "Lightning-fast loading times",
      "Higher rankings on Google",
      "More visitors, more sales",
    ],
    cta: "Boost My Website",
  },
  {
    icon: <FaRedo className="service-icon" />,
    title: "Website Redesign & Optimization",
    description:
      "Turn your outdated website into a modern, high-converting powerhouse that impresses visitors and drives sales.",
    features: [
      "Sleek, modern design",
      "Seamless user experience",
      "Maximized sales potential",
    ],
    cta: "Upgrade My Website",
  },
  {
    icon: <FaFunnelDollar className="service-icon" />,
    title: "Landing Pages & Sales Funnels",
    description:
      "We create landing pages that capture leads and sales funnels that turn visitors into paying customers.",
    features: [
      "Persuasive, high-impact content",
      "A/B tested for best results",
      "Optimized for lead generation",
    ],
    cta: "Build My High-Converting Funnel",
  },
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="services-section">
      <div className="container mx-auto text-center">
        <h2 className="services-title">
          Alameen Web Design – Websites That Look Amazing & Sell Like Crazy
        </h2>
        <p className="services-description">
          We don’t just build websites—we create digital experiences that
          captivate audiences and drive unstoppable growth.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <Button
              className="service-button"
              onClick={() => (window.location.href = "/contact")}
            >
              {service.cta}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
