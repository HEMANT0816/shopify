import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Banner() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh();
  }, []);

  return (
    <section
      style={{
        flex: 1,
        padding: "0 0 0 32px",
        display: "flex",
        alignItems: "center",
        minWidth: 0
      }}
      data-aos="zoom-in"
      data-aos-delay="200"
    >
      <div style={{
        background: "#111",
        borderRadius: "18px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        width: "100%",
        minHeight: "320px",
        position: "relative",
        justifyContent: "center"
      }}>
        <img
          src="/images/Frame 560.svg"
          alt="Banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            borderRadius: "18px"
          }}
        />
      </div>
    </section>
  );
}
