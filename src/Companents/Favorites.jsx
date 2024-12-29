import React, { useState } from 'react';
import "./Favorites.css";

function Favorites({ favorites: initialFavorites }) {
    const [favorites, setFavorites] = useState(initialFavorites);

    const handleDelete = (id) => {
        setFavorites(favorites.filter((favorite) => favorite.mal_id !== id));
    };

    return (
        <div className="favorites-page">
            <h1>Test of Project</h1>
            <div className="favorites-cards">
                {favorites.length === 0 ? (
                    <p>Ваше избранное пусто.</p>
                ) : (
                    favorites.map((favorite) => (
                        <div className="favorite-card" key={favorite.mal_id}>
                            <img
                                src={favorite.images.jpg.image_url}
                                alt={favorite.title}
                                className="favorite-image"
                            />
                            <div className="favorite-info">
                                <h2>{favorite.title}</h2>
                                <p>Рейтинг: {favorite.score || "N/A"}</p>
                            </div>
                            <button
                                className="button-home"
                                onClick={() => handleDelete(favorite.mal_id)}
                            >
                                Удалить
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Favorites;
