import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const CustomBox = ({handleCustomYes,handleCustomNo,customText}) => {
    
  return (
    <Box sx={{width:"100%",maxWidth:"600px",padding:"30px"}}>
        <Typography>{customText}</Typography>
        <Box sx={{display:"flex",justifyContent:"space-evenly",marginBlockStart:"30px"}}>
            <Button onClick={handleCustomNo} sx={{backgroundColor:"blue",color:"#fff"}}>No</Button>
            <Button onClick={handleCustomYes} sx={{backgroundColor:"red",color:"#fff"}}>Yes</Button>
        </Box>
    </Box>
  )
}

export default CustomBox