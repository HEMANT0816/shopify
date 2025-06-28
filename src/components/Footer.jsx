import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
    AOS.refresh();
  }, []);

  return (
    <footer
      style={{
        background: "#fff",
        textAlign: "center",
      }}
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <img
        src="/images/Footer.svg"
        alt="Footer"
        style={{
          width: "100%",
          display: "block",
          margin: "0 0 0 0",
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
