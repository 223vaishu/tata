import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const containerStyle = {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Segoe UI, sans-serif",
        overflow: "hidden",
        zIndex: 1,
    };

    const animatedBgStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        background: "linear-gradient(-45deg, #667eea, #764ba2, #6b73ff, #a87dfa)",
        backgroundSize: "400% 400%",
        animation: "gradientFlow 20s ease infinite",
        zIndex: -3,
    };

    const bubbleStyle = (top, left, size, delay) => ({
        position: "absolute",
        top: top,
        left: left,
        width: size,
        height: size,
        backgroundColor: "#ffffff22",
        borderRadius: "50%",
        filter: "blur(30px)",
        animation: `floatBubble 12s ease-in-out infinite`,
        animationDelay: delay,
        zIndex: -2,
    });

    const formStyle = {
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
        width: "350px",
        animation: "slideIn 1s ease forwards",
        transform: "translateY(50px)",
        opacity: 0,
        zIndex: 10,
    };

    const headingStyle = {
        textAlign: "center",
        marginBottom: "20px",
        fontSize: "30px",
        fontWeight: "bold",
        color: "#333",
        animation: "fadeText 1.5s ease-in-out",
    };

    const inputStyle = {
        width: "100%",
        padding: "12px",
        margin: "12px 0",
        border: "1px solid #ccc",
        borderRadius: "8px",
        fontSize: "16px",
        transition: "0.4s ease all",
        outline: "none",
    };

    const buttonStyle = {
        width: "100%",
        padding: "12px",
        backgroundColor: isHovered ? "#5a67d8" : "#7f56d9",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        boxShadow: isHovered ? "0 0 15px #7f56d9aa" : "0 0 8px #7f56d955",
        transition: "all 0.3s ease",
        animation: isHovered ? "pulse 1s infinite" : "none",
    };

    const keyframesStyle = `
        @keyframes gradientFlow {
            0% {background-position: 0% 50%;}
            50% {background-position: 100% 50%;}
            100% {background-position: 0% 50%;}
        }

        @keyframes slideIn {
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        @keyframes fadeText {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
        }

        @keyframes pulse {
            0% { box-shadow: 0 0 0px #7f56d9aa; }
            50% { box-shadow: 0 0 15px #7f56d9aa; }
            100% { box-shadow: 0 0 0px #7f56d9aa; }
        }

        @keyframes floatBubble {
            0% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-80px) scale(1.05); }
            100% { transform: translateY(0px) scale(1); }
        }
    `;

    return (
        <>
            <style>{keyframesStyle}</style>
            <div style={containerStyle}>
                <div style={animatedBgStyle}></div>
                {/* Floating blurred circles */}
                <div style={bubbleStyle("10%", "20%", "120px", "0s")} />
                <div style={bubbleStyle("40%", "70%", "180px", "2s")} />
                <div style={bubbleStyle("70%", "10%", "100px", "4s")} />
                <div style={bubbleStyle("60%", "50%", "150px", "6s")} />

                <form style={formStyle}>
                    <h2 style={headingStyle}>🌟 Welcome Back</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        style={inputStyle}
                        onFocus={(e) => {
                            e.target.style.borderColor = "#7f56d9";
                            e.target.style.boxShadow = "0 0 8px #7f56d955";
                        }}
                        onBlur={(e) => {
                            e.target.style.borderColor = "#ccc";
                            e.target.style.boxShadow = "none";
                        }}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        style={inputStyle}
                        onFocus={(e) => {
                            e.target.style.borderColor = "#7f56d9";
                            e.target.style.boxShadow = "0 0 8px #7f56d955";
                        }}
                        onBlur={(e) => {
                            e.target.style.borderColor = "#ccc";
                            e.target.style.boxShadow = "none";
                        }}
                    />
                    <button
    style={buttonStyle}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    onClick={() => navigate("/landing")}
>
    Login
</button>

                </form>
            </div>
        </>
    );
}

export default Login;
