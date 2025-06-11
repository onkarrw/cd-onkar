import React from 'react';
import { Container, Typography, Box, Link, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import { useTheme } from '../context/ThemeContext';

const ContactItem = ({ icon, primary, secondary, href }) => {
  const { isDarkMode } = useTheme();
  
  const content = (
    <Paper
      elevation={isDarkMode ? 5 : 3}
      sx={{
        p: 3,
        height: '200px', // Fixed height
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
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
          color: isDarkMode ? '#4a90e2' : '#aa0964',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          bgcolor: isDarkMode ? 'rgba(74, 144, 226, 0.1)' : 'rgba(170, 9, 100, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'rotate(8deg) scale(1.1)',
            bgcolor: isDarkMode ? 'rgba(74, 144, 226, 0.2)' : 'rgba(170, 9, 100, 0.2)'
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
          textAlign: 'center',
          fontSize: { xs: '1.1rem', sm: '1.2rem' }
        }}
      >
        {primary}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: isDarkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
          textAlign: 'center',
          fontSize: { xs: '0.9rem', sm: '1rem' }
        }}
      >
        {secondary}
      </Typography>
    </Paper>
  );

  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ textDecoration: 'none' }}
      >
        {content}
      </Link>
    );
  }

  return content;
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
      icon: <LinkedInIcon fontSize="large" />,
      primary: 'LinkedIn',
      secondary: 'linkedin_com',
      href: 'https://www.linkedin.com/in/onkar-wagh-632ab821a'
    },
    {
      icon: <CodeIcon fontSize="large" />,
      primary: 'LeetCode',
      secondary: 'leetcode_com',
      href: 'https://leetcode.com/u/user9833Cl/'
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
        display: 'absolute',
        alignItems: 'center',
        background: isDarkMode 
          ? 'transparent' 
          : 'linear-gradient(135deg, rgba(255, 230, 255, 0.95), rgba(230, 255, 255, 0.95), rgba(255, 230, 230, 0.95))',
        backdropFilter: 'blur(10px)',
        borderRadius: 2,
        boxShadow: isDarkMode ? 'none' : '0 5px 15px rgba(0, 0, 0, 0.1)'
      }}
    >
      <Container maxWidth="lg">
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

          <Grid 
            container 
            spacing={4} 
            sx={{ 
              justifyContent: 'center',
              px: { xs: 2, md: 4 }
            }}
          >
            {contactInfo.map((info, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={4} 
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ width: '100%', maxWidth: '320px' }}
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