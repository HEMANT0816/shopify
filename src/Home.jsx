import React from "react";
import { FiHeart, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { BsCamera, BsPhone, BsLaptop, BsSmartwatch, BsHeadphones, BsController } from "react-icons/bs";

// Product data for Flash Sales
const flashSales = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    discount: 40,
    price: 120,
    oldPrice: 160,
    img: "https://m.media-amazon.com/images/I/61N6p7B+XSL._AC_UF894,1000_QL80_.jpg",
    rating: 4.5,
    reviews: 88,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    discount: 35,
    price: 960,
    oldPrice: 1500,
    img: "https://m.media-amazon.com/images/I/81PLqxtrJzL._AC_UF894,1000_QL80_.jpg",
    rating: 4.2,
    reviews: 75,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    discount: 30,
    price: 370,
    oldPrice: 400,
    img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UF894,1000_QL80_.jpg",
    rating: 4.7,
    reviews: 98,
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    discount: 25,
    price: 375,
    oldPrice: 400,
    img: "https://m.media-amazon.com/images/I/71y4ZK3QK5L._AC_UF894,1000_QL80_.jpg",
    rating: 4.6,
    reviews: 99,
  },
];

// Category data
const categories = [
  { name: "Phones", icon: <BsPhone size={32} /> },
  { name: "Computers", icon: <BsLaptop size={32} /> },
  { name: "SmartWatch", icon: <BsSmartwatch size={32} /> },
  { name: "Camera", icon: <BsCamera size={32} />, active: true },
  { name: "HeadPhones", icon: <BsHeadphones size={32} /> },
  { name: "Gaming", icon: <BsController size={32} /> },
];

