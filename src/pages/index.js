import React, { useCallback, useEffect, useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "../pages/home/index";
import Login from "../pages/login/index";

function App() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const [timeoutId, setTimeoutId] = useState(null);

  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
    setIsLoggedIn(true);
    resetTimer();
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setIsLoggedIn(false);
  };

  const resetTimer = useCallback(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      logout();
    }, 300000); // 5 minutes
    setTimeoutId(newTimeoutId);
  }, [timeoutId]);

  useEffect(() => {
    const handleUserActivity = () => {
      resetTimer();
    };

    // Add event listeners to detect user activity
    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("keydown", handleUserActivity);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("keydown", handleUserActivity);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [resetTimer, timeoutId]);

  useEffect(() => {
    if (token) {
      resetTimer();
    }
  }, [token, resetTimer]);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            isLoggedIn ? <Navigate to="/" /> : <Login setToken={saveToken} />
          }
        />
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
