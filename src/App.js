import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./Pages/Header";

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
import "./style/App.css";
import Owner from "./Pages/Owner";
import Couple from "./Pages/Couple";
import Forget from "./Pages/Forget";
import Reset from "./Pages/Reset.jsx";
import Addshop from "./Pages/Addshop";
import Shop from "./Pages/Shop";
import MyShop from "./Pages/MyShop";
import Addhostel from "./Pages/Addhostel";
import Myhostel from "./Pages/Myhostel";
import Aprovel from "./Pages/Aprovel";
import Aprovelshop from "./Pages/Aprovelshop";
import Aprovelshopdata from "./Pages/Aprovelshopdata";
import Aprovelhostel from "./Pages/Aprovelhostel";
import Landing from "./Pages/Landing";

function App() {
  const { setUser, setIsAuthenticated,isAuthenticated, setLoading } = useContext(Context);
  const bio = () => {
    axios
      .get(`${server}/user/check`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        if (!res.data.user._id) {
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
        }
      })
      .catch((error) => {
        setUser({});
        setIsAuthenticated(false);
      });
  };
  useEffect(() => {
    bio();
  
  }, [isAuthenticated]);

  window.ResizeObserver = undefined;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/header" element={<Header />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/addroom" element={<Addroom />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/boys" element={<Boys />} />
        <Route path="/girls" element={<Girls />} />
    
    
        <Route path="/myroom" element={<Myroom />} />
        <Route path="/header" element={<Header />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/couple" element={<Couple />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/addshop" element={<Addshop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/myshop" element={<MyShop />} />
        <Route path="/addhostel" element={<Addhostel />} />
        <Route path="/myhostel" element={<Myhostel />} />
        <Route path="/admin/room-aprovel" element={<Aprovel />} />
        <Route path="/admin/shop-aprovel" element={<Aprovelshop />} />
        <Route path="/admin/hostel-aprovel" element={<Aprovelhostel />} />
        <Route path="/pg/:id" element={<PG />} />
        <Route path="/hostel/:id" element={<Hostel />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
