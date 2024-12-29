// import Navbar from './Companents/Navbar';
// import './App.css';
// import {Routes, Route} from "react-router-dom";
// import Home from './Companents/Home';
// import Anime from './Companents/Anime';
// import Manga from './Companents/Manga';
// import Manhwa from './Companents/Manhwa';
// import Footer from './Companents/Footer';
// import { useState } from 'react';
// import Favorites from './Companents/Favorites';



// function App() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [favorites, setFavorites] = useState([]); // Состояние для избранного


//   return (
//     <div className="App">
//       <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Anime" element={<Anime searchQuery={searchQuery} />} />
//         <Route path="/Manga" element={<Manga searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} /> 
//         <Route path="/Manhwa" element={<Manhwa />} />
//         <Route path="/Favorites" element={<Favorites favorites={favorites} />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }
// export default App;

// const array1 = ["'Something coming soon but you don't no what is that and everymoment you will think about this current time maybe or no"]

// // function double(x){
// //   return x*2;
// // }

// const arrayTest = array1.map(function(num) {
//   return array1
// } );

// console.log(arrayTest)
import Navbar from './Companents/Navbar';

import { Routes, Route } from "react-router-dom";
import Home from './Companents/Home';
import Anime from './Companents/Anime';
import Manga from './Companents/Manga';
import Manhwa from './Companents/Manhwa';
import Footer from './Companents/Footer';
import { useState } from 'react';
import Favorites from './Companents/Favorites';

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
          path="/Manhwa" 
          element={<Manhwa favorites={favorites} setFavorites={setFavorites} />} 
        />
        <Route path="/Favorites" element={<Favorites favorites={favorites} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
