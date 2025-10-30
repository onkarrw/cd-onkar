import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Box, Grid, Typography } from '@mui/material';
import { useTheme } from '../context/ThemeContext';
import heroImage from '../imgs/home-page.png';
import '../styles/global.css';
import '../styles/Hero.css';

const Hero = () => {
  const { isDarkMode } = useTheme();
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "Software Engineer",
    "Full Stack Developer",
    "Photographer"
  ];

  const prefix = "I'm a ";
  const currentRole = roles[roleIndex];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && index < currentRole.length) {
        setText(currentRole.substring(0, index + 1));
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setText(currentRole.substring(0, index - 1));
        setIndex(index - 1);
      } else if (index === 0 && isDeleting) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else if (index >= currentRole.length && !isDeleting) {
        setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [index, isDeleting, currentRole, roleIndex]);

  const skills = [
    'Spring Framework',
    'React.js',
    'Node.js',
    'PostgreSQL',
    'MongoDB',
    'Docker',
    'AWS',
    'CI/CD'
  ];

  return (
    <Box 
      component="section"
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: isDarkMode 
          ? 'transparent' 
          : 'linear-gradient(135deg, rgba(255, 241, 230, 0.95), rgba(255, 236, 244, 0.95), rgba(236, 241, 255, 0.95))',
        backdropFilter: 'blur(10px)',
        borderRadius: 2,
        boxShadow: isDarkMode ? 'none' : '0 5px 15px rgba(0, 0, 0, 0.1)',
        pt: { xs: 2, md: 4 },
        pb: { xs: 8, md: 12 }
      }}
    >
      <Container 
        maxWidth="xl"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', lg: 'row' },
          gap: { xs: 4, lg: 8 }
        }}
      >
        <Box
          sx={{
            flex: '1 1 auto',
            maxWidth: { xs: '100%', lg: '60%' },
            order: { xs: 2, lg: 1 }
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h1" 
              className="hero-greeting" 
              sx={{ 
                fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem' },
                mb: 1,
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              <span className="wave">👋</span>
              <span className="gradient-text">Hey there,</span>
            </Typography>
            <Typography 
              variant="h1" 
              className="hero-name" 
              sx={{ 
                fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem' },
                mb: 1,
                fontWeight: 600
              }}
            >
              I am <span className="name-title">Onkar Wagh</span>
            </Typography>
            <Typography 
              variant="h2" 
              className="hero-role" 
              sx={{ 
                fontSize: { xs: '1.6rem', sm: '1.8rem', md: '2rem' },
                mb: 2,
                color: isDarkMode ? '#fff' : '#2d2d2d',
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              <span>{prefix}</span>
              <span style={{ 
                color: isDarkMode ? '#4a90e2' : '#aa0964',
                fontWeight: 600
              }}>
                {text}
              </span>
              <span className="typing-cursor">|</span>
            </Typography>
            
            <Typography 
              variant="body1" 
              className="hero-description" 
              sx={{ 
                mt: 4, 
                mb: 5,
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                lineHeight: 1.8,
                color: isDarkMode ? 'rgba(255,255,255,0.9)' : '#2d2d2d',
                maxWidth: '800px'
              }}
            >
              I modernize enterprise applications, streamline performance, and strengthen security. With hands-on experience in full-stack development, I've upgraded monolithic Java apps, refactored security frameworks, and optimized codebases. I build scalable solutions using Java Spring, React.js, and cloud-native tools.
            </Typography>

            <Box 
              className="skills-section"
              sx={{
                mt: 5
              }}
            >
              <Typography 
                variant="h6" 
                className="skills-title" 
                sx={{ 
                  mb: 3,
                  fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                  fontWeight: 600,
                  color: isDarkMode ? '#fff' : '#2d2d2d'
                }}
              >
                Tech Stack
              </Typography>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="skills-container"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    style={{
                      background: isDarkMode 
                        ? 'rgba(74, 144, 226, 0.1)' 
                        : 'rgba(170, 9, 100, 0.1)',
                      color: isDarkMode ? '#4a90e2' : '#aa0964',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      border: isDarkMode 
                        ? '1px solid rgba(74, 144, 226, 0.3)' 
                        : '1px solid rgba(170, 9, 100, 0.3)',
                      transition: 'all 0.3s ease',
                      cursor: 'default'
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -4,
                      backgroundColor: isDarkMode 
                        ? 'rgba(74, 144, 226, 0.2)' 
                        : 'rgba(170, 9, 100, 0.2)'
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </Box>
          </motion.div>
        </Box>

        <Box
          sx={{
            flex: '0 0 auto',
            width: { xs: '100%', sm: '80%', md: '70%', lg: '40%' },
            order: { xs: 1, lg: 2 },
            display: { xs: 'none', lg: 'block' }
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%'
            }}
          >
            <motion.img
              src={heroImage}
              alt="Hero"
              className="hero-image"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '600px',
                objectFit: 'contain',
                borderRadius: '12px',
                boxShadow: isDarkMode 
                  ? '0 12px 24px rgba(0, 0, 0, 0.3)' 
                  : '0 12px 24px rgba(0, 0, 0, 0.1)'
              }}
            />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero; 