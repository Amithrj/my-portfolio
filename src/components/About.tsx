import React from 'react';
import { Typography, Paper, Box, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CloudIcon from '@mui/icons-material/Cloud';

interface AboutProps {
  themeMode: 'light' | 'dark';
}

const About: React.FC<AboutProps> = ({ themeMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
          About Me
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <CodeIcon 
              sx={{ 
                fontSize: 40, 
                color: theme.palette.primary.main,
                mt: 1,
              }} 
            />
            <Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: themeMode === 'light' ? 'text.primary' : 'text.secondary',
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                Full Stack Developer
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: themeMode === 'light' ? 'text.secondary' : 'text.primary',
                  lineHeight: 1.7,
                }}
              >
                I am a passionate Full Stack Developer with expertise in building modern web applications.
                My journey in software development has been driven by a constant desire to learn and create
                innovative solutions to real-world problems.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <CloudIcon 
              sx={{ 
                fontSize: 40, 
                color: theme.palette.primary.main,
                mt: 1,
              }} 
            />
            <Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: themeMode === 'light' ? 'text.primary' : 'text.secondary',
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                DevOps & Cloud
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: themeMode === 'light' ? 'text.secondary' : 'text.primary',
                  lineHeight: 1.7,
                }}
              >
                As an AWS Certified Cloud Practitioner, I specialize in cloud infrastructure and DevOps practices.
                I have hands-on experience with AWS services, Docker containerization, CI/CD pipelines,
                and infrastructure as code. My expertise in cloud technologies enables me to design,
                deploy, and maintain scalable and secure cloud solutions.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <SchoolIcon 
              sx={{ 
                fontSize: 40, 
                color: theme.palette.primary.main,
                mt: 1,
              }} 
            />
            <Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: themeMode === 'light' ? 'text.primary' : 'text.secondary',
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                Education
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: themeMode === 'light' ? 'text.secondary' : 'text.primary',
                  lineHeight: 1.7,
                }}
              >
                I hold a degree in Computer Science and have continuously expanded my knowledge
                through various online courses and certifications, including AWS Cloud Practitioner.
                My education has provided me with a strong foundation in software development
                principles and best practices.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <WorkIcon 
              sx={{ 
                fontSize: 40, 
                color: theme.palette.primary.main,
                mt: 1,
              }} 
            />
            <Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: themeMode === 'light' ? 'text.primary' : 'text.secondary',
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                Experience
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: themeMode === 'light' ? 'text.secondary' : 'text.primary',
                  lineHeight: 1.7,
                }}
              >
                With experience in both frontend and backend development, I specialize in creating
                responsive and scalable web applications. I have worked with various technologies
                and frameworks, always focusing on writing clean, maintainable code and following
                industry best practices.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default About; 