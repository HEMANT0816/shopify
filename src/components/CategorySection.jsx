import React, { useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import CategoryCard from "./CategoryCard"; 
import AOS from "aos";
import "aos/dist/aos.css";

// Main CategorySection component
export default function CategorySection({ categories }) {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
    AOS.refresh();
  }, []);

  return (
    <section style={{ maxWidth: 1200, margin: "48px auto 0", padding: "0 16px" }}>
      {/* Header code */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }} data-aos="fade-right">
        <div style={{ width: 20, height: 30, background: "#db4444", borderRadius: 2 }} />
        <div style={{ color: "#db4444", fontWeight: 600, fontSize: 16, marginBottom: 8 }}>Categories</div>
      </div>
      <h2
        style={{ fontSize: 28, fontWeight: 700, margin: "8px 0 32px 0" }}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Browse By Category
      </h2>

      <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
        {categories.map((cat, idx) => (
          <CategoryCard key={cat.name} cat={cat} delay={150 + idx * 100} />
        ))}
        {/* Arrows */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 12,
            marginLeft: 12
          }}
          data-aos="fade-left"
          data-aos-delay={150 + categories.length * 100}
        >
          <button style={{
            background: "#fff", border: "1px solid #eee", borderRadius: "50%", width: 32, height: 32,
            display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"
          }}>
            <FiChevronLeft />
          </button>
          <button style={{
            background: "#fff", border: "1px solid #eee", borderRadius: "50%", width: 32, height: 32,
            display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"
          }}>
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
