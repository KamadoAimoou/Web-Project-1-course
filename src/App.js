
import Navbar from './Companents/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Companents/Home';
import Anime from './Companents/Anime';
import Manga from './Companents/Manga';
import Register from './Companents/Register';
import Footer from './Companents/Footer';
import { useState } from 'react';
import Favorites from './Companents/Favorites';
import Login from './Companents/Login';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState([]); // Состояние для избранного

  return (
    <div className="App">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <Routes>
        <Route 
          path="/" 
          element={<Home searchQuery={searchQuery} favorites={favorites} setFavorites={setFavorites} />} 
        />
        <Route 
          path="/Anime" 
          element={<Anime searchQuery={searchQuery} favorites={favorites} setFavorites={setFavorites} />} 
        />
        <Route 
          path="/Manga" 
          element={<Manga searchQuery={searchQuery} favorites={favorites} setFavorites={setFavorites} />} 
        />
        <Route 
          path="/Register" 
          element={<Register favorites={favorites} setFavorites={setFavorites} />} 
        />
        <Route path='/Login' element={<Login />} />
        <Route path="/Favorites" element={<Favorites favorites={favorites} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
