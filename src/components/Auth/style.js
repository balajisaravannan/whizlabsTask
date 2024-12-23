import { makeStyles } from "@mui/styles"

const useStyle = makeStyles((theme) => ({
    mainRoot:{
        "&.MuiGrid2-root":{
            height: "100vh",
            background: "linear-gradient(to right, #6a11cb, #2575fc)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding:"30px"
        }
    },
    subRoot:{
        "&.MuiGrid2-root":{
            background: "#fff",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            margin: "0 auto", 
        }
    },
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
    TextFieldRoot:{
        "&.MuiTextField-root":{
            marginBlockEnd:"10px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
        }
    },
    avatarRoot:{
        "&.MuiAvatar-root":{
                margin: "0 auto",
                backgroundColor: "#2575fc",
                width: "46px",
                height: "46px",
        }
    }
}))
export default useStyle