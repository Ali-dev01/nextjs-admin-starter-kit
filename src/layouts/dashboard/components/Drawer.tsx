"use client";

import React from "react";
import { Drawer, Box } from "@mui/material";

interface DrawerProps {
  mobileOpen: boolean;
  onDrawerToggle: () => void;
  drawerContent: React.ReactNode;
}

const DrawerComponent = (props: DrawerProps) => {
  const { mobileOpen, onDrawerToggle, drawerContent } = props;

  return (
    <Box
      component="nav"
      sx={{ width: { lg: 260 }, flexShrink: { lg: 0 } }}
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
            boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
            width: 260,
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default DrawerComponent;
