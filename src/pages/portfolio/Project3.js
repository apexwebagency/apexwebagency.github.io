import {Button} from "../../components/ui/button.js";
import {Card, CardContent} from "../../components/ui/card.js";
import {motion} from "framer-motion";
import React, {useState, useEffect} from "react";
import axios from "axios"; // Import axios
import {useNavigate} from "react-router-dom";
import websiteImage from "../../assets/images/website3.webp";
import result from "../../assets/images/result3.png";
import "../../styles/project1.css";

export default function Project3() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
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

  return (
    <>
      <section
        className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-6 flex flex-col items-center text-center shadow-xl rounded-3xl"
        id="project1-hero-section"
      >
        <motion.div
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          className="max-w-3xl"
          id="project1-header-container"
        >
          <h1
            className="text-5xl font-extrabold text-white drop-shadow-xl"
            id="project1-title"
          >
            High-Converting SaaS Website for InnovateX Software 🚀
          </h1>
          <p
            className="text-lg text-gray-300 mt-3 tracking-wide"
            id="project1-subtitle"
          >
            +400% Sign-Ups in Record Time!
          </p>
        </motion.div>

        <motion.div
          initial={{opacity: 0, scale: 0.9}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.8, delay: 0.3}}
          className="mt-8 w-full max-w-4xl shadow-2xl rounded-2xl overflow-hidden"
          id="project1-image-container"
        >
          <img
            src={websiteImage}
            alt="Project Preview"
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
                id="project1-highlight-conversions"
              >
                🚀 <span>+400% More Sign-Ups</span>
              </li>
              <li
                className="flex items-center gap-2"
                id="project1-highlight-ui"
              >
                🎯 <span>Conversion-Driven Design</span>
              </li>
              <li
                className="flex items-center gap-2"
                id="project1-highlight-cta"
              >
                ⚡ <span>Strategically Placed CTAs</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.5}}
          className="mt-8"
          id="project1-cta-container"
        >
          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-4 text-lg font-bold !text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
            id="project1-cta-button"
          >
            Want Explosive Growth? Let’s Talk!
          </button>
        </motion.div>

        <p
          className="mt-6 text-sm text-gray-400 tracking-wide"
          id="project1-trust-badge"
        >
          Trusted by Leading SaaS Brands | ⭐⭐⭐⭐⭐
        </p>
      </section>
      <section
        className="bg-gray-900 text-white py-20 px-6 flex flex-col items-center text-center"
        id="project1-overview-section"
      >
        <motion.div
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          className="max-w-3xl"
          id="project1-overview-header"
        >
          <h1 className="text-4xl font-extrabold" id="project1-overview-title">
            High-Converting SaaS Website for InnovateX Software 🚀
          </h1>
          <p
            className="text-lg text-gray-300 mt-3"
            id="project1-overview-subtitle"
          >
            Smartly placed CTAs, engaging UI, and a conversion-driven experience
            that boosted sign-ups by +400%.
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
              Client Overview
            </h2>
            <p
              className="text-gray-300 text-lg"
              id="project1-client-background-text"
            >
              InnovateX Software is a cutting-edge SaaS company providing
              next-generation business solutions. They needed a website that
              could drive more conversions and optimize user engagement.
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
              Our goal was to design a high-performance website with an
              intuitive UI, persuasive CTAs, and seamless navigation to maximize
              user engagement and conversions.
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
              Key Achievements
            </h2>
            <ul
              className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg font-semibold text-gray-300"
              id="project1-key-objectives-list"
            >
              <li id="project1-key-objective-1">
                🚀 +400% Increase in Sign-ups
              </li>
              <li id="project1-key-objective-2">🎯 Optimized User Journey</li>
              <li id="project1-key-objective-3">
                📈 Higher Retention & Engagement
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
      <section
        className="bg-gray-900 text-white py-20 px-6 flex flex-col items-center text-center"
        id="project1-challenge-section"
      >
        <motion.div
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          className="max-w-3xl"
          id="project1-challenge-header"
        >
          <h1 className="text-4xl font-extrabold" id="project1-challenge-title">
            The Challenge – InnovateX Software's Growth Barrier 🚀
          </h1>
          <p
            className="text-lg text-gray-300 mt-3"
            id="project1-challenge-subtitle"
          >
            Identifying key obstacles to maximize conversions and engagement.
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
              Specific Pain Points
            </h2>
            <ul
              className="text-gray-300 text-lg space-y-2"
              id="project1-pain-points-list"
            >
              <li id="project1-pain-point-1">📉 Low user sign-up rates</li>
              <li id="project1-pain-point-2">
                🤖 Unintuitive UI & poor navigation
              </li>
              <li id="project1-pain-point-3">
                ⚠️ Ineffective CTAs leading to drop-offs
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
              Impact of These Pain Points
            </h2>
            <ul
              className="text-gray-300 text-lg space-y-2"
              id="project1-impact-list"
            >
              <li id="project1-impact-1">📉 Missed revenue opportunities</li>
              <li id="project1-impact-2">
                😟 Frustrated users & low engagement
              </li>
              <li id="project1-impact-3">
                🚪 High bounce rates affecting retention
              </li>
            </ul>
            <p className="text-gray-300 mt-4" id="project1-impact-summary">
              "InnovateX Software was losing potential customers due to a
              confusing user journey and weak call-to-action placements."
            </p>
          </CardContent>
        </Card>
      </section>

      <section
        className="bg-gray-900 text-white py-20 px-6 flex flex-col items-center text-center"
        id="project1-strategy-section"
      >
        <motion.div
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
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
            A conversion-driven, user-focused strategy to turn InnovateX
            Software into a high-performing SaaS platform.
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
              <li id="project1-analysis-item1">User flow optimization</li>
              <li id="project1-analysis-item2">
                Competitor research & benchmarking
              </li>
              <li id="project1-analysis-item3">Performance & UX audits</li>
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
                Sleek, conversion-focused SaaS UI
              </li>
              <li id="project1-design-item2">
                Seamless user onboarding & experience
              </li>
              <li id="project1-design-item3">
                Optimized CTAs & frictionless sign-up process
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
                Enhanced speed with minimized scripts & assets
              </li>
              <li id="project1-performance-item2">
                Caching strategies & API load balancing
              </li>
              <li id="project1-performance-item3">
                Mobile responsiveness & accessibility improvements
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
              Conversion Optimization
            </h2>
            <ul
              className="text-gray-300 text-lg list-disc list-inside"
              id="project1-conversion-optimization-list"
            >
              <li id="project1-conversion-item1">
                Smartly placed CTAs for lead generation
              </li>
              <li id="project1-conversion-item2">
                Trust elements: testimonials, case studies, and security badges
              </li>
              <li id="project1-conversion-item3">
                Continuous A/B testing for higher engagement
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
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          className="max-w-4xl"
          id="project1-results-header"
        >
          <h1 className="text-4xl font-extrabold" id="project1-results-title">
            The Results
          </h1>
          <p
            className="text-lg text-gray-300 mt-3"
            id="project1-results-subtitle"
          >
            Measurable impact on InnovateX Software’s user acquisition &
            retention.
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
              Key Metrics
            </h2>
            <ul className="text-gray-300 text-lg list-disc list-inside">
              <li id="project1-signups">+400% Increase in Sign-Ups</li>
              <li id="project1-engagement">
                2X Higher User Engagement & Retention
              </li>
              <li id="project1-loading-time">
                Page Load Speed Optimized to &lt; 1 Second
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
              Visual Data Representation
            </h2>
            <img
              src={result}
              alt="Performance Metrics"
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
              Beyond the Numbers
            </h2>
            <ul className="text-gray-300 text-lg list-disc list-inside">
              <li id="project1-user-feedback">
                Increased positive user feedback
              </li>
              <li id="project1-support-tickets">
                Reduced support tickets by 60%
              </li>
              <li id="project1-brand-perception">
                Enhanced brand trust & perception
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
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
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
            See how we transformed InnovateX Software’s website into a
            conversion powerhouse.
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
              “After the redesign, our sign-ups increased by over 400%! The site
              is incredibly fast, user-friendly, and drives real conversions.
              Best investment we made for our SaaS platform!”
            </p>
            <div
              className="text-gray-400 text-lg font-semibold"
              id="project1-testimonial-client"
            >
              <p id="project1-testimonial-name">Alex Carter</p>
              <p id="project1-testimonial-title">CEO of InnovateX Software</p>
            </div>
          </CardContent>
        </Card>

        <button
          onClick={() => navigate("/contact")}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-bold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
          id="project1-testimonial-button"
        >
          Get Your High-Converting Website Now →
        </button>
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
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          className="max-w-4xl project1-summary"
          id="project1-summary"
        >
          <h1
            className="text-4xl font-extrabold project1-summary-title"
            id="project1-summary-title"
          >
            Transform Your SaaS Business—Next Success Story? 🚀
          </h1>
          <p
            className="text-lg text-gray-300 mt-3 project1-summary-description"
            id="project1-summary-description"
          >
            InnovateX Software went from an outdated website to a **+400%
            increase in sign-ups** with a sleek, high-converting redesign.
          </p>
        </motion.div>

        <Card
          className="mt-10 bg-gray-800 text-white shadow-lg max-w-4xl p-6 project1-reassurance"
          id="project1-reassurance"
        >
          <CardContent className="project1-reassurance-content">
            <h2 className="text-2xl font-semibold mb-3 project1-reassurance-title">
              Let’s Make It Happen for You!
            </h2>
            <p className="text-lg text-gray-300 project1-reassurance-description">
              Your SaaS platform deserves a website that converts. Get a
              cutting-edge, user-friendly design that drives real results.
            </p>
          </CardContent>
        </Card>

        <button
          onClick={() => navigate("/contact")}
          className="mt-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 project1-cta-button"
          id="project1-cta-button"
        >
          Ready to Skyrocket Conversions? Contact Us Now!
        </button>
      </section>
    </>
  );
}
