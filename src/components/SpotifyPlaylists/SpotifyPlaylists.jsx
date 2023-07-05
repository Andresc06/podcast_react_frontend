import { Box, Container } from "@mantine/core";
import { useSpotifyStore } from "../../store/spotifyStore";

const spotifyShowId = import.meta.env.VITE_SPOTIFY_SHOW_ID;

export function SpotifyPlalists() {
    const accessToken = useSpotifyStore((state) => state.spotifyToken);

    return (
        <Container my={40}>
            {accessToken &&
                <div>
                    <Box>
                        <iframe
                            style={{ borderRadius: "12px" }}
                            src={`https://open.spotify.com/embed/show/${spotifyShowId}?utm_source=generator&theme=0`}
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </Box>
                </div>
            }
        </Container >
    );
}