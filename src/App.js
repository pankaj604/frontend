import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Profile from "./auth/Profile";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { toast, Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";
import axios from "axios";
import { Context, server } from "./index";
import Addroom from "./Pages/Addroom";
import "./style/Myroomdata.css";
import Logout from "./auth/Logout";
import Boys from "./Pages/Boys";
import Admin from "./admin/Adminp.jsx";
import Girls from "./Pages/Girls";
import PG from "./Pages/PG";
import Hostel from "./Pages/Hostel";
import Myroom from "./Pages/Myroom";
import "./style/App.css"
import Owner from "./Pages/Owner";
import Couple from "./Pages/Couple";
function App() {
  const { setUser, setIsAuthenticated, setLoading } = useContext(Context);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/addroom" element={<Addroom />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/boys" element={<Boys />} />
        <Route path="/girls" element={<Girls />} />
        <Route path="/pg" element={<PG />} />
        <Route path="/hostle" element={<Hostel />} />
        <Route path="/myroom" element={<Myroom />} />
        <Route path="/header" element={<Header />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/couple" element={<Couple />} />

      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
