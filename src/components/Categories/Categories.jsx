import { Container, Grid, Image, Text, Title } from "@mantine/core";
import "./Categories.css";
import { SpotifyLogin } from "../SpotifyLogin/SpotifyLogin";
import { SpotifyPlalists } from "../SpotifyPlaylists/SpotifyPlaylists";
import { useEffect, useState } from "react";
import { useSpotifyStore } from "../../store/spotifyStore";
import { getSpotifyEpisodes } from "../../services/services";
import { PropTypes } from "prop-types";

const PRIMARY_COL_HEIGHT = "600px";

export function Categories() {
  const spotifyStore = useSpotifyStore();
  const [episodes, setEpisodes] = useState(null);

  useEffect(() => {
    const token = spotifyStore.spotifyToken;
    if (token) {
      fetchSpotifyEpisodes(token);
    }
  }, [spotifyStore.spotifyToken]);

  async function fetchSpotifyEpisodes(token) {
    try {
      const e = await getSpotifyEpisodes(token);
      setEpisodes(e);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="Categories" id="Listen%20Now">
        {/* <Title mb={50} fz={'3rem'} ta={'center'} fs={'italic'}>Categories</Title> */}
        <SpotifyLogin />
        <SpotifyPlalists />
        <Container my="md">
          <Grid>
            {episodes && spotifyStore.spotifyUser ? 
              episodes.map((episode) => (
                <EpisodeCard episode={episode} key={episode.id} />
              )) : <div></div>}
          </Grid>
        </Container>
      </div>
    </>
  );
}

function EpisodeCard({ episode }) {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - 2rem / 2)`;
  return (
    <Grid.Col sm={6} md={4}>
      <a
        href={episode.external_urls.spotify}
        style={{ textDecoration: "none" }}
        target="_blank"
        rel="noreferrer"
      >
        <div height={SECONDARY_COL_HEIGHT} className="category">
          <Image radius={"lg"} src={episode.images[1].url} alt="" />
          <Container mt={10}>
            <Title order={3}>{episode.name}</Title>
            <Text fs={"italic"} fz={"sm"} fw={100}>
              {episode.release_date}
            </Text>
            <Text ta={"justify"} fz={"sm"}>
              {episode.description}
            </Text>
          </Container>
        </div>
      </a>
    </Grid.Col>
  );
}

EpisodeCard.propTypes = {
  episode: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    release_date: PropTypes.string,
    external_urls: PropTypes.shape({
      spotify: PropTypes.string,
    }),
    images: PropTypes.array,
  }),
};
