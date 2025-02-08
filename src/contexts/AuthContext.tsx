/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import jwt from "jsonwebtoken";
import toast from "react-hot-toast";
import { createContext, useState, useEffect, ReactNode } from "react";

import { mockUsers } from "@/constants";
import { useRouter } from "next/navigation";

interface LoginPayload {
  email: string;
  password: string;
  isRememberMe?: boolean;
}

type AuthContextType = {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  loading: boolean;
  initialLoading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  login: (payload: LoginPayload) => Promise<any>;
  logout: () => void;
};

const secret = process.env.NEXT_PUBLIC_JWT_SECRET!;

// Create context
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// Provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [initialLoading, setInitialLoading] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    // Check for a valid token on load

    const token =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    if (token) {
      try {
        const decoded = jwt.verify(token, secret);
        setUser(decoded);
      } catch (error) {
        console.log("Invalid token:", error);
        toast.error("Session Expired, Please Login");
        logout();
      }
    }
    setInitialLoading(false);
  }, []);

  const login = async (payload: LoginPayload) => {
    setLoading(true);
    try {
      // Simulate a network delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Validate credentials
      const foundUser = mockUsers.find(
        (u) => u.email === payload.email && u.password === payload.password
      );

      if (!foundUser) {
        return "Invalid email or password";
      }

      // Generate a token
      const token = jwt.sign(
        { id: foundUser.id, email: foundUser.email, name: foundUser.name },
        secret,
        { expiresIn: "10m" }
      );

      // Save token in localStorage or sessionStorage
      if (payload.isRememberMe) {
        localStorage.setItem("authToken", token);
      } else {
        sessionStorage.setItem("authToken", token);
      }

      const responseData = {
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
      };

      setUser(responseData);
      return responseData;
    } catch (error: any) {
      console.error("Login failed:", error?.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    // Clear storage and redirect to login
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");

    setUser(null);
    router.replace("/sign-in");
  };

  const authValues = {
    user,
    setUser,
    loading,
    initialLoading,
    setLoading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};
