import React from "react";
import { FiHeart, FiEye } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

export default function BestSellingSection({ bestSelling }) {
  return (
    <section style={{ maxWidth: 1200, margin: "48px auto 0", padding: "0 16px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <div style={{ width: 20, height: 30, background: "#db4444", borderRadius: 2 }} />
          <span style={{ color: "#db4444", fontWeight: 600, fontSize: 16 }}>This Month</span>
        </div>
        <button style={{ background: "#db4444", color: "#fff", border: "none", borderRadius: 6, padding: "8px 28px", fontWeight: 600, fontSize: 16, cursor: "pointer" }}>
          View All
        </button>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "8px 0 32px 0" }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, margin: 0 }}>Best Selling Products</h2>
      </div>
      <div style={{ display: "flex", gap: 24, alignItems: "stretch" }}>
        {bestSelling.map(product => (
          <div key={product.id} style={{ background: "#f5f5f5", borderRadius: 10, boxShadow: "0 2px 8px rgba(0,0,0,0.03)", padding: 20, width: 220, position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ position: "absolute", top: 16, right: 16, display: "flex", flexDirection: "column", gap: 10 }}>
              <span style={{ color: "#222", cursor: "pointer" }}><FiHeart /></span>
              <span style={{ color: "#222", cursor: "pointer" }}><FiEye /></span>
            </div>
            <img src={product.img} alt={product.name} style={{ width: "100%", height: 120, objectFit: "contain", marginBottom: 12 }} />
            <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4, textAlign: "center" }}>{product.name}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <span style={{ color: "#db4444", fontWeight: 700 }}>${product.price}</span>
              {product.oldPrice && (
                <span style={{ textDecoration: "line-through", color: "#888", fontSize: 14 }}>${product.oldPrice}</span>
              )}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 14, color: "#f6b01e", marginBottom: 8 }}>
              {Array(5).fill().map((_, i) => (
                <FaStar key={i} color={i < Math.round(product.rating) ? "#f6b01e" : "#ddd"} size={14} />
              ))}
              <span style={{ color: "#222", fontWeight: 500 }}>({product.reviews})</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
