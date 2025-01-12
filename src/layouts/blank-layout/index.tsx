'use client';

import { Box } from "@mui/material";
import React from "react";

interface LayouProps {
  children: React.ReactNode;
}

const BlankLayout = (props: LayouProps) => {
  const { children } = props;
  return (
    <Box sx={styles.layoutWrapper}>
      <Box sx={{ overflow: "hidden", position: "relative" }}>{children}</Box>
    </Box>
  );
};

export default BlankLayout;

const styles = {
  layoutWrapper: {
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
  },
};
