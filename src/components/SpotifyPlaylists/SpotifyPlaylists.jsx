import { Box, Center, Container, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { getSpotifyShows } from "../../services/services";
import { useSpotifyStore } from "../../store/spotifyStore";

export function SpotifyPlalists() {
    const [showId, setShowId] = useState(null);
    const accessToken = useSpotifyStore((state) => state.spotifyToken);

    useEffect(() => {
        if (accessToken) {
            getSpotifyShows(accessToken).then((show) => {
                if (show) {
                    setShowId(show.id);
                }
            })
        }
    }, [accessToken]);

    return (
        <Container my={40}>
            {accessToken &&
                <div>
                    {showId ? (
                        <Box>
                            <iframe
                                style={{ borderRadius: "12px" }}
                                src={`https://open.spotify.com/embed/show/${showId}?utm_source=generator&theme=0`}
                                width="100%"
                                height="352"
                                frameBorder="0"
                                allowFullScreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            ></iframe>
                        </Box>

                    ) : <Center><Title order={2}>No posees podcasts</Title></Center>}

                </div>
            }
        </Container >
    );
}