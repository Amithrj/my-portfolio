import React from 'react';
import { Typography, Paper, Box, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

interface HeroProps {
  themeMode: 'light' | 'dark';
}

const Hero: React.FC<HeroProps> = ({ themeMode }) => {
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
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography 
            variant="h2" 
            sx={{
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
              mb: 2,
              fontSize: isMobile ? '2.5rem' : '3.5rem',
            }}
          >
            Amithraj M
          </Typography>
          <Typography 
            variant="h4" 
            sx={{ 
              color: themeMode === 'light' ? 'text.secondary' : 'text.primary',
              mb: 3,
              fontSize: isMobile ? '1.5rem' : '2rem',
            }}
          >
            Full Stack Developer
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: themeMode === 'light' ? 'text.secondary' : 'text.primary',
              maxWidth: '800px',
              mx: 'auto',
              mb: 4,
              fontSize: isMobile ? '1rem' : '1.1rem',
              lineHeight: 1.7,
            }}
          >
            I create beautiful, responsive, and user-friendly web applications
            using modern technologies and best practices.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Box
              component="a"
              href="/resume.pdf"
              download
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 3,
                py: 1.5,
                borderRadius: '12px',
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                color: 'white',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <DownloadIcon />
              <Typography>Download Resume</Typography>
            </Box>
            <Box
              component="a"
              href="mailto:amithraj@example.com"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 3,
                py: 1.5,
                borderRadius: '12px',
                border: `2px solid ${theme.palette.primary.main}`,
                color: theme.palette.primary.main,
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  background: 'rgba(33, 150, 243, 0.1)',
                },
              }}
            >
              <EmailIcon />
              <Typography>Contact Me</Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default Hero; 