import React, { useState } from "react";
import illustration from "../src/assets/images/SignupPage/young man with laptop computer working at home office.svg";
import GoogleIcon from "../src/assets/images/LoginPage/Social Icons.png";
import FacebookIcon from "../src/assets/images/LoginPage/Social Icons (1).png";
import AppleIcon from "../src/assets/images/LoginPage/Social Icons (2).png";
import Logo from "../src/assets/images/LoginPage/logo.png";
import { LuEye, LuEyeOff } from "react-icons/lu";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({}); // Store validation errors
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

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
            const response = await axios.post('https://newmyrobomart.onrender.com/signup', { name, email, password  });
            if (response.status === 200) {
                localStorage.setItem("signup",true);
                navigate('/login');
            }
        } catch (error) {
            console.error("Signup Error: ", error);
            alert("Signup failed. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center bg-gray-50 min-h-[100vh]">
            <div className="LogonWrapper bg-white w-[60%] h-[90vh] p-8 pb-0 sm:w-[95%] md:w-[97%] lg:w-[93%] xl:w-[70%] 2xl:w-[60%]">
                <div className="flex items-center space-x-2 justify-center">
                <Link to="/">
                <img src={Logo} alt="Logo" className="h-[80px]" />
          </Link>    
                </div>
                <div className="rounded-lg flex justify-between h-[90%] flex-row-reverse">
                    <div className="LeftW w-full md:w-1/2">
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
                                    <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Login
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex md:w-[300px] lg:w-[390px] justify-center items-center bg-[#3F51B5] rounded-t-full relative">
                        <div className="ImageUser absolute -right-32 top-24">
                            <img src={illustration} alt="Illustration" className="md:w-[400px] lg:w-[500px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
