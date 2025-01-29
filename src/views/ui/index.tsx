"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import Buttons from "./Buttons";
import TypograpyVariants from "./Typograpy";
import FormComponents from "./FormComponents";

const UiComponents = () => {
  return (
    <Box mb={25}>
      <Typography variant="h1" color="text.primary" textAlign="center" my={2}>
        UI Components
      </Typography>

      {/* Buttons varinats */}
      <Buttons />

      {/* Typography Varinats */}
      <TypograpyVariants />

      {/* Form Elements */}
      <FormComponents />
    </Box>
  );
};

export default UiComponents;
