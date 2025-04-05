import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Moon, Sun } from "lucide-react";

const navLinks = [
  {
    to: "/lawyers",
    title: "Expert Lawyers",
    desc: "Connect with top-rated lawyers across criminal, civil, family, corporate and more. Get trusted legal advice and professional representation tailored to your needs.",
    bg: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1050&q=80')",
    accentColor: "#3b82f6"
  },
  {
    to: "/services",
    title: "Legal Services",
    desc: "Access a wide range of services including legal documentation, case filing, legal consultations, contract review, and more—all at your fingertips.",
    bg: "url('https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=1050&q=80')",
    accentColor: "#10b981"
  },
  {
    to: "/contact",
    title: "Connect With Us",
    desc: "Need help or have a question? Our dedicated team is here to support you with personalized guidance and fast resolutions to your legal queries.",
    bg: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4b8d?auto=format&fit=crop&w=1050&q=80')",
    accentColor: "#8b5cf6"
  }
];

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  // Enhanced color schemes
  const colorSchemes = {
    light: {
      primary: "#2563eb",
      secondary: "#1d4ed8",
      background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      text: "#1e293b",
      mutedText: "#475569",
      cardBg: "rgba(255, 255, 255, 0.9)",
      navBtnBg: "rgba(255, 255, 255, 0.8)"
    },
    dark: {
      primary: "#60a5fa",
      secondary: "#3b82f6",
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      text: "#f8fafc",
      mutedText: "#94a3b8",
      cardBg: "rgba(15, 23, 42, 0.8)",
      navBtnBg: "rgba(30, 41, 59, 0.8)"
    }
  };

  const colors = darkMode ? colorSchemes.dark : colorSchemes.light;

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % navLinks.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + navLinks.length) % navLinks.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const handleCardClick = () => {
    navigate(navLinks[currentIndex].to);
  };

  useEffect(() => {
    const autoSlide = isHovering ? null : setInterval(() => {
      handleNext();
    }, 5000);
    return () => {
      if (autoSlide) clearInterval(autoSlide);
    };
  }, [currentIndex, isHovering]);

  useEffect(() => {
    const createRipple = (e) => {
      const ripple = document.createElement("div");
      ripple.className = "ripple";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    };

    window.addEventListener("click", createRipple);
    return () => window.removeEventListener("click", createRipple);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 }
    })
  };

  const cardContentVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.3, duration: 0.5 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        ...mainWrapperStyle(colors),
        backgroundImage: "url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1050&q=80')"
      }}
    >
      {/* Animated gradient overlay */}
      <motion.div
        className="bg-gradient"
        initial={{ opacity: 0 }}
        animate={{ opacity: darkMode ? 0.15 : 0.1 }}
        transition={{ duration: 1 }}
      />

      {/* Theme toggle */}
      <motion.button
        onClick={() => setDarkMode((prev) => !prev)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: "absolute",
          top: 24,
          right: 24,
          zIndex: 10,
          background: colors.navBtnBg,
          border: "none",
          borderRadius: "50%",
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          backdropFilter: "blur(8px)"
        }}
      >
        {darkMode ? (
          <Sun color={colors.text} size={20} />
        ) : (
          <Moon color={colors.text} size={20} />
        )}
      </motion.button>

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <motion.h1
          style={headingStyle(colors)}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to LegalConnect <motion.span style={{ display: "inline-block" }}>⚖️</motion.span>
        </motion.h1>
        
        <motion.p
          style={descStyle(colors)}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Your trusted platform for legal solutions and professional connections
        </motion.p>

        {/* Slider container */}
        <div 
          style={sliderWrapperStyle}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{
                ...cardStyle,
                backgroundImage: `${navLinks[currentIndex].bg}, linear-gradient(to bottom right, ${navLinks[currentIndex].accentColor}44, #00000088)`,
                border: `1px solid ${navLinks[currentIndex].accentColor}88`
              }}
              onClick={handleCardClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div style={cardOverlay}>
                <motion.div variants={cardContentVariants} initial="hidden" animate="visible">
                  <motion.h3 
                    style={{
                      ...titleStyle,
                      color: "#fff",
                      textShadow: `0 2px 8px ${navLinks[currentIndex].accentColor}`
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {navLinks[currentIndex].title}
                  </motion.h3>
                  <motion.p
                    style={{
                      ...subtitleStyle,
                      color: "#eee",
                      textShadow: "0 1px 2px rgba(0,0,0,0.3)"
                    }}
                  >
                    {navLinks[currentIndex].desc}
                  </motion.p>
                  <motion.div
                    style={{
                      marginTop: 20,
                      padding: "8px 16px",
                      background: navLinks[currentIndex].accentColor,
                      color: "white",
                      borderRadius: 12,
                      display: "inline-block",
                      fontWeight: 600,
                      fontSize: 14
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <motion.button 
            onClick={handlePrev}
            style={navBtnStyle("left", colors)}
            whileHover={{ scale: 1.1, backgroundColor: colors.primary }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={24} color={colors.text} />
          </motion.button>

          <motion.button
            onClick={handleNext}
            style={navBtnStyle("right", colors)}
            whileHover={{ scale: 1.1, backgroundColor: colors.primary }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={24} color={colors.text} />
          </motion.button>
        </div>

        {/* Slide indicators */}
        <motion.div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 24,
            justifyContent: "center"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: index === currentIndex ? link.accentColor : colors.mutedText,
                cursor: "pointer",
                opacity: index === currentIndex ? 1 : 0.6
              }}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
              animate={{
                width: index === currentIndex ? 24 : 10,
                borderRadius: index === currentIndex ? 8 : "50%"
              }}
              transition={{ type: "spring", stiffness: 500 }}
            />
          ))}
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              background: navLinks[currentIndex].accentColor,
              position: "absolute",
              borderRadius: "50%"
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              width: Math.random() * 5 + 2,
              height: Math.random() * 5 + 2,
              opacity: 0
            }}
            animate={{
              y: [0, -Math.random() * 100 - 50],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0, Math.random() * 0.4 + 0.1, 0],
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
              }
            }}
          />
        ))}
      </div>

      {/* CSS styles */}
      <style jsx global>{`
        .ripple {
          position: fixed;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.4);
          pointer-events: none;
          transform: scale(0);
          animation: ripple 0.6s ease-out forwards;
          z-index: 9999;
        }

        @keyframes ripple {
          to {
            transform: scale(10);
            opacity: 0;
          }
        }

        .bg-gradient {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: linear-gradient(
            270deg, 
            #3b82f6, 
            #10b981, 
            #8b5cf6, 
            #ec4899, 
            #f59e0b, 
            #ef4444
          );
          background-size: 300% 300%;
          animation: gradientShift 20s ease infinite;
          z-index: 1;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }
      `}</style>
    </motion.div>
  );
}

