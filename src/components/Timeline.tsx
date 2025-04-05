import React from 'react';
import {
  Box,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';

interface Achievement {
  date: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface TimelineProps {
  themeMode: 'light' | 'dark';
  achievements: Achievement[];
}

const Timeline: React.FC<TimelineProps> = ({ themeMode, achievements }) => {
  const theme = useTheme();

  return (
    <Box sx={{ position: 'relative', py: 4 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          mb: 4,
          color: 'text.primary',
          fontWeight: 600,
        }}
      >
        Achievements
      </Typography>
      <Box
        sx={{
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '2px',
            height: '100%',
            backgroundColor: theme.palette.primary.main,
            opacity: 0.3,
          },
        }}
      >
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 4,
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: theme.palette.primary.main,
                  boxShadow: `0 0 0 4px ${theme.palette.background.paper}`,
                },
              }}
            >
              <Box
                sx={{
                  width: '50%',
                  pr: 4,
                  textAlign: 'right',
                }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    background: themeMode === 'light'
                      ? 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)'
                      : 'linear-gradient(135deg, rgba(30,30,30,0.95) 0%, rgba(30,30,30,0.85) 100%)',
                    backdropFilter: 'blur(10px)',
                    '&:hover': {
                      transform: 'translateX(-5px)',
                      transition: 'transform 0.3s ease',
                    },
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    color="primary"
                    sx={{ fontWeight: 600 }}
                  >
                    {achievement.date}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {achievement.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: 'text.secondary' }}
                  >
                    {achievement.description}
                  </Typography>
                </Paper>
              </Box>
              <Box
                sx={{
                  width: '50%',
                  pl: 4,
                  textAlign: 'left',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.background.paper,
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                >
                  {achievement.icon}
                </Box>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Timeline; 