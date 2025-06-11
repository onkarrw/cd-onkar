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
    <section>
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
              color: isDarkMode ? '#fff' : 'inherit',
              fontFamily: "'Chivo Mono', monospace"
            }}
          >
            Projects
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
                        transform: 'translateY(-5px)',
                        boxShadow: isDarkMode 
                          ? '0 8px 16px rgba(0,0,0,0.4)' 
                          : '0 8px 16px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography 
                        variant="h5" 
                        component="h2" 
                        gutterBottom
                        sx={{ 
                          color: isDarkMode ? '#4a90e2' : 'primary.main',
                          fontWeight: 600
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        gutterBottom
                        sx={{ 
                          color: isDarkMode ? 'rgba(255,255,255,0.5)' : 'text.secondary'
                        }}
                      >
                        {project.date}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        paragraph
                        sx={{ 
                          color: isDarkMode ? 'rgba(255,255,255,0.9)' : 'inherit'
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                        {project.tech.map((tech, i) => (
                          <Typography
                            key={i}
                            variant="body2"
                            sx={{
                              bgcolor: isDarkMode 
                                ? 'rgba(74, 144, 226, 0.1)' 
                                : 'rgba(25, 118, 210, 0.1)',
                              color: isDarkMode ? '#4a90e2' : 'primary.main',
                              px: 1.5,
                              py: 0.5,
                              borderRadius: 1,
                              fontSize: '0.75rem',
                              border: isDarkMode 
                                ? '1px solid rgba(74, 144, 226, 0.3)' 
                                : 'none'
                            }}
                          >
                            {tech}
                          </Typography>
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', gap: 1, px: 2 }}>
                      {project.github && (
                        <Button 
                          size="small" 
                          startIcon={<GitHubIcon />}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ 
                            color: isDarkMode ? '#4a90e2' : 'primary.main',
                            '&:hover': {
                              bgcolor: isDarkMode 
                                ? 'rgba(74, 144, 226, 0.1)' 
                                : 'rgba(25, 118, 210, 0.1)'
                            }
                          }}
                        >
                          Code
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
                            color: isDarkMode ? '#4a90e2' : 'primary.main',
                            '&:hover': {
                              bgcolor: isDarkMode 
                                ? 'rgba(74, 144, 226, 0.1)' 
                                : 'rgba(25, 118, 210, 0.1)'
                            }
                          }}
                        >
                          Go to site
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
    </section>
  );
};

export default Projects; 