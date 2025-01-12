"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import navigation from "@/data/navigation";
import MenuItem from "./MenuItem";
import { usePathname } from "next/navigation";

const Sidebar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const pathname = usePathname();
  const navigationData = navigation();

  const handleMenuClick = (title: string) => {
    setOpenMenu(openMenu === title ? null : title);
  };

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Sticky Logo */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          backgroundColor: "#fff",
          py: 2,
          px: 2,
        }}
      >
        <Typography variant="h6" noWrap>
          Vuexy
        </Typography>
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
