
// // import './Navbar.css';
// // import { Link } from "react-router-dom";



// // function Navbar({ searchQuery, setSearchQuery }) { 
// //     const handleSearchChange = (e) => {
// //         setSearchQuery(e.target.value); 
// //     };

// //     return (
// //         <nav className="navbar">
// //             <div className="container">
// //                 <div className="logo-wrapper">
// //                     <img 
// //                         className="logo" 
// //                         src="https://i.pinimg.com/736x/18/27/b7/1827b758632f9add17f911eaa7ea13e4.jpg" 
// //                         alt="Studio-Chibi Logo" 
// //                     />
// //                     <span className="logo-text">Studio-Chibi</span>
// //                 </div>
// //                 <ul className="nav-links">
// //                     <li><Link to="/">Home</Link></li>
// //                     <li><Link to="/Anime">Anime</Link></li>
// //                     <li><Link to="/Manga">Manga</Link></li>
// //                     <li><Link to="/Manhwa">Manhwa</Link></li>
// //                 </ul>
// //                 <div className="search-container">
// //                     <input 
// //                         type="text" 
// //                         placeholder="Search Anime..." 
// //                         value={searchQuery} 
// //                         onChange={handleSearchChange} 
// //                         className="search-input"
// //                     />
// //                 </div>
// //             </div>
// //         </nav>
// //     );
// // }

// // export default Navbar;





import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar({ searchQuery, setSearchQuery }) { 
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value); 
    };


    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo-wrapper">
                    <img 
                        className="logo" 
                        src="https://i.pinimg.com/736x/18/27/b7/1827b758632f9add17f911eaa7ea13e4.jpg" 
                        alt="Studio-Chibi Logo" 
                    />
                    <span className="logo-text">Studio-Chibi</span>
                </div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Anime">Anime</Link></li>
                    <li><Link to="/Manga">Manga</Link></li>
                    <li><Link to="/Manhwa">Manhwa</Link></li>
                    <li><Link to="/Favorites" >Favorites</Link></li>
                  
                  
                </ul>
                <div className="search-container">
                    <input 
                        type="text" 
                        placeholder="Search Anime..." 
                        value={searchQuery} 
                        onChange={handleSearchChange} 
                        className="search-input"
                    />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;



