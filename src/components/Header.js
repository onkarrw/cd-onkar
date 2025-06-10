import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  useTheme, 
  useMediaQuery, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  Box,
  Container
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTheme as useCustomTheme } from '../context/ThemeContext';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const { isDarkMode, toggleTheme } = useCustomTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Experience', path: '/experience' },
    { label: 'Projects', path: '/projects' },
    { label: 'Skills', path: '/skills' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar 
        position="fixed" 
        sx={{ 
          background: isDarkMode ? 'rgba(26, 26, 26, 0.8)' : 'rgba(248, 249, 250, 0.85)',
          backdropFilter: 'blur(10px)',
          boxShadow: isDarkMode ? '0 4px 30px rgba(0, 0, 0, 0.2)' : '0 4px 30px rgba(0, 0, 0, 0.05)'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ px: { xs: 0 } }}>
            <Typography 
              variant="h6" 
              component={Link} 
              to="/"
              sx={{ 
                flexGrow: 1,
                textDecoration: 'none',
                color: isDarkMode ? '#fff' : '#1a1a1a',
                fontWeight: 700,
                '&:hover': {
                  color: '#4a90e2'
                }
              }}
            >
              Onkar
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {isMobile ? (
                <>
                  <IconButton
                    sx={{ 
                      color: isDarkMode ? '#fff' : '#1a1a1a',
                      '&:hover': {
                        color: '#4a90e2'
                      }
                    }}
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerToggle}
                  >
                    <MenuIcon />
                  </IconButton>
                  <IconButton 
                    onClick={toggleTheme}
                    sx={{ 
                      color: isDarkMode ? '#fff' : '#1a1a1a',
                      '&:hover': {
                        color: '#4a90e2'
                      }
                    }}
                  >
                    {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
                  </IconButton>
                  <Drawer
                    anchor="right"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    PaperProps={{
                      sx: {
                        width: 240,
                        background: isDarkMode ? '#1a1a1a' : '#fff',
                        color: isDarkMode ? '#fff' : '#1a1a1a'
                      }
                    }}
                  >
                    <List>
                      {menuItems.map((item) => (
                        <ListItem 
                          button 
                          key={item.label} 
                          component={Link}
                          to={item.path}
                          onClick={handleDrawerToggle}
                          sx={{
                            backgroundColor: isActive(item.path) ? 
                              'rgba(74, 144, 226, 0.1)' : 'transparent',
                            '&:hover': {
                              backgroundColor: 'rgba(74, 144, 226, 0.2)'
                            }
                          }}
                        >
                          <ListItemText 
                            primary={item.label}
                            sx={{
                              color: isActive(item.path) ? '#4a90e2' : 'inherit'
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Drawer>
                </>
              ) : (
                <>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {menuItems.map((item) => (
                      <Button 
                        component={Link}
                        to={item.path}
                        key={item.label}
                        sx={{
                          color: isActive(item.path) ? '#4a90e2' : (isDarkMode ? '#fff' : '#1a1a1a'),
                          position: 'relative',
                          '&:hover': {
                            color: '#4a90e2',
                            backgroundColor: 'transparent'
                          },
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            width: isActive(item.path) ? '100%' : '0',
                            height: '2px',
                            bottom: 0,
                            left: '0',
                            backgroundColor: '#4a90e2',
                            transition: 'width 0.3s ease'
                          },
                          '&:hover::after': {
                            width: '100%'
                          }
                        }}
                      >
                        {item.label}
                      </Button>
                    ))}
                  </Box>
                  <IconButton 
                    onClick={toggleTheme}
                    sx={{ 
                      color: isDarkMode ? '#fff' : '#1a1a1a',
                      '&:hover': {
                        color: '#4a90e2'
                      },
                      ml: 2
                    }}
                  >
                    {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
                  </IconButton>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar /> {/* This is for spacing */}
    </motion.div>
  );
};

export default Header; 