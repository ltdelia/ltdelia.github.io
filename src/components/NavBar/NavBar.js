import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Link } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


export default function NavBar() {
  return (
    <Box className="navbar" sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Louis T. Delia
          </Typography>
          <Box sx={{ margin: 1 }}>
            <Link href="#about-me" color="inherit" underline="hover">
              About Me
            </Link>
          </Box>
          <Box sx={{ margin: 1 }}>
            <Link href="#skills" color="inherit" underline="hover">
              Skills
            </Link>
          </Box>
          <Box sx={{ margin: 1 }}>
            <Link href="#work" color="inherit" underline="hover">
              Work
            </Link>
          </Box>
          <Box sx={{ margin: 1 }}>
            <Link href="#other" color="inherit" underline="hover">
              Other
            </Link>
          </Box>
          <Box sx={{ margin: 1 }}>
            <Typography>|</Typography>
          </Box>
          <Box sx={{ margin: 1 }}>
            <a href="https://github.com/ltdelia" target="_blank">
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
            <a href="https://www.linkedin.com/in/ltdelia" target="_blank">
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
