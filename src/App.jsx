import { useEffect, useState } from "react";

import "./App.css";

import Header from "./components/header.jsx";
import Home from "./Pages/Home/home.jsx";

import Footer from "./components/Footer.jsx";
import axios from "axios";
import SingleProduct from "./Pages/SingleProduct.jsx";

import About from "./Pages/About.jsx";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext.jsx";
import LoginPage from "./LoginPage.jsx";
// import SignupPage from "./SignUpPage.jsx";
import Auth from "./Pages/Auth.jsx";
import OTP from "./components/OTP.jsx";
import SearchPage from "./Pages/SearchPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import TrendsProjects from "./Pages/TrendsProjects.jsx";
import AccountSidebar from "./Pages/account/AccountSidebar.jsx";
import CartPage from "./Pages/CartPage.jsx";
import Contact from "./Pages/Contact.jsx";
import { toast } from "react-toastify";
import Deals from "./Pages/Deals.jsx";
import Shop from "./Pages/Shop.jsx";
import Blog from "./Pages/Blog.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";
import CategorySearch from "./Pages/CategorySearch.jsx";

function App() {

  let location = useLocation();
  location = location.pathname.split("/")[1];
  const isAuthPage = location === "login" || location === "signup" || location === "otp";

  const navigate = useNavigate();
  const [singleProd, setSingleProd] = useState([]);
  const [search, setSearch] = useState("");


  const getSingle = async () => {
    try {
      const res = await axios.get(`/search?name=${search}`);
      setSingleProd(res.data);
     
    } catch (error) {
      console.error("Something went wrong", error);
      toast.error("Product not found ");
    }
  };

  // Handle search when Enter key is pressed
  const handleSearchKeyDown = (event) => {
    if (event.key === "Enter") {
      if (search) {
        getSingle(); // Call the search function on Enter
        navigate("/search");
      }
    }
  };

 
  return (
    <AuthProvider>
      {!isAuthPage && (
        <Header
          setSearch={setSearch}
          handleSearchKeyDown={handleSearchKeyDown}
        />
      )}

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/singlePro/:id" element={<SingleProduct />} />
        <Route path="/login" element={<Auth  />} />
        <Route path="/signup" element={<OTP />} />
        <Route path="/trends" element={<TrendsProjects />} />
        <Route
          path="/search"
          element={<SearchPage singleProd={singleProd} />}
        />
        <Route path="/settings/*" element={<AccountSidebar />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/category/:category" element={<CategorySearch />} />
        <Route path="/*" element={<PageNotFound />} />


      </Routes>
      {!isAuthPage && <Footer />}
      {/* <CartPage /> */}
    </AuthProvider>
  );
}

export default App;
