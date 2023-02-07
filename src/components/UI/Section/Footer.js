import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <>
      <Container fixed>
        <Box>
          <div id="footer">
            <div className="footer-controls">
              <a
                href="https://github.com/ltdelia"
                target="_blank"
                rel="noreferrer"
              >
                <IconButton
                  color="primary"
                  aria-label="Github | Louis T. Delia"
                  component="label"
                >
                  <GitHubIcon />
                </IconButton>
              </a>
              <a href="mailto:delia.louis@gmail.com">
                <IconButton
                  color="primary"
                  aria-label="Email Louis T. Delia"
                  component="label"
                >
                  <EmailIcon />
                </IconButton>
              </a>
              <a
                href="https://www.linkedin.com/in/ltdelia"
                target="_blank"
                rel="noreferrer"
              >
                <IconButton
                  color="primary"
                  aria-label="LinkedIn | Louis T. Delia"
                  component="label"
                >
                  <LinkedInIcon />
                </IconButton>
              </a>
            </div>

            <div className="footer-copywright">&copy; 2023 Louis T. Delia</div>
          </div>
        </Box>
      </Container>
    </>
  );
}
