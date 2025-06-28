import React from "react";
import { FiHeart, FiEye } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProductCard({ product, showAddToCart, delay = 0 }) {
  React.useEffect(() => {
    AOS.init({ duration: 700, once: true });
    AOS.refresh();
  }, []);

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 10,
        boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
        padding: 16,
        width: 280,
        height: 400,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box"
      }}
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      <div style={{
        background: "#f5f5f5",
        borderRadius: 10,
        width: 280,
        height: 190,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16,
        marginTop: 32,
        position: "relative",
        overflow: "hidden"
      }}>
        {product.discount && (
          <span style={{
            position: "absolute",
            top: 18,
            left: 18,
            background: "#db4444",
            color: "#fff",
            borderRadius: 4,
            fontSize: 14,
            fontWeight: 700,
            padding: "4px 12px",
            zIndex: 10
          }}>
            -{product.discount}%
          </span>
        )}
        <span style={{ position: "absolute", top: 10, right: 10, color: "#222", cursor: "pointer", zIndex: 10 }}>
          <FiHeart />
        </span>
        <span style={{ position: "absolute", top: 40, right: 10, color: "#222", cursor: "pointer", zIndex: 10 }}>
          <FiEye />
        </span>
        <img src={product.img} alt={product.name} style={{ width: "90%", height: "90%", objectFit: "contain", display: "block" }} />
      </div>
      <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{product.name}</div>
      <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 14, color: "#f6b01e", marginBottom: 8 }}>
        {Array(5).fill().map((_, i) => <FaStar key={i} color={i < Math.round(product.rating) ? "#f6b01e" : "#ddd"} size={14} />)}
        <span style={{ color: "#222", fontWeight: 500 }}>({product.reviews})</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
        <span style={{ color: "#db4444", fontWeight: 700 }}>${product.price}</span>
        {product.oldPrice && (
          <span style={{ textDecoration: "line-through", color: "#888", fontSize: 14 }}>${product.oldPrice}</span>
        )}
      </div>
      {showAddToCart && (
        <button style={{
          width: "100%",
          background: "#000",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          padding: "8px 0",
          fontWeight: 600,
          marginTop: 8,
          cursor: "pointer"
        }}>
          Add To Cart
        </button>
      )}
    </div>
  );
}
