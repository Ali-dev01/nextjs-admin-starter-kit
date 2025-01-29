import { Box, Button, ButtonGroup, Divider, Typography } from "@mui/material";
import React from "react";

const Buttons = () => {
  return (
    <>
      <Typography variant="h4" color="text.primary">
        Default variant button
      </Typography>
      <Box sx={{ display: "flex", gap: "12px", flexWrap: "wrap", my: 2 }}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
      </Box>
      <Divider />

      <Box my={4}>
        <Typography variant="h4" color="text.primary">
          Outlined variant button
        </Typography>
        <Box sx={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Button variant="outlined" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" color="success">
            Success
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
          <Button variant="outlined" color="warning">
            Warning
          </Button>
          <Button variant="outlined" color="info">
            Info
          </Button>
        </Box>
      </Box>
      <Divider />

      <Box my={4}>
        <Typography variant="h4" color="text.primary">
          Text variant button
        </Typography>
        <Box sx={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Button variant="text" color="primary">
            Primary
          </Button>
          <Button variant="text" color="secondary">
            Secondary
          </Button>
          <Button variant="text" color="success">
            Success
          </Button>
          <Button variant="text" color="error">
            Error
          </Button>
          <Button variant="text" color="warning">
            Warning
          </Button>
          <Button variant="text" color="info">
            Info
          </Button>
        </Box>
      </Box>
      <Divider />

      <Box my={4}>
        <Typography variant="h4" color="text.primary">
          Size Options
        </Typography>
        <Button variant="contained" color="primary" size="small">
          Small Button
        </Button>
        <Button variant="contained" sx={{ ml: 2 }}>
          Medium Button
        </Button>
        <Button variant="contained" size="large" sx={{ ml: 2 }}>
          Large Button
        </Button>
      </Box>
      <Divider />

      {/*Button Group  */}
      <Box my={4}>
        <Typography variant="h4" color="text.primary">
          Button Group
        </Typography>
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup
          sx={{ ml: 2 }}
          variant="contained"
          aria-label="Basic button group"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Divider />
    </>
  );
};

export default Buttons;
