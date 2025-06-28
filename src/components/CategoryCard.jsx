import React from "react";

export default function CategoryCard({ cat, delay = 0 }) {
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
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      <div style={{ marginBottom: 12 }}>{cat.icon}</div>
      {cat.name}
    </div>
  );
}
