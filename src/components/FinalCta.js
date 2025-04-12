import React from "react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import "../styles/finalCta.css";

const FinalCta = () => {
  return (
    <motion.div
      className="final-cta-container"
      initial={{opacity: 0, y: 50}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.8}}
    >
      <h2 className="cta-title">
        Your Website Should Be a Sales Machine. Let’s Build It! 💰🚀
      </h2>
      <p className="cta-description">
        A website isn’t just about looks—it should drive sales, capture leads,
        and grow your business nonstop.
      </p>
      <ul className="cta-benefits">
        <li>🔥 Built to boost sales, not just looks.</li>
        <li>🔥 Optimized for speed, SEO, and conversions.</li>
        <li>🔥 Turns visitors into buyers. Guaranteed.</li>
      </ul>
      <p className="cta-action">Success favors action. Don’t wait.</p>
      <div className="cta-buttons">
        <Link to="/contact" className="cta-button primary">
          🚀 Launch Your Premium Website Now
        </Link>
        <a
          href="https://wa.me/2347083652671"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button secondary"
        >
          📲 Chat on WhatsApp
        </a>
      </div>
    </motion.div>
  );
};

export default FinalCta;
