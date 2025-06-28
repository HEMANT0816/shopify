import React, { useEffect } from "react";
import { FiHeart, FiEye } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OurProductsSection({ ourProducts }) {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
    AOS.refresh();
  }, []);

  return (
    <section style={{ maxWidth: 1200, margin: "48px auto 0", padding: "0 16px" }}>
      <div
        style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}
        data-aos="fade-right"
      >
        <div style={{ width: 20, height: 30, background: "#db4444", borderRadius: 2 }} />
        <span style={{ color: "#db4444", fontWeight: 600, fontSize: 16 }}>Our Products</span>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "8px 0 32px 0" }}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2 style={{ fontSize: 36, fontWeight: 700, margin: "0", letterSpacing: "-1px" }}>Explore Our Products</h2>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignContent: "space-between", gap: 8, marginLeft: 12 }}>
          <button style={{ background: "#f5f5f5", border: "1px solid #eee", borderRadius: "50%", width: 46, height: 36, display: "flex", justifyContent: "center", cursor: "pointer" }}>
            <img src="/images/left-arrow.png" alt="Left" style={{ width: 24, height: 24 }} />
          </button>
          <button style={{ background: "#f5f5f5", border: "1px solid #eee", borderRadius: "50%", width: 46, height: 36, display: "flex", justifyContent: "center", cursor: "pointer" }}>
            <img src="/images/right-arrow.png" alt="Right" style={{ width: 24, height: 24 }} />
          </button>
        </div>
      </div>
      <div style={{ display: "flex", gap: 24, alignItems: "stretch", flexWrap: "wrap" }}>
        {ourProducts.map((product, idx) => (
          <div
            key={product.id}
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
            data-aos-delay={200 + idx * 100}
          >
            <div style={{ background: "#f5f5f5", borderRadius: 10, width: 280, height: 190, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, marginTop: 32, position: "relative", overflow: "hidden" }}>
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
            </div>
            {product.id === 2 ? (
              <button style={{ width: "100%", background: "#000", color: "#fff", border: "none", borderRadius: 6, padding: "8px 0", fontWeight: 600, marginTop: 8, cursor: "pointer" }}>
                Add To Cart
              </button>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
