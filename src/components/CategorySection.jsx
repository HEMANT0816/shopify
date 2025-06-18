import React from "react";
import { FiChevronLeft , FiChevronRight } from "react-icons/fi";

function CategoryCard({ cat }) {
  return (
    <div
      style={{
        flex: "1 1 120px",
        minWidth: 120,
        maxWidth: 160,
        background: cat.active ? "#db4444" : "#fff",
        color: cat.active ? "#fff" : "#222",
        border: `2px solid ${cat.active ? "#db4444" : "#eee"}`,
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 0 20px 0",
        fontWeight: 600,
        fontSize: 16,
        transition: "all 0.2s",
        cursor: "pointer",
      }}
    >
      <div style={{ marginBottom: 12 }}>{cat.icon}</div>
      {cat.name}
    </div>
  );
}

// Main CategorySection component
export default function CategorySection({ categories }) {
  return (
    <section style={{ maxWidth: 1200, margin: "48px auto 0", padding: "0 16px" }}>
      {/* Header code */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 20, height: 30, background: "#db4444", borderRadius: 2 }} />
        <div style={{ color: "#db4444", fontWeight: 600, fontSize: 16, marginBottom: 8 }}>Categories</div>
      </div>
      <h2 style={{ fontSize: 28, fontWeight: 700, margin: "8px 0 32px 0" }}>Browse By Category</h2>

      <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
        {categories.map(cat => (
          <CategoryCard key={cat.name} cat={cat} />
        ))}
       {/* Arrows */}
                 <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 12, marginLeft: 12 }}>
                   <button style={{
                     background: "#fff", border: "1px solid #eee", borderRadius: "50%", width: 32, height: 32,
                     display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                     <FiChevronLeft />
                   </button>
                   <button style={{
                     background: "#fff", border: "1px solid #eee", borderRadius: "50%", width: 32, height: 32,
                     display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                     <FiChevronRight />
                   </button>
                 </div>
               </div>
             </section>
  );
}
