
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Register from "./pages/Register";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

const Preloader = ({ onFinish }) => {
  return (
    <div className="preloader flex justify-center items-center h-screen w-screen bg-black" style={{ backgroundImage: "url('/loaderBG.gif')" }}>
      <video
        src="/Loader.mp4"
        autoPlay
        muted
        onEnded={onFinish}
        
        className="mix-blend-lighten absolute h-5/6 bottom-0 left-1/2 -translate-x-1/2 object-cover "
      />
    </div>
  );
};

const RandomLoader = () => {
  const loaders = [
    "/pageTransition/square.gif",
    "/pageTransition/circle.gif",
    "/pageTransition/triangle.gif",
  ];
  const randomLoader = loaders[Math.floor(Math.random() * loaders.length)];

  return (
    <div className="preloader flex justify-center items-center h-screen w-screen bg-black">
      <img src={randomLoader} className="max-h-full" />
    </div>
  );
};

const AppContent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isRouteChanging, setIsRouteChanging] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!hasLoaded) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setHasLoaded(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [hasLoaded]);

  useEffect(() => {
    if (hasLoaded) {
      setIsRouteChanging(true);
      const timer = setTimeout(() => {
        setIsRouteChanging(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [location]);

  if (isLoading) {
    return <Preloader onFinish={() => setIsLoading(false)} />;
  }

  if (isRouteChanging) {
    return <RandomLoader />;
  }

  return <AppContent />;
}

const Root = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default Root;