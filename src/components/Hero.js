import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
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
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-greeting">
                <span className="wave">👋</span>{' '}
                <span className="gradient-text">Hey there,</span>
              </h1>
              <h1 className="hero-name">
                I am <span className="name-title">Onkar Wagh</span>
              </h1>
              <h2 className="hero-role">
                <span>{prefix}</span>
                {text}
                <span className="typing-cursor">|</span>
              </h2>
              
              <p className="hero-description">
                Passionate about modernizing legacy applications and building efficient, secure software solutions.
                Experienced in full-stack development with a focus on Java Spring Framework and React.js.
              </p>

              <div className="skills-section">
                <h3 className="skills-title">Tech Stack</h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="skills-container"
                >
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      className="skill-chip"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="hero-image-container">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-image-wrapper"
            >
              <motion.img
                src="/imgs/home-page.png"
                alt="Hero"
                className="hero-image"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 