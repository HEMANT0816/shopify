import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-black text-white text-sm flex justify-between items-center px-8 py-2">
        <span>
          Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!{" "}
          <a href="#" className="underline font-semibold">
            ShopNow
          </a>
        </span>
        <div className="flex items-center gap-2">
          <span>English</span>
          <svg
            width="10"
            height="6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline ml-1"
          >
            <path
              d="M1 1l4 4 4-4"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Main Header */}
      <header className="flex items-center justify-between px-8 py-4 border-b">
        <h1 className="text-2xl font-bold">Exclusive</h1>
        <nav className="flex gap-8 text-lg">
          <a href="#" className="font-medium border-b-2 border-black pb-1">
            Home
          </a>
          <a href="#">Contact</a>
          <a href="#">About</a>
          <a href="#">Sign Up</a>
        </nav>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="border rounded px-3 py-1"
          />
          <span className="text-xl cursor-pointer">🔍</span>
          <span className="text-xl cursor-pointer">🤍</span>
          <span className="text-xl cursor-pointer">🛒</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex px-8 py-8 gap-8">
        {/* Sidebar */}
        <aside className="w-1/5 border-r pr-6">
          <ul className="space-y-4 text-base font-medium">
            <li className="flex justify-between items-center cursor-pointer">
              Woman's Fashion <span>&gt;</span>
            </li>
            <li className="flex justify-between items-center cursor-pointer">
              Men's Fashion <span>&gt;</span>
            </li>
            <li className="cursor-pointer">Electronics</li>
            <li className="cursor-pointer">Home & Lifestyle</li>
            <li className="cursor-pointer">Medicine</li>
            <li className="cursor-pointer">Sports & Outdoor</li>
            <li className="cursor-pointer">Baby's & Toys</li>
            <li className="cursor-pointer">Groceries & Pets</li>
            <li className="cursor-pointer">Health & Beauty</li>
          </ul>
        </aside>

        {/* Hero Banner */}
        <section className="flex-1 flex flex-col items-center">
          <div className="w-full bg-black text-white rounded-lg flex items-center justify-between px-10 py-10 relative">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt="Apple"
                  className="w-6 h-6"
                />
                <span className="text-sm">iPhone 14 Series</span>
              </div>
              <h2 className="text-4xl font-bold leading-tight mb-2">
                Up to 10%<br />off Voucher
              </h2>
              <a
                href="#"
                className="inline-block mt-2 underline font-medium text-white"
              >
                Shop Now →
              </a>
            </div>
            <img
              src="https://www.apple.com/v/iphone-14-pro/a/images/overview/hero/hero_static__e5xbgo5ffhg2_large.jpg"
              alt="iPhone 14"
              className="w-80 h-auto object-contain"
            />

            {/* Carousel Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              <span className="w-2 h-2 rounded-full bg-white/50 block"></span>
              <span className="w-2 h-2 rounded-full bg-white/50 block"></span>
              <span className="w-2 h-2 rounded-full bg-red-500 block"></span>
              <span className="w-2 h-2 rounded-full bg-white/50 block"></span>
              <span className="w-2 h-2 rounded-full bg-white/50 block"></span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
