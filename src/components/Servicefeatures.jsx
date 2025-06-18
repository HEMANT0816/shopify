import React from "react";
import { FiTruck, FiHeadphones, FiCheckCircle } from "react-icons/fi";

export default function ServiceFeatures() {
  return (
    <section style={{ maxWidth: 1200, margin: "56px auto 0", padding: "0 16px 32px 16px" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 80, flexWrap: "wrap" }}>
        {/* Free and Fast Delivery */}
        <div style={{ textAlign: "center", minWidth: 220 }}>
          <div style={{ margin: "0 auto 18px", width: 64, height: 64, borderRadius: "50%", background: "#a9a9a9", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ background: "#000000", borderRadius: "50%", width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FiTruck size={28} color="#fff" />
            </span>
          </div>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>FREE AND FAST DELIVERY</div>
          <div style={{ color: "#444", fontSize: 15 }}>Free delivery for all orders over $140</div>
        </div>
        {/* 24/7 Customer Service */}
        <div style={{ textAlign: "center", minWidth: 220 }}>
          <div style={{ margin: "0 auto 18px", width: 64, height: 64, borderRadius: "50%", background: "#a9a9a9", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ background: "#000000", borderRadius: "50%", width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FiHeadphones size={28} color="#fff" />
            </span>
          </div>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>24/7 CUSTOMER SERVICE</div>
          <div style={{ color: "#444", fontSize: 15 }}>Friendly 24/7 customer support</div>
        </div>
        {/* Money Back Guarantee */}
        <div style={{ textAlign: "center", minWidth: 220 }}>
          <div style={{ margin: "0 auto 18px", width: 64, height: 64, borderRadius: "50%", background: "#a9a9a9", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ background: "#000000", borderRadius: "50%", width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FiCheckCircle size={28} color="#fff" />
            </span>
          </div>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>MONEY BACK GUARANTEE</div>
          <div style={{ color: "#444", fontSize: 15 }}>We return money within 30 days</div>
        </div>
      </div>
    </section>
  );
}
