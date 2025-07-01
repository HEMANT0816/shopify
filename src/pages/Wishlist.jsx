import React, { useEffect } from "react";
import { FiTrash2, FiEye } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";

// Example data
const wishlist = [
  {
    id: 1,
    name: "Gucci duffle bag",
    img: "/images/duffle-bag.svg",
    price: 960,
    oldPrice: 1160,
    discount: 35,
  },
  {
    id: 2,
    name: "RGB liquid CPU Cooler",
    img: "/images/cooler.svg",
    price: 1960,
    oldPrice: null,
    discount: null,
  },
  {
    id: 3,
    name: "GP11 Shooter USB Gamepad",
    img: "/images/GP11.png",
    price: 550,
    oldPrice: null,
    discount: null,
  },
  {
    id: 4,
    name: "Quilted Satin Jacket",
    img: "/images/jacket.svg",
    price: 750,
    oldPrice: null,
    discount: null,
  },
];

const justForYou = [
  {
    id: 5,
    name: "ASUS FHD Gaming Laptop",
    img: "/images/ideapad.svg",
    price: 960,
    oldPrice: 1160,
    discount: 35,
    rating: 5,
    reviews: 65,
  },
  {
    id: 6,
    name: "IPS LCD Gaming Monitor",
    img: "/images/Moniter.svg",
    price: 1160,
    oldPrice: null,
    discount: null,
    rating: 5,
    reviews: 65,
  },
  {
    id: 7,
    name: "HAVIT HV-G92 Gamepad",
    img: "/images/GP11.png",
    price: 560,
    oldPrice: null,
    discount: "NEW",
    rating: 5,
    reviews: 65,
  },
  {
    id: 8,
    name: "AK-900 Wired Keyboard",
    img: "/images/keyboard.svg",
    price: 200,
    oldPrice: null,
    discount: null,
    rating: 5,
    reviews: 65,
  },
];

