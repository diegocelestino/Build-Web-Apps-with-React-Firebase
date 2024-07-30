import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.js'
import Login from './pages/login/Login.js'
import SignUp from './pages/signup/SignUp';
import './App.css';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='signup' element={<SignUp />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
