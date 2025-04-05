import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);

  // Enhanced color schemes
  const colorSchemes = {
    light: {
      primary: "#4361ee",
      secondary: "#3a0ca3",
      accent: "#7209b7",
      background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      cardBg: "rgba(255, 255, 255, 0.95)",
      text: "#212529",
      inputBg: "#ffffff",
      inputBorder: "rgba(0, 0, 0, 0.1)"
    },
    dark: {
      primary: "#4cc9f0",
      secondary: "#4895ef",
      accent: "#4361ee",
      background: "linear-gradient(135deg, #121212 0%, #1e1e1e 100%)",
      cardBg: "rgba(30, 30, 30, 0.95)",
      text: "#f8f9fa",
      inputBg: "#2d2d2d",
      inputBorder: "rgba(255, 255, 255, 0.1)"
    }
  };

  const colors = darkMode ? colorSchemes.dark : colorSchemes.light;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(null), 5000);
    }, 2000);
  };

  // Floating orb animation variants
  const orbVariants = {
    initial: { 
      x: -50,
      y: -50,
      opacity: 0 
    },
    animate: { 
      x: 0,
      y: 0,
      opacity: 0.6,
      transition: { 
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      style={{ 
        minHeight: "100vh",
        padding: "60px 20px",
        background: colors.background,
        color: colors.text,
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        overflow: "hidden"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Floating decorative orbs */}
      <motion.div
        variants={orbVariants}
        initial="initial"
        animate="animate"
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.primary} 0%, transparent 70%)`,
          top: "10%",
          left: "5%",
          filter: "blur(40px)",
          zIndex: 0
        }}
      />
      <motion.div
        variants={orbVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.5 }}
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.accent} 0%, transparent 70%)`,
          bottom: "5%",
          right: "5%",
          filter: "blur(50px)",
          zIndex: 0
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          style={{ 
            textAlign: "center", 
            marginBottom: "60px",
            maxWidth: "800px",
            margin: "0 auto 60px"
          }}
        >
          <motion.h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              marginBottom: "20px",
              background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.2
            }}
            whileHover={{ scale: 1.02 }}
          >
            Let's Create Something Amazing Together
          </motion.h1>
          
          <motion.p 
            style={{ 
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              maxWidth: "600px", 
              margin: "0 auto",
              opacity: 0.9,
              lineHeight: 1.6
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 0.2 }}
          >
            Whether you have a project in mind or just want to chat about possibilities, 
            we'd love to hear from you. Our team typically responds within 24 hours.
          </motion.p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: "spring" }}
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            background: colors.cardBg,
            borderRadius: "24px",
            padding: "40px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
            border: `1px solid ${colors.inputBorder}`,
            backdropFilter: "blur(10px)",
            position: "relative",
            overflow: "hidden"
          }}
          whileHover={{ 
            boxShadow: `0 25px 60px ${darkMode ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.2)"}`
          }}
        >
          {/* Form border animation */}
          <motion.div
            initial={{ 
              x: "-100%",
              y: "-100%",
              rotate: -45
            }}
            animate={{ 
              x: "100%",
              y: "100%",
              rotate: -45
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "200%",
              height: "2px",
              background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)`,
              zIndex: 2
            }}
          />

          {["name", "email"].map((field, idx) => (
            <motion.div 
              key={idx} 
              style={{ marginBottom: "25px", textAlign: "left" }}
              whileHover={{ scale: 1.01 }}
            >
              <motion.label 
                style={{ 
                  display: "block", 
                  marginBottom: "10px", 
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: colors.text
                }}
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </motion.label>
              <motion.input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={`Enter your ${field}`}
                required
                style={{
                  width: "100%",
                  padding: "15px 20px",
                  borderRadius: "12px",
                  border: `1px solid ${colors.inputBorder}`,
                  outline: "none",
                  fontSize: "16px",
                  background: colors.inputBg,
                  color: colors.text,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                }}
                whileFocus={{
                  border: `1px solid ${colors.primary}`,
                  boxShadow: `0 0 0 3px ${colors.primary}33`
                }}
              />
            </motion.div>
          ))}

          <motion.div 
            style={{ marginBottom: "30px", textAlign: "left" }}
            whileHover={{ scale: 1.01 }}
          >
            <motion.label 
              style={{ 
                display: "block", 
                marginBottom: "10px", 
                fontWeight: 600,
                fontSize: "0.95rem",
                color: colors.text
              }}
            >
              Your Message
            </motion.label>
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows="6"
              required
              style={{
                width: "100%",
                padding: "15px 20px",
                borderRadius: "12px",
                border: `1px solid ${colors.inputBorder}`,
                outline: "none",
                fontSize: "16px",
                background: colors.inputBg,
                color: colors.text,
                resize: "vertical",
                minHeight: "150px",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
              whileFocus={{
                border: `1px solid ${colors.primary}`,
                boxShadow: `0 0 0 3px ${colors.primary}33`
              }}
            />
          </motion.div>

          <div style={{ position: "relative" }}>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ 
                scale: 1.03,
                background: `linear-gradient(45deg, ${colors.primary}, ${colors.secondary})`
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                width: "100%",
                padding: "18px",
                background: `linear-gradient(45deg, ${colors.primary}, ${colors.accent})`,
                color: "#fff",
                border: "none",
                borderRadius: "12px",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: `0 4px 15px ${colors.primary}40`,
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  <motion.span
                    key="submitting"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      style={{ display: "inline-block", marginRight: "8px" }}
                    >
                      ⏳
                    </motion.span>
                    Sending...
                  </motion.span>
                ) : (
                  <motion.span
                    key="submit"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    📨 Send Message
                  </motion.span>
                )}
              </AnimatePresence>
              
              {/* Button shine effect */}
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ 
                  x: ["-100%", "100%"], 
                  opacity: [0, 0.4, 0] 
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "50%",
                  height: "100%",
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                  transform: "skewX(-20deg)"
                }}
              />
            </motion.button>
          </div>
        </motion.form>

        {/* Success message */}
        <AnimatePresence>
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring" }}
              style={{
                maxWidth: "600px",
                margin: "30px auto 0",
                padding: "20px",
                background: darkMode ? "rgba(76, 201, 240, 0.1)" : "rgba(67, 97, 238, 0.1)",
                border: `1px solid ${colors.primary}`,
                borderRadius: "12px",
                textAlign: "center",
                backdropFilter: "blur(10px)"
              }}
            >
              <motion.p
                style={{ 
                  margin: 0,
                  fontWeight: 500,
                  color: colors.primary
                }}
              >
                🎉 Thank you! Your message has been sent successfully. We'll get back to you soon!
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Contact;