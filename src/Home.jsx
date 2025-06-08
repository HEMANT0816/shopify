import React from "react";
import { FiHeart, FiChevronLeft, FiChevronRight, FiEye, FiTruck, FiHeadphones, FiCheckCircle, FiSearch } from "react-icons/fi";
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

// Best Selling Products data
const bestSelling = [
  {
    id: 1,
    name: "The north coat",
    price: 260,
    oldPrice: 360,
    img: "https://cdn.shopify.com/s/files/1/0257/6087/9356/products/north-coat.png?v=1614329123",
    rating: 4.5,
    reviews: 65,
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    price: 960,
    oldPrice: 1160,
    img: "https://cdn.shopify.com/s/files/1/0257/6087/9356/products/gucci-bag.png?v=1614329123",
    rating: 4.5,
    reviews: 65,
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    price: 160,
    oldPrice: 170,
    img: "https://cdn.shopify.com/s/files/1/0257/6087/9356/products/cpu-cooler.png?v=1614329123",
    rating: 4.5,
    reviews: 65,
  },
  {
    id: 4,
    name: "Small BookSelf",
    price: 360,
    oldPrice: null,
    img: "https://cdn.shopify.com/s/files/1/0257/6087/9356/products/bookshelf.png?v=1614329123",
    rating: 4.5,
    reviews: 65,
  },
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
        <div style={{ fontSize: "26px", fontWeight: 700, marginRight: "150px" }}>Exclusive</div>
        <nav style={{ display: "flex", gap: "40px", fontSize: "17px", fontWeight: 500 }}>
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
        <div style={{
               position: "relative",
               width: "320px",
               display: "flex",
               alignItems: "center"
               }}>
          <input
            type="text"
            placeholder="What are you looking for?"
            style={{
              width: "320px",
              padding: "8px 40px 8px 16px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              fontSize: "15px",
              outline: "none"
            }}
          />
          <FiSearch
             size={20}
             style={{
             position: "absolute",
             right: 14,
             top: "50%",
             transform: "translateY(-50%)",
             color: "#888",
             pointerEvents: "none"
             }}
            />
        </div>
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
                  <span style={{ fontSize: "18px", marginLeft: "6px" }}>›</span>
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
                        </div>


      {/* Flash Sales Section */}
      <section style={{ maxWidth: 1200, margin: "48px auto 0", padding: "0 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
               width: 20,
               height: 30,
               background: "#db4444",
               borderRadius: 2
              }} />
          <span style={{ color: "#db4444", fontWeight: 600, fontSize: 16 }}>Today's</span>
        </div>
        
        <div style={{ display: "flex", alignItems: "center", gap: 32, margin: "8px 0 0 0" }}>
        <h2 style={{ fontSize: 36, fontWeight: 600, margin: " 0" }}>Flash Sales</h2>
        {/* Timer */}
        <div style={{ display: "flex", gap: 32, margin: "8px 0 0 0" }}>
          {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 4 }}>{label}</div>
              <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: 2}}>03</div>
            </div>
          ))}
        </div>
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
                borderRadius: 4, fontSize: 13, fontWeight: 600, padding: "2px 8px", zIndex: 10
              }}>
                -{product.discount}%
              </span>
              {/* Wishlist Icon */}
              <span style={{
                position: "absolute", top: 16, right: 16, color: "#222", cursor: "pointer", zIndex: 10
              }}>
                <FiHeart />
              </span>
              {/* Product Image */}
              <div style={{
                   background: "#fff",
                   borderRadius: 10,
                   boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                   padding: 16,
                   width: 220,
                   position: "relative",
                   zIndex: 0
                   }}>

              <img src={"/images/Frame 611.png"} alt={product.name} style={{ width: "100%", height: 120, objectFit: "contain", marginBottom: 12 }} />
              <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{product.name}</div>
              
               {/* Rating Section */}
              <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 14, color: "#f6b01e", marginBottom: 8 }}>
                {Array(5).fill().map((_, i) => <FaStar key={i} color={i < Math.round(product.rating) ? "#f6b01e" : "#ddd"} size={14} />)}
                <span style={{ color: "#222", fontWeight: 500 }}>({product.reviews})</span>
              </div>
              {/* Price Section */}
  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
    <span style={{ color: "#db4444", fontWeight: 700 }}>${product.price}</span>
    <span style={{ textDecoration: "line-through", color: "#888", fontSize: 14 }}>${product.oldPrice}</span>
  </div>
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
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
               width: 20,
               height: 30,
               background: "#db4444",
               borderRadius: 2
              }} />
        <div style={{ color: "#db4444", fontWeight: 600, fontSize: 16, marginBottom: 8 }}>Categories</div>
        </div>
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
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
               width: 20,
               height: 30,
               background: "#db4444",
               borderRadius: 2
              }} />
            <span style={{ color: "#db4444", fontWeight: 600, fontSize: 16 }}>This Month</span></div>
          <button style={{
            background: "#db4444", color: "#fff", border: "none", borderRadius: 6,
            padding: "8px 28px", fontWeight: 600, fontSize: 16, cursor: "pointer"
          }}>
            View All
          </button>
        </div>
        <h2 style={{ fontSize: 32, fontWeight: 700, margin: "8px 0 32px 0" }}>Best Selling Products</h2>
        <div style={{ display: "flex", gap: 24, alignItems: "stretch" }}>
          {bestSelling.map(product => (
            <div key={product.id} style={{
              background: "#fff",
              borderRadius: 10,
              boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
              padding: 20,
              width: 220,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}>
              {/* Wishlist & View Icons */}
              <div style={{ position: "absolute", top: 16, right: 16, display: "flex", flexDirection: "column", gap: 10 }}>
                <span style={{ color: "#222", cursor: "pointer" }}><FiHeart /></span>
                <span style={{ color: "#222", cursor: "pointer" }}><FiEye /></span>
              </div>
              {/* Product Image */}
              <img src={"/images/Frame 605.svg"} alt={product.name} style={{ width: "100%", height: 120, objectFit: "contain", marginBottom: 12 }} />
              {/* Product Name */}
              <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4, textAlign: "center" }}>{product.name}</div>
              {/* Price */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <span style={{ color: "#db4444", fontWeight: 700 }}>${product.price}</span>
                {product.oldPrice && (
                  <span style={{ textDecoration: "line-through", color: "#888", fontSize: 14 }}>${product.oldPrice}</span>
                )}
              </div>
              {/* Rating */}
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
      
      {/* Our Products */}
      <section style={{ maxWidth: 1200, margin: "48px auto 0", padding: "0 16px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}></div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
               width: 20,
               height: 30,
               background: "#db4444",
               borderRadius: 2
              }} />
          <span style={{ color: "#db4444", fontWeight: 600, fontSize: 16 }}>Our Products</span></div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "24px 0 24px 0" }}>
        <h2 style={{ fontSize: 36, fontWeight: 600, margin: " 0" }}>Explore Our Products</h2>
        <div style={{ display: "flex", gap: 12 }}>
    <button style={{
      background: "#fff",
      border: "1px solid #eee",
      borderRadius: "50%",
      width: 32,
      height: 32,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }}>
      <FiChevronLeft />
    </button>
    <button style={{
      background: "#fff",
      border: "1px solid #eee",
      borderRadius: "50%",
      width: 32,
      height: 32,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }}>
      <FiChevronRight />
    </button>
    </div>
  </div>
        <div style={{ display: "flex", gap: 24, alignItems: "stretch", marginBottom: 32 }}>
          {bestSelling.slice(0,4).map(product => (
            <div key={product.id} style={{
              background: "#fff",
              borderRadius: 10,
              boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
              padding: 20,
              width: 220,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}>
              {/* Wishlist & View Icons */}
              <div style={{ position: "absolute", top: 16, right: 16, display: "flex", flexDirection: "column", gap: 10 }}>
                <span style={{ color: "#222", cursor: "pointer" }}><FiHeart /></span>
                <span style={{ color: "#222", cursor: "pointer" }}><FiEye /></span>
              </div>
              {/* Product Image */}
              <img src={"/images/Cesar.svg"} alt={product.name} style={{ width: "100%", height: 120, objectFit: "contain", marginBottom: 12 }} />
              {/* Product Name */}
              <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4, textAlign: "center" }}>{product.name}</div>
              {/* Price */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <span style={{ color: "#db4444", fontWeight: 700 }}>${product.price}</span>
                {product.oldPrice && (
                  <span style={{ textDecoration: "line-through", color: "#888", fontSize: 14 }}>${product.oldPrice}</span>
                )}
              </div>
              {/* Rating */}
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


      {/* New Arrival Section */}
      <section style={{ maxWidth: 1200, margin: "48px auto 0", padding: "0 16px" }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, margin: "0 0 32px 0" }}>New Arrival</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: "24px",
            minHeight: 420,
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
              minHeight: 420,
            }}
          >
            <img
              src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/36190796/6e2c1b3d0e0b2d8c3e9b4e6e1b4e3d1e6b3b1e6e.png"
              alt="PlayStation 5"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.7,
                zIndex: 0,
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
                PlayStation 5
              </div>
              <div style={{ fontSize: 15, marginBottom: 18 }}>
                Black and White version of the PS5 coming out on sale.
              </div>
              <a
                href="#"
                style={{
                  color: "#fff",
                  textDecoration: "underline",
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                Shop Now
              </a>
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
              overflow: "hidden",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
              alt="Women's Collections"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.7,
                zIndex: 0,
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
                Women's Collections
              </div>
              <div style={{ fontSize: 15, marginBottom: 18 }}>
                Featured woman collections that give you another vibe.
              </div>
              <a
                href="#"
                style={{
                  color: "#fff",
                  textDecoration: "underline",
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                Shop Now
              </a>
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
              overflow: "hidden",
            }}
          >
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/61u48FEsQwL._AC_SL1500_.jpg"
              alt="Speakers"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.7,
                zIndex: 0,
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
                Speakers
              </div>
              <div style={{ fontSize: 15, marginBottom: 18 }}>
                Amazon wireless speakers
              </div>
              <a
                href="#"
                style={{
                  color: "#fff",
                  textDecoration: "underline",
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                Shop Now
              </a>
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
              overflow: "hidden",
            }}
          >
            <img
              src="https://cdn.notinoimg.com/images/gallery/gucci/gucci-intense-oud-edp__1.jpg"
              alt="Perfume"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.7,
                zIndex: 0,
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
                Perfume
              </div>
              <div style={{ fontSize: 15, marginBottom: 18 }}>
                GUCCI INTENSE OUD EDP
              </div>
              <a
                href="#"
                style={{
                  color: "#fff",
                  textDecoration: "underline",
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features Section */}
<section style={{
  maxWidth: 1200,
  margin: "56px auto 0",
  padding: "0 16px 32px 16px"
}}>
  <div style={{
    display: "flex",
    justifyContent: "center",
    gap: 80,
    flexWrap: "wrap"
  }}>
    {/* Free and Fast Delivery */}
    <div style={{ textAlign: "center", minWidth: 220 }}>
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
          <FiTruck size={28} color="#fff" />
        </span>
      </div>
      <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>FREE AND FAST DELIVERY</div>
      <div style={{ color: "#444", fontSize: 15 }}>Free delivery for all orders over $140</div>
    </div>
    {/* 24/7 Customer Service */}
    <div style={{ textAlign: "center", minWidth: 220 }}>
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
          <FiHeadphones size={28} color="#fff" />
        </span>
      </div>
      <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>24/7 CUSTOMER SERVICE</div>
      <div style={{ color: "#444", fontSize: 15 }}>Friendly 24/7 customer support</div>
    </div>
    {/* Money Back Guarantee */}
    <div style={{ textAlign: "center", minWidth: 220 }}>
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
          <FiCheckCircle size={28} color="#fff" />
        </span>
      </div>
      <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>MONEY BACK GUARANTEE</div>
      <div style={{ color: "#444", fontSize: 15 }}>We return money within 30 days</div>
    </div>
  </div>
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
