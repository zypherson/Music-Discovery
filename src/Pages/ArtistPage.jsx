/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAccessToken } from "../services/spotify";

function ArtistPage() {
    const { id } = useParams(); // artist id from URL
    const [token, setToken] = useState(null);
    const [artist, setArtist] = useState(null);
    const [tracks, setTracks] = useState([]);
    const [albums, setAlbums] = useState([]);
}