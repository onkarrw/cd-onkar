import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import { Work as WorkIcon } from '@mui/icons-material';
import { useTheme } from '../context/ThemeContext';

const Experience = () => {
  const { isDarkMode } = useTheme();

  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'MiniOrange Security Software Pvt. Ltd.',
      period: 'Jan 2025 – Present',
      description: [
        'Modernizing legacy Java application by upgrading to Java 17',
        'Migrating security from Shiro to Spring Security',
        'Optimizing dependencies and frameworks (Struts, JWT, HTTPClient)',
        'Developing JUnit test cases using Mockito and Assertions',
        'Implementing Adaptive Authorization with IP, location, and device-based validation'
      ]
    },
    {
      title: 'Data Science Intern',
      company: 'Amcergrade Pvt. Ltd.',
      period: 'Jan 2023 – Apr 2023',
      description: [
        'Worked on predictive analytics and predicting sales trends',
        'Preprocessed and cleaned data to improve forecasting accuracy',
        'Applied and evaluated multiple ML algorithms using various metrics'
      ]
    }
  ];

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
            Experience
          </Typography>

          <Timeline position="alternate">
            {experiences.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot sx={{ 
                    bgcolor: isDarkMode ? '#4a90e2' : 'primary.main',
                    boxShadow: isDarkMode ? '0 0 10px #4a90e2' : 'none'
                  }}>
                    <WorkIcon />
                  </TimelineDot>
                  <TimelineConnector sx={{ 
                    bgcolor: isDarkMode ? 'rgba(74, 144, 226, 0.3)' : 'primary.main'
                  }} />
                </TimelineSeparator>
                <TimelineContent>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Paper 
                      elevation={isDarkMode ? 5 : 3} 
                      sx={{ 
                        p: 3,
                        bgcolor: isDarkMode ? 'rgba(30, 32, 44, 0.95)' : 'white',
                        border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: isDarkMode ? '0 8px 16px rgba(0,0,0,0.4)' : '0 8px 16px rgba(0,0,0,0.1)'
                        }
                      }}
                    >
                      <Typography 
                        variant="h6" 
                        component="h2" 
                        sx={{ 
                          color: isDarkMode ? '#4a90e2' : 'primary.main',
                          fontWeight: 600
                        }}
                      >
                        {exp.title}
                      </Typography>
                      <Typography 
                        variant="subtitle1" 
                        sx={{ 
                          color: isDarkMode ? 'rgba(255,255,255,0.7)' : 'text.secondary',
                          mb: 1
                        }}
                      >
                        {exp.company}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: isDarkMode ? 'rgba(255,255,255,0.5)' : 'text.secondary',
                          mb: 2
                        }}
                      >
                        {exp.period}
                      </Typography>
                      <Box component="ul" sx={{ mt: 2, pl: 2 }}>
                        {exp.description.map((item, i) => (
                          <Typography 
                            component="li" 
                            key={i} 
                            variant="body2" 
                            sx={{ 
                              mb: 1,
                              color: isDarkMode ? 'rgba(255,255,255,0.9)' : 'inherit',
                              '&::marker': {
                                color: isDarkMode ? '#4a90e2' : 'primary.main'
                              }
                            }}
                          >
                            {item}
                          </Typography>
                        ))}
                      </Box>
                    </Paper>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      </Container>
    </section>
  );
};

export default Experience; 