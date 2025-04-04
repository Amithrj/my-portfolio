import React from 'react';
import { Typography, Paper, Box, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';

interface TestimonialsProps {
  themeMode: 'light' | 'dark';
}

const Testimonials: React.FC<TestimonialsProps> = ({ themeMode }) => {
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
          Testimonials
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Content will be added here later */}
        </Box>
      </Paper>
    </motion.div>
  );
};

export default Testimonials; 