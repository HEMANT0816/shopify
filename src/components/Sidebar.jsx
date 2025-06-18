import React from "react";

const categories = [
  "Woman's Fashion", "Men's Fashion", "Electronics", "Home & Lifestyle", "Medicine", "Sports & Outdoor", "Baby's & Toys", "Groceries & Pets", "Health & Beauty"
];

export default function Sidebar() {
  return (
    <aside style={{ width: "210px", borderRight: "1px solid #eee", paddingTop: "18px" }}>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {categories.map((item, idx) => (
          <li
            key={idx}
            style={{ fontSize: "16px", padding: "13px 0 13px 18px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "background 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.background = "#f4f7ff"}
            onMouseLeave={e => e.currentTarget.style.background = ""}
          >
            {item}
            {(item === "Woman's Fashion" || item === "Men's Fashion") && (
              <span style={{ fontSize: "18px", marginLeft: "6px" }}>›</span>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
