"use client";

import { usePathname } from "next/navigation";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import MenuItem from "./MenuItem";
import navigation from "@/data/navigation";
import { findParentTitle } from "../utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useSettings } from "@/contexts/SettingsContext";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const { layoutCollapsed, toggleLayout } = useSettings();

  const pathname = usePathname();
  const navigationData = navigation();

  const handleMenuClick = (title: string) => {
    setOpenMenu(openMenu === title ? null : title);
  };

  useEffect(() => {
    const parentTitle = findParentTitle(navigationData, pathname);

    setActiveLink(pathname);
    setOpenMenu(parentTitle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Sticky Logo */}
      <Box
        sx={{
          position: "sticky",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          top: 0,
          zIndex: 1,
          backgroundColor: "#fff",
          py: 2,
          px: 2,
        }}
      >
        <Typography variant="h6" noWrap>
          Admin
        </Typography>
        <Box
          sx={{ cursor: "pointer" }}
          onClick={toggleLayout}
        >
          <Icon
            icon={layoutCollapsed ? "la:circle" : "la:dot-circle"}
            fontSize={22}
            color="#333333"
          />
        </Box>
      </Box>

      <Box
        sx={{
          flex: 1,
          marginRight: "3px",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ededf0",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#d6d6d6",
          },
        }}
      >
        <Box sx={{ px: "12px" }}>
          {navigationData.map((item, index) => (
            <MenuItem
              key={index}
              item={item}
              isChild={false} // Top-level items will have isChild as false
              openMenu={openMenu}
              activeLink={activeLink}
              handleMenuClick={handleMenuClick}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