// Styles

const mainWrapperStyle = (colors) => ({
  minHeight: "100vh",
  background: colors.background,
  color: colors.text,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px 24px",
  fontFamily: "'Inter', sans-serif",
  position: "relative",
  overflow: "hidden",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed"
});

const headingStyle = (colors) => ({
  fontSize: "clamp(2rem, 6vw, 3.5rem)",
  fontWeight: 800,
  marginBottom: "16px",
  background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  lineHeight: 1.2,
  letterSpacing: "-0.05em"
});

const descStyle = (colors) => ({
  fontSize: "clamp(1rem, 2vw, 1.25rem)",
  color: colors.mutedText,
  fontWeight: 500,
  marginBottom: "48px",
  maxWidth: "600px",
  lineHeight: 1.6
});

const sliderWrapperStyle = {
  position: "relative",
  width: "100%",
  maxWidth: "500px",
  height: "360px",
  margin: "0 auto"
};

const cardStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  padding: "32px",
  borderRadius: "24px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 20px 50px -10px rgba(0,0,0,0.3)",
  overflow: "hidden",
  cursor: "pointer",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundBlendMode: "overlay",
  willChange: "transform"
};

const cardOverlay = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  width: "100%",
  height: "100%",
  padding: "32px",
  borderRadius: "24px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backdropFilter: "blur(2px)"
};

const titleStyle = {
  fontSize: "clamp(1.5rem, 4vw, 2rem)",
  fontWeight: 700,
  marginBottom: "16px"
};

const subtitleStyle = {
  fontSize: "clamp(0.9rem, 2vw, 1rem)",
  maxWidth: "90%",
  lineHeight: "1.6",
  marginBottom: "24px"
};

const navBtnStyle = (position, colors) => ({
  position: "absolute",
  top: "50%",
  [position]: "16px",
  transform: "translateY(-50%)",
  background: colors.navBtnBg,
  border: "none",
  borderRadius: "50%",
  width: "44px",
  height: "44px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  zIndex: 3,
  backdropFilter: "blur(8px)",
  transition: "all 0.2s ease"
});

export default HomePage;