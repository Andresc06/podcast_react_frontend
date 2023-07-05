import { create } from 'zustand'
import { getSpotifyUser } from '../services/services';

const useSpotifyStore = create(() => ({
    spotifyToken: (window.localStorage.getItem('SPOTIFY_ACCESS_TOKEN') || null),
    spotifyUser: null,
    setAccessToken: (token) => {
        useSpotifyStore.setState({ spotifyToken: token });
        window.localStorage.setItem('SPOTIFY_ACCESS_TOKEN', token);
    },
    fetchSpotifyUser: async () => {
        try {
            const user = await getSpotifyUser(useSpotifyStore.getState().spotifyToken);
            if (user === null) {
                useSpotifyStore.setState({ spotifyUser: null, spotifyToken: null });
            }
            useSpotifyStore.setState({ spotifyUser: user });
        } catch (error) {
            console.log(error)
        }
    },
    logoutSpotifyUser: async() => {
        window.localStorage.clear()
        useSpotifyStore.setState({ spotifyToken: null, spotifyUser: null });
    }

}))

export { useSpotifyStore }
