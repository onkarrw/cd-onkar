import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useTheme, useMediaQuery, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems = ['Home', 'Experience', 'Projects', 'Skills', 'Contact'];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar position="fixed" sx={{ background: '#1a1a1a' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Onkar
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
              >
                <List>
                  {menuItems.map((item) => (
                    <ListItem button key={item} onClick={handleDrawerToggle}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <div>
              {menuItems.map((item) => (
                <Button color="inherit" key={item}>
                  {item}
                </Button>
              ))}
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* This is for spacing */}
    </motion.div>
  );
};

export default Header; 