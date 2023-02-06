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
              blogger. He possesses six years of experience as a software developer, spanning both medical communications and telecommunications. He has worked heavily in JavaScript and TypeScript, utilizing his skills to work on a range of static websites, touchscreen kiosks, progressive web applications, and software-as-a-service (Saas) products. He is currently seeking work, and is open to opportunities. In his spare time, he enjoys writing music.
            </p>
          </div>
        </Box>
      </Container>
    </>
  );
}
