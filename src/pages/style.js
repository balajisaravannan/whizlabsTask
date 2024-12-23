import { makeStyles } from "@mui/styles"

const useStyle = makeStyles((theme) => ({
    btnRoot:{
        "&.MuiButton-root":{
            backgroundColor: "#2575fc",
              color: "#fff",
              borderRadius: "20px",
              marginTop: 2,
              padding: "7px 20px",
              "&:hover": {
                backgroundColor: "#6a11cb",
              },
        }
    },
   
}))
export default useStyle