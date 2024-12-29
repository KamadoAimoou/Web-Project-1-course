import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Manhwa.css";

function Manhwa({ favorites, setFavorites }) {
    const [manhwaList, setManhwaList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchManhwa = async () => {
            try {
                const response = await axios.get('https://api.jikan.moe/v4/manga?type=manhwa');
                setManhwaList(response.data.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError("Не удалось загрузить манхву.");
                setLoading(false);
            }
        };
        fetchManhwa();
    }, []);

    // Функция для добавленя манхвы в избранное
    const addToFavorites = (manhwa) => {
        if (!favorites.find((item) => item.mal_id === manhwa.mal_id)) {
            setFavorites((prevFavorites) => [...prevFavorites, manhwa]);
        }
    };

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <img
                src="https://www.kino-teatr.ru/news/17376/155975.jpg"
                alt="big of movie"
                className="manhwa-photo"
            />
            <h1 className="h1-manhwa">Популярные Манхвы</h1>
            <div className="manhwa-cards">
                {manhwaList.map((manhwa) => (
                    <div key={manhwa.mal_id} className="manhwa-card">
                        <img
                            src={manhwa.images.jpg.image_url}
                            alt={manhwa.title}
                            className="manhwa-image"
                        />
                        <h2 className="manhwa-title">{manhwa.title}</h2>
                        <button className="button-manhwa" onClick={() => addToFavorites(manhwa)}>
                            Добавить в избранное
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Manhwa;
