function getSpotifyLoginUrl() {
    const spotify_client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const spotify_auth_endpoint = 'https://accounts.spotify.com/authorize';
    const redirect_uri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
    const scopes = ['user-read-private', 'user-read-email', 'playlist-modify-public', 'playlist-read-private', 'user-library-read'];
    const scopes_url = scopes.join('%20');

    return `${spotify_auth_endpoint}?client_id=${spotify_client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes_url}`;
}

function getReturnedParamsFromSpotifyAuth(hash) {
    const stringAfterHashtag = hash.substring(1);
    const paramsInUrl = stringAfterHashtag.split("&");
    const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
        const [key, value] = currentValue.split("=");
        accumulater[key] = value;
        return accumulater;
    }, {});
    return paramsSplitUp;
}

export { getSpotifyLoginUrl, getReturnedParamsFromSpotifyAuth }