import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createContext } from "react";
export const server = "/v1";
// export const server = "http://localhost:4000/v1";
// export const server = "https://hsrooms.onrender.com/v1";
export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [refresh ,setRefresh] = useState(false)
  const [city, setCity] = useState('');
  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        refresh,
        setRefresh,
        city,
        setCity
      }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
