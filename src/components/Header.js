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
    <AppBar 
      position="relative"
      elevation={0}
      sx={{
        background: isDarkMode 
          ? 'rgba(30, 32, 44, 0.95)'
          : 'linear-gradient(135deg, rgba(255, 241, 230, 0.95), rgba(255, 236, 244, 0.95), rgba(236, 241, 255, 0.95))',
        backdropFilter: 'blur(10px)',
        borderBottom: isDarkMode 
          ? '1px solid rgba(255, 255, 255, 0.1)' 
          : '1px solid rgba(255, 255, 255, 0.3)',
        transition: 'all 0.3s ease',
        borderRadius: { xs: '0 0 16px 16px', md: '0 0 24px 24px' },
        mb: 2,
        mt: 0
      }}
    >
      <Container maxWidth="xl" sx={{ mt: 0 }}>
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Typography 
            variant="h6" 
            component={Link} 
            to="/"
            sx={{
              textDecoration: 'none',
              fontFamily: "'Chivo Mono', monospace",
              fontWeight: 600,
              fontSize: { xs: '1.2rem', sm: '1.4rem' },
              background: isDarkMode 
                ? 'linear-gradient(45deg, #4a90e2, #89c084)' 
                : 'linear-gradient(45deg, #aa0964, #4a90e2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          >
            &lt;Onkar /&gt;
          </Typography>

          {isMobile ? (
            <>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <IconButton
                  onClick={toggleTheme}
                  sx={{
                    color: isDarkMode ? '#4a90e2' : '#aa0964',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'rotate(180deg)',
                      color: isDarkMode ? '#89c084' : '#4a90e2'
                    }
                  }}
                >
                  {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ 
                    color: isDarkMode ? '#4a90e2' : '#aa0964',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: isDarkMode ? '#89c084' : '#4a90e2'
                    }
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              {menuItems.map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    component={Link}
                    to={item.path}
                    sx={{
                      mx: 1,
                      color: isDarkMode ? '#fff' : '#2d2d2d',
                      position: 'relative',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: isActive(item.path) ? '100%' : '0%',
                        height: '2px',
                        bottom: 0,
                        left: 0,
                        background: isDarkMode 
                          ? 'linear-gradient(45deg, #4a90e2, #89c084)' 
                          : 'linear-gradient(45deg, #aa0964, #4a90e2)',
                        transition: 'all 0.3s ease'
                      },
                      '&:hover::after': {
                        width: '100%'
                      },
                      ...(isActive(item.path) && {
                        color: isDarkMode ? '#4a90e2' : '#aa0964',
                        fontWeight: 600
                      })
                    }}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
              <IconButton
                onClick={toggleTheme}
                sx={{
                  ml: 2,
                  color: isDarkMode ? '#4a90e2' : '#aa0964',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(180deg)',
                    color: isDarkMode ? '#89c084' : '#4a90e2'
                  }
                }}
              >
                {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </Container>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
        PaperProps={{
          sx: {
            width: 240,
            bgcolor: isDarkMode ? 'rgba(30, 32, 44, 0.95)' : 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderLeft: isDarkMode 
              ? '1px solid rgba(255, 255, 255, 0.1)' 
              : '1px solid rgba(0, 0, 0, 0.1)'
          }
        }}
      >
        <List sx={{ pt: 2 }}>
          {menuItems.map((item) => (
            <ListItem 
              key={item.path}
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                color: isActive(item.path)
                  ? isDarkMode ? '#4a90e2' : '#aa0964'
                  : isDarkMode ? '#fff' : '#2d2d2d',
                bgcolor: isActive(item.path)
                  ? isDarkMode 
                    ? 'rgba(74, 144, 226, 0.1)' 
                    : 'rgba(170, 9, 100, 0.1)'
                  : 'transparent',
                transition: 'all 0.3s ease',
                borderRadius: 1,
                my: 0.5,
                '&:hover': {
                  bgcolor: isDarkMode 
                    ? 'rgba(74, 144, 226, 0.2)' 
                    : 'rgba(170, 9, 100, 0.2)',
                  transform: 'translateX(8px)'
                }
              }}
            >
              <ListItemText 
                primary={item.label}
                primaryTypographyProps={{
                  sx: {
                    fontWeight: isActive(item.path) ? 600 : 500,
                    fontSize: '1rem'
                  }
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header; 