export default function Wishlist() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
    AOS.refresh();
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", background: "#fff", minHeight: "100vh" }}>
      <AnnouncementBar />
      <Navbar />
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 16px 64px 16px", background: "#fff" }}>
      {/* Wishlist Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Wishlist ({wishlist.length})</h2>
        <button
          style={{
            background: "#fff",
            color: "#111",
            border: "1px solid #ddd",
            borderRadius: 6,
            padding: "8px 24px",
            fontWeight: 600,
            fontSize: 15,
            cursor: "pointer",
          }}
          data-aos="fade-left"
        >
          Move All To Bag
        </button>
      </div>
      {/* Wishlist Cards */}
      <div style={{ display: "flex", gap: 24, marginBottom: 48, flexWrap: "wrap", justifyContent: "center"  }}>
        {wishlist.map((item, idx) => (
          <div
            key={item.id}
            style={{
              background: "#fff",
              borderRadius: 10,
              boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
              padding: 0,
              width: 260,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid #eee",
              overflow: "hidden",
            }}
            data-aos="fade-up"
            data-aos-delay={100 + idx * 100}
          >
            {/* Discount badge */}
            {item.discount && (
              <span style={{
                position: "absolute",
                top: 12,
                left: 12,
                background: "#db4444",
                color: "#fff",
                borderRadius: 4,
                fontSize: 13,
                fontWeight: 700,
                padding: "2px 10px",
                zIndex: 10
              }}>
                -{item.discount}%
              </span>
            )}
            {/* Delete icon */}
            <span
              style={{
                position: "absolute",
                top: 14,
                right: 14,
                color: "#bbb",
                background: "#fff",
                borderRadius: "50%",
                width: 28,
                height: 28,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10,
                fontSize: 18,
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
              }}
              title="Remove"
            >
              <FiTrash2 />
            </span>
            {/* Product image */}
            <div style={{ width: "100%", background: "#f5f5f5", height: 180, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={item.img} alt={item.name} style={{ width: "70%", height: "70%", objectFit: "contain" }} />
            </div>
            {/* Name */}
            <div style={{ fontWeight: 600, fontSize: 15, margin: "16px 0 0 0", textAlign: "center" }}>{item.name}</div>
            {/* Price */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "8px 0 0 0" }}>
              <span style={{ color: "#db4444", fontWeight: 700 }}>${item.price}</span>
              {item.oldPrice && (
                <span style={{ textDecoration: "line-through", color: "#888", fontSize: 14 }}>${item.oldPrice}</span>
              )}
            </div>
            {/* Add to cart button */}
            <button
              style={{
                width: "100%",
                background: "#111",
                color: "#fff",
                border: "none",
                borderRadius: 0,
                padding: "10px 0",
                fontWeight: 600,
                marginTop: 14,
                cursor: "pointer",
                fontSize: 15,
              }}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      {/* Just For You Section */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "40px 0 16px 0" }}>
        <div style={{ width: 20, height: 30, background: "#db4444", borderRadius: 2 }} />
        <span style={{ color: "#db4444", fontWeight: 600, fontSize: 16 }}>Just For You</span>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
        <button
          style={{
            background: "#fff",
            color: "#111",
            border: "1px solid #ddd",
            borderRadius: 6,
            padding: "8px 24px",
            fontWeight: 600,
            fontSize: 15,
            cursor: "pointer",
          }}
          data-aos="fade-left"
        >
          See All
        </button>
      </div>
      {/* Just For You Cards */}
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center"  }}>
        {justForYou.map((item, idx) => (
          <div
            key={item.id}
            style={{
              background: "#fff",
              borderRadius: 10,
              boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
              padding: 0,
              width: 260,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid #eee",
              overflow: "hidden",
            }}
            data-aos="fade-up"
            data-aos-delay={100 + idx * 100}
          >
            {/* Discount/New badge */}
            {item.discount && (
              <span style={{
                position: "absolute",
                top: 12,
                left: 12,
                background: typeof item.discount === "string" ? "#00C853" : "#db4444",
                color: "#fff",
                borderRadius: 4,
                fontSize: 13,
                fontWeight: 700,
                padding: "2px 10px",
                zIndex: 10
              }}>
                {typeof item.discount === "string" ? item.discount : `-${item.discount}%`}
              </span>
            )}
            {/* Eye icon */}
            <span
              style={{
                position: "absolute",
                top: 14,
                right: 14,
                color: "#bbb",
                background: "#fff",
                borderRadius: "50%",
                width: 28,
                height: 28,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10,
                fontSize: 18,
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
              }}
              title="View"
            >
              <FiEye />
            </span>
            {/* Product image */}
            <div style={{ width: "100%", background: "#f5f5f5", height: 180, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={item.img} alt={item.name} style={{ width: "70%", height: "70%", objectFit: "contain" }} />
            </div>
            {/* Name */}
            <div style={{ fontWeight: 600, fontSize: 15, margin: "16px 0 0 0", textAlign: "center" }}>{item.name}</div>
            {/* Rating */}
            <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 14, color: "#f6b01e", margin: "8px 0 0 0" }}>
              {Array(5).fill().map((_, i) => (
                <FaStar key={i} color={i < Math.round(item.rating) ? "#f6b01e" : "#ddd"} size={14} />
              ))}
              <span style={{ color: "#222", fontWeight: 500 }}>({item.reviews})</span>
            </div>
            {/* Price */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "8px 0 0 0" }}>
              <span style={{ color: "#db4444", fontWeight: 700 }}>${item.price}</span>
              {item.oldPrice && (
                <span style={{ textDecoration: "line-through", color: "#888", fontSize: 14 }}>${item.oldPrice}</span>
              )}
            </div>
            {/* Add to cart button */}
            <button
              style={{
                width: "100%",
                background: "#111",
                color: "#fff",
                border: "none",
                borderRadius: 0,
                padding: "10px 0",
                fontWeight: 600,
                marginTop: 14,
                cursor: "pointer",
                fontSize: 15,
              }}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
    < Footer />
    </div>
  );
}
