import {motion, useInView} from "framer-motion";
import {useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {CheckCircle, XCircle, Star} from "lucide-react";
import Button from "../components/valueButton.js";
import "../styles/valueshowcase2.css";

const ValueShowcase2 = () => {
  const ref = useRef(null);
  // Lower the inView threshold to trigger animations sooner
  const isInView = useInView(ref, {once: false, amount: 0.1});
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    if (isInView) {
      const animateCounter = (endValue, key) => {
        let currentValue = 0;
        const increment = endValue / 40;

        const counter = setInterval(() => {
          currentValue += increment;
          if (currentValue >= endValue) {
            clearInterval(counter);
            setCounts((prev) => ({...prev, [key]: endValue}));
          } else {
            setCounts((prev) => ({...prev, [key]: Math.floor(currentValue)}));
          }
        }, 50);
      };

      animateCounter(500, "clients");
      animateCounter(1200, "projects");
      animateCounter(99, "satisfaction");
    }
  }, [isInView]);

  const navigate = useNavigate();

  return (
    <section ref={ref} className="v2-showcase-container">
      <motion.div
        className="v2-content-wrapper"
        initial={{opacity: 0}}
        animate={isInView ? {opacity: 1} : {}}
        transition={{duration: 0.4, ease: "easeOut"}}
      >
        <motion.h2
          className="v2-heading"
          initial={{opacity: 0, y: 0}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.4, ease: "easeOut"}}
        >
          97% of Businesses Fail Online. <br /> Yours Won’t—If You Act Now! 🚀
        </motion.h2>

        <motion.p
          className="v2-description"
          initial={{opacity: 0}}
          animate={isInView ? {opacity: 1} : {}}
          transition={{delay: 0.1, duration: 0.4}}
        >
          Every second your website isn’t converting,{" "}
          <strong>you’re losing money.</strong>
          <br />
          <span className="v2-text-highlight">
            88% of visitors never return
          </span>{" "}
          after a poor experience.
          <br />
          We guarantee that NEVER happens to you.
        </motion.p>

        <div className="v2-grid">
          <motion.div
            className="v2-card"
            // Red card slides in from the left
            initial={{opacity: 0, x: -50}}
            animate={isInView ? {opacity: 1, x: 0} : {}}
            transition={{duration: 0.4, ease: "easeOut"}}
          >
            <div className="v2-card-header">
              <XCircle className="v2-icon v2-text-danger" />
              <h3>Why Most Websites Fail ❌</h3>
            </div>
            <ul>
              <li>🚨 94% of users judge a business by its website.</li>
              <li>
                ⚡ 47% of visitors expect sites to load in under 2 seconds.
              </li>
              <li>💰 Weak messaging = lost sales & missed opportunities.</li>
              <li>🔎 Unoptimized websites rank lower on Google.</li>
            </ul>
          </motion.div>

          <motion.div
            className="v2-card"
            // Green card slides in from the right
            initial={{opacity: 0, x: 50}}
            animate={isInView ? {opacity: 1, x: 0} : {}}
            transition={{duration: 0.4, ease: "easeOut"}}
          >
            <div className="v2-card-header">
              <CheckCircle className="v2-icon v2-text-success" />
              <h3>How We Make You Win 🏆</h3>
            </div>
            <ul>
              <li>🎨 Visually stunning, conversion-driven design.</li>
              <li>⚡ Ultra-fast performance & 99.9% uptime.</li>
              <li>
                ✍️ High-impact copywriting that turns visitors into buyers.
              </li>
              <li>🔝 SEO-powered content to dominate Google rankings.</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="v2-cta-section"
          initial={{opacity: 0, scale: 0.8}}
          animate={isInView ? {opacity: 1, scale: 1} : {}}
          transition={{duration: 0.4, ease: "easeOut"}}
        >
          <Button
            className="v2-cta-button"
            onClick={() => navigate("/contact")}
          >
            🔥 Get a High-Converting Website Now!
          </Button>
        </motion.div>

        <div className="v2-stats-container">
          <motion.div
            className="v2-stat-item"
            animate={{opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8}}
            transition={{duration: 0.4, ease: "easeOut"}}
          >
            <span className="v2-stats-number v2-text-primary">
              {counts.clients}
            </span>
            + Thrilled Clients
          </motion.div>
          <motion.div
            className="v2-stat-item"
            animate={{opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8}}
            transition={{duration: 0.4, ease: "easeOut"}}
          >
            <span className="v2-stats-number v2-text-accent">
              {counts.projects}
            </span>
            + Successful Projects
          </motion.div>
          <motion.div
            className="v2-stat-item"
            animate={{opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8}}
            transition={{duration: 0.4, ease: "easeOut"}}
          >
            <span className="v2-stats-number v2-text-danger">
              {counts.satisfaction}
            </span>
            % Client Satisfaction
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ValueShowcase2;
