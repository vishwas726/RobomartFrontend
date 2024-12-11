import React, { useState } from 'react'
import illustration from "../../src/assets/images/SignupPage/young man with laptop computer working at home office.svg";
import illustration1 from "../../src/assets/images/LoginPage/young man sitting in front of laptop.png";
import GoogleIcon from "../../src/assets/images/LoginPage/Social Icons.png";
import FacebookIcon from "../../src/assets/images/LoginPage/Social Icons (1).png";
import AppleIcon from "../../src/assets/images/LoginPage/Social Icons (2).png";
import Logo from "../../src/assets/images/LoginPage/logo.png";
import { LuEye, LuEyeOff } from "react-icons/lu";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import wave from "../assets/wave.svg"

const OTP = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loginError, setLoginError] = useState(""); // Error state for login
    const navigate = useNavigate();
    const [otpError, setOtpError] = useState("")
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
                // const response = await axios.post("/log", {
                //   email,
                //   password,
                // });
                const response = await axios.post('/log', { email: email, password: password });
                console.log("the res is here from frontend ", response)
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


    // signup 
    // const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({}); // Store validation errors
    // const navigate = useNavigate();

    // const togglePasswordVisibility = () => {
    //     setShowPassword((prevState) => !prevState);
    // };

    const validate = () => {
        const errors = {};
        // Name validation
        // Length validation
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
        // Email validation (simple regex for email format)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            errors.email = "Email is required.";
        } else if (!emailRegex.test(email)) {
            errors.email = "Invalid email format.";
        }
        // Password validation (minimum 6 characters)
        if (!password) {
            errors.password = "Password is required.";
        } else if (password.length < 6) {
            errors.password = "Password must be at least 6 characters.";
        }
        // Confirm Password validation
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
            setErrors(validationErrors); // If there are validation errors, set them
            return;
        }

        try {
            const response = await axios.post('/signup', { name, email, password });
            if (response.status === 200) {
                localStorage.setItem("signup", true);
                navigate('/login');
            }
        } catch (error) {
            console.error("Signup Error: ", error);
            alert("Signup failed. Please try again.");
        }
    };


    const [AnimApp, setAnimApp] = useState(false);
    console.log("error is here ", errors);

    return (
        <div className='AuthWrapper bg-red-400 relative w-[100vw] min-h-[100vh]'>
            {/* <button onClick={() => { setAnimApp(!AnimApp) }} className=' absolute top-0 left-0 border bg-blue-100 p-2 rounded-sm px-4'>Animate</button> */}

            {/* // Login Page  */}

            <div className="flex items-center justify-center bg-gray-50 h-[100vh] ">
                <div className={`LogonWrapper relative bg-white  shadow- xl overflow-hidden w-[60%] ${AnimApp ? " h-[97%] " : " h-[80%] "} p-8 pb-0 sm:w-[95%] md:w-[97%] lg:w-[93%] xl:w-[70%] 2xl:w-[60%]`}>

                    {/* // Temp design    */}
                    <div className={`clipThing absolute top-0 left-0 w-[120px] h-[120px] z-50 bg-[#ffffff2d] backdrop-blur-md ${AnimApp ? " hidden " : " "}`}></div>
                    <div className={`clipThing1 absolute -top-6 -left-6 w-[110px] h-[110px] z-10   rounded-[100%]  blur-xl  ${AnimApp ? " hidden " : " "}`}></div>
                    <img src={wave} alt="" className={` absolute bottom-[-184px] left-[72px] bg-red- 300 -rotate-45 origin-bottom-left z-10 ${AnimApp ? " hidden " : " "}`} />

                    {/* Temp design end  */}
                    <div className="flex items-center space-x-2 justify-center">
                        <Link to="/">
                            <img src={Logo} alt="Logo" className={`h-[80px] ${AnimApp ? "  bounce " : " fadeaway "} `} />
                        </Link>
                    </div>

                    <div className={`"rounded-lg relative flex justify-between h-[88%]  ${AnimApp && "flex -row-reverse"}`}>
                        {/* Left Section */}
                        {/* Left2  */}
                        <div className={`${AnimApp ? "animOut" : "animIn "}  LeftW w-full md:w-1/2 absolute z-10 right-0`}>
                            <div className="cantainerWrap w-[400px] mx-auto">
                                <div className="mb-6 flex justify-center items-center">
                                    <div className="text-4xl font-bold text-[#424242] text-center">
                                        Create an Account
                                    </div>
                                </div>
                                <form className="space-y-6" onSubmit={handleSignup} novalidate>
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
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
                                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                id="email"
                                                name="email"
                                                placeholder="email@gmail.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-indigo-500 focus:border-indigo-500"

                                            />
                                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
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
                                                    <LuEye className="text-base text-gray-500 cursor-pointer" onClick={togglePasswordVisibility} />
                                                ) : (
                                                    <LuEyeOff className="text-base text-gray-500 cursor-pointer" onClick={togglePasswordVisibility} />
                                                )}
                                            </div>
                                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
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
                                            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 rounded-l-full rounded-r-full bg-[#3F51B5]"
                                    >
                                        Sign Up
                                    </button>
                                    <div className="text-center text-sm font-medium text-gray-500">- or sign up with -</div>
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
                                <div className="mt-6 text-center">
                                    <p className="text-sm text-gray-600">
                                        Already have an account?{" "}
                                        <p onClick={() => { setAnimApp(!AnimApp) }} className="font-medium cursor-pointer text-indigo-600 hover:text-indigo-500">
                                            Login
                                        </p>
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* OTP verify   */}
                        <div className={`${AnimApp ? "animIn1 " : "animOut1"} LeftW w-full md:w-1/2 absolute z-20 left-0`}>
                            <div className="containerWrap w-[400px] mx-auto">
                                <div className="mb-6 flex justify-center items-center mt-4">
                                    <div className="text-4xl font-bold text-[#424242] text-center">
                                        Verify OTP
                                    </div>
                                </div>
                                <form className="space-y-6" method="post" onSubmit={handleSubmit} noValidate>
                                    <div>
                                        {/* <label htmlFor="otp1" className="block mb-4 text-sm font-medium text-gray-700">Enter OTP</label> */}
                                        <div className="mt-1 py-4 flex justify-around items-center gap-2">
                                            {/* <input
                                                type="text"
                                                id="otp1"
                                                name="otp1"
                                                placeholder="-"
                                                maxLength={1}
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                                className={`w-[50px] p-3 border ${emailError ? "border-red-500" : "border-gray-300"} rounded-lg outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                                            /> */}

                                            {[1, 2, 3, 4].map((otp, index) => (
                                                <input
                                                    key={index}
                                                    type="text"
                                                    id={`otp${otp}`}
                                                    name={`otp${otp}`}
                                                    placeholder="-"
                                                    maxLength={1}
                                                    inputMode="numeric"
                                                    pattern="[0-9]*"
                                                    onInput={(e) => {
                                                        // Allow only numbers
                                                        e.target.value = e.target.value.replace(/[^0-9]/g, "");

                                                        // Move to the next input automatically
                                                        if (e.target.value.length === 1 && index < 3) {
                                                            document.getElementById(`otp${otp + 1}`).focus();
                                                        }
                                                    }}
                                                    onKeyDown={(e) => {
                                                        // Handle backspace
                                                        if (e.key === 'Backspace' && e.target.value.length === 0 && index > 0) {
                                                            document.getElementById(`otp${otp - 1}`).focus();
                                                        }
                                                    }}
                                                    className={`w-[50px] p-3 border ${emailError ? "border-red-500" : "border-gray-300"} rounded-lg outline-none focus:ring-indigo-500 focus:border-indigo-500 text-center`}
                                                />
                                            ))}

                                       
                                        </div>
                                        {otpError && <p className="text-red-500 text-sm mt-1">{otpError}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 bg-[#3F51B5]"
                                    >
                                        Verify
                                    </button>
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
                                            <span onClick={() => { setAnimApp(!AnimApp) }} >Signup</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={` ${AnimApp ? "animIn" : "animOut"} hidden md:flex md:w-[300px] lg:w-[390px] justify-center items-center bg-[#3F51B5] rounded-t-full bottom-0 top-0 right-0 z-[100] absolute`}>
                            <div className="ImageUser absolute -left-24 top-32 hidden md:block">
                                <img src={illustration1} alt="Illustration" className={`md:w-[300px] lg:w-[344px] ${!AnimApp ? "fadeaway" : ""}`} />
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className={` ${AnimApp ? "animOut1 flex " : "animIn1 "} md:w-[300px] bg-[#3F51B5] lg:w-[390px] justify-center items-center  rounded-t-full bottom-0 top-0 left-0 z-[100] absolute`}>
                            <div className="ImageUser absolute -right-32 top-24">
                                <img src={illustration} alt="Illustration" className={`md:w-[400px] lg:w-[500px] ${AnimApp ? "fadeaway" : ""}`} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OTP