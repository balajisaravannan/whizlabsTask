import { makeStyles } from "@mui/styles"

const useStyle = makeStyles((theme) => ({
    // outlet
    OutletBox:{
        "&.MuiGrid2-root":{
            backgroundColor:"#f7f7f7",
            padding:"30px"
        }
    },
    headerGrid:{
        "&.MuiGrid2-root":{
            backgroundColor:"#5A5A78",
            padding:"15px",
            color:"#fff",
            display:"flex",
            justifyContent : "flex-end"
            
        }
    },
    mi2:{
        "&.MuiTypography-root":{
            marginInline:"10px",
            cursor:"pointer"
        }
    },
    // sidebar
    DrawerBox:{
        // "&.MuiDrawer-root":{
        //     // width: 250,
        //     flexShrink: 0,
        //     [`& .MuiDrawer-paper`]: {
        //       width: 250,
        //       boxSizing: 'border-box',
        //       backgroundColor: '#1E1E2F',
        //       color: '#ffffff',
        //     },  
        // }
    },
    ListBox:{
        "&.MuiList-root":{
            paddingTop:"15px"
        }
    }
    

}))

export default useStyle