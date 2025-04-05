import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Legal Consultation",
    description: "Talk to experienced lawyers for advice on any legal matter.",
    emoji: "🧑‍⚖️",
  },
  {
    title: "Contract Review",
    description: "Get your contracts reviewed by professionals to avoid loopholes.",
    emoji: "📄",
  },
  {
    title: "Case Filing",
    description: "File criminal, civil or corporate cases with expert help.",
    emoji: "⚖️",
  },
  {
    title: "Legal Documentation",
    description: "From affidavits to agreements, get all legal docs drafted.",
    emoji: "📝",
  },
  {
    title: "Property Disputes",
    description: "Resolve disputes related to land, property, and inheritance.",
    emoji: "🏡",
  },
  {
    title: "Divorce & Family",
    description: "Handle sensitive family matters with confidentiality.",
    emoji: "👨‍👩‍👧‍👦",
  },
];

const Services = ({ darkMode }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        background: darkMode ? "#1e1e1e" : "#f9f9f9",
        color: darkMode ? "#f0f0f0" : "#1d1d1d",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: "center", marginBottom: "40px" }}
      >
        <h1 style={{ fontSize: "38px", fontWeight: "bold" }}>
          Legal Services We Offer
        </h1>
        <p
          style={{
            fontSize: "18px",
            maxWidth: "600px",
            margin: "10px auto 0",
          }}
        >
          Access legal consultations, contract reviews, case filings,
          documentation, and more — all in one place.
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          padding: "20px",
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            style={{
              background: darkMode ? "#2c2c2c" : "#fff",
              borderRadius: "20px",
              padding: "30px",
              textAlign: "center",
              boxShadow: darkMode
                ? "0 4px 12px rgba(255,255,255,0.05)"
                : "0 4px 12px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                fontSize: "50px",
                marginBottom: "15px",
                filter: darkMode ? "grayscale(0.2)" : "grayscale(0)",
              }}
            >
              {service.emoji}
            </div>
            <h3 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "10px" }}>
              {service.title}
            </h3>
            <p style={{ fontSize: "16px", opacity: 0.85 }}>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
