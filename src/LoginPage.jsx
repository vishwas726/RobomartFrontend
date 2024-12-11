import React, { useState } from "react";
import illustration from "../src/assets/images/LoginPage/young man sitting in front of laptop.png";
import GoogleIcon from "../src/assets/images/LoginPage/Social Icons.png";
import FacebookIcon from "../src/assets/images/LoginPage/Social Icons (1).png";
import AppleIcon from "../src/assets/images/LoginPage/Social Icons (2).png";
import Logo from "../src/assets/images/LoginPage/logo.png";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";
const LoginPage = () => {
 
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState(""); // Error state for login
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Email validation
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Password validation (minimum length of 6 characters)
  const isValidPassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate email
    if (!email) {
      setEmailError("Email is required.");
      isValid = false;
      return;
    } else if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
      return;
    } else {
      setEmailError(""); // Clear email error if valid
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
        // Send login request to the server
        // const response = await axios.post("https://newmyrobomart.onrender.com/log", {
        //   email,
        //   password,
        // });
        const response = await axios.post('https://newmyrobomart.onrender.com/log', { email: email, password: password });
      
        console.log("the res is here from frontend ", response.data)
        if (response.status === 200) {
          
          
          console.log("Login successful!");
          toast.success("Login Successfull");
          localStorage.setItem("login", true);
          navigate("/"); // Navigate to signup page after successful login
        }
        else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error during login:", error.response?.data || error.message);
        console.log("inside the catvch", error.response?.data, "  ", error.message)
        if (error.response?.data == "Unauthorized") {
          toast.error("incorrect email or password");
          setLoginError(error.response?.data?.error || "incorrect email or password");
          return;
        } else {
          toast.error(error.message);
        }
        toast.error(error.response?.data?.error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 h-[100vh]">
      <div className="LogonWrapper bg-white w-[60%] h-[80%] p-8 pb-0 sm:w-[95%] md:w-[97%] lg:w-[93%] xl:w-[70%] 2xl:w-[60%]">
        <div className="flex items-center space-x-2 justify-center">
          <Link to="/">
           <img src={Logo} alt="Logo" className="h-[80px]" />
          </Link>   
        </div>
        <div className="rounded-lg flex justify-between h-[88%] ">
          {/* Left Section */}
          <div className="LeftW w-full md:w-1/2">
            <div className="containerWrap w-[400px] mx-auto">
              <div className="mb-6 flex justify-center items-center">
                <div className="text-4xl font-bold text-[#424242] text-center">
                  Welcome Back!!
                </div>
              </div>
              <form className="space-y-6" method="post" onSubmit={handleSubmit} noValidate>
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@gmail.com"
                      className={`w-full p-3 border ${emailError ? "border-red-500" : "border-gray-300"} rounded-lg outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                    />
                  </div>
                  {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                </div>
                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1 relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className={`w-full p-3 border ${passwordError ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-indigo-500 focus:border-indigo-500 outline-none`}
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                      {showPassword ? (
                        <LuEye className="text-base text-gray-500 cursor-pointer" onClick={togglePasswordVisibility} />
                      ) : (
                        <LuEyeOff className="text-base text-gray-500 cursor-pointer" onClick={togglePasswordVisibility} />
                      )}
                    </div>
                  </div>
                  {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
                </div>
                {/* Forgot Password */}
                <div className="flex justify-end">
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot Password?
                  </a>
                </div>
                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 bg-[#3F51B5]"
                >
                  Login
                </button>
                {/* Social Login */}
                <div className="text-center text-sm font-medium text-gray-500">- or -</div>
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
              {loginError && <p className="text-red-500 text-sm text-center mt-4">{loginError}</p>}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don’t have an account?{" "}
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    <Link to={"/signup"}> <span >Signup</span></Link>
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="hidden md:flex md:w-[300px] lg:w-[360px] justify-center items-center bg-[#3F51B5] rounded-t-full relative">
            <div className="ImageUser absolute -left-24 top-32">
              <img src={illustration} alt="Illustration" className="md:w-[300px] lg:w-[344px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
