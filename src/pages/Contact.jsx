import React from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// SVG Icons
const PhoneIcon = () => (
  <svg width="32" height="32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#DB4444" />
    <path d="M22.5 20.5v2a1.5 1.5 0 0 1-1.636 1.5A15.001 15.001 0 0 1 8 10.136 1.5 1.5 0 0 1 9.5 8.5h2A1.5 1.5 0 0 1 13 9.5c.09.668.234 1.325.43 1.965a1.5 1.5 0 0 1-.34 1.53l-.87.87a12.001 12.001 0 0 0 4.24 4.24l.87-.87a1.5 1.5 0 0 1 1.53-.34c.64.196 1.297.34 1.965.43a1.5 1.5 0 0 1 1.5 1.5z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const MailIcon = () => (
  <svg width="32" height="32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#DB4444" />
    <path d="M8 12a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-8zm2 0 6 5 6-5" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

export default function Contact() {
  return (
    <div style={{ fontFamily: "sans-serif", background: "#fff", minHeight: "100vh", position: "relative", overflowX: "hidden" }}>
      <AnnouncementBar />
      <Navbar />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 20px 0 20px" }}>
        {/* Breadcrumb */}
        <div style={{ color: "#888", marginBottom: 24, fontSize: 15 }}>
          Home / <span style={{ color: "#222" }}>Contact</span>
        </div>

        {/* Main Content */}
        <div style={{
          display: "flex",
          gap: 32,
          alignItems: "flex-start",
          flexWrap: "wrap"
        }}>
          {/* Left: Contact Info */}
          <div style={{
            flex: "1 1 320px",
            minWidth: 300,
            background: "#fff",
            border: "2px solid #2196f3",
            borderRadius: 8,
            padding: "32px 28px",
            boxSizing: "border-box",
            maxWidth: 370,
          }}>
            {/* Call To Us */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
              <PhoneIcon />
              <div>
                <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 4 }}>Call To Us</div>
                <div style={{ color: "#444", fontSize: 15, marginBottom: 6 }}>
                  We are available 24/7, 7 days a week.<br />
                  Phone: +8801611112222
                </div>
              </div>
            </div>
            <hr style={{ margin: "24px 0", borderColor: "#eee" }} />
            {/* Write To Us */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
              <MailIcon />
              <div>
                <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 4 }}>Write To US</div>
                <div style={{ color: "#444", fontSize: 15, marginBottom: 4 }}>
                  Fill out our form and we will contact you within 24 hours.
                </div>
                <div style={{ color: "#444", fontSize: 15 }}>
                  Emails: customer@exclusive.com<br />
                  Emails: support@exclusive.com
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form
            style={{
              flex: "2 1 400px",
              minWidth: 320,
              background: "#fff",
              borderRadius: 8,
              padding: "32px 28px",
              boxSizing: "border-box",
              boxShadow: "0 1px 6px rgba(60,60,60,0.04)",
              maxWidth: "100%",
              width: "100%",
            }}
            onSubmit={e => { e.preventDefault(); alert("Message sent!"); }}
            autoComplete="off"
          >
            {/* Top Row Inputs */}
            <div style={{
              display: "flex",
              gap: 16,
              marginBottom: 18,
              flexWrap: "wrap"
            }}>
              <input
                type="text"
                placeholder="Your Name *"
                required
                style={inputStyle}
              />
              <input
                type="email"
                placeholder="Your Email *"
                required
                style={inputStyle}
              />
              <input
                type="tel"
                placeholder="Your Phone *"
                required
                style={inputStyle}
              />
            </div>
            {/* Message Box */}
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              style={{
                ...inputStyle,
                width: "100%",
                minHeight: 110,
                resize: "vertical",
                marginBottom: 24,
                fontFamily: "inherit"
              }}
            />
            {/* Send Button */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                type="submit"
                style={{
                  background: "#DB4444",
                  color: "#fff",
                  border: "none",
                  borderRadius: 4,
                  padding: "14px 36px",
                  fontWeight: 500,
                  fontSize: 16,
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseOver={e => (e.currentTarget.style.background = "#a92a2a")}
                onMouseOut={e => (e.currentTarget.style.background = "#DB4444")}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Input style for form fields
const inputStyle = {
  background: "#f6f6f6",
  border: "1.5px solid #eee",
  borderRadius: 4,
  padding: "14px 12px",
  fontSize: 15,
  width: "100%",
  boxSizing: "border-box",
  outline: "none",
  marginBottom: 0,
  fontFamily: "inherit",
};

