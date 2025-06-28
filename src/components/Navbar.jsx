import React, { useState, useRef, useEffect } from "react";
import { FiHeart, FiSearch, FiUser, FiLogOut, FiChevronLeft } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [accountOpen, setAccountOpen] = useState(false);
  const accountRef = useRef(null);
  const location = useLocation();

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (accountRef.current && !accountRef.current.contains(event.target)) {
        setAccountOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Helper for active link underline
  const navLinkStyle = (path) => ({
    color: "#1a1a1a",
    textDecoration: "none",
    position: "relative",
    padding: "4px 0",
    borderBottom: location.pathname === path ? "2px solid #1a1a1a" : "none"
  });

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        padding: "0 40px",
        height: "70px",
        borderBottom: "1px solid #eee",
        background: "#fff",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Logo */}
      <div style={{ fontSize: "26px", fontWeight: 700, marginRight: "150px" }}>Exclusive</div>
      {/* Navigation Links */}
      <nav style={{ display: "flex", gap: "40px", fontSize: "17px", fontWeight: 500 }}>
        <Link to="/" style={navLinkStyle("/")}>
          Home
        </Link>
        <Link to="/contact" style={navLinkStyle("/contact")}>
          Contact
        </Link>
        <Link to="/about" style={navLinkStyle("/about")}>
          About
        </Link>
        <Link to="/signup" style={navLinkStyle("/signup")}>
          Sign Up
        </Link>
      </nav>
      {/* Search Bar */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <div style={{ position: "relative", width: "320px", display: "flex", alignItems: "center" }}>
          <input
            type="text"
            placeholder="What are you looking for?"
            style={{ width: "320px", padding: "8px 40px 8px 16px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "15px", outline: "none" }} />
          <FiSearch
            size={20}
            style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", color: "#888", pointerEvents: "none" }} />
        </div>
      </div>
      {/* Icons and Account Dropdown */}
      <div style={{ display: "flex", alignItems: "center", gap: "22px", marginLeft: "30px" }}>
        <Link to="/wishlist">
          <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="Wishlist" style={{ width: "24px", height: "24px", cursor: "pointer" }} />
        </Link>
        <Link to="/cart">
          <img src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="Cart" style={{ width: "24px", height: "24px", cursor: "pointer" }} />
        </Link>
        {/* User Account Dropdown */}
        <div ref={accountRef} style={{ position: "relative" }}>
          <span
            onClick={() => setAccountOpen((open) => !open)}
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "#DB4444",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: 22,
              position: "relative"
            }}
          >
            <FiUser />
          </span>
          {accountOpen && (
            <div
              style={{
                position: "absolute",
                top: 44,
                right: 0,
                minWidth: 220,
                background: "#D3D3D3",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                borderRadius: 8,
                zIndex: 100,
                padding: "18px 0"
              }}
            >
              <MenuItem icon={<FiUser />} label="Manage My Account" to="/account" onClick={() => setAccountOpen(false)} />
              <MenuItem icon={<FiHeart />} label="My Order" />
              <MenuItem icon={<FiChevronLeft />} label="My Cancellations" />
              <MenuItem icon={<FaStar />} label="My Reviews" />
              <MenuItem icon={<FiLogOut />} label="Logout" last />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Menu item 
function MenuItem({ icon, label, to, last, onClick }) {
  const [hover, setHover] = React.useState(false);
  const style = {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 24px",
    cursor: "pointer",
    fontSize: 16,
    background: hover ? "#f4f7ff" : "#D3D3D3",
    transition: "background 0.2s",
    textDecoration: "none", // For Link
    color: "inherit"
  };

  if (to) {
    return (
      <Link
        to={to}
        style={style}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={onClick}
      >
        <span style={{ fontSize: 20 }}>{icon}</span>
        <span>{label}</span>
      </Link>
    );
  }

  return (
    <div
      style={style}
      className="menu-item"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <span style={{ fontSize: 20 }}>{icon}</span>
      <span>{label}</span>
    </div>
  );
}

export default Navbar;
