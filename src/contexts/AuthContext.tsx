/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import axios from "axios";
import { createContext, useState, useEffect, ReactNode } from "react";

interface LoginPayload {
  email: string;
  password: string;
  isRememberMe?: boolean;
}

type AuthContextType = {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  login: (payload: LoginPayload) => Promise<void>;
  logout: () => void;
};

// Create context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log('auth init')
  }, [])

  const login = async (payload: LoginPayload) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/auth/login", {
        email: payload.email,
        password: payload.password,
      });

      const { user: userData, token } = response.data;

      // Save token in localStorage if "Remember Me" is checked
      if (payload.isRememberMe) {
        localStorage.setItem("authToken", token);
      } else {
        sessionStorage.setItem("authToken", token);
      }

      // Set user data
      setUser(userData);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    // Clear storage
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");

    // Reset user state
    setUser(null);
  };

  const authValues = {
    user : true,
    setUser,
    loading,
    setLoading,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={authValues}>
      {children}
    </AuthContext.Provider>
  );
};
