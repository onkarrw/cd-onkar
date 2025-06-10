import React from 'react';
import { Container, Typography, Box, Link, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from '../context/ThemeContext';

const ContactItem = ({ icon, primary, secondary, href }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 3,
          height: '100%',
          background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
          backdropFilter: 'blur(10px)',
          borderRadius: 2,
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: isDarkMode ? '0 8px 30px rgba(0, 0, 0, 0.3)' : '0 8px 30px rgba(0, 0, 0, 0.1)',
          }
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            sx={{
              color: '#4a90e2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {icon}
          </Box>
          <Box>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              {primary}
            </Typography>
            {href ? (
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: isDarkMode ? '#fff' : '#000',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#4a90e2',
                  }
                }}
              >
                <Typography variant="body1">
                  {secondary}
                </Typography>
              </Link>
            ) : (
              <Typography variant="body1">
                {secondary}
              </Typography>
            )}
          </Box>
        </Box>
      </Paper>
    </motion.div>
  );
};

const Contact = () => {
  const { isDarkMode } = useTheme();

  const contactInfo = [
    {
      icon: <EmailIcon fontSize="large" />,
      primary: 'Email',
      secondary: 'onkar.s.wagh@gmail.com',
      href: 'mailto:onkar.s.wagh@gmail.com'
    },
    {
      icon: <PhoneIcon fontSize="large" />,
      primary: 'Phone',
      secondary: '+91 9370928398',
      href: 'tel:+919370928398'
    },
    {
      icon: <LocationOnIcon fontSize="large" />,
      primary: 'Location',
      secondary: 'Pune, Maharashtra, India'
    },
    {
      icon: <LanguageIcon fontSize="large" />,
      primary: 'Portfolio',
      secondary: 'cd-onkar.vercel.app',
      href: 'https://cd-onkar.vercel.app'
    },
    {
      icon: <GitHubIcon fontSize="large" />,
      primary: 'GitHub',
      secondary: 'github.com/onkarrw',
      href: 'https://github.com/onkarrw'
    }
  ];

  return (
    <Box 
      component="section"
      sx={{ 
        py: 12,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: isDarkMode ? 'transparent' : 'rgba(74, 144, 226, 0.02)'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography 
            variant="h2" 
            gutterBottom
            sx={{
              mb: 6,
              textAlign: 'center',
              background: 'linear-gradient(45deg, #4a90e2, #7bb9ff)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textShadow: isDarkMode ? '0 0 30px rgba(74, 144, 226, 0.3)' : 'none'
            }}
          >
            Get in Touch
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ContactItem {...info} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 