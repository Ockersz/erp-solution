import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100px",
        backgroundColor: "primary.main",
        py: 2,
        px: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </Typography>
      <Typography variant="body2">Thank you for using this webapp!</Typography>
    </Box>
  );
}

export default Footer;
