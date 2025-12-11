import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAccessToken } from "../services/spotify";

function ArtistPage() {
  const { id } = useParams(); // artist id from URL
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState(null);
  const [artist, setArtist] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function loadArtist() {
      const t = await getAccessToken();
      setToken(t);

      // Fetch Artist Info
      const resArtist = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
        headers: { Authorization: `Bearer ${t}` },
      });
      const artistData = await resArtist.json();
      setArtist(artistData);

      // Top Tracks
      const resTracks = await fetch(
        `https://api.spotify.com/v1/artists/${id}/top-tracks?market=US`,
        {
          headers: { Authorization: `Bearer ${t}` },
        }
      );
      const tracksData = await resTracks.json();
      setTracks(tracksData.tracks || []);

      // Albums
      const resAlbums = await fetch(
        `https://api.spotify.com/v1/artists/${id}/albums?include_groups=album&market=US&limit=10`,
        {
          headers: { Authorization: `Bearer ${t}` },
        }
      );
      const albumsData = await resAlbums.json();
      setAlbums(albumsData.items || []);
    }

    loadArtist();
  }, [id]);

  if (!artist) return <p>Loading artist...</p>;

  return (
    <div className="artist-page">
      <h1>{artist.name}</h1>

      <img
        src={artist.images?.[0]?.url}
        alt={artist.name}
        style={{ width: "300px", borderRadius: "10px" }}
      />

      <h2>Top Tracks</h2>
      <ul>
        {tracks.map((t) => (
          <li key={t.id}>
            {t.name}
            {t.preview_url && (
              <audio controls src={t.preview_url} style={{ marginLeft: "10px" }} />
            )}
          </li>
        ))}
      </ul>

      <h2>Albums</h2>
      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {albums.map((a) => (
          <div key={a.id}>
            <img
              src={a.images?.[0]?.url}
              alt={a.name}
              style={{ width: "150px", borderRadius: "8px" }}
            />
            <p>{a.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtistPage;
