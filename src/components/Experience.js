import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import { Work as WorkIcon } from '@mui/icons-material';

const Experience = () => {
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
    <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" gutterBottom align="center" sx={{ mb: 6 }}>
            Experience
          </Typography>

          <Timeline position="alternate">
            {experiences.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <WorkIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Paper elevation={3} sx={{ p: 3, bgcolor: 'white' }}>
                      <Typography variant="h6" component="h2" color="primary">
                        {exp.title}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        {exp.company}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {exp.period}
                      </Typography>
                      <Box component="ul" sx={{ mt: 2, pl: 2 }}>
                        {exp.description.map((item, i) => (
                          <Typography component="li" key={i} variant="body2" sx={{ mb: 1 }}>
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