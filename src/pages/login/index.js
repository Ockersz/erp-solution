import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f6f8",
      }}
    >
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
      </style>
      <Paper
        elevation={3}
        sx={{
          width: "90%",
          maxWidth: "400px",
          height: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Montserrat",
            fontWeight: 500,
          }}
        >
          Sign In
        </Typography>
        <Divider
          sx={{
            width: "100%",
            mt: 2,
            mb: 2,
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            height: "45vh",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              width: "100%",
              maxWidth: "400px",
            }}
          >
            <FormControl
              variant="standard"
              sx={{ width: "70%", alignSelf: "center" }}
            >
              <InputLabel
                htmlFor="standard-adornment-username"
                sx={{ fontFamily: "Montserrat" }}
              >
                Username
              </InputLabel>
              <Input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                label="Username"
                startAdornment={
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                }
                sx={{ fontFamily: "Montserrat", fontSize: "1.4rem" }}
              />
            </FormControl>

            <FormControl
              variant="standard"
              sx={{ width: "70%", alignSelf: "center" }}
            >
              <InputLabel
                htmlFor="standard-adornment-password"
                sx={{ fontFamily: "Montserrat" }}
              >
                Password
              </InputLabel>
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                sx={{ fontFamily: "Montserrat", fontSize: "1.4rem" }}
              />
            </FormControl>
            <Button
              variant="contained"
              sx={{
                width: "70%",
                alignSelf: "center",
                fontFamily: "Montserrat",
                fontWeight: 500,
                fontSize: "1.2rem",
                marginTop: "10px",
                borderRadius: "50px",
              }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default Login;
