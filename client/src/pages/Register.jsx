import React, { useState, useEffect } from "react";
import { State, City } from "country-state-city"; // Importing required modules
// import redbg from "../assets/redbg.png";
// import bottombg from "../assets/bottombg.png";
// import topbg from "../assets/topbg.png";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Register = () => {
  const [fieldsVisible, setFieldsVisible] = useState(false);
  const [arrowVisible, setArrowVisible] = useState(true);
  const [popupVisible, setPopupVisible] = useState(false); // State for popup visibility

  const handleArrowClick = () => {
    console.log("Arrow clicked!"); // Debugging the click

    // Get the current scroll position
    const currentScrollY = window.scrollY;

    // Scroll by a specific number of pixels (10-12px)
    window.scrollTo({
      top: currentScrollY + 440, // Scroll by 12px
      behavior: "smooth", // Smooth scroll
    });

    // Optionally, make the fields visible after the scroll (as before)
    setFieldsVisible(true);

    // Hide the arrow after it's clicked
    setArrowVisible(false);
  };

  const handleRegister = () => alert("Register Clicked");

  const handleRuleBook = () => {
    setPopupVisible(true); // Show the popup when Rulebook is clicked
  };

  const closePopup = () => {
    setPopupVisible(false); // Hide the popup when the close button is clicked
  };

  // State to hold input values for each field
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Options for dropdowns
  const [stateOptions, setStateOptions] = useState([]); // For storing states dynamically
  const [cityOptions, setCityOptions] = useState([]); // For storing cities dynamically
  const [DomainName, setDomainName] = useState(""); // Add this line
  const [selectedSport, setSelectedSport] = useState("");
  const [selectedESport, setSelectedESport] = useState("");

  useEffect(() => {
    // Fetch states for India (country code: IN)
    const states = State.getStatesOfCountry("IN"); // India country code
    setStateOptions(states);
  }, []);

  // Update cities based on selected state
  useEffect(() => {
    if (state) {
      const cities = City.getCitiesOfState("IN", state); // Fetch cities for selected state
      setCityOptions(cities);
    } else {
      setCityOptions([]); // Clear cities if no state selected
    }
  }, [state]);

  //stop scrolling in bg when popup 
  useEffect(() => {
    if (popupVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [popupVisible]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      Name: name,
      State: state,
      CollegeName: collegeName,
      City: city,
      PhoneNumber: phone,
      Email: email,
      Domain: DomainName,
      Sports: selectedSport || selectedESport,
    };

    try {
      console.log("Form data:", formData);
      const response = await fetch(
        "https://testbackenddespo.vercel.app/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log(response);
      // if (!response.ok) {
      //   throw new Error(response.status);
      // }

      const responsedata = await response.json();
      if (responsedata.message == "Registered Successfully") {
        console.log(formData);
        toast.success("Registered successfully! Please check your email.");
        }
         else {
          toast.error(` Registration Error: ${responsedata.message})`
          );    
         }
        }
          catch (error) {
      console.error("Error submitting form:", error);
      toast.error(" Server Error - Unable to Submit the Form");
    }
  };

  return (
    <div className="lg:min-h-screen h-full w-screen overflow-x-hidden">
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        
      />
      {/* Top Background */}
      <div
        className="relative w-screen h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952364/redbg_j0otcw.png`,
        }}
      >
        {/* REGISTER NOW Text */}
        <h1 className="absolute top-57 md:top-54 lg:top-51 uxl:top-47 w-full text-center text-5xl md:text-7xl lg:text-8xl uxl:text-9xl  text-white uppercase font-extrabold text-effect z-10">
          Register Now
        </h1>
      </div>
      <Link
        to="/"
        className="text-center align-middle absolute w-fit h-fit py-2 px-5 right-8 sm:right-16 sm:top-[75px] top-[64px] border-2 border-[#F85B02] shadow-[2px_1.5px_13px_#F85B02] rounded-xl z-10 text-white text-xl lg:text-3xl bg-[#424242BF] font-squid hover:bg-[#515151bf] hover:scale-105"
      >
        HOME
      </Link>
      {/* Bottom Background  */}
      <div
        className="w-screen  h-full  bg-cover py-20 "
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732953786/bottombg_bgswml.png)`,
        }}
      >
        <div
          className="uxl:mt-5 md:rounded-lg mx-8 p-8 sm:mx-26 sm:p-6 md:mx-36 md:p-12 md2:mx-44 lg:mx-56 lg2:mx-64 lg2:p-24 uxl:max-w-[1200px] uxl:mx-auto bg-cover z-5 min-w-[200px] md:min-w-[480px] lg2:min-w-[750px]"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952363/topbg_xhjmoc.png`,
          }}
        >
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-y-4 md:gap-x-9 lg:gap-y-6 md:mx-auto max-w-4xl">
            {/* Name Text Input */}
            <div className="flex flex-col my-3">
              <label className="text-white">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
                className="p-2 text-gray-400 border border-gray-300 rounded-md bg-[#625342] font-medium"
              />
            </div>

            {/* Phone Number Text Input */}
            <div className="flex flex-col my-3">
              <label className="text-white">Phone Number</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Phone Number"
                className="p-2 text-gray-400 border border-gray-300 rounded-md bg-[#625342] font-medium"
              />
            </div>

            {/* College Name Text Input */}
            <div className="flex flex-col my-3">
              <label className="text-white">College Name</label>
              <input
                type="text"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
                placeholder="Enter College Name"
                className="p-2 text-gray-400 border border-gray-300 rounded-md bg-[#625342] font-medium"
              />
            </div>

            {/* Email-ID Text Input */}
            <div className="flex flex-col my-3">
              <label className="text-white">Email-ID</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email-ID"
                className="p-2 text-gray-400 border border-gray-300 rounded-md bg-[#625342] font-medium"
              />
            </div>

            {/* State Dropdown */}
            <div className="flex flex-col my-3">
              <label className="text-white">State</label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className={`p-2 border border-gray-300 rounded-md font-medium ${
                  state ? "bg-orange-600 text-white" : "bg-[#625342] text-white"
                }`}
              >
                <option value="" className="text-black">
                  Select a State
                </option>
                {stateOptions.map((option) => (
                  <option
                    key={option.isoCode}
                    value={option.isoCode}
                    className={`text-black bg-[#493d33] hover:bg-[#6b5b4c] ${
                      state === option.isoCode ? "bg-orange-600 text-white" : ""
                    }`}
                  >
                    {option.name}
                  </option>
                ))}
              </select>
            </div>

            {/* City Dropdown */}
            <div className="flex flex-col my-3">
              <label className="text-white">City</label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className={`p-2 border border-gray-300 rounded-md font-medium ${
                  state ? "bg-orange-600 text-white" : "bg-[#625342] text-white"
                }`}
              >
                <option value="">Select a City</option>
                {cityOptions.map((option) => (
                  <option key={option.isoCode} 
                  value={option.name}
                  className={`text-black bg-[#493d33] hover:bg-[#6b5b4c] ${
                    state === option.isoCode ? "bg-orange-600 text-white" : ""
                  }`}
                  >
                    {option.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Domain Dropdown */}
            <div className="flex flex-col my-3">
              <label className="text-white">Domain</label>
              <select
                value={DomainName}
                onChange={(e) => setDomainName(e.target.value)}
                className="p-2 border border-gray-300 rounded-md bg-[#625342] text-white"
              >
                <option value="">Select Domain</option>
                <option value="Sports">Sports</option>
                <option value="Esports">ESports</option>
              </select>
            </div>

            {/* Conditional rendering of sports dropdown */}
            {DomainName === "Sports" && (
              <div className="flex flex-col my-3">
                <label className="text-white">Sports</label>
                <select
                  value={selectedSport}
                  onChange={(e) => setSelectedSport(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md bg-[#625342] text-white"
                >
                  <option value="">Select Sport</option>
                  <option value="Squash">Squash</option>
                  <option value="Table Tennis">Table Tennis</option>
                  <option value="Kabadi">Kabadi</option>
                  <option value="Cricket">Cricket</option>
                  <option value="Chess">Chess</option>
                  <option value="Football">Football</option>
                  <option value="Volleyball">Volleyball</option>
                  <option value="Lawn Tennis">Lawn Tennis</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Carrom">Carrom</option>
                  <option value="Badminton">Badminton</option>
                  <option value="Futsal">Futsal</option>
                </select>
              </div>
            )}
            {DomainName === "Esports" && (
              <div className="flex flex-col my-3">
                <label className="text-white">ESports</label>
                <select
                  value={selectedESport}
                  onChange={(e) => setSelectedESport(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md bg-[#625342] text-white"
                >
                  <option value="bgmi">BGMI</option>
                  <option value="valorant">Valorant</option>
                </select>
              </div>
            )}
          </form>

          <div className="flex flex-wrap justify-evenly items-center m-2">
            <button
              type="submit"
              onClick={handleSubmit}
              className="min-w-36 bg-transparent text-[rgba(164,164,164,1)] font-extrabold leading-[60px] tracking-[5%] border px-2  m-2 hover:bg-black"
            >
              REGISTER
            </button>
      


            <button
              className="min-w-36 bg-transparent text-[rgba(164,164,164,1)] font-extrabold leading-[60px] tracking-[5%] border px-2 m-2 hover:bg-black"
              onClick={handleRuleBook}
            >
              RULEBOOK
            </button>
          </div>
        </div>
      </div>


      {/* Popup Component */}
      {popupVisible && (
        <div className="fixed inset-0  bg-opacity-70 flex justify-center items-center z-50 overflow-auto">
          <div className="popup-content rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2  lg:h-1/2 py-5  px-9 relative "
          style={{
          backgroundImage: `url(https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732953786/bottombg_bgswml.png)`,
        }}
          >
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-white hover:text-red-800"
            >
              &#x2715;
            </button>
            <h2 className="text-7xl font-bold mb-4 text-white font-dharma tracking-wide text-center">GUIDELINES</h2>
            <p className="text-white text-justify text-md lg:text-xl">
           <p className=" mb-3 lg:mb-5"> 1. Every participant from each team must register individually.</p>
           <p className="mb-3 lg:mb-5"> 2. A participant may register for multiple sports or e-sports events.</p>
            <p className="mb-3 lg:mb-5">3. Upon registration, the participant will receive a confirmation email regarding their registered event.</p>
            <p className=" mb-3 lg:mb-5">4. For any further queries, the participant can contact the person mentioned in the email.</p>

            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
