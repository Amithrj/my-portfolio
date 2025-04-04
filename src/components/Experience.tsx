import React from 'react';
import { Typography, Paper, Box, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

interface ExperienceProps {
  themeMode: 'light' | 'dark';
}

const Experience: React.FC<ExperienceProps> = ({ themeMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const experiences = [
    {
      title: 'Skill Development Course',
      company: 'NTTF College',
      location: 'Bengaluru, India',
      period: 'November 2024 - February 2025',
      description: [
        'Advanced training in modern software development practices and technologies',
        'Hands-on experience with industry-standard tools and frameworks',
        'Collaborative project work with peers and mentors',
      ],
      icon: <SchoolIcon />,
    },
    {
      title: 'Full Stack Developer',
      company: 'Pratian technologies,bangalore.',
      location: 'Remote',
      period: 'September 2023 – February 2024',
      description: [
        'Developed and optimized a web application front-end using Angular, improving user interface performance ',
        'Implementing responsive designs and optimizing user experience',
        'Worked closely with cross-functional teams to ensure the app met customer requirements and optimized design for mobile and desktop',
        
        'Performed end-to-end testing, improving the overall user experience and application stability',
      ],
      icon: <WorkIcon />,
    },
  ];

  const education = [
    {
      title: 'Bachelor of Technology (BTech) in Computer Science',
      institution: 'Glocal University',
      location: 'Uttar Pradesh, India',
      period: '2023',
      details: ['CGPA: 7.4'],
      icon: <SchoolIcon />,
    },
    {
      title: 'Higher Secondary Education (Computer Science)',
      institution: 'CMM Higher Secondary School',
      location: 'Kerala, India',
      period: '2017',
      details: ['Percentage: 65%'],
      icon: <SchoolIcon />,
    },
    {
      title: 'SSLC (Science)',
      institution: 'Model Higher Secondary School',
      location: 'Kerala, India',
      period: '2015',
      details: ['Percentage: 79%'],
      icon: <SchoolIcon />,
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
          Experience & Education
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {/* Experience Section */}
          <Box>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 3,
                color: themeMode === 'light' ? 'text.primary' : 'text.secondary',
                fontWeight: 600,
              }}
            >
              Work Experience
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {experiences.map((experience, index) => (
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
                  <Box sx={{ display: 'flex', gap: 3 }}>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: '12px',
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        color: 'white',
                      }}
                    >
                      {experience.icon}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: themeMode === 'light' ? 'text.primary' : 'text.secondary',
                          fontWeight: 600,
                          mb: 0.5,
                        }}
                      >
                        {experience.title}
                      </Typography>
                      <Typography 
                        variant="subtitle1" 
                        sx={{ 
                          color: themeMode === 'light' ? 'text.secondary' : 'text.primary',
                          mb: 0.5,
                        }}
                      >
                        {experience.company} • {experience.location}
                      </Typography>
                      <Typography 
                        variant="subtitle2" 
                        sx={{ 
                          color: themeMode === 'light' ? 'text.secondary' : 'text.primary',
                          mb: 2,
                        }}
                      >
                        {experience.period}
                      </Typography>
                      <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                        {experience.description.map((item, itemIndex) => (
                          <Typography
                            key={itemIndex}
                            component="li"
                            variant="body1"
                            sx={{ 
                              color: themeMode === 'light' ? 'text.secondary' : 'text.primary',
                              mb: 1,
                              '&:last-child': { mb: 0 },
                            }}
                          >
                            {item}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Box>

          {/* Education Section */}
          <Box>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 3,
                color: themeMode === 'light' ? 'text.primary' : 'text.secondary',
                fontWeight: 600,
              }}
            >
              Education
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {education.map((edu, index) => (
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
                  <Box sx={{ display: 'flex', gap: 3 }}>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: '12px',
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        color: 'white',
                      }}
                    >
                      {edu.icon}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: themeMode === 'light' ? 'text.primary' : 'text.secondary',
                          fontWeight: 600,
                          mb: 0.5,
                        }}
                      >
                        {edu.title}
                      </Typography>
                      <Typography 
                        variant="subtitle1" 
                        sx={{ 
                          color: themeMode === 'light' ? 'text.secondary' : 'text.primary',
                          mb: 0.5,
                        }}
                      >
                        {edu.institution} • {edu.location}
                      </Typography>
                      <Typography 
                        variant="subtitle2" 
                        sx={{ 
                          color: themeMode === 'light' ? 'text.secondary' : 'text.primary',
                          mb: 2,
                        }}
                      >
                        {edu.period}
                      </Typography>
                      <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                        {edu.details.map((detail, detailIndex) => (
                          <Typography
                            key={detailIndex}
                            component="li"
                            variant="body1"
                            sx={{ 
                              color: themeMode === 'light' ? 'text.secondary' : 'text.primary',
                              mb: 1,
                              '&:last-child': { mb: 0 },
                            }}
                          >
                            {detail}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Box>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default Experience; 