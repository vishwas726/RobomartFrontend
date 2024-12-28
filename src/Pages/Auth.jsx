import React, { useState } from "react";
import illustration from "../../src/assets/images/SignupPage/young man with laptop computer working at home office.svg";
import illustration1 from "../../src/assets/images/LoginPage/young man sitting in front of laptop.png";
import GoogleIcon from "../../src/assets/images/LoginPage/Social Icons.png";
import FacebookIcon from "../../src/assets/images/LoginPage/Social Icons (1).png";
import AppleIcon from "../../src/assets/images/LoginPage/Social Icons (2).png";
import Logo from "../../src/assets/images/LoginPage/logo.png";
import { LuEye, LuEyeOff } from "react-icons/lu";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../Context/AuthContext"; // Import your AuthContext

const Auth = ({UserSet}) => {
  const { login } = useAuth(); // Get login function from AuthContext
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errors, setErrors] = useState({}); // For signup validation errors
  const [loginError, setLoginError] = useState(""); // Error state for login
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Phone number validation
  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[6-9]\d{9}$/; // Validates a 10-digit Indian phone number starting with 6-9
    return phoneRegex.test(phoneNumber);
  };

  // Password validation
  const isValidPassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate phone number
    if (!phoneNumber) {
      setPhoneNumberError("Phone number is required.");
      isValid = false;
    } else if (!isValidPhoneNumber(phoneNumber)) {
      setPhoneNumberError("Please enter a valid phone number.");
      isValid = false;
    } else {
      setPhoneNumberError(""); // Clear phone number error if valid
    }

    // Validate password
    if (!password) {
      setPasswordError("Password is required.");
      isValid = false;
    } else if (!isValidPassword(password)) {
      setPasswordError("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(""); // Clear password error if valid
    }

    if (isValid) {
      try {
        const { data } = await axios.post(
          "/login",
          { phoneNumber: phoneNumber, password: password },
          { withCredentials: true }
        );

        const { success, message } = data;
        if (success) {
          login(data.data);
          toast.success(message);
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          toast.error(message);
        }
      } catch (error) {
        console.log(error);
        toast.error("An error occurred during login.");
      }
    }
  };

  const validate = () => {
    const errors = {};
    const minLength = 2; // Minimum length for the name
    const maxLength = 50; // Maximum length for the name

    if (!name.trim()) {
      errors.name = "Name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      errors.name = "Name should not contain numbers.";
    } else if (name.length < minLength) {
      errors.name = `Name must be at least ${minLength} characters long.`;
    } else if (name.length > maxLength) {
      errors.name = `Name must not exceed ${maxLength} characters.`;
    }

    if (!phoneNumber) {
      errors.phoneNumber = "Phone number is required.";
    } else if (!isValidPhoneNumber(phoneNumber)) {
      errors.phoneNumber = "Invalid phone number format.";
    }

    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Please confirm your password.";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }

    return errors;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const { data } = await axios.post(
        "/signup",
        { phoneNumber: phoneNumber, name: name, password: password },
        { withCredentials: true }
      );

      const { success, message } = data;
      if (success) {
        login(data.data);
        toast.success(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred during signup.");
    }
  };
  const [AnimApp, setAnimApp] = useState(false);

  return (
    <div className="AuthWrapper bg-red-400 relative w-[100vw] min-h-[100vh]">
      {/* <button onClick={() => { setAnimApp(!AnimApp) }} className=' absolute top-0 left-0 border bg-blue-100 p-2 rounded-sm px-4'>Animate</button> */}

      {/* // Login Page  */}

      <div className="flex items-center justify-center bg-gray-50 h-[100vh]  ">
        <div
          className={`LogonWrapper bg-white w-full md:w-[100%] ${
            AnimApp ? "h-[90%] " : " h-[80%] "
          } p-3 md:p-8 pb-0 sm:w-[95%] md:w-[97%] lg:w-[93%] xl:w-[70%] 2xl:w-[60%]`}
        >
          <div className="flex items-center space-x-2 justify-center">
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                className={`h-[80px] ${AnimApp ? "  bounce " : " fadeaway "} `}
              />
            </Link>
          </div>

          <div
            className={`"rounded-lg relative flex justify-between h-[88%]  ${
              AnimApp && "flex -row-reverse"
            }`}
          >
            {/* Left Section */}
            <div
              className={`${
                AnimApp ? "animIn1 " : "animOut1"
              } LeftW w-full md:w-1/2 absolute z-20 left-0`}
            >
              <div className="containerWrap w-[400px] mx-auto">
                <div className="mb-6 flex justify-center items-center">
                  <div className="text-4xl font-bold text-[#424242] mt-4 md:mt-0 text-center">
                    Welcome Back!!
                  </div>
                </div>
                <form
                  className="space-y-6"
                  method="post"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div>
                    <label
                      htmlFor="phoneNumberL"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="phoneNumberL"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter your phone number"
                        className={`w-full p-3 border ${
                          phoneNumberError ? "border-red-500" : "border-gray-300"
                        } rounded-lg outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                      />
                    </div>
                    {phoneNumberError && (
                      <p className="text-red-500 text-sm mt-1">{phoneNumberError}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="passwordL"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="passwordL"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className={`w-full p-3 border ${
                          passwordError ? "border-red-500" : "border-gray-300"
                        } rounded-lg focus:ring-indigo-500 focus:border-indigo-500 outline-none`}
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                        {showPassword ? (
                          <LuEye
                            className="text-base text-gray-500 cursor-pointer"
                            onClick={togglePasswordVisibility}
                          />
                        ) : (
                          <LuEyeOff
                            className="text-base text-gray-500 cursor-pointer"
                            onClick={togglePasswordVisibility}
                          />
                        )}
                      </div>
                    </div>
                    {passwordError && (
                      <p className="text-red-500 text-sm mt-1">
                        {passwordError}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-end">
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 bg-[#3F51B5]"
                  >
                    Login
                  </button>
                  <div className="text-center text-sm font-medium text-gray-500">
                    - or -
                  </div>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="p-2 rounded-full bg-[#FEF6EF]">
                      <img src={GoogleIcon} alt="Google" className="h-5" />
                    </a>
                    <a href="#" className="p-2 rounded-full bg-[#FEF6EF]">
                      <img src={FacebookIcon} alt="Facebook" className="h-5" />
                    </a>
                    <a href="#" className="p-2 rounded-full bg-[#FEF6EF]">
                      <img src={AppleIcon} alt="Apple" className="h-5" />
                    </a>
                  </div>
                </form>
                {loginError && (
                  <p className="text-red-500 text-sm text-center mt-4">
                    {loginError}
                  </p>
                )}
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      <span
                        onClick={() => {
                          setAnimApp(!AnimApp);
                        }}
                      >
                        Signup
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Left2  */}
            <div
              className={`${
                AnimApp ? "animOut" : "animIn "
              }  LeftW w-full md:w-1/2 absolute z-10 right-0`}
            >
              <div className="cantainerWrap w-[400px] mx-auto">
                <div className="mb-6 flex justify-center items-center">
                  <div className="text-4xl font-bold text-[#424242] text-center mt-4 md:mt-0">
                    Create an Account
                  </div>
                </div>
                <form className="space-y-6" onSubmit={handleSignup} noValidate>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Enter your phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                      {errors.phoneNumber && (
                        <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                        {showPassword ? (
                          <LuEye
                            className="text-base text-gray-500 cursor-pointer"
                            onClick={togglePasswordVisibility}
                          />
                        ) : (
                          <LuEyeOff
                            className="text-base text-gray-500 cursor-pointer"
                            onClick={togglePasswordVisibility}
                          />
                        )}
                      </div>
                      {errors.password && (
                        <p className="text-red-500 text-sm">
                          {errors.password}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Confirm Password
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                      />
                      {errors.confirmPassword && (
                        <p className="text-red-500 text-sm">
                          {errors.confirmPassword}
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 rounded-l-full rounded-r-full bg-[#3F51B5]"
                  >
                    Sign Up
                  </button>
                  {/* <div className="text-center text-sm font-medium text-gray-500">
                    - or sign up with -
                  </div>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="p-2 rounded-full bg-[#FEF6EF]">
                      <img src={GoogleIcon} alt="Google" className="h-5" />
                    </a>
                    <a href="#" className="p-2 rounded-full bg-[#FEF6EF]">
                      <img src={FacebookIcon} alt="Facebook" className="h-5" />
                    </a>
                    <a href="#" className="p-2 rounded-full bg-[#FEF6EF]">
                      <img src={AppleIcon} alt="Apple" className="h-5" />
                    </a>
                  </div> */}
                </form>
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <span
                      onClick={() => {
                        setAnimApp(!AnimApp);
                      }}
                      className="font-medium cursor-pointer text-indigo-600 hover:text-indigo-500"
                    >
                      Login
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* Right Section */}
            <div
              className={` ${
                AnimApp ? "animIn" : "animOut"
              } md:flex md:w-[300px] lg:w-[390px] justify-center items-center bg-[#3F51B5] rounded-t-full bottom-0 top-0 right-0 z-[100] absolute`}
            >
              <div className="ImageUser absolute -left-24 top-32 hidden md:block">
                <img
                  src={illustration1}
                  alt="Illustration"
                  className={`md:w-[300px] lg:w-[344px] ${
                    !AnimApp ? "fadeaway" : ""
                  }`}
                />
              </div>
            </div>
            {/* t > visible  */}
            <div
              className={` ${
                AnimApp ? "animOut1 flex " : "animIn1 "
              } md:w-[300px] bg-[#3F51B5] lg:w-[390px] justify-center items-center  rounded-t-full bottom-0 top-0 left-0 z-[100] absolute`}
            >
              <div className="ImageUser absolute -right-32 top-24 hidden md:block">
                <img
                  src={illustration}
                  alt="Illustration"
                  className={`md:w-[400px] lg:w-[500px] ${
                    AnimApp ? "fadeaway" : ""
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
