import React from 'react';
import { Typography, Paper, Box, useTheme, useMediaQuery, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import PetsIcon from '@mui/icons-material/Pets';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ChatIcon from '@mui/icons-material/Chat';
import FacebookIcon from '@mui/icons-material/Facebook';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface ProjectsProps {
  themeMode: 'light' | 'dark';
}

const Projects: React.FC<ProjectsProps> = ({ themeMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const projects = [
    {
      title: 'Veterinary Hospital Management System',
      description: [
        'Developed a comprehensive web application to manage patient records, appointments, and medical history using Angular.',
        'Integrated a back-end server for data handling and ensured efficient management of patient-related data.',
      ],
      technologies: ['Angular', 'TypeScript', 'Node.js', 'MongoDB'],
      icon: <PetsIcon />,
    },
    {
      title: 'Restaurant One Solution (ROS)',
      description: [
        'Utilized Excel for data analysis to streamline restaurant operations.',
        'Created dashboards to track sales, inventory, and employee performance, improving operational efficiency.',
      ],
      technologies: ['Excel', 'Data Analysis', 'Dashboard'],
      icon: <RestaurantIcon />,
    },
    {
      title: 'Connect My Doctor (CMD)',
      description: [
        'Developed a comprehensive telehealth platform enabling seamless doctor-patient interactions and appointment management.',
        'Implemented a sophisticated appointment booking system with real-time availability tracking and automated scheduling.',
        'Created a symptom-based doctor recommendation system using machine learning algorithms to match patients with appropriate specialists.',
        'Integrated secure video consultation features with end-to-end encryption for private medical discussions.',
        'Built a patient portal with medical history tracking, prescription management, and digital health records.',
        'Developed a notification system for appointment reminders, prescription refills, and follow-up scheduling.',
        'Implemented a payment gateway for handling consultation fees and medical service payments.',
        'Added a review and rating system for doctors to help patients make informed decisions.',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io', 'JWT', 'WebRTC'],
      icon: <LocalHospitalIcon />,
    },
    {
      title: 'Real-Time Chat System with E-Commerce Integration',
      description: [
        'Developed a real-time chat system integrated with an e-commerce platform, enhancing communication and streamlining transactions.',
        'Enabled direct interaction between users and buyers, supporting bulk purchases and facilitating business negotiations.',
        'Incorporated live auction functionality for real-time bidding, dynamic pricing, and increased user engagement.',
        'Optimized customer experience by simplifying product inquiries, discussions, and order management.',
        'Used MERN stack (MongoDB, Express.js, React, Node.js) and WebSockets for real-time communication, ensuring scalability and performance.',
        'Contributed to increased sales and operational efficiency by optimizing communication workflows.',
      ],
      technologies: ['MERN Stack', 'WebSocket', 'MongoDB', 'Express.js', 'React', 'Node.js'],
      icon: <ChatIcon />,
    },
    {
      title: 'Facebook Clone',
      description: [
        'Developed a social networking platform inspired by Facebook.',
        'Implemented features such as user profiles, real-time chat, notifications, posts, likes, and comments.',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      icon: <FacebookIcon />,
    },
    {
      title: 'E-Commerce Platform',
      description: [
        'Built a full-featured e-commerce platform with user authentication and payment integration.',
        'Implemented product catalog, shopping cart, and order management systems.',
        'Added features like product search, filtering, and sorting for enhanced user experience.',
        'Integrated secure payment gateway and order tracking functionality.',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Stripe'],
      icon: <ShoppingCartIcon />,
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
          Projects
        </Typography>

        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', 
            gap: 3,
            '& > *': {
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }
          }}
        >
          {projects.map((project, index) => (
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
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: '12px',
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '40px',
                    height: '40px',
                  }}
                >
                  {project.icon}
                </Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: themeMode === 'light' ? 'text.primary' : 'text.secondary',
                    fontWeight: 600,
                    flex: 1,
                  }}
                >
                  {project.title}
                </Typography>
              </Box>
              <Box 
                component="ul" 
                sx={{ 
                  pl: 2, 
                  m: 0, 
                  mb: 2,
                  flex: 1,
                }}
              >
                {project.description.map((item, itemIndex) => (
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
              <Box 
                sx={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: 1,
                  mt: 'auto',
                }}
              >
                {project.technologies.map((tech, techIndex) => (
                  <Chip
                    key={techIndex}
                    label={tech}
                    size="small"
                    sx={{
                      background: themeMode === 'light'
                        ? 'rgba(33, 150, 243, 0.1)'
                        : 'rgba(33, 150, 243, 0.2)',
                      color: theme.palette.primary.main,
                      '&:hover': {
                        background: themeMode === 'light'
                          ? 'rgba(33, 150, 243, 0.2)'
                          : 'rgba(33, 150, 243, 0.3)',
                      },
                    }}
                  />
                ))}
              </Box>
            </Paper>
          ))}
        </Box>
      </Paper>
    </motion.div>
  );
};

export default Projects; 