import React from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function AboutMe() {
  return (
    <>
      <Container fixed>
        <Box>
          <div id="about-me">
            <h2>About Me</h2>
            <Avatar
              className="about-me-avatar"
              alt="Louis T. Delia"
              src="images/louisdelia.jpg"
              sx={{ width: 250, height: 250, margin: "20px auto" }}
            />
            <p className="about-me-description">
              Louis T. Delia (he/they) is a web developer, musician, and
              blogger. He possesses eight years of experience as a software
              developer, spanning education, medical communications and
              telecommunications. He has worked heavily in JavaScript and
              TypeScript, utilizing his skills to work on a range of static
              websites, touchscreen kiosks, progressive web applications, and
              software-as-a-service (Saas) products. In his spare time, he enjoys
              writing music.
            </p>
          </div>
        </Box>
      </Container>
    </>
  );
}
