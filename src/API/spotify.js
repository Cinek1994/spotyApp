import axios from 'axios';

const search = "https://api.spotify.com/v1/search";

export function getArtist(token, query) {
    return axios.get(search, { 
        params: { q: query, type: 'artist' },
        headers: {'Authorization': `Bearer ${token}`}
    });
}