import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { FiArrowLeft, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import AnnouncementBar from "../components/AnnouncementBar";
import Footer from "../components/Footer";
import ServiceFeatures from "../components/ServiceFeatures";
import AOS from "aos";
import "aos/dist/aos.css";

// Team data 
const teamMembers = [
  {
    name: "Tom Cruise",
    role: "Founder & Chairman",
    img: "./images/tom.svg",
  },
  {
    name: "Emma Watson",
    role: "Managing Director",
    img: "./images/emma.png",
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    img: "./images/Will.png",
  },
];

const socialIcons = [
  { icon: <FiTwitter />, label: "Twitter" },
  { icon: <FiInstagram />, label: "Instagram" },
  { icon: <FiLinkedin />, label: "LinkedIn" },
];

// Card styles
const cardStyle = {
  background: "#fff",
  borderRadius: "12px",
  boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
  padding: "32px 36px",
  minWidth: 220,
  textAlign: "center",
  transition: "background 0.2s, color 0.2s",
};

const iconCircleStyle = {
  background: "#f3f3f3",
  borderRadius: "50%",
  width: 50,
  height: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 12px auto",
};

const cardNumberStyle = {
  fontWeight: 700,
  fontSize: "2rem",
  marginBottom: 4,
};

const cardTextStyle = {
  color: "#444",
  fontSize: "1.04rem",
  marginTop: 2,
};

export default function About() {
  const navigate = useNavigate();

  //  hover
  const [hoveredCard, setHoveredCard] = React.useState(null);
  const cardColors = [
    { bg: "#fff", color: "#222", hoverBg: "#ececec", hoverColor: "#DB4444" }, // Sellers
    { bg: "#DB4444", color: "#fff", hoverBg: "#fff", hoverColor: "#DB4444" }, // 33k
    { bg: "#fff", color: "#222", hoverBg: "#ececec", hoverColor: "#DB4444" }, // Customers
    { bg: "#fff", color: "#222", hoverBg: "#ececec", hoverColor: "#DB4444" }, // Gross Sale
  ];

  // AOS initialization
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
    AOS.refresh();
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", background: "#fff", minHeight: "100vh", position: "relative", overflowX: "hidden" }}>
      <AnnouncementBar />
      <Navbar />

      {/* Main Content */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px 0 20px",
          display: "flex",
          alignItems: "center",
          gap: "60px",
          flexWrap: "wrap",
        }}
        data-aos="fade-up"
      >
        {/* Left: Text Section */}
        <div style={{ flex: 1, minWidth: 320 }} data-aos="fade-right" data-aos-delay="100">
          <div style={{ color: "#888", marginBottom: "12px" }}>
            Home / About
          </div>
          <h1 style={{ fontSize: "2.8rem", fontWeight: "bold", marginBottom: "24px" }}>
            Our Story
          </h1>
          <p style={{ fontSize: "1.1rem", marginBottom: "18px", lineHeight: 1.7 }}>
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
            Exclusive has more than 1 million products to offer, growing at a very fast rate. Exclusive offers a diverse assortment in categories ranging from consumer.
          </p>
        </div>
        {/* Right: Image Section */}
        <div style={{ flex: 1, minWidth: 280, display: "flex", justifyContent: "center" }} data-aos="fade-left" data-aos-delay="200">
          <img
            src="./images/about.svg"
            alt="Shoppers with bags"
            style={{ width: "90%", maxWidth: "420px", borderRadius: "10px", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          margin: "45px 0 36px 0",
          flexWrap: "wrap",
        }}
      >
        {/* Sellers */}
        <div
          style={{
            ...cardStyle,
            background: hoveredCard === 0 ? cardColors[0].hoverBg : cardColors[0].bg,
            color: hoveredCard === 0 ? cardColors[0].hoverColor : cardColors[0].color,
          }}
          onMouseEnter={() => setHoveredCard(0)}
          onMouseLeave={() => setHoveredCard(null)}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div style={iconCircleStyle}>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/shop.png"
              alt="Sellers"
              style={{ width: 28, height: 28 }}
            />
          </div>
          <div style={cardNumberStyle}>10.5k</div>
          <div style={cardTextStyle}>Sellers active on our site</div>
        </div>
        {/* 33k Card */}
        <div
          style={{
            ...cardStyle,
            background: hoveredCard === 1 ? cardColors[1].hoverBg : cardColors[1].bg,
            color: hoveredCard === 1 ? cardColors[1].hoverColor : cardColors[1].color,
            border: "1.5px solid #DB4444",
          }}
          onMouseEnter={() => setHoveredCard(1)}
          onMouseLeave={() => setHoveredCard(null)}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div style={iconCircleStyle}>
            <img
              src="https://img.icons8.com/ios-filled/50/DB4444/us-dollar-circled--v2.png"
              alt="Product Sale"
              style={{ width: 28, height: 28 }}
            />
          </div>
          <div style={{ ...cardNumberStyle }}>33k</div>
          <div style={{ ...cardTextStyle }}>
            Monthly Product Sale
          </div>
        </div>
        {/* Customers */}
        <div
          style={{
            ...cardStyle,
            background: hoveredCard === 2 ? cardColors[2].hoverBg : cardColors[2].bg,
            color: hoveredCard === 2 ? cardColors[2].hoverColor : cardColors[2].color,
          }}
          onMouseEnter={() => setHoveredCard(2)}
          onMouseLeave={() => setHoveredCard(null)}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div style={iconCircleStyle}>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/shopping-bag.png"
              alt="Customers"
              style={{ width: 28, height: 28 }}
            />
          </div>
          <div style={cardNumberStyle}>45.5k</div>
          <div style={cardTextStyle}>Customers active on our site</div>
        </div>
        {/* Gross Sale */}
        <div
          style={{
            ...cardStyle,
            background: hoveredCard === 3 ? cardColors[3].hoverBg : cardColors[3].bg,
            color: hoveredCard === 3 ? cardColors[3].hoverColor : cardColors[3].color,
          }}
          onMouseEnter={() => setHoveredCard(3)}
          onMouseLeave={() => setHoveredCard(null)}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div style={iconCircleStyle}>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/money-bag.png"
              alt="Gross Sale"
              style={{ width: 28, height: 28 }}
            />
          </div>
          <div style={cardNumberStyle}>25k</div>
          <div style={cardTextStyle}>Annual gross sale on our site</div>
        </div>
      </div>

      {/* Team Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "36px",
          margin: "48px 0 80px 0",
          flexWrap: "wrap",
        }}
      >
        {teamMembers.map((member, idx) => (
          <div
            key={member.name}
            style={{
              background: "#fafafa",
              borderRadius: "12px",
              padding: "32px 24px 20px 24px",
              textAlign: "center",
              width: 260,
              boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            }}
            data-aos="zoom-in"
            data-aos-delay={200 + idx * 150}
          >
            <img
              src={member.img}
              alt={member.name}
              style={{
                width: 230,
                height: 230,
                margin: "0 auto 18px auto",
                borderRadius: "50%",
                background: "#eaeaea",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
            <div style={{ fontWeight: 600, fontSize: "1.2rem" }}>
              {member.name}
            </div>
            <div style={{ color: "#888", fontSize: "0.98rem", margin: "6px 0 12px 0" }}>
              {member.role}
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 18 }}>
              {socialIcons.map((icon) => (
                <a
                  href="#"
                  key={icon.label}
                  aria-label={icon.label}
                  style={{
                    color: "#222",
                    fontSize: "1.2rem",
                    transition: "color 0.2s",
                  }}
                  onMouseOver={e => (e.currentTarget.style.color = "#DB4444")}
                  onMouseOut={e => (e.currentTarget.style.color = "#222")}
                >
                  {icon.icon}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Go Back Button Centered at Bottom */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          position: "fixed",
          bottom: 32,
          left: 0,
          zIndex: 100,
        }}
        data-aos="fade-up"
        data-aos-delay="100"
      >
      </div>
      <ServiceFeatures />
      <Footer />
    </div>
  );
}
