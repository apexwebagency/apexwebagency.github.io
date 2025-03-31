import {useEffect, useState, useRef} from "react";
import {Link, useNavigate} from "react-router-dom";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import {useInView} from "framer-motion";
import {motion} from "framer-motion";
import {CheckCircle, XCircle} from "lucide-react";
import Team1 from "../assets/images/Team1.webp";
import Team2 from "../assets/images/Team2.webp";
import Team3 from "../assets/images/Team3.webp";
import SpeedTest from "../assets/images/speed-test.png";
import CustomWebsite from "../assets/images/custom-website.webp";
import Infographic from "../assets/images/infographic.webp";
import professionalPortrait from "../assets/images/professional-image.jpg";
import work from "../assets/images/work-in-action.jpg";
import "../styles/about.css";
import SocialProof from "../components/SocialProof.js";

const About = () => {
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

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on page load

    new bootstrap.Carousel(
      document.querySelector("#carouselExampleAutoplaying"),
      {
        interval: 3000,
        ride: "carousel",
      }
    );
  }, []);

  return (
    <>
      {/* About Section */}
      <section className="about-section container py-5 text-center about-custom-section mx-auto mb-5">
        <h2 className="fw-bold display-5 text-uppercase about-custom-heading">
          About Alameen Web Design
        </h2>
        <p className="lead fw-semibold text-light fs-4 about-custom-subheading">
          Luxury Websites That Drive Massive Revenue & Conversions
        </p>

        <div
          id="carouselExampleAutoplaying"
          className="carousel slide my-4 about-custom-carousel"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner about-custom-carousel-inner">
            <div className="carousel-item active about-custom-carousel-item">
              <img
                src={Team1}
                className="d-block w-100 rounded about-custom-carousel-img"
                alt="Professional Web Design"
              />
            </div>
            <div className="carousel-item about-custom-carousel-item">
              <img
                src={Team2}
                className="d-block w-100 rounded about-custom-carousel-img"
                alt="Creative Web Solutions"
              />
            </div>
            <div className="carousel-item about-custom-carousel-item">
              <img
                src={Team3}
                className="d-block w-100 rounded about-custom-carousel-img"
                alt="High-Performance Websites"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev about-custom-carousel-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon about-custom-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next about-custom-carousel-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon about-custom-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="w-100">
          <p className="fw-semibold text-light fs-5 about-custom-description text-center">
            At Alameen Web Design, we specialize in crafting premium websites
            tailored to elevate your brand and drive exceptional results. Our
            expert team blends stunning aesthetics with cutting-edge technology,
            ensuring seamless user experiences and high conversion rates. Let’s
            build something extraordinary together.
          </p>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="container text-center py-5 about-custom-difference-section-unique mb-5">
        <h2 className="fw-bold text-uppercase display-5 about-custom-heading-unique">
          What Makes Us Different?
        </h2>
        <div className="about-difference-content-unique text-light fs-5">
          <p className="about-point-1">
            <strong>1️⃣ We Create Websites That Sell</strong>
          </p>
          <p className="about-point-1-desc">
            Most designers just focus on aesthetics. We go beyond that. Our
            websites are engineered to convert visitors into paying customers.
            Every button, every section, and every word is strategically placed
            for maximum impact.
          </p>

          <p className="about-point-2">
            <strong>2️⃣ We Combine Web Design & Deep Marketing Expertise</strong>
          </p>
          <p className="about-point-2-desc">
            Unlike most web designers, we’re not just coders—we’re marketers
            first. We understand buyer psychology, sales funnels, and how to
            make people click, trust, and buy.
          </p>

          <p className="about-point-3">
            <strong>3️⃣ Ultra-Fast, Google-Friendly & Mobile-Optimized</strong>
          </p>
          <p className="about-point-3-desc">
            🚀 Speed matters. Studies show that 47% of visitors expect a site to
            load in under 2 seconds—or they leave. Our sites are blazing fast,
            perfectly responsive, and SEO-powered to rank higher and attract
            more traffic.
          </p>
          <img
            src={SpeedTest}
            className="img-fluid rounded shadow my-3 about-speed-test-img"
            alt="Speed Performance Test"
          />

          <p className="about-point-4">
            <strong>4️⃣ 100% Custom-Made for Maximum Profits</strong>
          </p>
          <p className="about-point-4-desc">
            No generic templates. We create tailor-made solutions based on your
            brand, audience, and business goals—so your site actually works for
            your success.
          </p>
          <img
            src={CustomWebsite}
            className="img-fluid rounded shadow my-3 about-custom-website-img"
            alt="Custom Website Design"
          />

          <p className="about-point-5">
            <strong>5️⃣ A Hassle-Free, Stress-Free Process</strong>
          </p>
          <p className="about-point-5-desc">
            We make the entire experience easy, smooth, and enjoyable for you.
            No delays, no confusion—just fast, powerful results.
          </p>
        </div>
      </section>

      {/* SocialProof Section with additional spacing */}
      <section className="mb-5">
        <SocialProof />
      </section>

      {/* Profit-Generating Websites Section */}
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
        </motion.div>
        <div className="mt-5 unique-profit-infographic-container">
          <img
            src={Infographic}
            alt="Comparison Infographic: Failing vs. High-Converting Website"
            className="img-fluid rounded shadow about-infographic-img unique-profit-infographic-img"
          />
        </div>
      </section>

      {/* Founder Section */}
      <section className="container py-5 text-center founder-section mb-5">
        <h2 className="fw-bold display-5 text-uppercase founder-heading">
          Meet the Founder – Alameen
        </h2>
        <div className="row align-items-center my-4">
          {/* Professional Portrait */}
          <div className="col-md-5">
            <img
              src={professionalPortrait}
              alt="Alameen Professional Portrait"
              className="img-fluid rounded founder-portrait"
            />
          </div>
          {/* Founder Story */}
          <div className="col-md-7 text-start">
            <p className="lead founder-intro">
              Hey, I’m Alameen, the founder of Alameen Web Design.
            </p>
            <p className="founder-story">
              I started this journey because I saw businesses wasting money on
              websites that don’t work. I’ve spent over a decade mastering the
              science of high-converting web design and digital marketing—so you
              don’t have to.
            </p>
            <p className="founder-belief">
              I believe your website should be your #1 salesperson, working 24/7
              to bring in customers. That’s exactly what we build.
            </p>
            <p className="founder-funfact">
              💡 Fun Fact: I designed my first website at age 5 and turned my
              passion into a thriving business.
            </p>
          </div>
        </div>
        {/* Candid Work-in-Action Photo */}
        <div className="row mt-4">
          <div className="col">
            <img
              src={work}
              alt="Alameen at Work"
              className="img-fluid rounded shadow founder-candid-photo"
            />
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="container my-5 py-5 text-center cta-section">
        <h2 className="fw-bold display-5 text-uppercase cta-heading">
          Let’s Build Your Winning Website Today
        </h2>

        <div className="my-4 cta-banner-wrapper">
          {/* Replace the src with your high-quality CTA banner graphic */}
          <img
            src={work}
            alt="Call-to-Action Banner"
            className="img-fluid rounded shadow cta-banner-img"
          />
          <div className="mt-3 cta-banner-btn-wrapper">
            <Link
              to="/contact"
              className="btn btn-primary btn-lg cta-btn-get-started"
            >
              Get Started Now
            </Link>
          </div>
        </div>

        <p className="fs-4 fw-semibold my-4 cta-message">
          🚀 Your competitors are using high-performance websites to grow—why
          not you?
        </p>

        <ul className="list-unstyled fs-5 fw-semibold cta-list">
          <li className="cta-list-item">
            🔹 More clicks. More sales. More business growth.
          </li>
          <li className="cta-list-item">
            🔹 No templates. No fluff. Just real results.
          </li>
          <li className="cta-list-item">🔹 100% satisfaction guarantee.</li>
        </ul>

        <h3 className="fs-3 fw-bold my-4 cta-subheading">
          🎯 Let’s create a website that actually works for you.
        </h3>

        <div className="cta-final-btn-wrapper">
          <Link
            to="/contact"
            className="btn btn-outline-primary btn-lg cta-btn-premium"
          >
            Get Your Premium Website Now →
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
