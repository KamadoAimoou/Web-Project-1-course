import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

function Home({ favorites, setFavorites }) {
    const [movielist, setMovielist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHome = async () => {
            try {
                const response = await axios.get("https://api.jikan.moe/v4/top/anime?type=movie");
                setMovielist(response.data.data.slice(0, 6)); // Берем первые 6 фильмов
                setLoading(false);
            } catch (err) {
                console.error("Ошибка при загрузке", err);
                setError("Не удалось подключить ");
                setLoading(false);
            }
        };
        fetchHome();
    }, []);

    // Функция для добавления фильма в избранное
    const addToFavorites = (movie) => {
        if (!favorites.find((item) => item.mal_id === movie.mal_id)) {
            setFavorites((prevFavorites) => [...prevFavorites, movie]);
        }
    };

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="main-of-page">
            <img
                src="https://www.kino-teatr.ru/news/17376/155975.jpg"
                alt="big of movie"
                className="movie-photo"
            />
            <h1 className="h1-movie">Популярные аниме-фильмы</h1>
            <div className="movies-cards">
                {movielist.map((movie) => (
                    <div key={movie.mal_id} className="movie-card">
                        <div className="movie-info">
                            <img
                                src={movie.images.jpg.image_url}
                                alt={movie.title}
                                className="movie-image"
                            />
                            <h2 className="movie-title">{movie.title}</h2>
                            <h2 className="movie-release-date">Дата выхода: {movie.aired.string}</h2>
                            <p className="movie-scale">Рейтинг: {movie.score}</p>
                            <button className="button-home" onClick={() => addToFavorites(movie)}>
                                Добавить в избранное
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./Home.css";

// function Home() {
//     const [movielist, setMovielist] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchHome = async () => {
//             try {
//                 const response = await axios.get("https://api.jikan.moe/v4/top/anime?type=movie");
//                 setMovielist(response.data.data.slice(0, 6)); // Ограничиваем до 6 фильмов
//                 setLoading(false);
//             } catch (err) {
//                 console.error("Ошибка при загрузке", err);
//                 setError("Не удалось подключить");
//                 setLoading(false);
//             }
//         };
//         fetchHome();
//     }, []);


//     if (loading) return <p>Загрузка...</p>;
//     if (error) return <p>{error}</p>;

//     return (
//         <div className="main-of-page">
//             <img 
//                 src="https://www.kino-teatr.ru/news/17376/155975.jpg" 
//                 alt="big of movie" 
//                 className="movie-photo"
//             />
//             <h1 className="h1-movie">Популярные аниме-фильмы</h1>

            
//             <div className="movies-cards">
//                 {filteredMovies.map((movie) => (
//                     <div key={movie.mal_id} className="movie-card">
//                         <div className="movie-info">
//                             <img src={movie.images.jpg.image_url} alt={movie.title} className="movie-image" />
//                             <h2 className="movie-title">{movie.title}</h2>
//                             <h2 className="movie-release-date">Дата выхода: {movie.aired.string}</h2>
//                             <p className="movie-scale">Рейтинг: {movie.score}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Home;

// import React from 'react';
// import './Favorites.css'; // Импорт вашего CSS файла для стилей
// import './Home.css'; // Импорт CSS файла для стилей Home, если это необходимо

// function Favorites({ favorites, removeFromFavorites }) {
//   // Проверка, что favorites - это массив
//   if (!Array.isArray(favorites)) {
//       return <p>Нет избранных аниме.</p>;
//   }

//   return (
//     <div className="favorites-page">
//       <h1>Избранное</h1>
//       <div className="favorites-list">
//         {favorites.length === 0 ? (
//             <p>У вас нет избранных аниме.</p>
//         ) : (
//             favorites.map((anime) => (
//               <div className="favorite-item" key={anime.mal_id}>
//                 {anime.images?.jpg?.image_url ? (
//                     <img src={anime.images.jpg.image_url} alt={anime.title} />
//                 ) : (
//                     <img src="path/to/default/image.jpg" alt="Изображение недоступно" />
//                 )}
//                 <div>
//                   <h3>{anime.title}</h3>
//                   <button onClick={() => removeFromFavorites(anime)}>Удалить</button>
//                 </div>
//               </div>
//             ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default Favorites;

