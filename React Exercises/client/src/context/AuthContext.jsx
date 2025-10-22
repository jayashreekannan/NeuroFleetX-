import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storedUser = JSON.parse(localStorage.getItem("user")) || null;
  const [user, setUser] = useState(storedUser);

  const login = ({ username, password }) => {
    // Simulate JWT login
    return new Promise((resolve, reject) => {
      if (username && password) {
        const token = "fake-jwt-token"; 
        const userData = { username, role: username === "admin" ? "admin" : "customer", token };
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
        resolve(userData);
      } else {
        reject("Invalid credentials");
      }
    });
  };

  const register = ({ username, email, password }) => {
    // Simulate registration
    return new Promise((resolve) => {
      setTimeout(() => resolve({ username, email }), 500);
    });
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
