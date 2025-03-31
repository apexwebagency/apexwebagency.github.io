import React from "react";
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import {Card, CardContent} from "../components/ui/card.js";
import {Button} from "../components/ui/button.js";
import "../styles/trust.css";
import "../styles/sml-services.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const services = [
  {
    title: "Custom Website Design",
    description: "We create stunning, high-performance websites that convert.",
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

export default function Trust() {
  const navigate = useNavigate();
  return (
    <>
      <section className="trust-section px-4 md:px-8 lg:px-16 xl:px-24 mt-16">
        <Card className="trust-card shadow-lg rounded-lg overflow-hidden">
          <CardContent className="trust-card-content p-8">
            <motion.h2
              initial={{opacity: 0, y: -20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6}}
              className="trust-heading text-3xl font-bold text-center mb-4"
            >
              Why You Can Trust Alameen Web Design
            </motion.h2>
            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.2, duration: 0.6}}
              className="trust-subheading text-lg text-center mb-8"
            >
              At Alameen Web Design, we don’t just build websites—we build
              money-making machines for businesses like yours.
            </motion.p>
            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.4, duration: 0.6}}
              className="trust-description text-base text-center mb-8"
            >
              We know what works. With deep marketing expertise, we create
              websites that attract, engage, and convert. No fluff. No
              guesswork. Just results.
            </motion.p>
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.6, duration: 0.6}}
              className="trust-list-container max-w-2xl mx-auto"
            >
              <ul className="trust-list list-none space-y-4">
                <li className="trust-list-item flex items-start">
                  <span className="trust-list-icon mr-3 text-green-500 text-2xl">
                    ✅
                  </span>
                  <span className="trust-list-text text-lg">
                    <strong>Your Website Will Sell for You</strong> – Every
                    design choice is made to turn visitors into customers. No
                    more losing sales.
                  </span>
                </li>
                <li className="trust-list-item flex items-start">
                  <span className="trust-list-icon mr-3 text-green-500 text-2xl">
                    ✅
                  </span>
                  <span className="trust-list-text text-lg">
                    <strong>Marketing & Web Design in One</strong> – Unlike
                    basic designers, we understand how to make people buy. Your
                    website won’t just look good—it’ll work like a 24/7
                    salesman.
                  </span>
                </li>
                <li className="trust-list-item flex items-start">
                  <span className="trust-list-icon mr-3 text-green-500 text-2xl">
                    ✅
                  </span>
                  <span className="trust-list-text text-lg">
                    <strong>Fast, Smooth, & Google-Friendly</strong> – Your site
                    will load instantly, work perfectly on all devices, and rank
                    higher on Google for more traffic.
                  </span>
                </li>
                <li className="trust-list-item flex items-start">
                  <span className="trust-list-icon mr-3 text-green-500 text-2xl">
                    ✅
                  </span>
                  <span className="trust-list-text text-lg">
                    <strong>Custom-Made for Maximum Profits</strong> – No
                    generic templates. We build sites that fit your brand, your
                    audience, and your business goals.
                  </span>
                </li>
                <li className="trust-list-item flex items-start">
                  <span className="trust-list-icon mr-3 text-green-500 text-2xl">
                    ✅
                  </span>
                  <span className="trust-list-text text-lg">
                    <strong>No Confusion. No Delays. Just Results.</strong> – We
                    make the process fast, easy, and stress-free so you can
                    focus on running your business.
                  </span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.8, duration: 0.6}}
              className="trust-cta text-center mt-8"
            >
              <p className="trust-cta-heading text-xl font-semibold mb-4">
                Your Business Deserves a Website That Brings in Sales.
              </p>
              <p className="trust-cta-heading text-xl font-semibold mb-8">
                Let’s build it today.
              </p>
              <Button
                className="trust-cta-button cta-button py-3 px-6 text-lg md:text-xl"
                onClick={() => navigate("/contact")}
              >
                📩 Get Your Winning Website Now!
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </section>

      <section className="trust-alpha-section px-4 md:px-8 lg:px-16 xl:px-24 mt-16">
        <Card className="trust-alpha-card shadow-lg rounded-lg overflow-hidden">
          <CardContent className="trust-alpha-card-content p-8">
            <motion.h2
              initial={{opacity: 0, y: -20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6}}
              className="trust-alpha-heading text-3xl font-bold text-center mb-4"
            >
              Your Business Needs More Than Just a Website—It Needs a
              Money-Making Machine
            </motion.h2>
            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.2, duration: 0.6}}
              className="trust-alpha-subheading text-lg text-center mb-8"
            >
              Most websites sit there doing nothing. Ours work 24/7 to bring you
              leads, sales, and real growth.
            </motion.p>
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.4, duration: 0.6}}
              className="trust-alpha-list-container max-w-2xl mx-auto"
            >
              <ul className="trust-alpha-list list-none space-y-4">
                <li className="trust-alpha-list-item flex items-start">
                  <span className="trust-alpha-list-icon mr-3 text-green-500 text-2xl">
                    ✅
                  </span>
                  <span className="trust-alpha-list-text text-lg">
                    <strong>Built for Results</strong> – More clicks, more
                    calls, more customers.
                  </span>
                </li>
                <li className="trust-alpha-list-item flex items-start">
                  <span className="trust-alpha-list-icon mr-3 text-green-500 text-2xl">
                    ✅
                  </span>
                  <span className="trust-alpha-list-text text-lg">
                    <strong>Tailored for You</strong> – No generic templates.
                    Just a website that fits your business perfectly.
                  </span>
                </li>
                <li className="trust-alpha-list-item flex items-start">
                  <span className="trust-alpha-list-icon mr-3 text-green-500 text-2xl">
                    ✅
                  </span>
                  <span className="trust-alpha-list-text text-lg">
                    <strong>Fast & Google-Friendly</strong> – Speed and SEO that
                    keep you ahead of competitors.
                  </span>
                </li>
                <li className="trust-alpha-list-item flex items-start">
                  <span className="trust-alpha-list-icon mr-3 text-green-500 text-2xl">
                    ✅
                  </span>
                  <span className="trust-alpha-list-text text-lg">
                    <strong>Clear, Powerful Strategy</strong> – Every page is
                    designed to turn visitors into buyers.
                  </span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.6, duration: 0.6}}
              className="trust-alpha-cta text-center mt-8"
            >
              <p className="trust-alpha-cta-heading text-xl font-semibold mb-4">
                Your Website Should Be Your Best Salesperson.
              </p>
              <p className="trust-alpha-cta-heading text-xl font-semibold mb-8">
                Let’s build you a website that actually works.
              </p>
              <Button
                className="trust-alpha-cta-button py-3 px-6 text-lg md:text-xl"
                onClick={() => navigate("/contact")}
              >
                🚀 Get Started Now
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </section>
      <section className="trust-section px-4 md:px-8 lg:px-16 xl:px-24 mt-16">
        <Card className="trust-card shadow-lg rounded-lg overflow-hidden">
          <CardContent className="trust-card-content p-8">
            <motion.h2
              initial={{opacity: 0, y: -20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6}}
              className="trust-heading text-3xl font-bold text-center mb-4"
            >
              Built for Trust. Designed for Success.
            </motion.h2>
            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.2, duration: 0.6}}
              className="trust-subheading text-lg text-center mb-8"
            >
              More sales. More customers. More growth. Our websites don’t just
              look great—they make you money.
            </motion.p>
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.4, duration: 0.6}}
              className="trust-list-container max-w-2xl mx-auto"
            >
              <ul className="trust-list list-none space-y-4 flex flex-col items-center">
                <li className="trust-list-item flex items-start justify-center text-center">
                  <span className="trust-list-icon mr-3 text-blue-500 text-2xl">
                    💎
                  </span>
                  <span className="trust-list-text text-lg">
                    <strong>We Deliver Real Results</strong> – No fluff, just
                    high-converting websites.
                  </span>
                </li>
                <li className="trust-list-item flex items-start justify-center text-center">
                  <span className="trust-list-icon mr-3 text-blue-500 text-2xl">
                    🚀
                  </span>
                  <span className="trust-list-text text-lg">
                    <strong>Blazing-Fast & Flawless</strong> – No slow loading,
                    just high-speed performance.
                  </span>
                </li>
                <li className="trust-list-item flex items-start justify-center text-center">
                  <span className="trust-list-icon mr-3 text-blue-500 text-2xl">
                    🔒
                  </span>
                  <span className="trust-list-text text-lg">
                    <strong>Rock-Solid Security</strong> – 99.9% uptime, no
                    worries.
                  </span>
                </li>
                <li className="trust-list-item flex items-start justify-center text-center">
                  <span className="trust-list-icon mr-3 text-blue-500 text-2xl">
                    🎯
                  </span>
                  <span className="trust-list-text text-lg">
                    <strong>SEO & Marketing That Work</strong> – Rank high,
                    attract customers on autopilot.
                  </span>
                </li>
                <li className="trust-list-item flex items-start justify-center text-center">
                  <span className="trust-list-icon mr-3 text-blue-500 text-2xl">
                    🤝
                  </span>
                  <span className="trust-list-text text-lg">
                    <strong>We’re In This for the Long Run</strong> – We build,
                    scale, and help you dominate.
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.6, duration: 0.6}}
              className="trust-cta text-center mt-8"
            >
              <p className="trust-cta-heading text-xl font-semibold mb-4">
                Stop settling for average.
              </p>
              <p className="trust-cta-heading text-xl font-semibold mb-8">
                Get a website that drives serious results.
              </p>
              <Button
                className="trust-cta-button cta-button py-3 px-6 text-lg md:text-xl"
                onClick={() => navigate("/contact")}
              >
                📩 Let’s build your success story—starting today.
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </section>

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
      <section className="alameen-trust-section px-4 md:px-8 lg:px-16 xl:px-24 mt-16">
        <Card className="alameen-trust-card shadow-lg rounded-lg overflow-hidden">
          <CardContent className="alameen-trust-card-content p-8">
            <motion.h2
              initial={{opacity: 0, y: -20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6}}
              className="alameen-trust-heading text-3xl font-bold text-center mb-4"
            >
              🚀 Your Success Starts Here
            </motion.h2>
            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.2, duration: 0.6}}
              className="text-lg text-center mb-8"
            >
              We don’t just design websites—we build money-making machines.
            </motion.p>
            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.4, duration: 0.6}}
              className="text-base text-center mb-8"
            >
              Your competitors are using high-performance websites to get more
              customers and make more sales—why not you?
            </motion.p>
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.6, duration: 0.6}}
              className="max-w-2xl mx-auto"
            >
              <ul className="list-none space-y-4">
                <li className="flex items-center">
                  <i className="mr-3 fa-solid fa-check-circle text-2xl"></i>
                  <span className="text-lg">
                    Beautiful, professional, and fast websites
                  </span>
                </li>
                <li className="flex items-center">
                  <i className="mr-3 fa-solid fa-check-circle text-2xl"></i>
                  <span className="text-lg">
                    Designed to attract, engage, and convert
                  </span>
                </li>
                <li className="flex items-center">
                  <i className="mr-3 fa-solid fa-check-circle text-2xl"></i>
                  <span className="text-lg">
                    Built for long-term success and maximum profit
                  </span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.8, duration: 0.6}}
              className="text-center mt-8"
            >
              <p className="text-xl font-semibold mb-4">
                🔹 Let’s create a website that works for you.
              </p>
              <Button
                className="py-3 px-6 text-lg md:text-xl"
                onClick={() => navigate("/contact")}
              >
                🔥 Start with Alameen Web Design today
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
