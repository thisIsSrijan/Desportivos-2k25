import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
const Preloader = ({ onFinish }) => {
  return (
    <div className="preloader flex justify-center items-center h-screen w-screen bg-black">
      <video
        src="/loaderEnd.mp4"
        autoPlay
        muted
        onEnded={onFinish}
        className=" max-h-full "
      />
    </div>
  );
};

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <Preloader onFinish={() => setIsLoading(false)} />
  ) : (
    <App />
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
