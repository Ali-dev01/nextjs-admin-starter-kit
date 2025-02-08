"use client";

import React, { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";
import { CssBaseline, ThemeProvider } from "@mui/material";

import theme from "@/theme";
import { AuthProvider } from "@/contexts/AuthContext";
import { SettingsProvider } from "@/contexts/SettingsContext";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <SettingsProvider>
            {children}
            <CssBaseline />
            <Toaster position="top-center" />
            <NextTopLoader
              height={3}
              color={theme.palette.primary.main}
              showSpinner={false}
              easing="ease"
              speed={200}
            />
          </SettingsProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};
