import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SignInPage from "./components/SignIn";
import SignUpPage from "./components/SignUp";
import Dev from "./pages/Category_1";
import ML_Page from "./pages/AI_Ml";
import Others from "./pages/Others";
import MyLearning from "./pages/My_Learning.jsx";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/CartPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./project_page/MainLayout";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/category1" element={<Dev />} />
              <Route path="/category2" element={<ML_Page />} />
              <Route path="/category3" element={<Others />} />
              <Route path="/learnings" element={<MyLearning />} />
              <Route path="/course/*" element={<MainLayout />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
