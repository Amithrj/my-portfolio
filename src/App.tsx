import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import SkillsProgress from './components/SkillsProgress';
import Timeline from './components/Timeline';
import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

// Add sample data for skills and achievements
const skillsData = [
  { name: 'React', level: 90, category: 'Frontend' },
  { name: 'TypeScript', level: 85, category: 'Frontend' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'AWS', level: 75, category: 'DevOps' },
  { name: 'Docker', level: 70, category: 'DevOps' },
  { name: 'Python', level: 85, category: 'Backend' },
];

const achievementsData = [
  {
    date: '2025',
    title: 'AWS Certified Cloud Practitioner',
    description: 'Achieved AWS Cloud Practitioner certification',
    icon: <CloudIcon />,
  },
  {
    date: '2024',
    title: 'Full Stack Developer',
    description: 'Completed multiple full-stack projects with modern technologies',
    icon: <CodeIcon />,
  },
  {
    date: '2023',
    title: 'Bachelor\'s Degree',
    description: 'Graduated with a degree in Computer Science',
    icon: <SchoolIcon />,
  },
  {
    date: '2023',
    title: 'First Professional Role',
    description: 'Started career as a Software Developer',
    icon: <WorkIcon />,
  },
];

const experienceData = [
  {
    company: 'NTTF College',
    location: 'Bengaluru, India',
    position: 'Skill Development Course',
    period: 'November 2024 - February 2025',
    description: 'Advanced training in modern software development practices and technologies',
  },
  {
    company: 'Tech Solutions Inc.',
    location: 'Remote',
    position: 'Full Stack Developer',
    period: '2023 - Present',
    description: 'Developing and maintaining web applications using React, Node.js, and AWS',
  },
];

const App: React.FC = () => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
          primary: {
            main: '#2196F3',
            light: '#64B5F6',
            dark: '#1976D2',
          },
          secondary: {
            main: '#4CAF50',
            light: '#81C784',
            dark: '#388E3C',
          },
          background: {
            default: themeMode === 'light' ? '#F5F5F5' : '#121212',
            paper: themeMode === 'light' ? '#FFFFFF' : '#1E1E1E',
          },
          text: {
            primary: themeMode === 'light' ? '#212121' : '#FFFFFF',
            secondary: themeMode === 'light' ? '#757575' : '#B0B0B0',
          },
        },
        typography: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          h1: { fontWeight: 700 },
          h2: { fontWeight: 600 },
          h3: { fontWeight: 600 },
          h4: { fontWeight: 600 },
          h5: { fontWeight: 500 },
          h6: { fontWeight: 500 },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                borderRadius: 8,
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundImage: 'none',
              },
            },
          },
        },
      }),
    [themeMode]
  );

  const handleToggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            minHeight: '100vh',
            background: themeMode === 'light'
              ? 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
              : 'linear-gradient(135deg, #1a1a1a 0%, #2c3e50 100%)',
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Header onToggleTheme={handleToggleTheme} themeMode={themeMode} />
            <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero themeMode={themeMode} />
                      <About themeMode={themeMode} />
                      <Experience themeMode={themeMode} />
                      <Projects themeMode={themeMode} />
                      <Box sx={{ py: 8, px: { xs: 2, sm: 4, md: 6 } }}>
                        <SkillsProgress themeMode={themeMode} skills={skillsData} />
                      </Box>
                      <Box sx={{ py: 8, px: { xs: 2, sm: 4, md: 6 } }}>
                        <Timeline themeMode={themeMode} achievements={achievementsData} />
                      </Box>
                      <Box sx={{ py: 8, px: { xs: 2, sm: 4, md: 6 } }}>
                        <ContactForm themeMode={themeMode} />
                      </Box>
                      <Testimonials themeMode={themeMode} />
                    </>
                  }
                />
                <Route path="/about" element={<About themeMode={themeMode} />} />
                <Route path="/experience" element={<Experience themeMode={themeMode} />} />
                <Route path="/projects" element={<Projects themeMode={themeMode} />} />
                <Route path="/skills" element={<Skills themeMode={themeMode} />} />
                <Route path="/testimonials" element={<Testimonials themeMode={themeMode} />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App; 