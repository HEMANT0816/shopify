import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "40px 0",
        background: "#fff",
        textAlign: "center",
      }}
    >
      <img
        src="/images/Footer.svg"
        alt="Footer"
        style={{
          width: "1440px",
          maxWidth: "1200px",
          display: "block",
          margin: "0 auto",
          borderRadius: "8px",
        }}
      />
      {/* Optional: Add more footer content below */}
      {/* <div style={{ marginTop: 24, color: "#888", fontSize: 14 }}>
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div> */}
    </footer>
  );
}
