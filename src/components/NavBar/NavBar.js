import * as React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function NavBar() {
  const onClick = (e) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box className="navbar" sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Louis T. Delia
          </Typography>
          <Box sx={{ margin: 1 }}>
            <a className="navbar-scrollspy-link" onClick={(e) => onClick(e)} href="#about-me">
              <div className="navbar-scrollspy" data-to-scrollspy-id="about-me">
                About Me
              </div>
            </a>
          </Box>
          <Box sx={{ margin: 1 }}>
            <a className="navbar-scrollspy-link" onClick={(e) => onClick(e)} href="#skills">
              <div className="navbar-scrollspy" data-to-scrollspy-id="skills">
                Skills
              </div>
            </a>
          </Box>
          <Box sx={{ margin: 1 }}>
            <a className="navbar-scrollspy-link" onClick={(e) => onClick(e)} href="#work">
              <div className="navbar-scrollspy" data-to-scrollspy-id="work">
                Work
              </div>
            </a>
          </Box>
          <Box sx={{ margin: 1 }}>
            <a className="navbar-scrollspy-link" onClick={(e) => onClick(e)} href="#other">
              <div className="navbar-scrollspy" data-to-scrollspy-id="other">
                Other
              </div>
            </a>
          </Box>
          <Box sx={{ margin: 1 }}>
            <Typography>|</Typography>
          </Box>
          <Box sx={{ margin: 1 }}>
            <a href="https://github.com/ltdelia" target="_blank" rel="noreferrer">
              <IconButton
                className="navbar-icon-button"
                color="inherit"
                aria-label="Github | Louis T. Delia"
                component="label"
              >
                <GitHubIcon />
              </IconButton>
            </a>
          </Box>
          <Box sx={{ margin: 1 }}>
            <a href="mailto:delia.louis@gmail.com">
              <IconButton
                className="navbar-icon-button"
                color="inherit"
                aria-label="Email Louis T. Delia"
                component="label"
              >
                <EmailIcon />
              </IconButton>
            </a>
          </Box>
          <Box sx={{ margin: 1 }}>
            <a href="https://www.linkedin.com/in/ltdelia" target="_blank" rel="noreferrer">
              <IconButton
                className="navbar-icon-button"
                color="inherit"
                aria-label="LinkedIn | Louis T. Delia"
                component="label"
              >
                <LinkedInIcon />
              </IconButton>
            </a>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
