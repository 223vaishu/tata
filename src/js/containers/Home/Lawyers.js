import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const lawyerData = [
  {
    name: "Adv. Priya Sharma",
    domain: "Family Law",
    experience: "8+ years",
    rating: "4.8/5",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Adv. Raj Mehta",
    domain: "Criminal Law",
    experience: "10+ years",
    rating: "4.9/5",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Adv. Neha Kapoor",
    domain: "Corporate Law",
    experience: "6+ years",
    rating: "4.7/5",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Adv. Ankit Desai",
    domain: "Civil Litigation",
    experience: "12+ years",
    rating: "5.0/5",
    image: "https://randomuser.me/api/portraits/men/27.jpg",
  },
];

const Lawyers = ({ darkMode }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        background: darkMode ? "#121212" : "#f5f5f5",
        color: darkMode ? "#f0f0f0" : "#1d1d1d",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: "center", marginBottom: "40px" }}
      >
        <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>Meet Our Expert Lawyers</h1>
        <p
          style={{
            fontSize: "18px",
            maxWidth: "600px",
            margin: "0 auto",
            marginTop: "10px",
          }}
        >
          Browse a curated list of top-rated lawyers across criminal, civil, corporate, family law,
          and more.
        </p>
      </motion.div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Navigation]}
      >
        {lawyerData.map((lawyer, index) => (
          <SwiperSlide key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                background: darkMode ? "#1e1e1e" : "#fff",
                padding: "20px",
                borderRadius: "20px",
                boxShadow: darkMode
                  ? "0 4px 12px rgba(255, 255, 255, 0.05)"
                  : "0 4px 12px rgba(0, 0, 0, 0.1)",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              <img
                src={lawyer.image}
                alt={lawyer.name}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "15px",
                }}
              />
              <h3 style={{ fontSize: "20px", fontWeight: "600" }}>{lawyer.name}</h3>
              <p style={{ margin: "5px 0", fontWeight: "500" }}>{lawyer.domain}</p>
              <p style={{ margin: "5px 0", fontSize: "14px" }}>
                Experience: <strong>{lawyer.experience}</strong>
              </p>
              <p style={{ fontSize: "14px" }}>
                Rating: <span style={{ color: "#f39c12" }}>{lawyer.rating}</span>
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Lawyers;
