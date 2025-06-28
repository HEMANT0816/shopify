import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Flash({ flashSales }) {
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
        <span style={{ color: "#db4444", fontWeight: 600, fontSize: 16 }}>Today's</span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "8px 0 32px 0"
        }}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2 style={{ fontSize: 36, fontWeight: 700, margin: " 0", letterSpacing: "-1px" }}>Flash Sales</h2>
        {/* Timer */}
        <div style={{ display: "flex", gap: 28, marginLeft: 18 }}>
          {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 4 }}>{label}</div>
              <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: 2 }}>03:</div>
            </div>
          ))}
        </div>
        {/* Arrows */}
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignContent: "space-between", gap: 8, marginLeft: 12 }}>
          <button style={{
            background: "#f5f5f5", border: "1px solid #eee", borderRadius: "50%", width: 46, height: 36,
            display: "flex", justifyContent: "center", cursor: "pointer"
          }}>
            <img src="/images/left-arrow.png" alt="Left" style={{ width: 24, height: 24 }} />
          </button>
          <button style={{
            background: "#f5f5f5", border: "1px solid #eee", borderRadius: "50%", width: 46, height: 36,
            display: "flex", justifyContent: "center", cursor: "pointer"
          }}>
            <img src="/images/right-arrow.png" alt="Right" style={{ width: 24, height: 24 }} />
          </button>
        </div>
      </div>
      {/* Flash Sale Products */}
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
        {flashSales.map((product, idx) => (
          <div key={product.id} data-aos="zoom-in" data-aos-delay={200 + idx * 100}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
