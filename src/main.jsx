import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Product from './pages/Product';
import ProductDetail from './pages/Productdetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import Orders from './pages/Orders';
import UserProfile from './pages/Profile';
import SearchHistory from './pages/History';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Wishlist from './pages/Wishlist';
import Account from './pages/Account';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Product /> },
      { path: '/products/:id', element: <ProductDetail /> },
      { path: '/cart', element: <Cart /> },
      { path: '/checkout', element: <Checkout /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/orders', element: <Orders /> },
      { path: '/profile', element: <UserProfile /> },
      { path: '/search-history', element: <SearchHistory /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/signup', element: <SignUp/> },
      { path: '/wishlist', element: <Wishlist /> },
      { path: '/account', element: <Account /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
