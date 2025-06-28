import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AnnouncementBar from "./components/AnnouncementBar";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import Flash from "./components/Flash";
import CategorySection from "./components/CategorySection";
import BestSellingSection from "./components/BestSellingSection";
import OurProductsSection from "./components/OurProductsSection";
import NewArrivalSection from "./components/NewArrivalSection";
import ServiceFeatures from "./components/ServiceFeatures";
import Footer from "./components/Footer";
// import { setUserInfo } from "./store/userSlice";


// --- DATA ARRAYS (move to data.js if you like) ---

const flashSales = [
  {id: 1, name: "HAVIT HV-G92 Gamepad", discount: 40, price: 120, oldPrice: 160, img: "/images/Frame 611.png", rating: 4.5, reviews: 88 },
  {id: 2, name: "AK-900 Wired Keyboard", discount: 35, price: 960, oldPrice: 1500, img: "/images/keyboard.svg", rating: 4.2, reviews: 75 },
  {id: 3, name: "IPS LCD Gaming Monitor", discount: 30, price: 370, oldPrice: 400, img: "/images/Moniter.svg", rating: 4.7, reviews: 98 },
  {id: 4, name: "S-Series Comfort Chair", discount: 25, price: 375, oldPrice: 400, img: "/images/Chair.svg", rating: 4.6, reviews: 99 },
];

import { BsCamera, BsPhone, BsLaptop, BsSmartwatch, BsHeadphones, BsController } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo,resetUserInfo } from "./store/userSlice";

const categories = [
  { name: "Phones", icon: <BsPhone size={32} /> },
  { name: "Computers", icon: <BsLaptop size={32} /> },
  { name: "SmartWatch", icon: <BsSmartwatch size={32} /> },
  { name: "Camera", icon: <BsCamera size={32} />, active: true },
  { name: "HeadPhones", icon: <BsHeadphones size={32} /> },
  { name: "Gaming", icon: <BsController size={32} /> },
];

const bestSelling = [
  { id: 1, name: "The north coat",price: 260,oldPrice: 360,img: "/images/Frame 605.svg",rating: 4.5,reviews: 65 },
  { id: 2, name: "Gucci duffle bag",price: 960, oldPrice: 1160,img: "/images/duffle-bag.svg",rating: 4.5,reviews: 65 },
  { id: 3, name: "RGB liquid CPU Cooler",price: 160,oldPrice: 170,img: "/images/speaker.svg",rating: 4.5,reviews: 65 },
  { id: 4, name: "Small BookSelf", price: 360,oldPrice: null, img: "/images/Bookshelf.svg", rating: 4.5, reviews: 65 },
];

const ourProducts = [
  { id: 1, name: "Breed Dry Dog Food", price: 100, img: "/images/Cesar.svg",rating: 3,reviews: 35  },
  { id: 2, name: "CANON EOS DSLR Camera",price: 360,img: "/images/Camera.svg",rating: 4,reviews: 95 },
  { id: 3, name: "ASUS FHD GAMING LAPTOP",price: 700,img: "/images/ideapad.svg",rating: 5, reviews: 325 },
  { id: 4, name: "Curology Product Set",price: 500, img: "/images/set.png",rating: 4,reviews: 145 },
  { id: 5, name: "Kids Electric Car", price: 960, img: "/images/Car.svg",rating: 5,reviews: 65 },
  { id: 6, name: "Jr. Zoom Soccer Cleats", price: 1160,img: "/images/shoes.svg", rating: 5, reviews: 35 },
  { id: 7, name: "GP11 Shooter USB Gamepad", price: 660, img: "/images/GP11.png",rating: 4.3,reviews: 77},
  { id: 8, name: "Quilted Satin Jacket",price: 660, img: "/images/jacket.svg", rating: 4.7,reviews: 54},
];

export default function Home() {

const [apiData,setApiData]=useState(0);

//for creatinfg state we use slice
//for fetching state we use useSlector

const userinfo=useSelector((state)=>state.user);
const count =useSelector((state)=>state.test)
const add = useSelector((state)=>state.cart)

console.log(userinfo);

console.log(count)

console.log(add)
//for updateing our state we use useDispatch

const dispatch=useDispatch();

const ChangeUserInfo=()=>{
  dispatch(setUserInfo({Name:"hemant",age:24}))
}

const ResetUserInfo=()=>{
  dispatch(resetUserInfo())
}

const CartInfo=()=>{
  dispatch(CartInfo())
}



  return (
    <div style={{ overflowX: "hidden" }}>
    <>

      <AnnouncementBar />
      <Navbar />
      <div style={{ margin: 0, fontFamily: "'Poppins', sans-serif", background: "#fff", color: "#1a1a1a", minHeight: "100vh"}}>
        <div style={{ display: "flex", maxWidth: "1200px", margin: "32px auto 0", gap: "32px" }}>
          <Sidebar />
          <Banner />
        </div>
        <Flash flashSales={flashSales} />
        <CategorySection categories={categories} />
        <BestSellingSection bestSelling={bestSelling} />
        <OurProductsSection ourProducts={ourProducts} />
        <NewArrivalSection />
        <ServiceFeatures />
        <Footer />
      </div>
    </>
    </div>
  );
}
