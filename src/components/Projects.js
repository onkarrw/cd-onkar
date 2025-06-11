import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, Box } from '@mui/material';
import { GitHub as GitHubIcon, Language as LanguageIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import projectsData from '../data/projects.json';

const Projects = () => {
  const { isDarkMode } = useTheme();
  const { projects } = projectsData;

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
          : 'linear-gradient(135deg, rgba(255, 220, 255, 0.95), rgba(230, 255, 230, 0.95), rgba(220, 220, 255, 0.95))',
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
            Featured Projects
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    elevation={isDarkMode ? 5 : 3}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
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
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography 
                        variant="h5" 
                        component="h2" 
                        gutterBottom
                        sx={{ 
                          color: isDarkMode ? '#4a90e2' : '#aa0964',
                          fontWeight: 600,
                          fontSize: { xs: '1.3rem', sm: '1.4rem', md: '1.5rem' },
                          mb: 2
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        gutterBottom
                        sx={{ 
                          color: isDarkMode ? 'rgba(255,255,255,0.6)' : 'text.secondary',
                          mb: 2,
                          fontSize: '0.9rem'
                        }}
                      >
                        {project.date}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        paragraph
                        sx={{ 
                          color: isDarkMode ? 'rgba(255,255,255,0.9)' : 'text.primary',
                          mb: 3,
                          lineHeight: 1.7,
                          fontSize: '1rem'
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 'auto' }}>
                        {project.tech.map((tech, i) => (
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
                              fontSize: '0.75rem',
                              border: isDarkMode 
                                ? '1px solid rgba(74, 144, 226, 0.3)' 
                                : '1px solid rgba(170, 9, 100, 0.3)',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'translateY(-2px)',
                                bgcolor: isDarkMode 
                                  ? 'rgba(74, 144, 226, 0.2)' 
                                  : 'rgba(170, 9, 100, 0.2)'
                              }
                            }}
                          >
                            {tech}
                          </Typography>
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', gap: 1, px: 3, pb: 3, pt: 0 }}>
                      {project.github && (
                        <Button 
                          size="small" 
                          startIcon={<GitHubIcon />}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ 
                            color: isDarkMode ? '#4a90e2' : '#aa0964',
                            borderColor: isDarkMode ? '#4a90e2' : '#aa0964',
                            border: '1px solid',
                            '&:hover': {
                              bgcolor: isDarkMode 
                                ? 'rgba(74, 144, 226, 0.1)' 
                                : 'rgba(170, 9, 100, 0.1)',
                              borderColor: isDarkMode ? '#4a90e2' : '#aa0964'
                            }
                          }}
                        >
                          View Code
                        </Button>
                      )}
                      {project.url && project.url.length > 0 && (
                        <Button 
                          size="small" 
                          startIcon={<LanguageIcon />}
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ 
                            color: isDarkMode ? '#4a90e2' : '#aa0964',
                            borderColor: isDarkMode ? '#4a90e2' : '#aa0964',
                            border: '1px solid',
                            '&:hover': {
                              bgcolor: isDarkMode 
                                ? 'rgba(74, 144, 226, 0.1)' 
                                : 'rgba(170, 9, 100, 0.1)',
                              borderColor: isDarkMode ? '#4a90e2' : '#aa0964'
                            }
                          }}
                        >
                          Live Demo
                        </Button>
                      )}
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 