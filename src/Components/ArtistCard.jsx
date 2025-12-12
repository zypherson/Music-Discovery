import { Link } from "react-router-dom";

function ArtistCard({ artist }) {
  const img =
    artist.images && artist.images.length > 0
      ? artist.images[0].url
      : "https://via.placeholder.com/150";

  return (
    <Link to={`/artist/${artist.id}`} className="artist-link">
      <div className="artist-card">
        <img src={img} alt={artist.name} />
        <h3>{artist.name}</h3>
        <p>{artist.followers.total.toLocaleString()} followers</p>
      </div>
    </Link>
  );
}

export default ArtistCard;
