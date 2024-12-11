// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie'; // Import js-cookie
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  
  const [user, setUser] = useState(null); // State to hold user info

   // Load user data from cookies when the component mounts
   useEffect(() => {
    const token = Cookies.get('token');
    const storedUser = Cookies.get('user');
    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {

    console.log("Logging in user:", userData); // Add this line
    setUser(userData); // Set the user data when logging in   
    Cookies.set('user', JSON.stringify(userData), { expires: 7 }); // Store user data in a cookie for 7 days
    Cookies.set('token', userData.token, { expires: 7 }); // Store token in a cookie for 7 days

  };

  const logout = () => {
    setUser(null); // Clear user data on logout
    Cookies.remove('user');
    Cookies.remove('token');
    toast.success("Logout Successfully")
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
