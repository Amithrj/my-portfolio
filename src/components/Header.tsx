import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  useTheme, 
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
  Tooltip,
  Chip
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import CloudIcon from '@mui/icons-material/Cloud';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface HeaderProps {
  onToggleTheme: () => void;
  themeMode: 'light' | 'dark';
}

const Header: React.FC<HeaderProps> = ({ onToggleTheme, themeMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/testimonials', label: 'Testimonials' }
  ];

  const handleNavigation = (path: string) => {
    setDrawerOpen(false);
    if (path === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      }
    } else {
      navigate(path);
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:amithraj@example.com';
  };

  const drawer = (
    <Box
      sx={{
        width: 250,
        height: '100%',
        background: themeMode === 'light'
          ? 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)'
          : 'linear-gradient(135deg, rgba(30,30,30,0.95) 0%, rgba(30,30,30,0.85) 100%)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem 
            button 
            key={item.path}
            onClick={() => handleNavigation(item.path)}
            sx={{
              background: location.pathname === item.path ? 'rgba(33, 150, 243, 0.1)' : 'transparent',
              '&:hover': {
                background: 'rgba(33, 150, 243, 0.05)',
              },
            }}
          >
            <ListItemText 
              primary={item.label}
              sx={{
                color: location.pathname === item.path ? theme.palette.primary.main : 'text.primary',
                fontWeight: location.pathname === item.path ? 600 : 400,
              }}
            />
          </ListItem>
        ))}
        <Divider sx={{ my: 1 }} />
        <ListItem 
          button 
          onClick={handleEmailClick}
          sx={{
            '&:hover': {
              background: 'rgba(33, 150, 243, 0.05)',
            },
          }}
        >
          <ListItemIcon>
            <EmailIcon color="primary" />
          </ListItemIcon>
          <ListItemText 
            primary="Contact Me"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 500,
            }}
          />
        </ListItem>
        <ListItem 
          button 
          onClick={onToggleTheme}
          sx={{
            '&:hover': {
              background: 'rgba(33, 150, 243, 0.05)',
            },
          }}
        >
          <ListItemIcon>
            {themeMode === 'light' ? <Brightness4Icon color="primary" /> : <Brightness7Icon color="primary" />}
          </ListItemIcon>
          <ListItemText 
            primary={themeMode === 'light' ? 'Dark Mode' : 'Light Mode'}
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 500,
            }}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        background: 'transparent',
        backdropFilter: 'blur(10px)',
        backgroundColor: themeMode === 'light' 
          ? 'rgba(255, 255, 255, 0.8)'
          : 'rgba(30, 30, 30, 0.8)',
        borderBottom: `1px solid ${themeMode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'}`,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: '2px',
          backgroundColor: theme.palette.primary.main,
          transition: 'width 0.1s ease-out',
        }}
      />
      <Toolbar sx={{ maxWidth: 'lg', width: '100%', mx: 'auto' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexGrow: 1 }}>
          <Typography 
            variant="h6" 
            component={motion.div}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ 
              fontWeight: 700,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '0.5px',
              cursor: 'pointer'
            }}
            onClick={() => handleNavigation('/')}
          >
            Amithraj M
          </Typography>
          <Tooltip title="AWS Certified Cloud Practitioner" arrow>
            <Chip
              icon={<CloudIcon />}
              label="AWS Certified"
              color="primary"
              variant="outlined"
              sx={{
                borderColor: theme.palette.primary.main,
                '& .MuiChip-label': {
                  fontWeight: 500,
                },
                '&:hover': {
                  backgroundColor: 'rgba(33, 150, 243, 0.1)',
                },
              }}
            />
          </Tooltip>
        </Box>
        
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ 
                color: theme.palette.primary.main,
                '&:hover': {
                  transform: 'scale(1.1)',
                  transition: 'transform 0.2s ease-in-out',
                }
              }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              PaperProps={{
                sx: {
                  background: 'transparent',
                  backdropFilter: 'blur(10px)',
                }
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box 
            component={motion.div}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            sx={{ 
              display: 'flex', 
              gap: 2,
              alignItems: 'center',
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                sx={{
                  color: location.pathname === item.path ? theme.palette.primary.main : 'text.primary',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: location.pathname === item.path ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                    width: '80%',
                    height: '2px',
                    backgroundColor: theme.palette.primary.main,
                    transition: 'transform 0.3s ease',
                  },
                  '&:hover::after': {
                    transform: 'translateX(-50%) scaleX(1)',
                  },
                  fontWeight: location.pathname === item.path ? 600 : 400,
                }}
              >
                {item.label}
              </Button>
            ))}
            <Tooltip title={themeMode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}>
              <IconButton
                onClick={onToggleTheme}
                sx={{
                  color: theme.palette.primary.main,
                  '&:hover': {
                    transform: 'scale(1.1)',
                    transition: 'transform 0.2s ease-in-out',
                  }
                }}
              >
                {themeMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
              </IconButton>
            </Tooltip>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header; 