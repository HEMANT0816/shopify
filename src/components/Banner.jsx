import React from "react";

export default function Banner() {
  return (
    <section style={{ flex: 1, padding: "0 0 0 32px", display: "flex", alignItems: "center", minWidth: 0 }}>
      <div style={{ background: "#111", borderRadius: "18px", overflow: "hidden", display: "flex", alignItems: "center", width: "100%", minHeight: "320px", position: "relative", justifyContent: "center" }}>
        <img
          src="/images/Frame 560.svg"
          alt="Banner"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: "18px" }} />
      </div>
    </section>
  );
}
