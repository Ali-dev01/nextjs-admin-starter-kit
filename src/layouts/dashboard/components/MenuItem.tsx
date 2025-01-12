/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Box, Collapse, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

interface MenuItemProps {
  item: any;
  isChild: boolean;
  openMenu: string | null;
  activeLink: string | null;
  handleMenuClick: (title: string) => void;
}

const MenuItem = (props: MenuItemProps) => {
  const { item, isChild, openMenu, activeLink, handleMenuClick } = props;
  const router = useRouter();

  // Apply styles conditionally based on whether the link is active
  const itemStyle = isChild
    ? {
        ...styles.listStyle,
        backgroundColor: activeLink === item.path ? "#d6d6d6" : "",
      }
    : {
        ...styles.listStyle,
        backgroundColor: openMenu === item.title || activeLink === item.path ? "#ededf0" : "",
      };

  return (
    <React.Fragment>
      <Box
        sx={itemStyle}
        onClick={() => (item.children ? handleMenuClick(item.title) : router.push(item.path))}
      >
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Icon icon={item.icon} fontSize={isChild ? 12 : 20} />
          <Typography variant="body1">{item.title}</Typography>
        </Box>

        {item.children && (
          <Icon
            fontSize={22}
            icon="iconamoon:arrow-right-2-light"
            style={{
              transform: openMenu === item.title ? "rotate(90deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          />
        )}
      </Box>

      {item.children && (
        <Collapse in={openMenu === item.title} timeout="auto" unmountOnExit>
          <Box sx={{ pl: 1 }}>
            {item.children.map((child: any, index: number) => (
              <MenuItem
                key={index}
                item={child}
                isChild={true} // Pass isChild as true for child items
                openMenu={openMenu}
                activeLink={activeLink}
                handleMenuClick={handleMenuClick}
              />
            ))}
          </Box>
        </Collapse>
      )}
    </React.Fragment>
  );
};

export default MenuItem;

const styles = {
  listStyle: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "6px",
    mb: 1,
    p: 1.3,
    "&:hover": {
      background: "#ededf0",
    },
  },
};
