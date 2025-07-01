import React, { useEffect } from "react";
import { FiHeart, FiEye } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// Example product data
const bestSelling = [
  {
    id: 1,
    name: "The north coat",
    img: "/images/coat.svg",
    price: 250,
    oldPrice: 360,
    rating: 5,
    reviews: 65,
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    img: "/images/bag.svg", 
    price: 960,
    oldPrice: 1160,
    rating: 5,
    reviews: 65,
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    img: "images/cooler.svg",
    price: 160,
    oldPrice: 170,
    rating: 5,
    reviews: 65,
  },
  {
    id: 4,
    name: "Small BookSelf",
    img: "/images/Bookshelf.svg", 
    price: 360,
    rating: 5,
    reviews: 65,
  },
];

export default function BestSellingSection() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-in-out" });
    AOS.refresh();
  }, []);

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      {/* Best Selling Products Section */}
      <section style={{ maxWidth: 1200, margin: "48px auto 0", padding: "0 16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
          data-aos="fade-down"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 8,
            }}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div style={{ width: 20, height: 30, background: "#db4444", borderRadius: 2 }} />
            <span style={{ color: "#db4444", fontWeight: 600, fontSize: 16 }}>This Month</span>
          </div>
          <button
            style={{
              background: "#db4444",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "8px 28px",
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
            }}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            View All
          </button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "8px 0 32px 0",
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 style={{ fontSize: 32, fontWeight: 700, margin: 0 }}>Best Selling Products</h2>
        </div>
        <div style={{ display: "flex", gap: 24, alignItems: "stretch" }}>
          {bestSelling.map((product, idx) => (
            <div
              key={product.id}
              style={{
                background: "#f5f5f5",
                borderRadius: 10,
                boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                padding: 20,
                width: 220,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              data-aos="fade-up"
              data-aos-delay={300 + idx * 120}
            >
              <div style={{ position: "absolute", top: 16, right: 16, display: "flex", flexDirection: "column", gap: 10 }}>
                <span style={{ color: "#222", cursor: "pointer" }}><FiHeart /></span>
                <span style={{ color: "#222", cursor: "pointer" }}><FiEye /></span>
              </div>
              <img src={product.img} alt={product.name} style={{ width: "100%", height: 120, objectFit: "contain", marginBottom: 12 }} />
              <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4, textAlign: "center" }}>{product.name}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <span style={{ color: "#db4444", fontWeight: 700 }}>${product.price}</span>
                {product.oldPrice && (
                  <span style={{ textDecoration: "line-through", color: "#888", fontSize: 14 }}>${product.oldPrice}</span>
                )}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 14, color: "#f6b01e", marginBottom: 8 }}>
                {Array(5).fill().map((_, i) => (
                  <FaStar key={i} color={i < Math.round(product.rating) ? "#f6b01e" : "#ddd"} size={14} />
                ))}
                <span style={{ color: "#222", fontWeight: 500 }}>({product.reviews})</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* JBL Speaker Promo Section */}
      <section
        style={{
          maxWidth: 1200,
          margin: "48px auto",
          padding: "0 16px",
        }}
      >
        <div
          style={{
            background: "#171717",
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            padding: "40px 48px",
            minHeight: 320,
            position: "relative",
            overflow: "hidden",
          }}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div style={{ flex: 1 }}>
            <div style={{ color: "#00FF66", fontWeight: 600, fontSize: 16, marginBottom: 10 }}>Categories</div>
            <h2 style={{ color: "#fff", fontSize: 36, fontWeight: 700, margin: 0, marginBottom: 24 }}>
              Enhance Your<br />Music Experience
            </h2>
            <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
              <div style={{ background: "#222", color: "#fff", borderRadius: 8, padding: "12px 18px", fontWeight: 700, fontSize: 18 }}>
                23<br /><span style={{ fontSize: 12, color: "#bbb" }}>Hours</span>
              </div>
              <div style={{ background: "#222", color: "#fff", borderRadius: 8, padding: "12px 18px", fontWeight: 700, fontSize: 18 }}>
                05<br /><span style={{ fontSize: 12, color: "#bbb" }}>Days</span>
              </div>
              <div style={{ background: "#222", color: "#fff", borderRadius: 8, padding: "12px 18px", fontWeight: 700, fontSize: 18 }}>
                59<br /><span style={{ fontSize: 12, color: "#bbb" }}>Minutes</span>
              </div>
              <div style={{ background: "#222", color: "#fff", borderRadius: 8, padding: "12px 18px", fontWeight: 700, fontSize: 18 }}>
                35<br /><span style={{ fontSize: 12, color: "#bbb" }}>Seconds</span>
              </div>
            </div>
            <button
              style={{
                background: "#00FF66",
                color: "#171717",
                border: "none",
                borderRadius: 6,
                padding: "12px 40px",
                fontWeight: 700,
                fontSize: 18,
                cursor: "pointer",
              }}
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              Buy Now!
            </button>
          </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <img
              src="/images/JBL.svg"
              alt="JBL Speaker"
              style={{ width: 460, height: "auto", objectFit: "contain", display: "block" }}
              data-aos="fade-left"
              data-aos-delay="800"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
