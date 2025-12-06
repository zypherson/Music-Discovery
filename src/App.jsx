import { useState, useEffect } from "react";
import SearchBar from "./Components/searchbar";
import ArtistCard from "./Components/ArtistCard";
import { getAccessToken, searchArtists } from "./services/spotify";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    async function fetchToken() {
      const t = await getAccessToken();
      setToken(t);
    }
    fetchToken();
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
