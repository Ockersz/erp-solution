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
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
      </style>
      <Typography
        variant="body2"
        sx={{
          fontFamily: "Montserrat",
          fontWeight: 500,
          color: "#fff",
          fontSize: "1rem",
        }}
      >
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontFamily: "Montserrat",
          fontWeight: 500,
          color: "#fff",
          fontSize: "1rem",
        }}
      >
        Thank you for using this webapp!
      </Typography>
    </Box>
  );
}

export default Footer;
