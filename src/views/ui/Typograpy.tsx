import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";

const TypograpyVariants = () => {
  return (
    <>
      <Box my={4}>
        <Typography variant="h2" color="text.primary" mb={2}>
          Typography Variants
        </Typography>
        <Stack gap={1} mb={4}>
          <Typography variant="caption">This is caption</Typography>
          <Typography variant="body2">This is Body 2</Typography>
          <Typography variant="body1">This is Body 1</Typography>
          <Typography variant="h6">This is Heading 6</Typography>
          <Typography variant="h5">This is Heading 5</Typography>
          <Typography variant="h4">This is Heading 4</Typography>
          <Typography variant="h3">This is Heading 3</Typography>
          <Typography variant="h2">This is Heading 2</Typography>
          <Typography variant="h1">This is Heading 1</Typography>
        </Stack>
      </Box>
      <Divider />
    </>
  );
};

export default TypograpyVariants;
