import React, { useState, useEffect, useRef } from "react";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";

const Register = () => {
  const [popupVisible, setPopupVisible] = useState(false); // State for popup visibility

  const handleRuleBook = () => {
    setPopupVisible(true); // Show the popup when Rulebook is clicked
  };

  const closePopup = () => {
    setPopupVisible(false); // Hide the popup when the close button is clicked
  };

  // State to hold input values for each field
  const [formData, setFormData] = useState({
    // name: "",
    state: "",
    // collegeName: "",
    city: "",
    // phone: "",
    // email: "",
  });

  // Options for dropdowns
  const statesOfIndia = [
    { name: "Andhra Pradesh", iso: "AP" },
    { name: "Arunachal Pradesh", iso: "AR" },
    { name: "Assam", iso: "AS" },
    { name: "Bihar", iso: "BR" },
    { name: "Chhattisgarh", iso: "CG" },
    { name: "Goa", iso: "GA" },
    { name: "Gujarat", iso: "GJ" },
    { name: "Haryana", iso: "HR" },
    { name: "Himachal Pradesh", iso: "HP" },
    { name: "Jharkhand", iso: "JH" },
    { name: "Karnataka", iso: "KA" },
    { name: "Kerala", iso: "KL" },
    { name: "Madhya Pradesh", iso: "MP" },
    { name: "Maharashtra", iso: "MH" },
    { name: "Manipur", iso: "MN" },
    { name: "Meghalaya", iso: "ML" },
    { name: "Mizoram", iso: "MZ" },
    { name: "Nagaland", iso: "NL" },
    { name: "Odisha", iso: "OR" },
    { name: "Punjab", iso: "PB" },
    { name: "Rajasthan", iso: "RJ" },
    { name: "Sikkim", iso: "SK" },
    { name: "Tamil Nadu", iso: "TN" },
    { name: "Telangana", iso: "TG" },
    { name: "Tripura", iso: "TR" },
    { name: "Uttar Pradesh", iso: "UP" },
    { name: "Uttarakhand", iso: "UK" },
    { name: "West Bengal", iso: "WB" },
  ];

  const [cityOptions, setCityOptions] = useState([]);
  const [DomainName, setDomainName] = useState("");
  const [selectedSport, setSelectedSport] = useState("");
  const [selectedESport, setSelectedESport] = useState("");

  useEffect(() => {
    const fetchCities = async () => {
      if (formData.state) {
        const headers = new Headers();
        headers.append("X-CSCAPI-KEY", "NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA=="); 
  
        const requestOptions = {
          method: 'GET',
          headers: headers,
          redirect: 'follow',
        };
        try {

          const response = await fetch(
            `https://api.countrystatecity.in/v1/countries/IN/states/${formData.state}/cities`, requestOptions
          );

          if (response.status === 401) {
            throw new Error("Unauthorized: Check your API key.");
          }

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          

          const cities = await response.json(); // Parse JSON response
          // console.log(cities);

          if (cities) setCityOptions(cities);
        } catch (error) {
          console.error("Error fetching cities:", error.message);
          setCityOptions([]); // Clear cities on error
        }
      } else {
        setCityOptions([]); // Clear cities on error
      }
    };

    fetchCities();
  }, [formData.state]);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  //stop scrolling in bg when popup
  useEffect(() => {
    if (popupVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [popupVisible]);

  const [isSubmitting, setIsSubmitting] = useState(false); // State to disable the button during submission

  const userSchema = z.object({
    Name: z.string().min(1, "Name is required").max(100, "Name is too long"),
    CollegeName: z.string().min(1, "College name is required"),
    PhoneNumber: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
    Email: z.string().email("Invalid email address"),
    City: z.string().min(1, "City is required"),
    State: z.string().min(1, "State is required"),
    Domain: z.string().min(1, "Domain is required"),
    Sports: z.string().min(1, "This field is required"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const dataToSubmit = {
      Name: form.name.value,
      State: form.state.value,
      CollegeName: form.collegeName.value,
      City: form.city.value,
      PhoneNumber: form.phone.value,
      Email: form.email.value,
      Domain: DomainName,
      Sports: selectedSport || selectedESport,
    };

    try {
      const parsedData = userSchema.parse(dataToSubmit);
      setIsSubmitting(true); // Disable the button during form submission
      // console.log("Validated form data:", parsedData);
      // console.log("Form data:", dataToSubmit);
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(parsedData),
        }
      );

      const responsedata = await response.json();
      if (responsedata.message == "Registered Successfully") {
        // console.log(parsedData);
        toast.success("Registered successfully! Please check your email.");
        // Reset fields to null after successful submission
        form.reset();
        setDomainName("");
        setSelectedSport("");
        setSelectedESport("");
      } else {
        toast.error(` Registration Error: ${responsedata.message})`);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        toast.error(error.errors[0].message);
      } else {
        console.error("Error submitting form:", error);
        toast.error("Server Error - Unable to Submit the Form");
      }
    } finally {
      setIsSubmitting(false); // Re-enable the button
    }
  };

  return (
    <div className="h-full w-full overflow-x-hidden">
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
        <h1
          className="absolute top-50 md:top-49 lg:top-49 uxl:top-48 w-full text-center text-8xl [@media(max-width:331px)]:text-7xl [@media(min-width:331px) and (max-width:576px)]:text-9xl md:text-[130px] lg:text-[180px] uxl:text-[190px] text-white uppercase font-extrabold  z-10 dharma-gothic-c text-effect "
          style={{
            // fontSize: "180px",
            fontWeight: 800,
            lineHeight: "115px",
            letterSpacing: "0.09em",
            textAlign: "center",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Register Now
        </h1>
      </div>
      <Link
        to="/"
        className="text-center align-middle absolute w-fit h-fit py-2 px-5 right-[16px] sm:right-16 sm:top-[75px] top-[26px] border-2 border-[#F85B02] shadow-[2px_1.5px_13px_#F85B02] rounded-xl z-10 text-white text-l sm:text-xl lg:text-3xl bg-[#424242BF] font-squid hover:bg-[#515151bf] hover:scale-105"
      >
        HOME
      </Link>
      {/* Bottom Background  */}
      <div
        className="w-screen  h-full  bg-cover py-11 md:py-20 "
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732953786/bottombg_bgswml.png)`,
        }}
      >
        <div
          className="uxl:mt-5 md:rounded-lg mx-6 p-6 sm:mx-26 sm:p-6 md:mx-36 md:p-12 md2:mx-44 lg:mx-56 lg2:mx-64 lg2:p-24 uxl:max-w-[1200px] uxl:mx-auto bg-cover z-5 min-w-[200px] md:min-w-[480px] lg2:min-w-[750px]"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dzlzhtbfn/image/upload/v1732952363/topbg_xhjmoc.png`,
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-y-4 md:gap-x-9 lg:gap-y-4 md:mx-auto max-w-4xl">
              {/* Name Text Input */}
              <div className="flex flex-col my-1">
                <label className="text-white">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="p-2 text-white border border-gray-300 rounded-md bg-[#625342] font-medium "
                />
              </div>
              {/* Phone Number Text Input */}
              <div className="flex flex-col my-1">
                <label className="text-white">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter Phone Number"
                  className="p-2 text-white border border-gray-300 rounded-md bg-[#625342] font-medium "
                />
              </div>
              {/* College Name Text Input */}
              <div className="flex flex-col my-1">
                <label className="text-white">College Name</label>
                <input
                  type="text"
                  name="collegeName"
                  placeholder="Enter College Name"
                  className="p-2 text-white border border-gray-300 rounded-md bg-[#625342] font-medium "
                />
              </div>
              {/* Email-ID Text Input */}
              <div className="flex flex-col my-1">
                <label className="text-white">Email-ID</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Email-ID"
                  className="p-2 text-white border border-gray-300 rounded-md bg-[#625342] font-medium "
                />
              </div>
              {/* State Dropdown */}
              <div className="flex flex-col my-1">
                <label className="text-white">State</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className={`p-2 border border-gray-300 rounded-md font-medium ${
                    formData.state
                      ? "bg-orange-600 text-white"
                      : "bg-[#625342] text-gray-400"
                  }`}
                >
                  <option
                    value=""
                    className="text-gray-400 bg-[#625342] hover:bg-[#6b5b4c]"
                  >
                    Select a State
                  </option>
                  {statesOfIndia.map((option) => (
                    <option
                      key={statesOfIndia.indexOf(option)}
                      value={option.iso}
                      className={`text-gray-400 bg-[#493d33] hover:bg-[#6b5b4c] ${
                        formData.state === option.iso
                          ? "bg-orange-600 text-white"
                          : ""
                      }`}
                    >
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
              {/* City Dropdown */}
              <div className="flex flex-col my-1">
                <label className="text-white">City</label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={`p-2 border border-gray-300 rounded-md font-medium ${
                    formData.state
                      ? "bg-orange-600 text-white"
                      : "bg-[#625342] text-gray-400"
                  }`}
                >
                  <option
                    value=""
                    className="text-gray-400 bg-[#625342] hover:bg-[#6b5b4c]"
                  >
                    Select a City
                  </option>
                  {cityOptions.map((option) => (
                    <option
                      key={option.id}
                      value={option.name}
                      className={`text-gray-400 bg-[#493d33] hover:bg-[#6b5b4c] ${
                        formData.state === option.isoCode
                          ? "bg-orange-600 text-white"
                          : ""
                      }`}
                    >
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
              {/* Domain Dropdown */}
              <div className="flex flex-col my-1">
                <label className="text-white">Domain</label>
                <select
                  value={DomainName}
                  onChange={(e) => setDomainName(e.target.value)}
                  className={`p-2 border border-gray-300 rounded-md bg-[#625342] ${
                    DomainName ? "text-white" : "text-gray-400"
                  }`}
                >
                  <option value="">Select Domain</option>
                  <option value="Sports">Sports</option>
                  <option value="Esports">ESports</option>
                </select>
              </div>

              {DomainName === "Sports" && (
                <div className="flex flex-col my-1">
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
                <div className="flex flex-col my-1">
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
            <div className="w-full"></div>
            <div className="flex flex-wrap justify-evenly items-center mt-3  sm:flex-row w-full">
              <button
                type="submit"
                disabled={isSubmitting} // Disable when form is submitting
                className={` bg-transparent text-[rgba(164,164,164,1)] font-extrabold leading-[60px] tracking-wide border px-3 m-1 hover:text-[#9D1241] hover:border-[#9D1241]  hover:duration-300 hover:bg-[#1f1f1f] font-dharma text-5xl ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Submitting..." : "REGISTER"}
              </button>

              <button
                type="button"
                className="bg-transparent  text-[rgba(164,164,164,1)] font-extrabold leading-[60px] tracking-wide border px-2 m-1 hover:text-[#F6931C] hover:border-[#F6931C] hover:duration-300 hover:bg-[#1f1f1f] font-dharma text-5xl "
                onClick={handleRuleBook}
              >
                RULE BOOK
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Popup Component */}
      {popupVisible && (
        <div className="fixed inset-0  bg-opacity-70 flex justify-center items-center z-50 overflow-auto">
          <div
            className="popup-content rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 py-5  px-9 relative xl:px-12 xl:py-6 bg-cover border-2 border-white "
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
            <h2 className="text-7xl font-bold mb-4 text-white font-dharma tracking-wide text-center">
              GUIDELINES
            </h2>
            <div className="text-white text-justify text-md lg:text-xl xl:text-center xl:text-2xl">
              <p className=" mb-3 lg:mb-5">
                {" "}
                1. Every participant from each team must register individually.
              </p>
              <p className="mb-3 lg:mb-5">
                {" "}
                2. A participant may register for multiple sports or e-sports
                events.
              </p>
              <p className="mb-3 lg:mb-5">
                3. Upon registration, the participant will receive a
                confirmation email regarding their registered event.
              </p>
              <p className=" mb-3 lg:mb-5">
                4. For any further queries, the participant can contact the
                person mentioned in the email.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
