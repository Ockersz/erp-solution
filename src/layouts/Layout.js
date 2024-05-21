import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { blue, grey, red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";

function Layout({ children }) {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theme") || "light"
  );
  const [fade, setFade] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
    setFade(true);
    setTimeout(() => setFade(false), 300);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: blue[500],
        contrastText: "#fff",
      },
      secondary: {
        main: red[500],
        contrastText: "#000",
      },
      background: {
        default: "#f4f6f8",
        paper: "#fff",
      },
      text: {
        primary: "#000",
        secondary: grey[800],
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: blue[900],
        contrastText: "#000",
      },
      secondary: {
        main: red[900],
        contrastText: "#000",
      },
      background: {
        default: "#414141",
        paper: "#1d1d1d",
      },
      text: {
        primary: "#fff",
        secondary: grey[500],
      },
    },
  });

  const theme = themeMode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          transition: "opacity 0.5s ease", // Apply transition to all child elements
          opacity: fade ? 0 : 1,
        }}
      >
        <AppBar
          position="sticky"
          sx={{
            backgroundColor: "primary.main",
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button
              color="inherit"
              onClick={toggleTheme}
              sx={{
                borderRadius: 50,
              }}
            >
              {themeMode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
            </Button>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            mt: 2,
            p: 2,
          }}
        >
          {children}
        </Box>
        <Divider />
        <Box sx={{ position: "sticky", bottom: 0 }}>
          <Footer theme={theme} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Layout;
