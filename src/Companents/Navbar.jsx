// import React from 'react';

// import './Navbar.css';
// import { Link } from "react-router-dom";

// function Navbar({ searchQuery, setSearchQuery }) { 
//     const handleSearchChange = (e) => {
//         setSearchQuery(e.target.value); 
//     };


//     return (
//         <nav className="navbar">
//             <div className="container">
//                 <div className="logo-wrapper">
//                     <img 
//                         className="logo" 
//                         src="https://i.pinimg.com/736x/18/27/b7/1827b758632f9add17f911eaa7ea13e4.jpg" 
//                         alt="Studio-Chibi Logo" 
//                     />
//                     <span className="logo-text">Studio-Chibi</span>
//                 </div>
//                 <ul className="nav-links">
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/Anime">Anime</Link></li>
//                     <li><Link to="/Manga">Manga</Link></li>
//                     <li><Link to="/Favorites" >Favorites</Link></li>
//                     {/* <li><Link to="/Register">Register</Link></li>
//                     <li>
//                         <Link to="/Login" > Login</Link>
//                     </li> 
//                    */}
//                    {!token ? (
//                     <>
//                     <Link to="/Register">регистраций</Link>
//                     <Link to="/Login"></Link></>
//                    ) : (
//                     <button onClick={handleLogout}>Выйти</button>
//                    )

//                    )}
//                 </ul>
//                 <div className="search-container">
//                     <input 
//                         type="text" 
//                         placeholder="Search Anime..." 
//                         value={searchQuery} 
//                         onChange={handleSearchChange} 
//                         className="search-input"
//                     />
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;







import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar({ searchQuery, setSearchQuery }) {
    const [token, setToken] = useState(null); // Состояние для токена

    useEffect(() => {
        // Получаем токен из localStorage при монтировании компонента
        const storedToken = localStorage.getItem('token');
        setToken(storedToken); // Сохраняем токен, если он есть
    }, []);

    const handleLogout = () => {
        // Удаляем токен при выходе
        localStorage.removeItem('token');
        setToken(null); // Обновляем состояние
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value); // Обновляем строку поиска
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
                    <li><Link to="/Favorites">Favorites</Link></li>

                    {/* Условный рендеринг для отображения кнопок регистрации/входа или выхода */}
                    {!token ? (
                        <>
                            <li><Link to="/Register">Register</Link></li>
                            <li><Link to="/Login">Login</Link></li>
                        </>
                    ) : (
                        <li><button onClick={handleLogout}>Logout</button></li>
                    )}
                </ul>

                {/* Компонент поиска */}
                {token && (
                    <div className="search-container">
                        <input 
                            type="text" 
                            placeholder="Search Anime..." 
                            value={searchQuery} 
                            onChange={handleSearchChange} 
                            className="search-input"
                        />
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
