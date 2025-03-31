import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Input} from "./ui/input.js";
import {Button} from "./ui/button.js";
import {Card, CardContent} from "./ui/card.js";
import {AnimatePresence, motion} from "framer-motion";
import {Search, Mic, ThumbsUp, ThumbsDown} from "lucide-react";
import "../styles/faq.css";

const faqs = [
  {
    id: 1,
    question: "How long does it take to build my website?",
    answer:
      "\ud83d\ude80 Fast, efficient, and built for success! Most websites are completed in 2-4 weeks, depending on complexity. Need it sooner? Rush options available.",
  },
  {
    id: 2,
    question: "Will my website work perfectly on mobile?",
    answer:
      "\ud83d\udcf1 Absolutely! In today’s world, over 70% of users browse on mobile. We build 100% responsive, lightning-fast sites that look and perform flawlessly on any device.",
  },
  {
    id: 3,
    question: "Do you offer support after launch?",
    answer:
      "\ud83d\udca1 Yes! A great website is just the start. We offer post-launch maintenance and support plans to keep your site updated, secure, and running like a sales machine.",
  },
  {
    id: 4,
    question: "What makes your designs different?",
    answer:
      "\ud83d\udd25 Most designers focus on “pretty.” We focus on profit. My websites are built with psychology-driven layouts, conversion-focused strategies, and cutting-edge marketing tactics—so your site doesn’t just look great, it sells like crazy.",
  },
  {
    id: 5,
    question: "What if I don’t know what I want my website to look like?",
    answer:
      "\ud83c\udfaf No problem! We guide you through a streamlined process to uncover your brand’s perfect online presence, ensuring your site is not just stunning but also built to convert visitors into buyers.",
  },
  {
    id: 6,
    question: "How much does a website cost?",
    answer:
      "\ud83d\udcb0 It depends on your business needs. We offer flexible, value-packed pricing with custom options tailored to your goals. A great website is an investment that pays for itself—let’s make sure yours does exactly that.",
  },
  {
    id: 7,
    question: "What’s the next step?",
    answer:
      "\ud83d\ude80 Let’s build something powerful. Click below to start your journey towards a website that works harder than your competitors’.",
  },
];

export default function UltimateFAQ() {
  const [search, setSearch] = useState("");
  const [selectedFAQ, setSelectedFAQ] = useState(null);
  const [feedback, setFeedback] = useState({});
  const [isListening, setIsListening] = useState(false);
  let recognition;

  useEffect(() => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onresult = (event) =>
        setSearch(event.results[0][0].transcript);
      recognition.onerror = () => setIsListening(false);
    }
  }, []);

  const startListening = () => {
    if (recognition) recognition.start();
    else alert("Your browser does not support speech recognition.");
  };

  const handleFeedback = (id, type) => {
    setFeedback((prev) => ({...prev, [id]: prev[id] === type ? null : type}));
  };

  const filteredFAQs = search
    ? faqs.filter((faq) =>
        faq.question.toLowerCase().includes(search.toLowerCase())
      )
    : faqs.slice(0, 4);

  const navigate = useNavigate();

  return (
    <div className="faq-container">
      <h1 className="faq-title">
        Got Questions? Here’s What You Need to Know.
      </h1>
      <p className="faq-description">
        Your website isn’t just a design—it’s a powerful money-making machine.
      </p>

      <div className="faq-search-container">
        <Input
          className="faq-search-input"
          placeholder="Search FAQs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search className="faq-search-icon" />
        <Mic
          className={`faq-mic-icon ${isListening ? "listening" : ""}`}
          onClick={startListening}
        />
      </div>

      <AnimatePresence>
        {filteredFAQs.map((faq) => (
          <motion.div
            key={faq.id}
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -10}}
            transition={{duration: 0.3}}
          >
            <Card className="faq-card">
              <CardContent
                className="faq-question"
                onClick={() =>
                  setSelectedFAQ(selectedFAQ === faq.id ? null : faq.id)
                }
              >
                <span>{faq.question}</span>
              </CardContent>
              {selectedFAQ === faq.id && (
                <motion.div
                  initial={{height: 0, opacity: 0}}
                  animate={{height: "auto", opacity: 1}}
                  exit={{height: 0, opacity: 0}}
                  transition={{duration: 0.3}}
                  className="faq-answer"
                >
                  <p>{faq.answer}</p>
                  <div className="faq-feedback">
                    <ThumbsUp
                      className={`feedback-icon ${
                        feedback[faq.id] === "like" ? "liked" : ""
                      }`}
                      onClick={() => handleFeedback(faq.id, "like")}
                    />
                    <ThumbsDown
                      className={`feedback-icon ${
                        feedback[faq.id] === "dislike" ? "disliked" : ""
                      }`}
                      onClick={() => handleFeedback(faq.id, "dislike")}
                    />
                  </div>
                </motion.div>
              )}
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>
      <Button className="faq-cta-button" onClick={() => navigate("/contact")}>
        Need More Help? Contact Us!
      </Button>
    </div>
  );
}
