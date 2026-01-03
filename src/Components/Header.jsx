import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFavoritesCount } from "../utils/favorites";

function Header() {
  const [favCount, setFavCount] = useState(() => getFavoritesCount());

  useEffect(() => {
    function handleFavoritesUpdate() {
      setFavCount(getFavoritesCount());
    }

    window.addEventListener("favoritesUpdated", handleFavoritesUpdate);

    return () => {
      window.removeEventListener("favoritesUpdated", handleFavoritesUpdate);
    };
  }, []);

  return (
    <header className="header">
      <h2 className="logo">Music Discovery</h2>

      <Link to="/favorites" className="favorites-link">
        Favorites
        {favCount > 0 && <span className="badge">{favCount}</span>}
      </Link>
    </header>
  );
}

export default Header;
