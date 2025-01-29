import { useContext } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "./state/AuthContext";

function App(){
  const { user } = useContext(AuthContext);
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

fetch(`${API_URL}/api/endpoint`)
  .then((res) => res.json())
  .then((data) => console.log(data));

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register />}/>
        <Route path="/login" element={ user ? <Navigate to="/" /> : <Login />}/>
        <Route path="/profile/:username" element={<Profile />}/>
        <Route path="/register" element={user ? <Register to="/" />: <Register />}/>
      </Routes>
    </Router>
  )
}

export default App;
