import React from "react";
import { Avatar, Box, Container } from "@mui/material";

export default function AboutMe() {
  return (
    <>
      <Container fixed>
        <Box>
          <div className="about-me">
            <h2>About Me</h2>
            <Avatar
              className="about-me-avatar"
              alt="Louis T. Delia"
              src="images/louisdelia.jpg"
              sx={{ width: 250, height: 250, margin: "20px auto" }}
            />
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
