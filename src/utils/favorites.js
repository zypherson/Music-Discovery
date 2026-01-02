const STORAGE_KEY = "favorite_artists";

export function getFavorites() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function isFavorite(id) {
  return getFavorites().some((artist) => artist.id === id);
}
function notifyFavoritesChange() {
    window.dispatchEvent(new Event("favoritesUpdated"));
  }
  

  export function addFavorite(artist) {
    const favorites = getFavorites();
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([...favorites, artist])
    );
    notifyFavoritesChange();
  }

  export function removeFavorite(id) {
    const favorites = getFavorites().filter((a) => a.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    notifyFavoritesChange();
  }
export function getFavoritesCount() {
    return getFavorites().length;
  }
  