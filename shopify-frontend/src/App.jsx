import { useState } from "react";
import { Link } from "react-router-dom";
import sideImage from './images/Side Image.png'
import frameImage from "./images/Frame 560.png";
import footerImage from "./images/Footer.svg";


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      {/* Shared Site Header */}
      <div id="siteHeader">
        {/* Top black banner */}
        <div className="bg-black text-white text-sm px-6 py-2 flex justify-between items-center">
          <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
          <Link to="/shop" className="underline">ShopNow</Link>
        </div>

        {/* Main Header */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black-600 pl-4">Exclusive</h1>
          <nav className="flex gap-6 text-gray-700">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/signup">Sign Up</Link>
          </nav>
          <div className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="border px-2 py-1 rounded"
            />
            <span>🔍</span>
            <span>❤️</span>
            <span>🛒</span>
          </div>
        </header>
        <hr size="10" width="1440px" color="black" />
      </div>

      {/* Conditional Rendering: Login or Main Site */}
      {!isLoggedIn ? (
        // LOGIN/SIGNUP FORM SECTION
        <div id="loginPage" className="min-h-[calc(100vh-180px)] flex items-center justify-center bg-gray-100 px-4">
          <div className="flex bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
            {/* Image */}
            <div className="w-1/2 hidden md:block">
              <img
                src="./images/Side Image.png" 
                alt="Login Side Image"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Login/Signup Form */}
            <div className="w-[371px] flex flex-col justify-center px-6 py-8">
              <h2 className="font-medium text-[36px] leading-[30px] tracking-[0.04em] mb-2">
                Create an account
              </h2>
              <p className="font-normal text-[16px] leading-[24px] mb-6">
                Enter your details below
              </p>
              <form onSubmit={handleLogin} className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-2 rounded font-medium text-[16px] leading-[24px] hover:bg-red-700"
                >
                  Create Account
                </button>
              </form>
              {/* Google Button */}
              <button className="mt-4 flex items-center justify-center gap-2 border border-gray-300 rounded w-[371px] h-[56px] px-[86px] py-[16px] text-[16px] leading-[24px]">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                Sign up with Google
              </button>
              {/* Footer Text */}
              <div className="mt-6 text-center text-[16px] leading-[24px]">
                Already have an account?
                <Link to="/login" className="ml-2 border-b border-black text-black w-[47px] inline-block">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // MAIN SITE CONTENT
        <div id="mainSite">
          {/* Category Section */}
          <section className="bg-gray-100 py-6">
            <div className="category-container max-w-6xl mx-auto px-4 flex items-start gap-8">
              <div className="category-section flex-grow">
                <ul className="space-y-2">
                  <li className="hover:underline cursor-pointer">Women's Fashion &nbsp;&gt;</li>
                  <li className="hover:underline cursor-pointer">Men's Fashion &nbsp;&gt;</li>
                  <li className="hover:underline cursor-pointer">Electronics</li>
                  <li className="hover:underline cursor-pointer">Home & Lifestyle</li>
                  <li className="hover:underline cursor-pointer">Medicine</li>
                  <li className="hover:underline cursor-pointer">Sports & Outdoor</li>
                  <li className="hover:underline cursor-pointer">Baby's & Toys</li>
                  <li className="hover:underline cursor-pointer">Groceries & Pets</li>
                  <li className="hover:underline cursor-pointer">Health & Beauty</li>
                </ul>
              </div>
              <div className="category-image-hero flex-shrink-0" style={{ width: "892px", height: "344px" }}>
                <img
                  src="./images/Frame 560.png" // or use {frameImage} if imported
                  alt="Category Image"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </section>
          {/* Banner */}
          <section className="bg-gray-100 flex justify-between items-center px-6 py-12">
            <div>
              <h2 className="text-sm text-red-600 mb-2">iPhone 14 Series</h2>
              <h1 className="text-4xl font-bold mb-4">Up to 10% off Voucher</h1>
              <Link to="/shop" className="bg-red-600 text-white px-4 py-2 rounded">Shop Now</Link>
            </div>
            <img src="https://your-image-link.com/iphone.png" className="w-1/3" alt="Hero Product" />
          </section>
          {/* Flash Sales */}
          <section className="px-6 py-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-red-600">Flash Sales</h2>
              <div className="flex gap-2">
                <button className="bg-white border rounded-full p-2">←</button>
                <button className="bg-white border rounded-full p-2">→</button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="border rounded p-2">
                <img src="https://your-image.com/controller.png" className="w-full" alt="Gaming Controller" />
                <h3 className="text-sm font-medium mt-2">Gaming Controller</h3>
                <p className="text-red-600 font-semibold">₹1499 <span className="line-through text-gray-400 text-sm ml-2">₹1999</span></p>
                <button className="bg-red-600 text-white px-4 py-1 mt-2 rounded">Add to Cart</button>
              </div>
            </div>
          </section>
          {/* Browse By Category */}
          <section className="px-6 py-12 bg-white">
            <h2 className="text-xl font-semibold text-red-600 mb-4">Browse By Category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
              <div className="text-center border p-4 rounded">
                <img src="https://your-image.com/fashion.png" className="mx-auto w-12 h-12" alt="Fashion" />
                <p className="mt-2 text-sm">Fashion</p>
              </div>
            </div>
          </section>
          {/* Best Selling Products */}
          <section className="px-6 py-12 bg-gray-50">
            <h2 className="text-xl font-semibold text-red-600 mb-4">Best Selling Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4"></div>
          </section>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white py-6">
        <img
          src="./images/Footer.svg" // or use {footerImage} if imported
          alt="Footer Image"
        />
      </footer>
    </div>
  );
}
