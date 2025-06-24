import React from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import { Link, useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Footer from "../components/Footer";

// Custom Navbar for SignUp page only
function SignupNavbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav style={{
      width: "100%",
      background: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: "0 40px 0 0",
      height: 64,
      borderBottom: "1px solid #eee",
      position: "sticky",
      top: 0,
      zIndex: 100,
      gap: 20,
    }}>
      {/* Brand */}
      <div style={{ fontWeight: 700, fontSize: 22, letterSpacing: 0.5 , marginLeft: 30}}>
        Exclusive
      </div>

      {/* Center Nav Links */}
      <div style={{
        display: "flex",
        gap: 36,
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
      }}>
        <SignupNavLink to="/" label="Home" active={isActive("/")} />
        <SignupNavLink to="/contact" label="Contact" active={isActive("/contact")} />
        <SignupNavLink to="/about" label="About" active={isActive("/about")} />
        <SignupNavLink to="/signup" label="Sign Up" active={isActive("/signup")} />
      </div>

      {/* Search Bar */}
      <div style={{ position: "relative", width: "260px", display: "flex", alignItems: "center"}}>
        <input
          type="text"
          placeholder="What are you looking for ?"
         style={{ width: "100%", padding: "8px 38px 8px 16px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "15px", outline: "none" }} />
        <FiSearch
          size={18}
          style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: "#888", pointerEvents: "none" }} />
          </div>
    </nav>
  );
}

function SignupNavLink({ to, label, active }) {
  return (
    <Link
      to={to}
      style={{
        fontSize: 16,
        fontWeight: active ? 600 : 400,
        color: "#222",
        textDecoration: active ? "underline" : "none",
        textUnderlineOffset: "6px",
        textDecorationThickness: "2px",
        transition: "color 0.2s",
      }}
    >
      {label}
    </Link>
  );
}

export default function SignUp() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "sans-serif", overflowX: "hidden" }}>
      <AnnouncementBar />
      <SignupNavbar />

      <div style={{
        display: "flex",
        maxWidth: 1100,
        margin: "40px auto",
        boxShadow: "0 1px 10px rgba(0,0,0,0.04)",
        borderRadius: 12,
        overflow: "hidden",
        background: "#fff"
      }}>
        {/* Left side image */}
        <div style={{
          flex: 1,
          minWidth: 340,
          background: "#f8f8f8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <img
            src="./images/signup.png"
            alt="Shopping cart and phone"
            style={{ width: "100%", height: "100%", objectFit: "cover", maxHeight: 440 }}
          />
        </div>

        {/* Right side form */}
        <div style={{
          flex: 1,
          minWidth: 340,
          padding: "56px 42px 42px 42px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>Create an account</h2>
          <div style={{ color: "#555", fontSize: 15, marginBottom: 24 }}>Enter your details below</div>
          <form style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <input
              type="text"
              placeholder="Name"
              style={inputStyle}
              required
            />
            <input
              type="text"
              placeholder="Email or Phone Number"
              style={inputStyle}
              required
            />
            <input
              type="password"
              placeholder="Password"
              style={inputStyle}
              required
            />
            <button
              type="submit"
              style={{
                background: "#DB4444",
                color: "#fff",
                border: "none",
                borderRadius: 4,
                padding: "14px 0",
                fontWeight: 600,
                fontSize: 16,
                marginTop: 8,
                cursor: "pointer",
                transition: "background 0.2s"
              }}
              onMouseOver={e => (e.currentTarget.style.background = "#a92a2a")}
              onMouseOut={e => (e.currentTarget.style.background = "#DB4444")}
            >
              Create Account
            </button>
          </form>
          <div style={{ margin: "18px 0", textAlign: "center", color: "#888" }}>or</div>
          <button
            style={{
              background: "#fff",
              color: "#222",
              border: "1.5px solid #ddd",
              borderRadius: 4,
              padding: "12px 0",
              fontWeight: 500,
              fontSize: 16,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8
            }}
          >
            <img src="./images/google.png" alt="Google" style={{ width: 20, height: 20 }} />
            Sign up with Google
          </button>
          <div style={{ marginTop: 24, textAlign: "center", color: "#555", fontSize: 15 }}>
            Already have account?{" "}
            <a href="/login" style={{ color: "#222", textDecoration: "underline", fontWeight: 500 }}>
              Log in
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const inputStyle = {
  background: "#fff",
  border: "1.5px solid #ddd",
  borderRadius: 4,
  padding: "14px 12px",
  fontSize: 15,
  width: "100%",
  boxSizing: "border-box",
  outline: "none"
};
