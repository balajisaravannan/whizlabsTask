import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import useStyle from './style';
import MenuIcon from '@mui/icons-material/Menu';

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false); 
  const location = useLocation(); 
  const classes = useStyle();

  const menuItems = [
    { label: 'Dashboard', path: '/' },
    { label: 'User', path: '/user' },
  ];

  const handleMenuClick = () => {
    setCollapsed((prevState) => !prevState); 
  };

  return (
    <Drawer
      variant="permanent"
      className={classes.DrawerBox}
    
        sx={{
          width: collapsed ? 70 : 170, 
          transition: 'width 0.3s', 
          overflow: 'hidden', 
          '& .MuiDrawer-paper': {
            width: collapsed ? 70 : 170, 
            transition: 'width 0.3s', 
            boxSizing: 'border-box',
            backgroundColor: '#1E1E2F',
            color: '#ffffff',
          },
        }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' ,paddingLeft:"16px",paddingRight:"16px"}}>
        <Typography variant="h6" color="primary" sx={{ whiteSpace: 'nowrap' }}>
         {!collapsed && "LOGO"} 
        </Typography>
        <IconButton onClick={handleMenuClick}>
          <MenuIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Toolbar>
      <List className={classes.ListBox}>
        {menuItems.map((item) => (
          <ListItem
            key={item.path}
            button
            component={Link}
            to={item.path}
            sx={{
              backgroundColor: location.pathname === item.path ? '#ffffff' : 'transparent',
              color: location.pathname === item.path ? '#000000' : '#ffffff',
              '&:hover': {
                backgroundColor: '#5A5A78',
                color: '#ffffff',
              },
              borderRadius: 2,
              marginBottom: 1,
            }}
          >
            <ListItemText
              primary={collapsed ? item.label.charAt(0) : item.label} 
              primaryTypographyProps={{
                fontSize: '1rem',
                fontWeight: 'bold',
                textAlign: collapsed ? 'center' : 'left',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
