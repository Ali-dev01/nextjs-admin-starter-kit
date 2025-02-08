/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Box, Collapse, Typography } from "@mui/material";

import { useSettings } from "@/contexts/SettingsContext";

interface MenuItemProps {
  item: any;
  isChild: boolean;
  openMenu: string | null;
  activeLink: string | null;
  handleMenuClick: (title: string) => void;
}

const MenuItem = (props: MenuItemProps) => {
  const { item, isChild, openMenu, activeLink, handleMenuClick } = props;

  const { layoutCollapsed, isHovered } = useSettings();
  const showTitle = !layoutCollapsed || isHovered; // Show title if expanded or hovered

  const itemStyle = {
    ...styles.listStyle,
    justifyContent: showTitle ? "space-between" : "center",
    backgroundColor:
      openMenu === item.title || activeLink === item.path ? "#ededf0" : "",
    ...(isChild && {
      backgroundColor: activeLink === item.path ? "#d6d6d6" : "",
    }),
  };

  return (
    <>
      <Box
        sx={itemStyle}
        onClick={item.children ? () => handleMenuClick(item.title) : undefined}
        component={item.children ? "div" : Link}
        href={!item.children ? item.path : undefined}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: showTitle ? "10px" : "0px",
            transition: "gap 0.3s ease",
          }}
        >
          <Icon icon={item.icon} fontSize={isChild ? 12 : 20} />
          <Box
            sx={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              transition: "width 0.4s ease, opacity 0.4s ease",
              width: showTitle ? "auto" : "0px",
              opacity: showTitle ? 1 : 0,
            }}
          >
            <Typography variant="body1">{item.title}</Typography>
          </Box>
        </Box>

        {showTitle && item.children && (
          <Icon
            fontSize={22}
            icon="iconamoon:arrow-right-2-light"
            style={{
              transform:
                openMenu === item.title ? "rotate(90deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          />
        )}
      </Box>

      {item.children && showTitle && (
        <Collapse in={openMenu === item.title} timeout="auto" unmountOnExit>
          <Box sx={{ pl: 1 }}>
            {item.children.map((child: any, index: number) => (
              <MenuItem
                key={index}
                item={child}
                isChild={true}
                openMenu={openMenu}
                activeLink={activeLink}
                handleMenuClick={handleMenuClick}
              />
            ))}
          </Box>
        </Collapse>
      )}
    </>
  );
};

export default MenuItem;

const styles = {
  listStyle: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    borderRadius: "6px",
    mb: 1,
    p: 1.2,
    "&:hover": {
      background: "#ededf0",
    },
  },
};
