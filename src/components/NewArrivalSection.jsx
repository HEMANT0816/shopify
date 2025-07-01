import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function NewArrivalSection() {
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
        <span style={{ color: "#db4444", fontWeight: 600, fontSize: 16 }}>Featured</span>
      </div>
      <h2
        style={{ fontSize: 32, fontWeight: 700, margin: "0 0 32px 0" }}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        New Arrival
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "24px",
        }}
      >
        {/* PlayStation 5 Large Card */}
        <div
          style={{
            gridRow: "1 / span 2",
            gridColumn: "1 / 2",
            background: "#111",
            color: "#fff",
            borderRadius: 16,
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "32px",
            minHeight: 420
          }}
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <img src="/images/ps5.svg" alt="PlayStation 5" style={{ position: "absolute", top: 89, left: 29, width: 511, height: 511, objectFit: "cover", opacity: 0.7, zIndex: 0 }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>PlayStation 5</div>
            <div style={{ fontSize: 15, marginBottom: 18 }}>Black and White version of the PS5 coming out on sale.</div>
            <a href="#" style={{ color: "#fff", textDecoration: "underline", fontWeight: 600, fontSize: 16 }}>Shop Now</a>
          </div>
        </div>
        {/* Women's Collections */}
        <div
          style={{
            gridRow: "1 / 2",
            gridColumn: "2 / 4",
            background: "#111",
            color: "#fff",
            borderRadius: 16,
            padding: "32px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            position: "relative",
            minHeight: 200,
            overflow: "hidden"
          }}
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <img src="/images/women.svg" alt="Women's Collections" style={{ position: "absolute", top: 0, right: 0, width: 432, height: 286, objectFit: "cover", opacity: 0.7, zIndex: 0 }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Women's Collections</div>
            <div style={{ fontSize: 15, marginBottom: 18 }}>Featured woman collections that give you another vibe.</div>
            <a href="#" style={{ color: "#fff", textDecoration: "underline", fontWeight: 600, fontSize: 16 }}>Shop Now</a>
          </div>
        </div>
        {/* Speakers */}
        <div
          style={{
            gridRow: "2 / 3",
            gridColumn: "2 / 3",
            background: "#111",
            color: "#fff",
            borderRadius: 16,
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            position: "relative",
            minHeight: 200,
            overflow: "hidden"
          }}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <img src="/images/Frame 707.svg" alt="Speakers" style={{ position: "absolute", top: 31, left: 30, width: 210, height: 222, objectFit: "cover", opacity: 0.7, zIndex: 0 }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Speakers</div>
            <div style={{ fontSize: 15, marginBottom: 18 }}>Amazon wireless speakers</div>
            <a href="#" style={{ color: "#fff", textDecoration: "underline", fontWeight: 600, fontSize: 16 }}>Shop Now</a>
          </div>
        </div>
        {/* Perfume */}
        <div
          style={{
            gridRow: "2 / 3",
            gridColumn: "3 / 4",
            background: "#111",
            color: "#fff",
            borderRadius: 16,
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            position: "relative",
            minHeight: 200,
            overflow: "hidden"
          }}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <img src="/images/perfume.svg" alt="Perfume" style={{ position: "absolute", top: 20, left: 30, width: 201, height: 203, objectFit: "cover", opacity: 0.7, zIndex: 0 }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Perfume</div>
            <div style={{ fontSize: 15, marginBottom: 18 }}>GUCCI INTENSE OUD EDP</div>
            <a href="#" style={{ color: "#fff", textDecoration: "underline", fontWeight: 600, fontSize: 16 }}>Shop Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}
