import { Button, Center, Container, Title } from "@mantine/core";
import { useEffect } from "react";
import { IconBrandSpotify } from "@tabler/icons-react";
import { getReturnedParamsFromSpotifyAuth, getSpotifyLoginUrl } from "../../utils/utils";
import { useSpotifyStore } from "../../store/spotifyStore";
import { useNavigate } from "react-router-dom";

export function SpotifyLogin() {
  const spotifyStore = useSpotifyStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.hash) {
      const hash = getReturnedParamsFromSpotifyAuth(window.location.hash);
      localStorage.clear();
      spotifyStore.setAccessToken(hash.access_token);
      navigate("/");
    }
    spotifyStore.fetchSpotifyUser();
  }, []);

  function handleLogin() {
    window.location = getSpotifyLoginUrl();
  }

  return (
    <>
      <Container my={20}>
        <Center mb={10}>
          {spotifyStore.spotifyToken ? <Title>Podcasts</Title> :
            <Button leftIcon={<IconBrandSpotify />} onClick={handleLogin}>
              Login with spotify
            </Button>
          }
        </Center>
      </Container>
    </>
  );
}
