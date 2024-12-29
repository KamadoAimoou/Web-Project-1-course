
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import './Anime.css';




// function Anime({ searchQuery }) { 
//     const [animeList, setAnimeList] = useState([]);
//     const [filteredAnime, setFilteredAnime] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
   

//     useEffect(() => {
//         const fetchAnime = async () => {
//             try {
//                 const response = await axios.get('https://api.jikan.moe/v4/top/anime');
//                 setAnimeList(response.data.data);
//                 setLoading(false);
//             } catch (err) {
//                 console.error("Ошибка при загрузке данных:", err);
//                 setError("Не удалось загрузить данные.");
//                 setLoading(false);
//             }
//         };

//         fetchAnime();
//     }, []);
//     // const filteredAnime = searchQuery
//     // ? animeList.filter((anime) =>
//     //     anime.title[0]?.toLowerCase() === searchQuery.toLowerCase() 
//     // )
//     // : animeList; 

//     // const filteredAnime = searchQuery
//     // ? animeList.filter((anime) =>
//     //     anime.title.toLowerCase().includes(searchQuery.toLowerCase())
//     // )
//     // : animeList;

//     // useEffect(() =>  {
//     //     const filtered = animeList.filter((anime) =>
//     //         anime.title && anime.title.toLowerCase().startsWith(searchQuery.toLowerCase())
//     //  );
//     //  setFilteredAnime(filtered);
//     // }, [searchQuery,animeList]);

// useEffect(() => {
//     const filtered = animeList.filter((anime) =>
//         anime.title && anime.title.toLowerCase().startsWith(searchQuery.toLowerCase())
//     );
//     setFilteredAnime(filtered); 
// }, [searchQuery, animeList]);

//     if (loading) return <p>Загрузка...</p>;
//     if (error) return <p>{error}</p>;

//     return (
//         <div className="Animepage">
//             <img 
//                 src="https://i.pinimg.com/1200x/75/cf/03/75cf0347bdd0766dd9e7316256dd4e84.jpg" 
//                 alt="Персонаж берсерк" 
//                 className="img-main"
//             />
//             <div className="anime-cards">
//                 {filteredAnime.map((anime) => (
//                     <div className="anime-card" key={anime.mal_id}>
//                         <img 
//                             src={anime.images.jpg.image_url} 
//                             alt={anime.title} 
//                             className="anime-image" 
//                         />
//                         <div className="anime-info">
//                             <h2 className="anime-title">{anime.title}</h2>
//                             <p className="anime-release-date">Релиз: {anime.aired.string}</p>
//                             <p className="anime-review">Рейтинг: {anime.score}</p>
                            
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Anime;



import React, { useEffect, useState } from "react";
import axios from "axios";
import './Anime.css';

function Anime({ searchQuery, setFavorites, favorites }) { 
    const [animeList, setAnimeList] = useState([]);
    const [filteredAnime, setFilteredAnime] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAnime = async () => {
            try {
                const response = await axios.get('https://api.jikan.moe/v4/top/anime');
                setAnimeList(response.data.data);
                setLoading(false);
            } catch (err) {
                console.error("Ошибка при загрузке данных:", err);
                setError("Не удалось загрузить данные.");
                setLoading(false);
            }
        };

        fetchAnime();
    }, []);

    useEffect(() => {
        const filtered = animeList.filter((anime) =>
            anime.title && anime.title.toLowerCase().startsWith(searchQuery.toLowerCase())
        );
        setFilteredAnime(filtered); 
    }, [searchQuery, animeList]);

    const addToFavorites = (anime) => {
        if (!favorites.find((item) => item.mal_id === anime.mal_id)) {
            setFavorites((prev) => [...prev, anime]);
        }
    };

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="Animepage">
            <img 
                src="https://i.pinimg.com/1200x/75/cf/03/75cf0347bdd0766dd9e7316256dd4e84.jpg" 
                alt="Персонаж берсерк" 
                className="img-main"
            />
            <div className="anime-cards">
                {filteredAnime.map((anime) => (
                    <div className="anime-card" key={anime.mal_id}>
                        <img 
                            src={anime.images.jpg.image_url} 
                            alt={anime.title} 
                            className="anime-image" 
                        />
                        <div className="anime-info">
                            <h2 className="anime-title">{anime.title}</h2>
                            <p className="anime-release-date">Релиз: {anime.aired.string}</p>
                            <p className="anime-review">Рейтинг: {anime.score}</p>
                            <button className="button-anime" onClick={() => addToFavorites(anime)}>Добавить в избранное</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Anime;
