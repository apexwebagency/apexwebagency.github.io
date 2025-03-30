import { Button } from "../../components/ui/button.js";
import { Card, CardContent } from "../../components/ui/card.js";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import websiteImage from "../../assets/images/website2.webp";
import result from "../../assets/images/result2.png";
import "../../styles/project1.css";

export default function Project2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/submit",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setMessage(response.data.message);
      setFormData({ name: "", email: "" });
    } catch (error) {
      setMessage("Error submitting form. Please try again.");
    }
  };

  return (
    <>
      <section
        className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-6 flex flex-col items-center text-center shadow-xl rounded-3xl"
        id="project1-hero-section"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
          id="project1-header-container"
        >
          <h1
            className="text-5xl font-extrabold text-white drop-shadow-xl"
            id="project1-title"
          >
            Luxury Brand Website for Elite Fashion House
          </h1>
          <p
            className="text-lg text-gray-300 mt-3 tracking-wide"
            id="project1-subtitle"
          >
            +250% Engagement Surge with Stunning Aesthetics
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 w-full max-w-4xl shadow-2xl rounded-2xl overflow-hidden"
          id="project1-image-container"
        >
          <img
            src={websiteImage}
            alt="Luxury Brand Website Preview"
            width={800}
            height={450}
            className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
            id="project1-image"
          />
        </motion.div>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-2xl rounded-xl max-w-3xl border border-gray-700"
          id="project1-card"
        >
          <CardContent className="p-8" id="project1-card-content">
            <ul
              className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg font-semibold text-gray-300"
              id="project1-key-highlights"
            >
              <li
                className="flex items-center gap-2"
                id="project1-highlight-visuals"
              >
                🎨 <span>High-End Aesthetics</span>
              </li>
              <li
                className="flex items-center gap-2"
                id="project1-highlight-animation"
              >
                ✨ <span>Silky-Smooth Animations</span>
              </li>
              <li
                className="flex items-center gap-2"
                id="project1-highlight-engagement"
              >
                🚀 <span>+250% Engagement Increase</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8"
          id="project1-cta-container"
        >
          <Button
            className="px-8 py-4 text-lg font-bold !text-white bg-gradient-to-r from-purple-500 to-pink-700 hover:from-purple-600 hover:to-pink-800 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
            id="project1-cta-button"
          >
            Elevate Your Brand. Let’s Talk!
          </Button>
        </motion.div>

        <p
          className="mt-6 text-sm text-gray-400 tracking-wide"
          id="project1-trust-badge"
        >
          Trusted by Luxury Brands | ⭐⭐⭐⭐⭐
        </p>
      </section>
      <section
        className="bg-gray-900 text-white py-20 px-6 flex flex-col items-center text-center"
        id="project1-overview-section"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
          id="project1-overview-header"
        >
          <h1 className="text-4xl font-extrabold" id="project1-overview-title">
            Elite Fashion House - Luxury Brand Website
          </h1>
          <p
            className="text-lg text-gray-300 mt-3"
            id="project1-overview-subtitle"
          >
            Stunning Visuals, Seamless Animations, and a High-End Aesthetic
          </p>
        </motion.div>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6"
          id="project1-client-background"
        >
          <CardContent id="project1-client-background-content">
            <h2
              className="text-2xl font-semibold mb-3"
              id="project1-client-background-title"
            >
              Client Background
            </h2>
            <p
              className="text-gray-300 text-lg"
              id="project1-client-background-text"
            >
              Elite Fashion House is a prestigious luxury fashion brand known
              for its timeless designs and premium craftsmanship. They sought a
              digital experience that mirrored their brand's exclusivity,
              sophistication, and elegance.
            </p>
          </CardContent>
        </Card>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6"
          id="project1-project-scope"
        >
          <CardContent id="project1-project-scope-content">
            <h2
              className="text-2xl font-semibold mb-3"
              id="project1-project-scope-title"
            >
              Project Scope
            </h2>
            <p
              className="text-gray-300 text-lg"
              id="project1-project-scope-text"
            >
              Our goal was to craft a visually stunning, high-performance
              website that seamlessly integrated luxury aesthetics with
              silky-smooth animations and an intuitive user experience.
            </p>
          </CardContent>
        </Card>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6"
          id="project1-key-objectives"
        >
          <CardContent id="project1-key-objectives-content">
            <h2
              className="text-2xl font-semibold mb-3"
              id="project1-key-objectives-title"
            >
              Key Objectives
            </h2>
            <ul
              className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg font-semibold text-gray-300"
              id="project1-key-objectives-list"
            >
              <li id="project1-key-objective-1">
                🎨 High-End Aesthetic Design
              </li>
              <li id="project1-key-objective-2">
                💎 Smooth, Elegant Animations
              </li>
              <li id="project1-key-objective-3">📈 +250% Engagement Growth</li>
            </ul>
          </CardContent>
        </Card>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8"
          id="project1-cta-container"
        >
          <Button
            className="px-8 py-4 text-lg font-bold !text-white bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
            id="project1-cta-button"
          >
            Elevate Your Brand’s Digital Presence Today!
          </Button>
        </motion.div>
      </section>
      <section
        className="bg-gray-900 text-white py-20 px-6 flex flex-col items-center text-center"
        id="project1-challenge-section"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
          id="project1-challenge-header"
        >
          <h1 className="text-4xl font-extrabold" id="project1-challenge-title">
            The Challenge - Elevating Luxury Online
          </h1>
          <p
            className="text-lg text-gray-300 mt-3"
            id="project1-challenge-subtitle"
          >
            Crafting a digital experience that reflects Elite Fashion House’s
            prestige.
          </p>
        </motion.div>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6"
          id="project1-pain-points"
        >
          <CardContent>
            <h2
              className="text-2xl font-semibold mb-3"
              id="project1-pain-points-title"
            >
              Specific Challenges
            </h2>
            <ul
              className="text-gray-300 text-lg space-y-2"
              id="project1-pain-points-list"
            >
              <li id="project1-pain-point-1">
                💎 Lack of immersive luxury aesthetics
              </li>
              <li id="project1-pain-point-2">
                🚀 Suboptimal page performance & loading speed
              </li>
              <li id="project1-pain-point-3">
                ⚠️ Low engagement and limited brand storytelling
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6"
          id="project1-impact"
        >
          <CardContent>
            <h2
              className="text-2xl font-semibold mb-3"
              id="project1-impact-title"
            >
              Impact of These Challenges
            </h2>
            <ul
              className="text-gray-300 text-lg space-y-2"
              id="project1-impact-list"
            >
              <li id="project1-impact-1">📉 Decreased brand perception</li>
              <li id="project1-impact-2">
                😞 Low customer retention & engagement
              </li>
              <li id="project1-impact-3">💸 Missed revenue opportunities</li>
            </ul>
            <p className="text-gray-300 mt-4" id="project1-impact-summary">
              "Elite Fashion House needed a platform that exudes sophistication
              while ensuring flawless functionality."
            </p>
          </CardContent>
        </Card>
      </section>

      <section
        className="bg-gray-900 text-white py-20 px-6 flex flex-col items-center text-center"
        id="project1-strategy-section"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
          id="project1-strategy-header"
        >
          <h1 className="text-4xl font-extrabold" id="project1-strategy-title">
            Our Strategic Approach
          </h1>
          <p
            className="text-lg text-gray-300 mt-3"
            id="project1-strategy-subtitle"
          >
            Designing an immersive, high-end digital experience that elevates
            the brand.
          </p>
        </motion.div>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6"
          id="project1-analysis"
        >
          <CardContent id="project1-analysis-content">
            <h2
              className="text-2xl font-semibold mb-3"
              id="project1-analysis-title"
            >
              In-Depth Analysis
            </h2>
            <ul
              className="text-gray-300 text-lg list-disc list-inside"
              id="project1-analysis-list"
            >
              <li id="project1-analysis-item1">
                Market trends & luxury brand positioning
              </li>
              <li id="project1-analysis-item2">
                User behavior and engagement insights
              </li>
              <li id="project1-analysis-item3">
                Performance and accessibility audits
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6"
          id="project1-design-development"
        >
          <CardContent id="project1-design-development-content">
            <h2
              className="text-2xl font-semibold mb-3"
              id="project1-design-development-title"
            >
              Design & Development
            </h2>
            <ul
              className="text-gray-300 text-lg list-disc list-inside"
              id="project1-design-development-list"
            >
              <li id="project1-design-item1">
                Elegant, high-end visuals with silky-smooth animations
              </li>
              <li id="project1-design-item2">
                Luxury-inspired UI with seamless navigation
              </li>
              <li id="project1-design-item3">
                Mobile-first, pixel-perfect responsive design
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6"
          id="project1-performance-optimization"
        >
          <CardContent id="project1-performance-optimization-content">
            <h2
              className="text-2xl font-semibold mb-3"
              id="project1-performance-optimization-title"
            >
              Performance Optimization
            </h2>
            <ul
              className="text-gray-300 text-lg list-disc list-inside"
              id="project1-performance-optimization-list"
            >
              <li id="project1-performance-item1">
                High-speed, optimized image delivery
              </li>
              <li id="project1-performance-item2">
                Advanced caching & content delivery networks
              </li>
              <li id="project1-performance-item3">
                Minimalistic, ultra-fast code architecture
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6"
          id="project1-conversion-optimization"
        >
          <CardContent id="project1-conversion-optimization-content">
            <h2
              className="text-2xl font-semibold mb-3"
              id="project1-conversion-optimization-title"
            >
              Engagement & Conversion Optimization
            </h2>
            <ul
              className="text-gray-300 text-lg list-disc list-inside"
              id="project1-conversion-optimization-list"
            >
              <li id="project1-conversion-item1">
                Luxury storytelling through dynamic visuals
              </li>
              <li id="project1-conversion-item2">
                Seamless checkout with trust-building elements
              </li>
              <li id="project1-conversion-item3">
                Strategic call-to-actions to enhance engagement
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
      <section
        className="bg-gray-900 text-white py-20 px-6 flex flex-col items-center text-center"
        id="project1-results-section"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
          id="project1-results-header"
        >
          <h1 className="text-4xl font-extrabold" id="project1-results-title">
            The Transformation
          </h1>
          <p
            className="text-lg text-gray-300 mt-3"
            id="project1-results-subtitle"
          >
            How our expertise elevated Elite Fashion House's digital presence.
          </p>
        </motion.div>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6"
          id="project1-key-metrics"
        >
          <CardContent>
            <h2
              className="text-2xl font-semibold mb-3"
              id="project1-metrics-title"
            >
              Performance Highlights
            </h2>
            <ul className="text-gray-300 text-lg list-disc list-inside">
              <li id="project1-engagement">
                +250% increase in brand engagement
              </li>
              <li id="project1-visual-impact">
                Ultra-smooth animations & visuals
              </li>
              <li id="project1-luxury-feel">
                Enhanced high-end aesthetic for luxury appeal
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6"
          id="project1-visual-data"
        >
          <CardContent>
            <h2
              className="text-2xl font-semibold mb-3"
              id="project1-visual-title"
            >
              Visual Impact
            </h2>
            <img
              src={result}
              alt="Elite Fashion House Website Preview"
              className="w-full rounded-lg shadow-md"
              id="project1-results-image"
            />
          </CardContent>
        </Card>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6"
          id="project1-beyond-numbers"
        >
          <CardContent>
            <h2
              className="text-2xl font-semibold mb-3"
              id="project1-beyond-title"
            >
              Beyond the Metrics
            </h2>
            <ul className="text-gray-300 text-lg list-disc list-inside">
              <li id="project1-user-feedback">
                Clients raving about the ultra-premium experience
              </li>
              <li id="project1-trust">
                Elevated brand perception & exclusivity
              </li>
              <li id="project1-loyalty">
                Increased customer retention in the luxury market
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
      <section
        className="bg-gray-900 text-white py-20 px-6 flex flex-col items-center text-center"
        id="project1-testimonial-section"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
          id="project1-testimonial-header"
        >
          <h1
            className="text-4xl font-extrabold"
            id="project1-testimonial-title"
          >
            Client Testimonial
          </h1>
          <p
            className="text-lg text-gray-300 mt-3"
            id="project1-testimonial-subtitle"
          >
            See how we transformed Elite Fashion House’s digital presence.
          </p>
        </motion.div>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6"
          id="project1-testimonial-card"
        >
          <CardContent>
            <p
              className="text-xl italic text-gray-300 mb-4"
              id="project1-testimonial-quote"
            >
              “Our website now embodies luxury. The sleek animations, high-end
              aesthetics, and seamless experience have elevated our brand’s
              prestige. Engagement has soared, and our clientele feels the
              exclusivity.”
            </p>
            <div
              className="text-gray-400 text-lg font-semibold"
              id="project1-testimonial-client"
            >
              <p id="project1-testimonial-name">Sophia Laurent</p>
              <p id="project1-testimonial-title">
                Creative Director, Elite Fashion House
              </p>
            </div>
          </CardContent>
        </Card>

        <Button
          className="mt-6 bg-gold-500 hover:bg-gold-600 text-white py-2 px-6 rounded-lg"
          id="project1-testimonial-button"
        >
          Elevate Your Brand Now →
        </Button>
      </section>

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

      <section
        className="bg-gray-900 text-white py-20 px-6 flex flex-col items-center text-center project1-next-steps"
        id="project1-next-steps"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl project1-summary"
          id="project1-summary"
        >
          <h1
            className="text-4xl font-extrabold project1-summary-title"
            id="project1-summary-title"
          >
            Elevate Your Brand to Elite Status
          </h1>
          <p
            className="text-lg text-gray-300 mt-3 project1-summary-description"
            id="project1-summary-description"
          >
            Elite Fashion House transformed its online presence with a sleek,
            high-end website—achieving a +250% engagement boost.
          </p>
        </motion.div>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6 project1-reassurance"
          id="project1-reassurance"
        >
          <CardContent className="project1-reassurance-content">
            <h2 className="text-2xl font-semibold mb-3 project1-reassurance-title">
              Your Luxury Brand Deserves the Best
            </h2>
            <p className="text-lg text-gray-300 project1-reassurance-description">
              Don't let an outdated website dull your brand’s prestige. Let’s
              craft a digital experience that matches your luxury identity.
            </p>
          </CardContent>
        </Card>

        <Button
          className="mt-10 bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 project1-cta-button"
          id="project1-cta-button"
        >
          Build Your Luxury Website Now →
        </Button>
      </section>
    </>
  );
}
