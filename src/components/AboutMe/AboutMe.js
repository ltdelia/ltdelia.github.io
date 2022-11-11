import React from "react";
import { Box, Container } from "@mui/material";

export default function AboutMe() {
  return (
    <>
      <Container fixed>
        <Box>
          <div className="about-me">
            <h2>About Me</h2>
            <p>
              Louis T. Delia (he/they) is a web developer, musician, and
              blogger. He is currently employed in AI at Talkdesk. He also makes
              music and maintains a blog in his spare time.
            </p>
          </div>
        </Box>
      </Container>
    </>
  );
}
