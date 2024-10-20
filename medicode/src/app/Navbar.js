// src/app/components/Navbar.js

'use client'

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Import Menu icon
import Link from 'next/link';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static"  sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Medicode
        </Typography>
        <div className="desktop-menu">
          <Link href="/" passHref>
            <Button color="inherit">Home</Button>
          </Link>
          <Link href="/projects" passHref>
            <Button color="inherit">Projects</Button>
          </Link>
          <Link href="/members" passHref>
            <Button color="inherit">Members</Button>
          </Link>
          <Link href="/calendar" passHref>
            <Button color="inherit">Calendar</Button>
          </Link>
          <Link href="/aboutus" passHref>
            <Button color="inherit">About Us</Button>
          </Link>

        </div>
        <div className="mobile-menu">
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleMenuClick}
            aria-controls="menu-appbar"
            aria-haspopup="true"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link href="/" passHref>Home</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link href="/projects" passHref>Projects</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link href="/members" passHref>Members</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link href="/calendar" passHref>Calendar</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link href="/aboutus" passHref>About Us</Link>
            </MenuItem>
            

          </Menu>
        </div>
      </Toolbar>
      <style jsx>{`
        .desktop-menu {
          display: flex;
        }
        .mobile-menu {
          display: none;
        }
        @media (max-width: 600px) {
          .desktop-menu {
            display: none;
          }
          .mobile-menu {
            display: block;
          }
        }
      `}</style>
    </AppBar>
  );
};

export default Navbar;
