import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from './App'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Account from './pages/Account'
import Login from './pages/Login'
import Register from './pages/Register'
import Search from './pages/Search'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./Pages/Signup";
import Home from './Home';
import Wishlist from './src/pages/Wishlist'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/product/:id", element: <Product /> },
      { path: "/category/:id", element: <Product /> }, // (or create a Category page)
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/account", element: <Account /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/search", element: <Search /> },
      { path: "/about", element: <About /> },
      { path: "/404", element: <NotFound /> },
      { path: "/contact", element: <Contact /> },
      { path: "/signup", element: <SignUp /> },
      { path: "*", element: <NotFound /> },
      { path: "/wishlist", element: <Wishlist /> },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
