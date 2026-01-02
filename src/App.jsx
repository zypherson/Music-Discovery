/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import SearchBar from "./Components/searchbar";
import ArtistCard from "./Components/ArtistCard";
import { getAccessToken, searchArtists } from "./services/spotify";
import "./App.css";
import { getFavoritesCount } from "./utils/favorites";
function App() {
  //app is running smoothly as expected 
  const [token, setToken] = useState(null);
  const [artists, setArtists] = useState([]);
  const [favCount, setFavCount] = useState(() => getFavoritesCount());
  useEffect(() => {
    async function fetchToken() {
      const t = await getAccessToken();
      setToken(t);
    }
    fetchToken();
    function handleFavoritesUpdate() {
      setFavCount(getFavoritesCount());
    }
  
    window.addEventListener("favoritesUpdated", handleFavoritesUpdate);
  
    return () => {
      window.removeEventListener("favoritesUpdated", handleFavoritesUpdate);
    };
  }, []);

  async function handleSearch(query) {
    if (!token) return;
    const results = await searchArtists(query, token);
    setArtists(results);
  }

  return (
    <div>
      <h1>🎵 Music Discovery App</h1>

      <SearchBar onSearch={handleSearch} />

      <div className="artist-grid">
        {artists.map((a) => (
          <ArtistCard key={a.id} artist={a} />
        ))}
      </div>
    </div>
  );
}

export default App;
