import React from 'react';
import { Avatar, Grid2, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useStyle from './style';

const Header = () => {
  const classes = useStyle();
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); 
  const userName = localStorage.getItem('userName')
  const handleLogout = () => {
    localStorage.clear();  
    navigate('/login');  
  };
  return (
    <Grid2 className={classes.headerGrid}>
      {token && (
        <>
        <Typography className={classes.mi2} sx={{display:"flex"}}>
          <Avatar sx={{width:"25px",height:"25px",marginInlineEnd:"3px"}}/>
            {userName}
          </Typography>
          <Typography className={classes.mi2} onClick={handleLogout}>
            Logout
          </Typography>
        </>
      )}
    </Grid2>
  );
};
export default Header;
