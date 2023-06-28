import axios from 'axios'

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

async function getSpotifyShows(token) {
    try {
        const headers = { Authorization: `Bearer ${token}` }
        const spotifyEndpoint = 'https://api.spotify.com/v1/me/shows';
        const response = await axios.get(spotifyEndpoint, { headers })
        if (response.data.items.length === 0) {
            return null
        }
        const show = response.data.items[0].show;
        return show;
    } catch (error) {
        console.log(error)
    }
}

async function getSpotifyUser(token) {
    try {
        const headers = { Authorization: `Bearer ${token}` }
        const spotifyEndpoint = 'https://api.spotify.com/v1/me';
        const response = await axios.get(spotifyEndpoint, { headers })
        if (response.status === 200) {
            return response.data
        }
        return null
    } catch (error) {
        console.log(error)
    }
}

export { registerUser, getSpotifyShows, getSpotifyUser }
