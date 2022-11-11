
import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Link } from '@mui/material';

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
            <Link href="#about-me" color="inherit" underline="hover">About Me</Link>
          </Box>
          <Box sx={{ margin: 1 }}>
            <Link href="#skills" color="inherit" underline="hover">Skills</Link>
          </Box>
          <Box sx={{ margin: 1 }}>
            <Link href="#work" color="inherit" underline="hover">Work</Link>
          </Box>
          <Box sx={{ margin: 1 }}>
            <Link href="#other" color="inherit" underline="hover">Other</Link>
          </Box>
          <Box sx={{ margin: 1 }}>
            <Link href="#contact" color="inherit" underline="hover">Contact</Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
