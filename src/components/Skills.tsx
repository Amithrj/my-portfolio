import React from 'react';
import { Typography, Paper, Box, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import BuildIcon from '@mui/icons-material/Build';

interface SkillsProps {
  themeMode: 'light' | 'dark';
}

const Skills: React.FC<SkillsProps> = ({ themeMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <CodeIcon />,
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Material-UI', 'Tailwind CSS'],
    },
    {
      title: 'Backend Development',
      icon: <StorageIcon />,
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'RESTful APIs', 'GraphQL'],
    },
    {
      title: 'Cloud & DevOps',
      icon: <CloudIcon />,
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'Linux'],
    },
    {
      title: 'Tools & Others',
      icon: <BuildIcon />,
      skills: ['VS Code', 'GitHub', 'Jira', 'Agile', 'Scrum', 'Figma'],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Paper 
        elevation={3} 
        sx={{ 
          p: 4, 
          mb: 4,
          background: themeMode === 'light'
            ? 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)'
            : 'linear-gradient(135deg, rgba(30,30,30,0.95) 0%, rgba(30,30,30,0.85) 100%)',
          backdropFilter: 'blur(10px)',
          borderRadius: '24px',
          border: `1px solid ${themeMode === 'light' ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)'}`,
        }}
      >
        <Typography 
          variant="h4" 
          gutterBottom
          sx={{
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700,
            mb: 4,
            textAlign: 'center',
            fontSize: isMobile ? '2rem' : '2.5rem',
          }}
        >
          Skills
        </Typography>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', 
          gap: 3 
        }}>
          {skillCategories.map((category, index) => (
            <Paper
              key={index}
              elevation={2}
              component={motion.div}
              whileHover={{ scale: 1.02 }}
              sx={{
                p: 3,
                background: themeMode === 'light'
                  ? 'rgba(255,255,255,0.7)'
                  : 'rgba(40,40,40,0.7)',
                borderRadius: '16px',
                border: `1px solid ${themeMode === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'}`,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: '12px',
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    color: 'white',
                  }}
                >
                  {category.icon}
                </Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: themeMode === 'light' ? 'text.primary' : 'text.secondary',
                    fontWeight: 600,
                  }}
                >
                  {category.title}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {category.skills.map((skill, skillIndex) => (
                  <Box
                    key={skillIndex}
                    component={motion.div}
                    whileHover={{ scale: 1.05 }}
                    sx={{
                      px: 2,
                      py: 1,
                      borderRadius: '20px',
                      background: themeMode === 'light'
                        ? 'rgba(33, 150, 243, 0.1)'
                        : 'rgba(33, 150, 243, 0.2)',
                      color: theme.palette.primary.main,
                      fontWeight: 500,
                      fontSize: '0.9rem',
                    }}
                  >
                    {skill}
                  </Box>
                ))}
              </Box>
            </Paper>
          ))}
        </Box>
      </Paper>
    </motion.div>
  );
};

export default Skills; 