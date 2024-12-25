import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Footer from "../src/components/base/Footer";
import Preloader from "../src/components/loaders/Preloader";
import RandomLoader from "../src/components/loaders/RandomLoader";
import OurTeam from "./pages/OurTeam";

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ourteam" element={<OurTeam />} />
      </Routes>
      {(location.pathname == "/register" || location.pathname == "/") && (
        <Footer />
      )}
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

  if (isLoading && location.pathname === "/") {
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
