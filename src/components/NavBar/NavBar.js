import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function NavBar() {
  const pages = [
    {
      title: "About Me",
      href: "#about-me",
    },
    {
      title: "Skills",
      href: "#skills",
    },
    {
      title: "Work",
      href: "#work",
    },
    {
      title: "Other",
      href: "#other",
    },
  ];

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  let scrollTimeout;
  /* eslint-disable-next-line no-restricted-globals */
  addEventListener("scroll", function (e) {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function () {
      if (Boolean(anchorElNav)) handleCloseNavMenu();
    }, 100);
  });

  const onClick = (e) => {
    e.preventDefault();
    const target = e.currentTarget.href
      ? window.document.getElementById(e.currentTarget.href.split("#")[1])
      : window.document.getElementById(
          e.currentTarget.querySelector("a").href.split("#")[1]
        );
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box className="navbar" sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu for website"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.title}
                  className="navbar-scrollspy-link"
                  onClick={(e) => onClick(e)}
                >
                  <a className="navbar-scrollspy-link-mobile" href={page.href}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            component="div"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            Louis T. Delia
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              justifyContent: "flex-start",
            }}
          >
            Louis T. Delia
          </Typography>
          <Box sx={{ margin: 1, display: { xs: "none", md: "block" } }}>
            <a
              className="navbar-scrollspy-link"
              onClick={(e) => onClick(e)}
              href="#about-me"
            >
              <div className="navbar-scrollspy" data-to-scrollspy-id="about-me">
                About Me
              </div>
            </a>
          </Box>
          <Box sx={{ margin: 1, display: { xs: "none", md: "block" } }}>
            <a
              className="navbar-scrollspy-link"
              onClick={(e) => onClick(e)}
              href="#skills"
            >
              <div className="navbar-scrollspy" data-to-scrollspy-id="skills">
                Skills
              </div>
            </a>
          </Box>
          <Box sx={{ margin: 1, display: { xs: "none", md: "block" } }}>
            <a
              className="navbar-scrollspy-link"
              onClick={(e) => onClick(e)}
              href="#work"
            >
              <div className="navbar-scrollspy" data-to-scrollspy-id="work">
                Work
              </div>
            </a>
          </Box>
          <Box sx={{ margin: 1, display: { xs: "none", md: "block" } }}>
            <a
              className="navbar-scrollspy-link"
              onClick={(e) => onClick(e)}
              href="#other"
            >
              <div className="navbar-scrollspy" data-to-scrollspy-id="other">
                Other
              </div>
            </a>
          </Box>
          <Box
            sx={{
              margin: 1,
              display: { xs: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <Typography>|</Typography>
          </Box>
          <Box
            sx={{
              margin: 1,
              display: { xs: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <a
              href="https://github.com/ltdelia"
              target="_blank"
              rel="noreferrer"
            >
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
          <Box
            sx={{
              margin: 1,
              display: { xs: "flex" },
              justifyContent: "flex-end",
            }}
          >
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
          <Box
            sx={{
              margin: 1,
              display: { xs: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <a
              href="https://www.linkedin.com/in/ltdelia"
              target="_blank"
              rel="noreferrer"
            >
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
