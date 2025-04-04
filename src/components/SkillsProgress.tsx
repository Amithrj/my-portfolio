import React from 'react';
import {
  Box,
  Typography,
  LinearProgress,
  useTheme,
  Paper,
} from '@mui/material';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillsProgressProps {
  themeMode: 'light' | 'dark';
  skills: Skill[];
}

const SkillsProgress: React.FC<SkillsProgressProps> = ({ themeMode, skills }) => {
  const theme = useTheme();

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <Box sx={{ width: '100%' }}>
      {Object.entries(groupedSkills).map(([category, categorySkills]) => (
        <Paper
          key={category}
          elevation={2}
          sx={{
            p: 3,
            mb: 3,
            background: themeMode === 'light'
              ? 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)'
              : 'linear-gradient(135deg, rgba(30,30,30,0.95) 0%, rgba(30,30,30,0.85) 100%)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              color: 'text.primary',
              mb: 2,
              fontWeight: 600,
            }}
          >
            {category}
          </Typography>
          {categorySkills.map((skill, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 1,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                  }}
                >
                  {skill.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    fontWeight: 500,
                  }}
                >
                  {skill.level}%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={skill.level}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: themeMode === 'light'
                    ? 'rgba(0, 0, 0, 0.1)'
                    : 'rgba(255, 255, 255, 0.1)',
                  '& .MuiLinearProgress-bar': {
                    borderRadius: 4,
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    transition: 'width 1s ease-in-out',
                  },
                }}
              />
            </Box>
          ))}
        </Paper>
      ))}
    </Box>
  );
};

export default SkillsProgress; 