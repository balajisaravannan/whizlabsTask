import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Grid2,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import useStyle from "./style";
import { useDispatch } from "react-redux";
import { setSnackbar } from "../redux/snackBar/snackBar";
const Login = () => {
  const classes = useStyle();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);
  const userEmail = localStorage.getItem("userEmail");
  const userPassword = localStorage.getItem("userPassword");
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const handleSubmit = () => {
    console.log(formik.values);
    if (
      userEmail === formik.values.email &&
      userPassword === formik.values.password
    ) {
      console.log("Logged in Successsfully!");
      navigate("/");
      localStorage.setItem("token",formik.values.email)
      dispatch(setSnackbar(true , "success" , "Logged in Successsfully!"))
    } else {
      dispatch(setSnackbar(true , "error" , "User not found"))
      console.log("User not found");
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      formik.handleSubmit();
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("BearerToken");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Grid2 container className={classes.mainRoot}>
      <Grid2
        item
        xs={12}
        sm={8}
        md={4}
        className={classes.subRoot}
        sx={{
          width: {
            xs: "100%",
            sm: "60%",
            md: "40%",
          },
        }}
      >
        <Box textAlign="center" mb={3}>
          <Avatar className={classes.avatarRoot} />
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginTop: 1, color: "#333" }}
          >
            Sign In
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", marginTop: 1, fontSize: "14px" }}
          >
            Please enter your details to access your account
          </Typography>
        </Box>
        <TextField
          name="email"
          type="email"
          label="Email Address"
          fullWidth
          size="small"
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          className={classes.TextFieldRoot}
        />
        <TextField
          name="password"
          type={showPassword ? "text" : "password"}
          label="Password"
          fullWidth
          variant="outlined"
          size="small"
          value={formik.values.password}
          onChange={formik.handleChange}
          onKeyDown={handleKeyDown}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            ),
          }}
          className={classes.TextFieldRoot}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="small"
          onClick={formik.handleSubmit}
          className={classes.btnRoot}
        >
          Sign In
        </Button>
        
        <Typography
          variant="body2"
          textAlign="center"
          sx={{ marginTop: 3, color: "#666" }}
        >
          Don't have an account?{" "}
          <Button
            variant="text"
            onClick={() => navigate("/register")}
            sx={{ color: "#2575fc", textTransform: "none", fontWeight: 600 }}
          >
            Register
          </Button>
        </Typography>
      </Grid2>
    </Grid2>
  );
};

export default Login;
