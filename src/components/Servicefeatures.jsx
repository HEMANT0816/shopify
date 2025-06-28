import React, { useEffect } from "react";
import { FiTruck, FiHeadphones, FiCheckCircle } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServiceFeatures() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
    AOS.refresh();
  }, []);

  const features = [
    {
      icon: <FiTruck size={28} color="#fff" />,
      title: "FREE AND FAST DELIVERY",
      desc: "Free delivery for all orders over $140",
      delay: 100
    },
    {
      icon: <FiHeadphones size={28} color="#fff" />,
      title: "24/7 CUSTOMER SERVICE",
      desc: "Friendly 24/7 customer support",
      delay: 200
    },
    {
      icon: <FiCheckCircle size={28} color="#fff" />,
      title: "MONEY BACK GUARANTEE",
      desc: "We return money within 30 days",
      delay: 300
    }
  ];

  return (
    <section style={{ maxWidth: 1200, margin: "56px auto 0", padding: "0 16px 32px 16px" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 80, flexWrap: "wrap" }}>
        {features.map((f, i) => (
          <div
            key={f.title}
            style={{ textAlign: "center", minWidth: 220 }}
            data-aos="fade-up"
            data-aos-delay={f.delay}
          >
            <div style={{
              margin: "0 auto 18px",
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "#a9a9a9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <span style={{
                background: "#000000",
                borderRadius: "50%",
                width: 48,
                height: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                {f.icon}
              </span>
            </div>
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>{f.title}</div>
            <div style={{ color: "#444", fontSize: 15 }}>{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
