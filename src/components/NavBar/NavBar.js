
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Louis T. Delia
          </Typography>
          <Link href="#about-me" color="inherit">About Me</Link>
          <Link href="#skills" color="inherit">Skills</Link>
          <Link href="#work" color="inherit">Work</Link>
          <Link href="#other" color="inherit">Other</Link>
          <Link href="#contact" color="inherit">Contact</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
