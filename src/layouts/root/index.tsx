"use client";

import React, { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AuthProvider } from "@/contexts/AuthContext";
import theme from "@/theme";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          {children}
          <CssBaseline />
          <Toaster position="top-center" />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
};
