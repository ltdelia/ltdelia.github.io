import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Container from "@mui/material/Container";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import HeadphonesIcon from "@mui/icons-material/Headphones";

export default function Other() {
  return (
    <>
      <Container fixed>
        <Box>
          <div id="other">
            <h2>Other Work</h2>
            <p className="other-work-description">
              Outside of web development, here's where else you can find me:
            </p>
            <ButtonGroup
              className="other-work-group"
              size="large"
              aria-label="large button group other work"
            >
              <a
                className="other-work-group-link"
                href="https://ltdelia.bandcamp.com/"
                target="_blank"
              >
                <Button startIcon={<MusicNoteIcon />}>Bandcamp</Button>
              </a>
              <a
                className="other-work-group-link"
                href="https://soundcloud.com/ltdelia"
                target="_blank"
              >
                <Button startIcon={<GraphicEqIcon />}>SoundCloud</Button>
              </a>
              <a
                className="other-work-group-link"
                href="https://open.spotify.com/artist/5k1hEVXOmzLKwlicvbMwPN?si=5gAoM7fqSLi6QmlsXKgmXA"
                target="_blank"
              >
                <Button startIcon={<HeadphonesIcon />}>Spotify</Button>
              </a>
            </ButtonGroup>
          </div>
        </Box>
      </Container>
    </>
  );
}
