import React, { useState, useEffect } from "react";
import { State, City } from "country-state-city"; // Importing required modules
import redbg from "../assets/redbg.png";
import bottombg from "../assets/bottombg.png";
import topbg from "../assets/topbg.png";
import "font-awesome/css/font-awesome.min.css";

const Register = () => {
  const [fieldsVisible, setFieldsVisible] = useState(false);
  const [arrowVisible, setArrowVisible] = useState(true);

  const handleArrowClick = () => {
    console.log("Arrow clicked!"); // Debugging the click

    // Get the current scroll position
    const currentScrollY = window.scrollY;

    // Scroll by a specific number of pixels (10-12px)
    window.scrollTo({
      top: currentScrollY + 460, // Scroll by 12px
      behavior: "smooth", // Smooth scroll
    });

    // Optionally, make the fields visible after the scroll (as before)
    setFieldsVisible(true);

    // Hide the arrow after it's clicked
    setArrowVisible(false);
  };

  const handleRegister = () => alert("Register Clicked");
  const handleRuleBook = () => alert("Rule Book Clicked");

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

  return (
    <div className="h-screen ">
      {/* Top Background */}
      <div
        className="w-full xsm:h-[15.54%] sm:h-[20%] md:h-[25.54%] bg-no-repeat xsm:bg-[center_top_45%] sm:bg-[center_top_45%] xl:bg-[center_top_48%] xsm:bg-[length:240%] sm:bg-[length:190%] md:bg-[length:240%] lg:bg-[length:140%] xl:bg-[length:140%]"
        style={{ backgroundImage: `url(${redbg})` }}
      >
        {/* REGISTER NOW Text */}
        <div className="relative">
          <h1 className=" absolute xsm:top-[85px] customBreakpoint:top-[119px] sm:top-[100px] md:top-[130px] lg:top-[120px] xl:top-[120px] 2xl:top-[140px]  xsm:left-[50px] customBreakpoint:left-[80px] sm:left-[20px] md:left-[143px] lg:left-[160px] xl:left-[270px] 2xl:left-[320px] uxl:left-[350px] xsm:text-3xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl text-white uppercase font-extrabold text-effect font-dharma">
            Register Now
          </h1>
        </div>
      </div>

      {/* Bottom Background  */}
      <div
        className="w-full xsm:h-[148%] sm:h-[142%]  md:h-screen xl:h-screen z-10 bg-cover"
        style={{ backgroundImage: `url(${bottombg})` }}
      >
        <div
          className="xsm:w-[90%] md:w-[79.15%] lg:w-[50%] 2xl:w-[60%] xsm:h-[900px] sm:h-[480px] absolute xsm:top-[18%] sm:top-[25%] md:top-[33.65%]  xsm:left-[5%] md:left-[8.92%]  lg:left-[23%] xsm:p-3 md:p-4 md:rounded-lg mt-4 "
          style={{ backgroundImage: `url(${topbg})` }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 xsm:gap-4  md:gap-y-4 md:gap-x-9">
            {/* Name Text Input */}
            <div className="flex flex-col">
              <label className="text-white">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
                className="p-2 border border-gray-300 rounded-md bg-[#625342] font-medium"
              />
            </div>

            {/* Phone Number Text Input */}
            <div className="flex flex-col">
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
            <div className="flex flex-col">
              <label className="text-white">College Name</label>
              <input
                type="text"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
                placeholder="Enter College Name"
                className="p-2 border border-gray-300 rounded-md bg-[#625342] font-medium"
              />
            </div>

            {/* Email-ID Text Input */}
            <div className="flex flex-col">
              <label className="text-white">Email-ID</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email-ID"
                className="p-2 border border-gray-300 rounded-md bg-[#625342] font-medium"
              />
            </div>

            {/* State Dropdown */}
            <div className="flex flex-col">
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
            <div className="flex flex-col">
              <label className="text-white">City</label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="p-2 border border-gray-300 rounded-md bg-[#625342] text-white"
              >
                <option value="">Select a City</option>
                {cityOptions.map((option) => (
                  <option key={option.isoCode} value={option.name}>
                    {option.name}
                  </option>
                ))}
              </select>

              {/* Conditional rendering of the arrow icon */}
              {arrowVisible && (
                <div className=" flex justify-center items-center xsm:flex sm:hidden ">
                  <i
                    className="fa fa-angle-down text-white mt-2"
                    onClick={handleArrowClick}
                  ></i>
                </div>
              )}
            </div>

            {/* Domain Dropdown */}
            <div className="flex flex-col">
              <label className="text-white">Domain</label>
              <select
                value={DomainName}
                onChange={(e) => setDomainName(e.target.value)}
                className="p-2 border border-gray-300 rounded-md bg-[#625342] text-white"
              >
                <option value="">Select Domain</option>
                <option value="domain1">Sports</option>
                <option value="domain2">ESports</option>
              </select>
            </div>

            {/* Conditional rendering of sports dropdown */}
            {DomainName === "domain1" && (
              <div className="flex flex-col">
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
            {DomainName === "domain2" && (
              <div className="flex flex-col">
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
          </div>

          <div className="flex flex-wrap justify-evenly items-center mt-5 space-y-2 xsm:mt-36 sm:mt-6">
            <button
              className="font-dharma bg-transparent text-[rgba(164,164,164,1)] font-extrabold leading-[60px] tracking-[5%] border px-2 xsm:mt-2"
              onClick={handleRegister}
            >
              REGISTER
            </button>
            <button
              className="font-dharma bg-transparent text-[rgba(164,164,164,1)] font-extrabold leading-[60px] tracking-[5%] border px-2"
              onClick={handleRuleBook}
            >
              RULEBOOK
            </button>
          </div>
        </div>
      </div>
      <div
        id="form-section"
        style={{ height: "100px", backgroundColor: "#f0f0f0" }}
      ></div>
    </div>
  );
};

export default Register;
