import React from 'react'
import Box from '@mui/material/Box';
import Header from './Header';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import { Grid2 } from '@mui/material';
import useStyle from './style';
import Auth from '../components/Auth/auth';

const MainLayout = () => {
  const classes = useStyle()
  return (
      <Box sx={{ display: "flex" }}>
          <SideBar />
          <Box component="main" sx={{ flexGrow: 1,width: "100%", overflow: "hidden" }}>
            <Header />
            <Grid2 className={classes.OutletBox}>
              <Outlet />
            </Grid2>
          </Box>
        </Box>
  )
}

export default MainLayout