export default function Home() {
  return (
    <div style={{
      margin: 0,
      fontFamily: "'Poppins', sans-serif",
      background: "#fff",
      color: "#1a1a1a",
      minHeight: "100vh"
    }}>
      {/* Top Announcement Bar */}
      <div style={{
        background: "#000",
        color: "#fff",
        padding: "12px 0",
        fontSize: "16px",
        fontWeight: 500,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
      }}>
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

      {/* Navbar */}
      <div style={{
        display: "flex",
        alignItems: "center",
        padding: "0 40px",
        height: "70px",
        borderBottom: "1px solid #eee",
        background: "#fff"
      }}>
        <div style={{ fontSize: "26px", fontWeight: 700, marginRight: "40px" }}>Exclusive</div>
        <nav style={{ display: "flex", gap: "32px", fontSize: "17px", fontWeight: 500 }}>
          <a href="#" style={{ color: "#1a1a1a", textDecoration: "none", position: "relative", padding: "4px 0", borderBottom: "2px solid #1a1a1a" }}>
            Home
          </a>
          <a href="#" style={{ color: "inherit", textDecoration: "none", position: "relative", padding: "4px 0" }}>
            Contact
          </a>
          <a href="#" style={{ color: "inherit", textDecoration: "none", position: "relative", padding: "4px 0" }}>
            About
          </a>
          <a href="#" style={{ color: "inherit", textDecoration: "none", position: "relative", padding: "4px 0" }}>
            Sign Up
          </a>
        </nav>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <input
            type="text"
            placeholder="What are you looking for?"
            style={{
              width: "320px",
              padding: "8px 16px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              fontSize: "15px",
              outline: "none"
            }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "22px", marginLeft: "30px" }}>
          <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="User" style={{ width: "24px", height: "24px", cursor: "pointer" }} />
          <img src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="Wishlist" style={{ width: "24px", height: "24px", cursor: "pointer" }} />
          <img src="https://cdn-icons-png.flaticon.com/512/126/126515.png" alt="Cart" style={{ width: "24px", height: "24px", cursor: "pointer" }} />
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        display: "flex",
        maxWidth: "1200px",
        margin: "32px auto 0",
        gap: "32px"
      }}>
        {/* Sidebar */}
        <aside style={{
          width: "210px",
          borderRight: "1px solid #eee",
          paddingTop: "18px"
        }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {["Woman's Fashion", "Men's Fashion", "Electronics", "Home & Lifestyle", "Medicine", "Sports & Outdoor", "Baby's & Toys", "Groceries & Pets", "Health & Beauty"].map((item, idx) => (
              <li
                key={idx}
                style={{
                  fontSize: "16px",
                  padding: "13px 0 13px 18px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  transition: "background 0.2s"
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#f4f7ff"}
                onMouseLeave={(e) => e.currentTarget.style.background = ""}
              >
                {item}
                {(item === "Woman's Fashion" || item === "Men's Fashion") && (
                  <span style={{ fontSize: "18px", marginLeft: "8px" }}>›</span>
                )}
              </li>
            ))}
          </ul>
        </aside>

        {/* Banner Section */}
        <section style={{
          flex: 1,
          padding: "0 0 0 32px",
          display: "flex",
          alignItems: "center",
          minWidth: 0
        }}>
          <div style={{
            background: "#111",
            color: "#fff",
            borderRadius: "18px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            width: "100%",
            minHeight: "320px",
            position: "relative"
          }}>
            <div style={{
              padding: "36px 40px",
              zIndex: 1,
              flex: 1
            }}>
              <img
                src="/images/Frame 560.png"
                alt="Apple"
                style={{ width: "35px", marginBottom: "15px" }}
              />
              <p style={{ fontSize: "15px", margin: "0 0 12px" }}>iPhone 14 Series</p>
              <h2 style={{ fontSize: "32px", fontWeight: 700, margin: "0 0 10px" }}>Up to 10% off Voucher</h2>
              <a
                href="#"
                style={{
                  color: "#fff",
                  background: "#e94560",
                  padding: "10px 28px",
                  borderRadius: "7px",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontSize: "16px",
                  transition: "background 0.2s"
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#d73350"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#e94560"}
              >
                Shop Now →
              </a>
            </div>
            <div style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              height: "100%",
              minWidth: 0
            }}>
              <img
                src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-14-Pro_Deep-Purple_09142022_inline.jpg.large.jpg"
                alt="iPhone 14"
                style={{
                  maxWidth: "330px",
                  width: "100%",
                  display: "block",
                  borderRadius: "0 0 18px 0"
                }}
              />
            </div>
          </div>
        </section>
      </div>

      {/* Flash Sales Section */}
      <section style={{ maxWidth: 1200, margin: "48px auto 0", padding: "0 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: "#db4444", fontWeight: 600, fontSize: 16 }}>Today's</span>
        </div>
        <h2 style={{ fontSize: 32, fontWeight: 700, margin: "8px 0 0 0" }}>Flash Sales</h2>
        {/* Timer */}
        <div style={{ display: "flex", gap: 32, margin: "16px 0" }}>
          {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: 2 }}>03</div>
              <div style={{ fontSize: 13, fontWeight: 500 }}>{label}</div>
            </div>
          ))}
        </div>
        {/* Product Cards */}
        <div style={{ display: "flex", gap: 24, alignItems: "stretch", margin: "24px 0" }}>
          {flashSales.map(product => (
            <div key={product.id} style={{
              background: "#fff",
              borderRadius: 10,
              boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
              padding: 16,
              width: 220,
              position: "relative"
            }}>
              {/*Discount Label */}
              <span style={{
                position: "absolute", top: 16, left: 16, background: "#db4444", color: "#fff",
                borderRadius: 4, fontSize: 13, fontWeight: 600, padding: "2px 8px"
              }}>
                -{product.discount}%
              </span>
              {/* Wishlist Icon */}
              <span style={{
                position: "absolute", top: 16, right: 16, color: "#222", cursor: "pointer"
              }}>
                <FiHeart />
              </span>
              {/* Product Image */}
              <img src={product.img} alt={product.name} style={{ width: "100%", height: 120, objectFit: "contain", marginBottom: 12 }} />
              <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{product.name}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <span style={{ color: "#db4444", fontWeight: 700 }}>${product.price}</span>
                <span style={{ textDecoration: "line-through", color: "#888", fontSize: 14 }}>${product.oldPrice}</span>
              </div>
               {/* Rating Section */}
              <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 14, color: "#f6b01e", marginBottom: 8 }}>
                {Array(5).fill().map((_, i) => <FaStar key={i} color={i < Math.round(product.rating) ? "#f6b01e" : "#ddd"} size={14} />)}
                <span style={{ color: "#222", fontWeight: 500 }}>({product.reviews})</span>
              </div>
              {product.id === 2 ? (
                <button style={{
                  width: "100%", background: "#000", color: "#fff", border: "none", borderRadius: 6,
                  padding: "8px 0", fontWeight: 600, marginTop: 8, cursor: "pointer"
                }}>
                  Add To Cart
                </button>
              ) : null}
            </div>
          ))}
          {/* Arrows */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 12, marginLeft: 12 }}>
            <button style={{
              background: "#fff", border: "1px solid #eee", borderRadius: "50%", width: 32, height: 32,
              display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"
            }}>
              <FiChevronLeft />
            </button>
            <button style={{
              background: "inherit", border: "1px solid #eee", borderRadius: "50%", width: 32, height: 32,
              display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"
            }}>
              <FiChevronRight />
            </button>
          </div>
        </div>
        {/* View All Products Button */}
        <div style={{ textAlign: "center", margin: "24px 0" }}>
          <button style={{
            background: "#db4444", color: "#fff", border: "none", borderRadius: 6,
            padding: "14px 38px", fontWeight: 600, fontSize: 16, cursor: "pointer"
          }}>
            View All Products
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section style={{ maxWidth: 1200, margin: "48px auto 0", padding: "0 16px" }}>
        <div style={{ color: "#db4444", fontWeight: 600, fontSize: 16, marginBottom: 8 }}>Categories</div>
        <h2 style={{ fontSize: 28, fontWeight: 700, margin: "8px 0 32px 0" }}>Browse By Category</h2>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {categories.map(cat => (
            <div key={cat.name} style={{
              flex: "1 1 120px", minWidth: 120, maxWidth: 160,
              background: cat.active ? "#db4444" : "#fff",
              color: cat.active ? "#fff" : "#222",
              border: `2px solid ${cat.active ? "#db4444" : "#eee"}`,
              borderRadius: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "32px 0 20px 0",
              fontWeight: 600,
              fontSize: 16,
              transition: "all 0.2s",
              cursor: "pointer"
            }}>
              <div style={{ marginBottom: 12 }}>{cat.icon}</div>
              {cat.name}
            </div>
          ))}
          {/* Arrows */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 12, marginLeft: 12 }}>
            <button style={{
              background: "#fff", border: "1px solid #eee", borderRadius: "50%", width: 32, height: 32,
              display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"
            }}>
              <FiChevronLeft />
            </button>
            <button style={{
              background: "#fff", border: "1px solid #eee", borderRadius: "50%", width: 32, height: 32,
              display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"
            }}>
              <FiChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* Best Selling Product */}
        <section style={{ maxWidth: 1200, margin: "48px auto 0", padding: "0 16px" }}>
        <div style={{ color: "#db4444", fontWeight: 600, fontSize: 16, marginBottom: 8 }}>This Month</div>
        <h2 style={{ fontSize: 28, fontWeight: 700, margin: "8px 0 32px 0" }}>Best Selling Product</h2>
        </section>


      {/* Footer */}
      <footer style={{ padding: "40px 0", background: "#fff", textAlign: "center" }}>
        <img
          src="/images/Footer.svg"
          alt="Footer"
          style={{
            width: "1440px",
            maxWidth: "1200px",
            display: "block",
            margin: "0 auto",
            borderRadius: "8px"
          }}
        />
      </footer>
    </div>
  );
}
