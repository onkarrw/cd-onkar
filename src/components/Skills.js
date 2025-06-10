import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Code as CodeIcon,
  Storage as StorageIcon,
  Build as BuildIcon,
  Cloud as CloudIcon
} from '@mui/icons-material';

const Skills = () => {
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
    <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" gutterBottom align="center" sx={{ mb: 6 }}>
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
                      elevation={3}
                      sx={{
                        p: 3,
                        height: '100%',
                        transition: 'transform 0.2s',
                        '&:hover': {
                          transform: 'translateY(-5px)'
                        }
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          mb: 2
                        }}
                      >
                        <Box
                          sx={{
                            color: 'primary.main',
                            mb: 2
                          }}
                        >
                          {category.icon}
                        </Box>
                        <Typography
                          variant="h6"
                          component="h3"
                          align="center"
                          gutterBottom
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
                              bgcolor: 'rgba(25, 118, 210, 0.1)',
                              color: 'primary.main',
                              px: 1.5,
                              py: 0.5,
                              borderRadius: 1,
                              fontSize: '0.875rem'
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