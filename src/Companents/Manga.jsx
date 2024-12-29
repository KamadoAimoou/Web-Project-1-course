import React, { useState, useEffect } from "react";
import axios from "axios";
import './Manga.css';

function Manga({ searchQuery, favorites, setFavorites }) {
    const [mangaList, setMangaList] = useState([]);
    const [filteredManga, setFilteredManga] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMangaData = async () => {
            try {
                const response = await axios.get("https://api.jikan.moe/v4/top/manga");
                setMangaList(response.data.data); 
                setFilteredManga(response.data.data); 
                setLoading(false);
            } catch (err) {
                console.error("Ошибка при загрузке данных:", err);
                setError("Не удалось загрузить данные.");
                setLoading(false);
            }
        };

        fetchMangaData();
    }, []); 

    useEffect(() => {
        const filtered = mangaList.filter((manga) =>
            manga.title && manga.title.toLowerCase().startsWith(searchQuery.toLowerCase()) 
        );
        setFilteredManga(filtered); 
    }, [searchQuery, mangaList]);

    // Функция для добавления манги в избранное
    const addToFavorites = (manga) => {
        if (!favorites.find((item) => item.mal_id === manga.mal_id)) {
            setFavorites((prevFavorites) => [...prevFavorites, manga]);
        }
    };

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="manga-page">
            <img
                src="https://avatars.mds.yandex.net/i?id=2fe04bc21230271a0555754725a98a2c_l-6467253-images-thumbs&n=13"
                alt="Персонаж берсерк"
                className="img-main"
            />

            <div className="manga-cards">
                {filteredManga.map((manga) => (
                    <div className="manga-card" key={manga.mal_id}>
                        <img
                            src={manga.images.jpg.image_url}
                            alt={manga.title}
                            className="manga-image"
                        />
                        <div className="manga-info">
                            <h2 className="manga-title">{manga.title}</h2>
                            <p className="manga-chapters">
                                Главы: {manga.chapters || "N/A"}
                            </p>
                            <p className="manga-score">Рейтинг: {manga.score || "N/A"}</p>
                            <button className="button-manga" onClick={() => addToFavorites(manga)}>Добавить в избранное</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Manga;
