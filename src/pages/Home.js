// Import necessary hooks & dependencies
import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import testimonials from "../data/testimonials.js";
import SocialProof from "../components/SocialProof.js";
import ValueShowcase2 from "../components/ValueShowcase2.js";
import WorkProcess from "../components/WorkProcess.js";
import result from "../assets/images/result.png";
import FAQ from "../components/FAQ.js";
import FinalCta from "../components/FinalCta.js";
import "../styles/home.css";
import "../styles/sml-services.css";
import brand1 from "../assets/images/brand1.png";
import brand2 from "../assets/images/brand2.webp";
import brand3 from "../assets/images/brand3.webp";
import website1 from "../assets/images/website1.webp";
import website2 from "../assets/images/website2.webp";
import website3 from "../assets/images/website3.webp";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Dynamic Hero Text Animation
  const words = ["Profitable", "Scalable", "Reliable", "Premium"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Testimonial Slider
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000); // Auto-play every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Form State & Submission
  const [formData, setFormData] = useState({name: "", email: ""});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://leadform-backend-production.up.railway.app/submit", // ✅ UPDATED to public URL
        formData
      );
      setMessage(response.data.message);
      setFormData({name: "", email: ""}); // Reset form
    } catch (error) {
      console.error(error); // ✅ Still good for debugging
      setMessage("Error submitting form. Please try again.");
    }
  };

  const navigate = useNavigate();

  // Services Data
  const services = [
    {
      title: "Custom Website Design",
      description:
        "We create stunning, high-performance websites that convert.",
      icon: "🌐",
    },
    {
      title: "E-Commerce Development",
      description: "Powerful online stores built for more sales.",
      icon: "🛒",
    },
    {
      title: "SEO & Speed Optimization",
      description:
        "We make your site faster, rank higher, and attract more traffic.",
      icon: "⚡",
    },
    {
      title: "Website Redesign & Optimization",
      description: "We turn your site into a sales machine.",
      icon: "🎯",
    },
    {
      title: "Landing Pages & Funnels",
      description: "We help you convert more visitors into customers.",
      icon: "🚀",
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">
          Elevate Your Business with{" "}
          <span className={`dynamic-word ${fade ? "fade-in" : "fade-out"}`}>
            {words[currentWordIndex]}
          </span>{" "}
          Web Solutions
        </h1>
        <p className="hero-text">
          We create <strong>luxury websites</strong> that drive{" "}
          <strong>massive revenue & conversions</strong>.
        </p>
        <Link to="/portfolio" className="hero-button">
          View My Work
        </Link>
      </div>

      {/* Trust & Authority Section */}
      <div className="trust-section">
        <h2 className="trust-title">🏆 Trusted by Top Brands</h2>

        {/* Brand Logos */}
        <div className="brand-logos">
          <img src={brand1} alt="Brand 1" />
          <img src={brand2} alt="Brand 2" />
          <img src={brand3} alt="Brand 3" />
        </div>

        {/* Quick Stats */}
        <p className="quick-stats">
          🚀 50+ Websites Designed | 📅 10+ Years Experience | ⭐⭐⭐⭐⭐ 5-Star
          Client Reviews
        </p>
      </div>

      {/* Why Clients Love Alameen Web Design */}
      <section className="why-clients-love-section">
        <div className="why-clients-love-container">
          <h2 className="why-clients-love-title" data-aos="fade-up">
            💡 Why Clients Love{" "}
            <span className="why-clients-love-highlight">
              Alameen Web Design
            </span>
          </h2>
          <p
            className="why-clients-love-description"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            You’re not just getting a website—you’re getting a powerful business
            tool that works 24/7 to make you money.
          </p>

          <div className="why-clients-love-grid">
            {[
              "50+ high-converting websites designed",
              "Over $100M+ in revenue generated for clients",
              "Blazing-fast, SEO-optimized, and designed for sales",
              "Marketing-powered design that turns visitors into customers",
            ].map((text, index) => (
              <div
                key={index}
                className="why-clients-love-item"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <span className="why-clients-love-icon">✔</span>
                <p className="why-clients-love-text">{text}</p>
              </div>
            ))}
          </div>

          <div
            className="why-clients-love-image-container"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <img
              src={result}
              alt="Client Results"
              className="why-clients-love-image"
            />
          </div>
        </div>
        {/* Why Choose Us Button */}
        <div
          className="why-choose-us-container"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Link to="/about" className="why-choose-us-button">
            🚀 Why Choose Us
          </Link>
        </div>
      </section>

      {/* Testimonial Slider */}
      <div className="testimonial-slider">
        <button
          className="slider-btn slider-btn-left"
          onClick={prevTestimonial}
        >
          ‹
        </button>
        <div className="testimonial-content">
          <p className="testimonial-text">
            "{testimonials[currentIndex].feedback}"
          </p>
          <h3 className="client-name">
            {testimonials[currentIndex].name} -{" "}
            {testimonials[currentIndex].role}
          </h3>
        </div>
        <button
          className="slider-btn slider-btn-right"
          onClick={nextTestimonial}
        >
          ›
        </button>
      </div>

      {/* Irresistible Offer Section */}
      <div className="offer-section">
        <h2 className="offer-title">
          🚀 Get a Free Website Audit (Worth $200) – Limited Spots Available!
        </h2>
        <p className="offer-text">
          Find out what's stopping your website from converting visitors into
          customers in just 24 hours!
        </p>

        {/* Offer Form */}
        <form className="offer-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <button type="submit" className="offer-button">
            Claim Our Free Audit
          </button>
        </form>

        {/* Form Submission Message */}
        {message && <p className="form-message">{message}</p>}
      </div>

      {/* SHOWCASE SECTION */}

      <div className="showcase-work">
        <h2 className="showcase-title">Transforming Ideas into Reality</h2>
        <p className="showcase-subtitle">
          See how we've turned bold ideas into stunning, high-converting
          websites.
        </p>

        <div className="projects-container">
          <div className="project-card">
            <h3>High-Performance E-Commerce Website 🛍️</h3>
            <p>
              <strong>Client:</strong> TechGear Hub
            </p>
            <p>
              <strong>Features:</strong> Fast-loading, easy to use, and a
              checkout system so smooth that customers never drop off.
            </p>
            <p>
              <strong>Result:</strong> Boosted sales by +320% in 3 months!
            </p>
            <img
              src={website1}
              alt="E-Commerce Preview"
              className="project-image"
            />
            <Link to="/portfolio/project1" className="project-button">
              View Project
            </Link>
          </div>

          <div className="project-card">
            <h3>Luxury Brand Website 🎨</h3>
            <p>
              <strong>Client:</strong> Elite Fashion House
            </p>
            <p>
              <strong>Features:</strong> Stunning visuals, silky-smooth
              animations, and a sleek, high-end design that immediately grabs
              attention.
            </p>
            <p>
              <strong>Result:</strong> Elevated brand perception and increased
              engagement by +250%.
            </p>
            <img
              src={website2}
              alt="Luxury Brand Preview"
              className="project-image"
            />
            <Link to="/portfolio/project2" className="project-button">
              View Project
            </Link>
          </div>

          <div className="project-card">
            <h3>High-Converting SaaS Website 🚀</h3>
            <p>
              <strong>Client:</strong> InnovateX Software
            </p>
            <p>
              <strong>Features:</strong> Engaging UI, smartly placed buttons,
              and a website designed to turn visitors into loyal customers.
            </p>
            <p>
              <strong>Result:</strong> Skyrocketed conversions with a +400%
              increase in sign-ups.
            </p>
            <img
              src={website3}
              alt="SaaS Website Preview"
              className="project-image"
            />
            <Link to="/portfolio/project3" className="project-button">
              View Project
            </Link>
          </div>
        </div>

        <Link to="/contact" className="cta-button">
          🔹 Get a Custom Website
        </Link>
      </div>

      {/* ========== SERVICES SECTION ========== */}
      <section className="trust-services-section px-4 md:px-8 lg:px-16 xl:px-24 mt-16">
        <motion.h2
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          className="trust-services-title text-3xl font-bold text-center mb-8"
        >
          Our Services
        </motion.h2>
        <div className="trust-services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="trust-service-card shadow-lg rounded-lg p-6 text-center"
              initial={{opacity: 0, scale: 0.8}}
              animate={{opacity: 1, scale: 1}}
              transition={{duration: 0.5, delay: index * 0.2}}
              whileHover={{scale: 1.05}}
            >
              <span className="trust-service-icon text-4xl">
                {service.icon}
              </span>
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="mt-2">{service.description}</p>{" "}
              {/* Removed text-gray-600 */}
            </motion.div>
          ))}
        </div>
        <motion.button
          className="trust-services-cta-button py-3 px-6 text-lg mt-8 block mx-auto rounded-lg shadow-md"
          whileHover={{scale: 1.1}}
          onClick={() => navigate("/services")}
        >
          Learn More →
        </motion.button>
      </section>

      {/* SOCIAL PROOF SECTION */}
      <SocialProof />

      {/* ========== FINAL HIGH-CONVERTING CALL-TO-ACTION SECTION ========== */}
      <div className="final-cta-section">
        <h2 className="cta-title">
          Your Dream Website is Just One Click Away!
        </h2>
        <p className="cta-subtext">
          Stop losing customers to outdated designs! Get a sleek,
          high-performance website built to dominate your industry and
          **skyrocket your revenue**.
        </p>
        <div className="cta-buttons">
          <Link
            className="cta-button primary"
            href="tel:+2347083652671"
            onClick={(e) => {
              if (window.innerWidth >= 768) {
                e.preventDefault();
                alert("Please use a mobile device to call.");
              }
            }}
          >
            🔥 Claim Your Free Strategy Call
          </Link>

          <Link to="/contact" className="cta-button secondary">
            🚀 Launch Your Project Now
          </Link>
          <a
            href="https://wa.me/2347083652671"
            className="cta-button whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Instant WhatsApp Chat
          </a>
        </div>
      </div>

      {/* VALUE SHOWCASE SECTION */}
      <ValueShowcase2 />

      {/* WORKPROCESS SECTION */}
      <WorkProcess />
      {/* FAQ SECTION */}
      <FAQ />
      {/* FINAL CTA SECTION */}
      <FinalCta />
    </div>
  );
}

export default Home;
