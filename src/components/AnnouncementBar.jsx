import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AnnouncementBar() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
    AOS.refresh();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        margin: 0,
        background: "#000",
        color: "#fff",
        padding: "12px 0",
        fontSize: "16px",
        fontWeight: 500,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        left: 0,
        top: 0,
        borderRadius: 0,
        boxSizing: "border-box"
      }}
      data-aos="fade-down"
    >
      <div style={{ flex: 1, textAlign: "center" }}>
        Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!{" "}
        <a href="#" style={{ color: "#fff", textDecoration: "underline", fontWeight: 700, marginLeft: "8px" }}>
          ShopNow
        </a>
      </div>
      <div style={{
        position: "absolute",
        right: "40px",
        top: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        fontSize: "15px",
        cursor: "pointer"
      }}>
        English <span style={{ fontSize: "10px", marginLeft: "4px" }}>▼</span>
      </div>
    </div>
  );
}
