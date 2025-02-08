"use client";

import React from "react";
import { Drawer, Box } from "@mui/material";
import { useSettings } from "@/contexts/SettingsContext";

interface DrawerProps {
  mobileOpen: boolean;
  onDrawerToggle: () => void;
  drawerContent: React.ReactNode;
}

const DrawerComponent = (props: DrawerProps) => {
  const { mobileOpen, onDrawerToggle, drawerContent } = props;

  const { layoutCollapsed, isHovered, setIsHovered } = useSettings();
  const sidebarWidth = layoutCollapsed ? 75 : 260;

  return (
    <Box
      component="nav"
      sx={{
        width: { lg: sidebarWidth },
        transition: "margin-left 0.3s ease-in-out, width 0.3s ease-in-out",
        flexShrink: { lg: 0 },
      }}
      aria-label="sidebar navigation"
    >
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            border: "none",
            width: 260,
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Permanent Drawer */}
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", lg: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            border: "none",
            transition: "width 0.3s ease-in-out",
            boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
            width: layoutCollapsed ? (isHovered ? 260 : 75) : 260,
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default DrawerComponent;
