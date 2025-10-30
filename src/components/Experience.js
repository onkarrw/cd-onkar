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
      title: 'Software Developement Engineer I',
      company: 'MiniOrange Security Software Pvt. Ltd.',
      period: 'June 2025 – Present',
      description: [
        'Modernizing legacy Java application by upgrading to Java 17 and optimizing dependencies and frameworks (Struts, JWT, HTTPClient)',
        'Migrating security from Shiro to Spring Security and implementing connection pooling for improved performance',
        'Deepened understanding of authentication protocols, and microservices such as RabbitMQ and Redis'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'MiniOrange Security Software Pvt. Ltd.',
      period: 'Jan 2025 – June 2025',
      description: [
        'Learned about Kerberos authentication, Single Sign-On (SSO) flows SAML, OAuth, JWT, Nginx',
        'Worked extensively on Spring Security, Shiro Security, and cache management',
        'Developed JUnit test cases using Mockito and Assertions'
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
    <Box 
      component="section"
      sx={{ 
        py: 12,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: isDarkMode 
          ? 'transparent' 
          : 'linear-gradient(135deg, rgba(255, 230, 230, 0.95), rgba(230, 255, 255, 0.95), rgba(230, 230, 255, 0.95))',
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
            Professional Experience
          </Typography>

          <Timeline position="alternate">
            {experiences.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot 
                    sx={{ 
                      bgcolor: isDarkMode ? '#4a90e2' : '#aa0964',
                      boxShadow: isDarkMode 
                        ? '0 0 15px rgba(74, 144, 226, 0.5)' 
                        : '0 0 15px rgba(170, 9, 100, 0.3)',
                      p: 1.5,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1) rotate(5deg)'
                      }
                    }}
                  >
                    <WorkIcon />
                  </TimelineDot>
                  <TimelineConnector 
                    sx={{ 
                      bgcolor: isDarkMode 
                        ? 'rgba(74, 144, 226, 0.3)' 
                        : 'rgba(170, 9, 100, 0.2)',
                      width: '2px'
                    }} 
                  />
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
                        p: 4,
                        bgcolor: isDarkMode ? 'rgba(30, 32, 44, 0.95)' : 'white',
                        border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: isDarkMode 
                            ? '0 12px 24px rgba(0,0,0,0.4)' 
                            : '0 12px 24px rgba(0,0,0,0.1)'
                        }
                      }}
                    >
                      <Typography 
                        variant="h5" 
                        component="h2" 
                        sx={{ 
                          color: isDarkMode ? '#4a90e2' : '#aa0964',
                          fontWeight: 600,
                          fontSize: { xs: '1.3rem', sm: '1.4rem', md: '1.5rem' },
                          mb: 0.5,
                          textAlign: 'center',
                        }}
                      >
                        {exp.title}
                      </Typography>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: isDarkMode ? 'rgba(255,255,255,0.8)' : '#2d2d2d',
                          mb: 1,
                          fontWeight: 500,
                          fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                          textAlign: 'center',
                        }}
                      >
                        {exp.company}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: isDarkMode ? 'rgba(255,255,255,0.6)' : 'text.secondary',
                          mb: 3,
                          fontSize: '0.9rem',
                          fontStyle: 'italic',
                          textAlign: 'right',
                          display: 'block',
                        }}
                      >
                        {exp.period}
                      </Typography>
                      <Box 
                        component="ul" 
                        sx={{ 
                          mt: 2, 
                          pl: 2,
                          '& li': {
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateX(8px)'
                            }
                          }
                        }}
                      >
                        {exp.description.map((item, i) => (
                          <Typography 
                            component="li" 
                            key={i} 
                            variant="body1" 
                            sx={{ 
                              mb: 1.5,
                              color: isDarkMode ? 'rgba(255,255,255,0.9)' : 'text.primary',
                              fontSize: '1rem',
                              lineHeight: 1.7,
                              textAlign: 'left',
                              '&::marker': {
                                color: isDarkMode ? '#4a90e2' : '#aa0964'
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
    </Box>
  );
};

export default Experience; 