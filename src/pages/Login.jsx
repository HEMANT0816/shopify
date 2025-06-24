import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// AnnouncementBar at the top
function AnnouncementBar() {
  return (
    <div style={{
      width: "100%",
      background: "#000",
      color: "#fff",
      textAlign: "center",
      fontSize: 14,
      padding: "7px 0",
      letterSpacing: 0.2,
    }}>
      Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!{" "}
      <span style={{ fontWeight: 600, textDecoration: "underline", cursor: "pointer" }}>ShopNow</span>
      <span style={{ float: "right", marginRight: 32, fontWeight: 400 }}>English <span style={{ fontSize: 10 }}>▼</span></span>
    </div>
  );
}

// Custom Navbar for Login Page
function LoginNavbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav
      style={{
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
        gap: 10
      }}
    >
      {/* Brand */}
      <div style={{ fontWeight: 700, fontSize: 24, letterSpacing: 0.5, marginLeft: 30 }}>
        Exclusive
      </div>

      {/* Center Nav Links */}
      <div
        style={{
          display: "flex",
          gap: 36,
          alignItems: "center",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <LoginNavLink to="/" label="Home" active={isActive("/")} />
        <LoginNavLink to="/contact" label="Contact" active={isActive("/contact")} />
        <LoginNavLink to="/about" label="About" active={isActive("/about")} />
        <LoginNavLink to="/signup" label="Sign Up" active={isActive("/signup")} />
      </div>

      {/* Search Bar */}
      <div
        style={{  position: "relative", width: "260px", display: "flex", alignItems: "center"}} >
        <input
          type="text"
          placeholder="What are you looking for ?"
          style={{width: "100%", padding: "8px 38px 8px 16px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "15px", outline: "none"}}/>
        <FiSearch
          size={18}
          style={{
            position: "absolute",
            right: 12,
            top: "50%",
            transform: "translateY(-50%)",
            color: "#888",
            pointerEvents: "none",
          }}
        />
      </div>
    </nav>
  );
}

function LoginNavLink({ to, label, active }) {
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

export default function Login() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "sans-serif", overflowX: "hidden" }}>
      <AnnouncementBar />
      <LoginNavbar />

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

        {/* Right side login form */}
        <div style={{
          flex: 1,
          minWidth: 340,
          padding: "80px 60px 60px 60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 12, letterSpacing: 0.2 }}>Log in to Exclusive</h2>
          <div style={{ color: "#555", fontSize: 15, marginBottom: 32 }}>Enter your details below</div>
          <form style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <input
              type="text"
              placeholder="Email or Phone Number"
              style={loginInputStyle}
              required
            />
            <input
              type="password"
              placeholder="Password"
              style={loginInputStyle}
              required
            />
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 8 }}>
              <button
                type="submit"
                style={{
                  background: "#DB4444",
                  color: "#fff",
                  border: "none",
                  borderRadius: 4,
                  padding: "12px 38px",
                  fontWeight: 600,
                  fontSize: 16,
                  cursor: "pointer",
                  marginRight: 24,
                  transition: "background 0.2s"
                }}
                onMouseOver={e => (e.currentTarget.style.background = "#a92a2a")}
                onMouseOut={e => (e.currentTarget.style.background = "#DB4444")}
              >
                Log In
              </button>
              <a
                href="/forgot-password"
                style={{
                  color: "#DB4444",
                  fontWeight: 500,
                  textDecoration: "none",
                  marginLeft: "auto"
                }}
              >
                Forget Password?
              </a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const loginInputStyle = {
  background: "#fff",
  border: "none",
  borderBottom: "1.5px solid #ccc",
  borderRadius: 0,
  padding: "14px 6px 8px 0",
  fontSize: 16,
  width: "100%",
  boxSizing: "border-box",
  outline: "none",
};
