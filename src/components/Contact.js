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
        elevation={isDarkMode ? 5 : 3}
        sx={{
          p: 4,
          height: '100%',
          transition: 'all 0.3s ease',
          bgcolor: isDarkMode ? 'rgba(30, 32, 44, 0.95)' : 'white',
          border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: isDarkMode 
              ? '0 12px 24px rgba(0,0,0,0.4)' 
              : '0 12px 24px rgba(0,0,0,0.1)'
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Box
            sx={{
              color: isDarkMode ? '#4a90e2' : '#aa0964',
              transform: 'scale(1.4)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.5) rotate(5deg)'
              }
            }}
          >
            {icon}
          </Box>
          <Typography
            variant="h6"
            sx={{
              color: isDarkMode ? '#fff' : '#2d2d2d',
              fontWeight: 600,
              fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.4rem' },
              textAlign: 'center'
            }}
          >
            {primary}
          </Typography>
          {href ? (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: isDarkMode ? '#4a90e2' : '#aa0964',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: isDarkMode ? '#89c084' : '#4a90e2',
                  textDecoration: 'underline'
                }
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  textAlign: 'center',
                  fontSize: '1rem'
                }}
              >
                {secondary}
              </Typography>
            </Link>
          ) : (
            <Typography
              variant="body1"
              sx={{
                color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'text.secondary',
                textAlign: 'center',
                fontSize: '1rem'
              }}
            >
              {secondary}
            </Typography>
          )}
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
        background: isDarkMode 
          ? 'transparent' 
          : 'linear-gradient(135deg, rgba(255, 230, 255, 0.95), rgba(230, 255, 255, 0.95), rgba(255, 230, 230, 0.95))',
        backdropFilter: 'blur(10px)',
        borderRadius: 2,
        boxShadow: isDarkMode ? 'none' : '0 5px 15px rgba(0, 0, 0, 0.1)'
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography 
            variant="h3" 
            gutterBottom 
            align="center" 
            sx={{ 
              mb: 6,
              color: isDarkMode ? '#fff' : '#2d2d2d',
              fontFamily: "'Chivo Mono', monospace",
              fontSize: { xs: '2rem', sm: '2.2rem', md: '2.5rem' },
              fontWeight: 600,
              background: isDarkMode 
                ? 'linear-gradient(45deg, #4a90e2, #89c084)' 
                : 'linear-gradient(45deg, #aa0964, #4a90e2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Get in Touch
          </Typography>

          <Grid container spacing={4}>
            {contactInfo.map((info, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ContactItem {...info} />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 