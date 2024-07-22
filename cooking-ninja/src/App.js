import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './pages/home/Home'
import Search from './pages/search/Search'
import Create from './pages/create/Create'
import Recipe from './pages/recipe/Recipe'
import ThemeSelector from './components/ThemeSelector';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/create" element={<Create />} />
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
