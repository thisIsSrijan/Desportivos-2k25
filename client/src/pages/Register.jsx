
import React, { useState } from "react";
import topBackground from "../assets/Frame 106.png";
import bottomBackground from "../assets/ZAAA 1.png"; 
import background from '../assets/Rectangle 26.png';

const Register = () => {
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
  const stateOptions = ["State 1", "State 2", "State 3"];
  const cityOptions = ["City 1", "City 2", "City 3"];
  const DomainOptions = ["College 1", "College 2", "College 3"];

  return (
    <div className="h-screen">
      {/* Top Background */}
      <div className="w-full h-[24.54%] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${topBackground})` }}></div>

      {/* Bottom Background */}
      <div className="w-full h-[78.4%]" style={{ backgroundImage: `url(${bottomBackground})` }}>
        <div className="w-[46.15%] h-[59.45%] absolute top-[35.65%] left-[26.92%] p-4 rounded-lg" style={{ backgroundImage: `url(${background})` }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

            {/* State Dropdown */}
            <div className="flex flex-col">
              <label className="text-white">State</label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="p-2 border border-gray-300 rounded-md bg-[#625342] font-medium"
              >
                <option value="" >Select a State</option>
                {stateOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
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

            {/* City Dropdown */}
            <div className="flex flex-col">
              <label className="text-white">City</label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="p-2 border border-gray-300 rounded-md bg-[#625342] font-medium"
              >
                <option value="">Select a City</option>
                {cityOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
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

            {/* Domain Dropdown */}
            <div className="flex flex-col">
              <label className="text-white">Domain</label>
              <select
                value={collegeName}
                onChange={(e) => setDomain(e.target.value)}
                className="p-2 border border-gray-300 rounded-md bg-[#625342] font-medium"
              >
                <option value=""> Select Domain</option>
                {DomainOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
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
          </div>

          <div className="flex flex-wrap justify-evenly items-center mt-5 space-y-2">
            <button
              className="font-dharma bg-transparent text-[rgba(164,164,164,1)] font-extrabold leading-[60px] tracking-[5%] border px-2"
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
    </div>
  );
};

export default Register;
