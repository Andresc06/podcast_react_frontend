import { Box, Button, Center, Container } from "@mantine/core";
import axios from "axios";
import { useState, useEffect } from "react";
import { IconBrandSpotify } from "@tabler/icons-react";
import { useNavigate, useSearchParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export function SpotifyLogin() {
  const [playlist, setPlaylist] = useState("3bMjHfyjwiwNvaE7m4pqsp");
  const [user, setUser] = useState(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate()
  useEffect(() => {
    const token = searchParams.get("t");
    if (token) {
        localStorage.setItem('SPOTIFY_BACKEND_REFRESH_TOKEN', token)
      axios
        .get(API_URL + "/auth/me", {
          headers: {
            Authorization: "Bearer" + token
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setUser(res.data) 
          }
        });
        navigate('/')
    }
  }, []);
  return (
    <>
      <Container my={20}>
        <Center mb={10}>
          <Button leftIcon={<IconBrandSpotify />}>
            <a
              href={API_URL + "/auth"}
              style={{ color: "white", textDecoration: "none" }}
            >
              Login with spotify
            </a>
          </Button>
        </Center>
        {user && (
          <Box>
            <iframe
              style={{ borderRadius: "12px" }}
              src={`https://open.spotify.com/embed/playlist/${playlist}?utm_source=generator&theme=0`}
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </Box>
        )}
      </Container>
    </>
  );
}
