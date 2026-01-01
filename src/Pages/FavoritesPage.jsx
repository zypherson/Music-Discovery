import { useState } from "react";
import { getFavorites } from "../utils/favorites";
import { Link } from "react-router-dom";

function FavoritesPage() {
    
  
    // eslint-disable-next-line no-unused-vars
    const [favorites, setFavorites] = useState(() => getFavorites());
  
    if (favorites.length === 0) {
      return <p>No favorite artists yet.</p>;
    }
    return (
        <div>
          <h1>Your Favorites</h1>
    
          <div className="artist-grid">
            {favorites.map((artist) => (
              <Link key={artist.id} to={`/artist/${artist.id}`}>
                <div className="artist-card">
                  <img src={artist.image} alt={artist.name} />
                  <h3>{artist.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      );
    }
    
    export default FavoritesPage;
    