"use client";

import React, { useState } from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";

import AppBarComponent from "./components/AppBar";
import DrawerComponent from "./components/Drawer";
import Sidebar from "./components/Sidebar";
import { useSettings } from "@/contexts/SettingsContext";

const Dashboard = ({ children }: { children?: React.ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { layoutCollapsed } = useSettings();
  const sidebarWidth = layoutCollapsed ? 75 : 260;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* AppBar */}
        <AppBarComponent onDrawerToggle={handleDrawerToggle} />

      {/* Drawer */}
      <DrawerComponent
        mobileOpen={mobileOpen}
        onDrawerToggle={handleDrawerToggle}
        drawerContent={<Sidebar />}
      />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { lg: `calc(100% - ${sidebarWidth}px)` },
          px: 2,
          py: 4,
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Dashboard;
