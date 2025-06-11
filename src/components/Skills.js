import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Code as CodeIcon,
  Storage as StorageIcon,
  Build as BuildIcon,
  Cloud as CloudIcon
} from '@mui/icons-material';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const { isDarkMode } = useTheme();

  const skillCategories = [
    {
      title: 'Libraries & Frameworks',
      icon: <CodeIcon fontSize="large" />,
      skills: ['Spring Framework', 'React.js', 'Node.js']
    },
    {
      title: 'Databases',
      icon: <StorageIcon fontSize="large" />,
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis', 'Firestore']
    },
    {
      title: 'Tools',
      icon: <BuildIcon fontSize="large" />,
      skills: ['Git', 'GitHub', 'Bitbucket', 'Docker', 'Redis', 'Postman']
    },
    {
      title: 'DevOps & Cloud',
      icon: <CloudIcon fontSize="large" />,
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD Pipelines', 'GitHub Actions']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

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
          : 'linear-gradient(135deg, rgba(230, 255, 230, 0.95), rgba(255, 220, 255, 0.95), rgba(220, 255, 255, 0.95))',
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
            Technical Skills
          </Typography>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid container spacing={4}>
              {skillCategories.map((category, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div variants={itemVariants}>
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
                          mb: 3
                        }}
                      >
                        <Box
                          sx={{
                            color: isDarkMode ? '#4a90e2' : '#aa0964',
                            mb: 2,
                            transform: 'scale(1.4)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'scale(1.5) rotate(5deg)'
                            }
                          }}
                        >
                          {category.icon}
                        </Box>
                        <Typography
                          variant="h6"
                          component="h3"
                          align="center"
                          gutterBottom
                          sx={{
                            color: isDarkMode ? '#fff' : '#2d2d2d',
                            fontWeight: 600,
                            fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.4rem' }
                          }}
                        >
                          {category.title}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                        {category.skills.map((skill, i) => (
                          <Typography
                            key={i}
                            variant="body2"
                            sx={{
                              bgcolor: isDarkMode 
                                ? 'rgba(74, 144, 226, 0.1)' 
                                : 'rgba(170, 9, 100, 0.1)',
                              color: isDarkMode ? '#4a90e2' : '#aa0964',
                              px: 1.5,
                              py: 0.5,
                              borderRadius: 1,
                              fontSize: '0.875rem',
                              border: isDarkMode 
                                ? '1px solid rgba(74, 144, 226, 0.3)' 
                                : '1px solid rgba(170, 9, 100, 0.3)',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'translateY(-2px) scale(1.05)',
                                bgcolor: isDarkMode 
                                  ? 'rgba(74, 144, 226, 0.2)' 
                                  : 'rgba(170, 9, 100, 0.2)'
                              }
                            }}
                          >
                            {skill}
                          </Typography>
                        ))}
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills; 