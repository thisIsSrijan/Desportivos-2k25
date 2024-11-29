import React, { useState, useEffect } from "react";
import { State, City } from "country-state-city"; // Importing required modules
import redbg from "../assets/redbg.png";
import bottombg from "../assets/bottombg.png";
import topbg from "../assets/topbg.png";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [fieldsVisible, setFieldsVisible] = useState(false);
  const [arrowVisible, setArrowVisible] = useState(true);

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
      const response = await fetch("https://despo.onrender.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Form Submitted:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="lg:min-h-screen h-full w-screen overflow-x-hidden">
      {/* Top Background */}
      <div
        className="relative w-screen h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${redbg})` }}
      >
        {/* REGISTER NOW Text */}
        <h1 className="ml-8 xs:text-4xl text-6xl absolute top-52 mt-3 sm:left-1/4  lg:left-1/4 xs:left-28  text-white uppercase font-extrabold text-effect z-10">
          Register Now
        </h1>
      </div>
      <Link
        to="/"
        className="absolute w-fit h-fit p-2 right-4 top-7 border-4 border-[#F85B02] shadow-[2px_1.5px_13px_#F85B02] rounded-xl z-10 text-white text-2xl bg-[#424242BF] font-squid hover:bg-[#515151bf] hover:scale-105"
      >
        Home
      </Link>
      {/* Bottom Background  */}
      <div
        className="w-screen  h-full  bg-cover py-20 "
        style={{ backgroundImage: `url(${bottombg})` }}
      >
        <div
          className=" md:rounded-lg xsm:mx-10 sm:mx-20  p-10 bg-cover z-5"
          style={{ backgroundImage: `url(${topbg})` }}
        >
          <form
            // onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 xsm:gap-5  md:gap-y-4 md:gap-x-9 "
          >
            {/* Name Text Input */}
            <div className="flex flex-col my-3">
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
                className="p-2 border border-gray-300 rounded-md bg-[#625342] font-medium"
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
                className="p-2 border border-gray-300 rounded-md bg-[#625342] font-medium"
              />
            </div>

            {/* State Dropdown */}
            <div className="flex flex-col my-3">
              <label className="text-white">State</label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className={`p-2 border border-gray-400 rounded-md font-medium ${
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
            <div className="flex flex-col ">
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
            {DomainName === "Esports" && (
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
          </form>

          <div className="flex flex-wrap justify-evenly items-center space-y-2 m-2 my-6">
            <button
              type="submit"
              onClick={handleSubmit}
              className=" bg-transparent text-[rgba(164,164,164,1)] font-extrabold leading-[60px] tracking-[5%] border px-2  m-2 my-6 hover:bg-black"
            >
              REGISTER
            </button>
            <button
              className="bg-transparent text-[rgba(164,164,164,1)] font-extrabold leading-[60px] tracking-[5%] border px-2 m-2 my-6 hover:bg-black"
              onClick={handleRuleBook}
            >
              RULEBOOK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
