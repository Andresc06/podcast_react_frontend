import axios from 'axios'

const SPOTIFY_API_BASE_URL = 'https://api.spotify.com';

async function registerUser(form) {
    const API_URL = import.meta.env.VITE_BACKEND_URL;
    try {
        const request_url = new URL(`${API_URL}/create_user?name=${form.name}&email=${form.email}&phone=${form.phone}${form.description ? `&description=${form.description}` : ''}`);
        const response = await axios.post(request_url.href);
        return response;
    } catch (error) {
        console.log(error)
    }
}

async function getSpotifyEpisodes(token) {
    const spotifyShowId = import.meta.env.VITE_SPOTIFY_SHOW_ID;
    try {
        const headers = { Authorization: `Bearer ${token}` }
        const spotifyEndpoint = `${SPOTIFY_API_BASE_URL}/v1/shows/${spotifyShowId}/episodes`;
        const response = await axios.get(spotifyEndpoint, { headers })
        if(response.status === 200) {
            return response.data.items;
        } else {
            throw new Error("Error fetching spotify api")
        }
    } catch (error) {
        console.log(error)
    }
}

async function getSpotifyUser(token) {
    try {
        const headers = { Authorization: `Bearer ${token}` }
        const spotifyEndpoint = `${SPOTIFY_API_BASE_URL}/v1/me`;
        const response = await axios.get(spotifyEndpoint, { headers })
        if (response.status === 200) {
            return response.data
        }
        return null
    } catch (error) {
        console.log(error)
    }
}

export { registerUser, getSpotifyUser, getSpotifyEpisodes }
