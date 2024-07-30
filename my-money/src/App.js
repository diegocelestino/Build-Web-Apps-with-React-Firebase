import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext.js";

import Home from "./pages/home/Home.js";
import Login from "./pages/login/Login.js";
import SignUp from "./pages/signup/SignUp";
import Navbar from "./components/Navbar.js";

import "./App.css";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to="/login" />}></Route>
            <Route path="login" element={!user ? <Login /> : <Navigate to="/" />}></Route>
            <Route path="signup" element={!user ? <SignUp /> : <Navigate to="/" />}></Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
