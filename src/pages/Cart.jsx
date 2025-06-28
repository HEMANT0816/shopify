import React, { useEffect, useState } from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
      image: "/images/Monitor-Small.png", 
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 550,
      quantity: 2,
      image: "/images/Gamepad-Small.svg", 
    },
  ]);

  const [couponCode, setCouponCode] = useState("");

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
    AOS.refresh();
  }, []);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div style={{ fontFamily: "sans-serif", background: "#fff", minHeight: "100vh" }}>
      <AnnouncementBar />
      <Navbar />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 20px" }}>
        {/* Breadcrumb */}
        <div
          style={{ color: "#888", marginBottom: 40, fontSize: 14 }}
          data-aos="fade-down"
        >
          Home / <span style={{ color: "#222" }}>Cart</span>
        </div>

        {/* Cart Table */}
        <div
          style={{
            background: "#fff",
            borderRadius: 8,
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            marginBottom: 24,
            overflow: "hidden"
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Table Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              gap: 16,
              padding: "16px 24px",
              background: "#f8f9fa",
              fontWeight: 600,
              fontSize: 16,
              borderBottom: "1px solid #eee"
            }}
          >
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>

          {/* Cart Items */}
          {cartItems.map((item, index) => (
            <div
              key={item.id}
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr 1fr",
                gap: 16,
                padding: "24px",
                alignItems: "center",
                borderBottom: index < cartItems.length - 1 ? "1px solid #eee" : "none"
              }}
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              {/* Product */}
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: 54, height: 54, objectFit: "cover", borderRadius: 4 }}
                />
                <span style={{ fontSize: 16 }}>{item.name}</span>
              </div>
              {/* Price */}
              <div style={{ fontSize: 16 }}>${item.price}</div>
              {/* Quantity */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="number"
                  value={item.quantity.toString().padStart(2, '0')}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                  style={{
                    width: 72,
                    padding: "8px 12px",
                    border: "1.5px solid #ddd",
                    borderRadius: 4,
                    textAlign: "center",
                    fontSize: 16
                  }}
                  min="1"
                />
              </div>
              {/* Subtotal */}
              <div style={{ fontSize: 16, fontWeight: 500 }}>
                ${item.price * item.quantity}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 80,
            flexWrap: "wrap",
            gap: 16
          }}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <button
            style={{
              background: "transparent",
              color: "#000",
              border: "1px solid #000",
              borderRadius: 4,
              padding: "16px 48px",
              fontSize: 16,
              cursor: "pointer",
              fontWeight: 500
            }}
          >
            Return To Shop
          </button>
          <button
            style={{
              background: "transparent",
              color: "#000",
              border: "1px solid #000",
              borderRadius: 4,
              padding: "16px 48px",
              fontSize: 16,
              cursor: "pointer",
              fontWeight: 500
            }}
          >
            Update Cart
          </button>
        </div>

        {/* Bottom Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 48,
            flexWrap: "wrap"
          }}
        >
          {/* Coupon Section */}
          <div
            style={{ flex: 1, minWidth: 300 }}
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <div style={{ display: "flex", gap: 16, maxWidth: 400 }}>
              <input
                type="text"
                placeholder="Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                style={{
                  flex: 1,
                  padding: "16px",
                  border: "1px solid #000",
                  borderRadius: 4,
                  fontSize: 16
                }}
              />
              <button
                style={{
                  background: "#DB4444",
                  color: "#fff",
                  border: "none",
                  borderRadius: 4,
                  padding: "16px 48px",
                  fontSize: 16,
                  cursor: "pointer",
                  fontWeight: 500
                }}
              >
                Apply Coupon
              </button>
            </div>
          </div>

          {/* Cart Total */}
          <div
            style={{
              flex: 1,
              minWidth: 350,
              maxWidth: 470,
              border: "1.5px solid #000",
              borderRadius: 4,
              padding: "32px"
            }}
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 24, margin: 0 }}>
              Cart Total
            </h3>
            
            <div style={{ marginBottom: 16 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: 16,
                  borderBottom: "1px solid #eee"
                }}
              >
                <span>Subtotal:</span>
                <span>${subtotal}</span>
              </div>
            </div>

            <div style={{ marginBottom: 16 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: 16,
                  borderBottom: "1px solid #eee"
                }}
              >
                <span>Shipping:</span>
                <span>Free</span>
              </div>
            </div>

            <div style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 600 }}>Total:</span>
                <span style={{ fontWeight: 600 }}>${total}</span>
              </div>
            </div>

            <button
              style={{
                width: "100%",
                background: "#DB4444",
                color: "#fff",
                border: "none",
                borderRadius: 4,
                padding: "16px",
                fontSize: 16,
                cursor: "pointer",
                fontWeight: 500
              }}
            >
              Process to checkout
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
