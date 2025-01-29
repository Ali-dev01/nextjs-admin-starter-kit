"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { AppBar, Toolbar, IconButton, Typography, Box, Button } from "@mui/material";
import useAuth from "@/hooks/useAuth";

interface AppBarProps {
  onDrawerToggle: () => void;
}

const AppBarComponent: React.FC<AppBarProps> = ({ onDrawerToggle }) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    setTimeout(() => {
      logout();
    }, 2000);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { lg: `calc(100% - 260px)` },
        ml: { lg: "260px" },
        backgroundColor: "rgba(248, 247, 250, 0.7)", // Semi-transparent background
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(10px)",
        color: "primary.main",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          background: "#fff",
          mx: 2,
          mt: 2,
          borderRadius: "8px",
          boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onDrawerToggle}
          sx={{ display: { lg: "none" }, mr: 2 }}
        >
          <Icon icon="mingcute:menu-line" />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>

        <Box sx={{ ml: 2, display: "flex", gap: 1 }}>
          <IconButton>
            <Icon icon="mdi:bell-outline" fontSize={24} />
          </IconButton>
          <IconButton>
            <Icon icon="mdi:account-outline" fontSize={24} />
          </IconButton>
          <Button variant="outlined" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
