import React from 'react';
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Account() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh", overflowX: 'hidden' }}>
      <AnnouncementBar />
      <Navbar />

      <div style={{
        display: "flex",
        maxWidth: 1200,
        margin: "40px auto 0 auto",
        padding: "0 24px",
        gap: 40,
        alignItems: "flex-start"
      }}>
        {/* Sidebar */}
        <aside style={{ width: 220 }}>
          <nav>
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 17, margin: "0 0 18px 0", fontWeight: 600 }}>Manage My Account</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ color: "#DB4444", fontWeight: 600, marginBottom: 8, cursor: "pointer" }}>My Profile</li>
                <li style={{ color: "#8d8d8d", marginBottom: 8, cursor: "pointer" }}>Address Book</li>
                <li style={{ color: "#8d8d8d", marginBottom: 8, cursor: "pointer" }}>My Payment Options</li>
              </ul>
            </div>
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 17, margin: "0 0 18px 0", fontWeight: 600 }}>My Orders</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ color: "#8d8d8d", marginBottom: 8, cursor: "pointer" }}>My Returns</li>
                <li style={{ color: "#8d8d8d", marginBottom: 8, cursor: "pointer" }}>My Cancellations</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: 17, margin: "0 0 18px 0", fontWeight: 600 }}>My WishList</h3>
            </div>
          </nav>
        </aside>

        {/* Main Profile Section */}
        <main style={{
          flex: 1,
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 2px 16px 0 rgba(0,0,0,0.04)",
          padding: "32px 40px",
          minWidth: 400
        }}>
          {/* Breadcrumbs & Welcome */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
            <div style={{ color: "#8d8d8d", fontSize: 15 }}>
              Home <span style={{ margin: "0 6px" }}>/</span> <span style={{ color: "#222" }}>My Account</span>
            </div>
            <div style={{ fontSize: 15, color: "#222" }}>
              Welcome! <span style={{ color: "#DB4444", fontWeight: 500 }}>Md Rimel</span>
            </div>
          </div>
          {/* Edit Profile Form */}
          <div style={{
            background: "#fafafa",
            borderRadius: 12,
            padding: "36px 32px 32px 32px",
            maxWidth: 600,
            margin: "0 auto"
          }}>
            <h2 style={{ color: "#DB4444", fontWeight: 600, fontSize: 22, marginBottom: 24 }}>Edit Your Profile</h2>
            <form>
              <div style={{ display: "flex", gap: 16, marginBottom: 18 }}>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: 15, color: "#222", fontWeight: 500 }}>First Name</label>
                  <input
                    type="text"
                    value="Md"
                    disabled
                    style={{
                      width: "100%",
                      marginTop: 6,
                      padding: "10px 14px",
                      borderRadius: 6,
                      border: "1px solid #e5e5e5",
                      background: "#f3f3f3",
                      color: "#888",
                      fontSize: 15
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: 15, color: "#222", fontWeight: 500 }}>Last Name</label>
                  <input
                    type="text"
                    value="Rimel"
                    disabled
                    style={{
                      width: "100%",
                      marginTop: 6,
                      padding: "10px 14px",
                      borderRadius: 6,
                      border: "1px solid #e5e5e5",
                      background: "#f3f3f3",
                      color: "#888",
                      fontSize: 15
                    }}
                  />
                </div>
              </div>
              <div style={{ display: "flex", gap: 16, marginBottom: 18 }}>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: 15, color: "#222", fontWeight: 500 }}>Email</label>
                  <input
                    type="email"
                    value="rimel111@gmail.com"
                    disabled
                    style={{
                      width: "100%",
                      marginTop: 6,
                      padding: "10px 14px",
                      borderRadius: 6,
                      border: "1px solid #e5e5e5",
                      background: "#f3f3f3",
                      color: "#888",
                      fontSize: 15
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: 15, color: "#222", fontWeight: 500 }}>Address</label>
                  <input
                    type="text"
                    value="Kingston, 5236, United State"
                    disabled
                    style={{
                      width: "100%",
                      marginTop: 6,
                      padding: "10px 14px",
                      borderRadius: 6,
                      border: "1px solid #e5e5e5",
                      background: "#f3f3f3",
                      color: "#888",
                      fontSize: 15
                    }}
                  />
                </div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 15, color: "#222", fontWeight: 500 }}>Password Changes</label>
                <input
                  type="password"
                  placeholder="Current Password"
                  style={{
                    width: "100%",
                    marginTop: 8,
                    marginBottom: 10,
                    padding: "10px 14px",
                    borderRadius: 6,
                    border: "1px solid #e5e5e5",
                    background: "#f3f3f3",
                    color: "#222",
                    fontSize: 15
                  }}
                />
                <input
                  type="password"
                  placeholder="New Password"
                  style={{
                    width: "100%",
                    marginBottom: 10,
                    padding: "10px 14px",
                    borderRadius: 6,
                    border: "1px solid #e5e5e5",
                    background: "#f3f3f3",
                    color: "#222",
                    fontSize: 15
                  }}
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  style={{
                    width: "100%",
                    marginBottom: 0,
                    padding: "10px 14px",
                    borderRadius: 6,
                    border: "1px solid #e5e5e5",
                    background: "#f3f3f3",
                    color: "#222",
                    fontSize: 15
                  }}
                />
              </div>
              <div style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 18,
                marginTop: 28
              }}>
                <button
                  type="button"
                  style={{
                    background: "none",
                    border: "none",
                    color: "#8d8d8d",
                    fontWeight: 500,
                    fontSize: 16,
                    cursor: "pointer",
                    padding: "10px 24px"
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    background: "#DB4444",
                    color: "#fff",
                    border: "none",
                    borderRadius: 6,
                    fontWeight: 600,
                    fontSize: 16,
                    cursor: "pointer",
                    padding: "10px 32px"
                  }}
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Account;
