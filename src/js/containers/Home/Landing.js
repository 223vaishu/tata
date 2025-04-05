import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    const slides = [
        "https://images.unsplash.com/photo-1549921296-3a976e7cde98?auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1528747045269-390fe33c19d3?auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1470&q=80"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const containerStyle = {
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        fontFamily: "'Segoe UI', sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#000",
    };

    const backgroundStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        zIndex: 0,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "opacity 1.5s ease-in-out",
    };

    const overlayStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        zIndex: 1,
        backdropFilter: "blur(4px)",
    };

    const contentStyle = {
        position: "relative",
        zIndex: 2,
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        padding: "60px",
        borderRadius: "24px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        maxWidth: "850px",
        animation: "fadeInUp 1.8s ease-out forwards",
        opacity: 0,
        transform: "translateY(40px)",
    };

    const headingStyle = {
        fontSize: "clamp(40px, 6vw, 72px)",
        color: "#fff",
        fontWeight: "700",
        marginBottom: "24px",
        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
    };

    const subheadingStyle = {
        fontSize: "clamp(18px, 2.5vw, 26px)",
        color: "#eaeaea",
        marginBottom: "36px",
        lineHeight: "1.6",
    };

    const buttonStyle = {
        padding: "16px 40px",
        backgroundColor: "#fff",
        color: "#1f1f1f",
        border: "none",
        borderRadius: "60px",
        fontSize: "18px",
        fontWeight: "600",
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
        boxShadow: "0 6px 18px rgba(0, 0, 0, 0.2)",
    };

    const keyframes = `
        @keyframes fadeInUp {
            0% {
                opacity: 0;
                transform: translateY(40px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;

    return (
        <>
            <style>{keyframes}</style>
            <div style={containerStyle}>
                {slides.map((url, index) => (
                    <div
                        key={index}
                        style={{
                            ...backgroundStyle,
                            backgroundImage: `url(${url})`,
                            opacity: index === currentSlide ? 1 : 0,
                        }}
                    />
                ))}
                <div style={overlayStyle} />
                <div style={contentStyle}>
                    <h1 style={headingStyle}>Empower Your Legal Journey ⚖️</h1>
                    <p style={subheadingStyle}>
                        Explore trusted legal resources, connect with professionals, and take control of your future — all at your fingertips.
                    </p>
                    <button
                        style={buttonStyle}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#1f1f1f";
                            e.target.style.color = "#fff";
                            e.target.style.boxShadow = "0 8px 20px rgba(255, 255, 255, 0.2)";
                            e.target.style.transform = "scale(1.06)";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "#fff";
                            e.target.style.color = "#1f1f1f";
                            e.target.style.boxShadow = "0 6px 18px rgba(0, 0, 0, 0.2)";
                            e.target.style.transform = "scale(1)";
                        }}
                        onClick={() => navigate("/homepage")}
                    >
                        Start Exploring 🌍
                    </button>
                </div>
            </div>
        </>
    );
}

export default Landing;
