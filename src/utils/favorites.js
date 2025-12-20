const STORAGE_KEY = "favorite_artists";

export function getFavorites() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function isFavorite(id) {
  return getFavorites().some((artist) => artist.id === id);
}

export function addFavorite(artist) {
  const favorites = getFavorites();
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([...favorites, artist])
  );
}

export function removeFavorite(id) {
  const favorites = getFavorites().filter((a) => a.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}
