import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Register from "./pages/Register";
import "./app.css"; 
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const Preloader = ({ onFinish }) => {
  return (
    <div className="preloader flex justify-center items-center h-screen w-screen bg-black">
      <video
        src="/Loader.mp4"
        autoPlay
        muted
        onEnded={onFinish}
        className="max-h-full"
      />
    </div>
  );
};

const AppContent = () => {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Show the preloader only on the Home page
    if (location.pathname === "/") {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      setIsLoading(false); // No preloader for other pages
    }
  }, [location]);

  return isLoading ? (
    <Preloader onFinish={() => setIsLoading(false)} />
  ) : (
    <AppContent />
  );
}

const Root = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default Root;
