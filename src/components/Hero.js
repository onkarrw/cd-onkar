import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Chip, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import '../styles/global.css';

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
    <section>
      <Box
        sx={{
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          pt: 4,
          pb: 4,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid 
              item 
              xs={12} 
              md={7}
              sx={{
                width: '100%'
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h2" gutterBottom>
                  <span className="wave">👋</span>{' '}
                  <span className="gradient-text">Hey there,</span>
                </Typography>
                <Typography variant="h2" gutterBottom>
                  I am <span className="name-title">Onkar Wagh</span>
                </Typography>
                <Typography 
                  variant="h4" 
                  gutterBottom 
                  sx={{ 
                    minHeight: '3.5em',
                    fontFamily: "'Chivo Mono', monospace",
                    mb: 4
                  }}
                >
                  <span>{prefix}</span>
                  {text}
                  <span className="typing-cursor">|</span>
                </Typography>
                <Typography 
                  variant="body1" 
                  paragraph 
                  sx={{ 
                    fontSize: '1.2rem', 
                    maxWidth: '600px',
                    mb: 4,
                    lineHeight: 1.8
                  }}
                >
                  Passionate about modernizing legacy applications and building efficient, secure software solutions.
                  Experienced in full-stack development with a focus on Java Spring Framework and React.js.
                </Typography>

                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
                    Tech Stack
                  </Typography>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                      {skills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                        >
                          <Chip
                            label={skill}
                            sx={{
                              bgcolor: 'rgba(74, 144, 226, 0.1)',
                              color: '#4a90e2',
                              '&:hover': {
                                bgcolor: 'rgba(74, 144, 226, 0.2)',
                              },
                              fontWeight: 500,
                              fontSize: '0.9rem',
                              height: 32
                            }}
                          />
                        </motion.div>
                      ))}
                    </Box>
                  </motion.div>
                </Box>
              </motion.div>
            </Grid>

            <Grid 
              item 
              md={5} 
              sx={{ 
                display: { xs: 'none', md: 'block' },
                position: 'relative',
                height: { md: '600px' }
              }}
            >
              <Box
                component={motion.div}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: '0',
                  transform: 'translateY(-50%)',
                  width: '100%',
                  height: '100%',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  p: 2.5,
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)'
                }}
              >
                <Box
                  component={motion.img}
                  src="/imgs/home-page.png"
                  alt="Hero"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  sx={{ 
                    maxWidth: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderRadius: '10px'
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default Hero; 