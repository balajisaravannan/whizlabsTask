import React, { useState } from "react";
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

const Register = () => {
  const classes = useStyle()
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = yup.object({
    username: yup
      .string("Enter your username")
      .min(3, "Username should be at least 3 characters long")
      .required("Username is required"),
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
  
  localStorage.setItem("userName",formik.values.username)
  localStorage.setItem("userEmail",formik.values.email)
  localStorage.setItem("userPassword",formik.values.password)
  dispatch(setSnackbar(true , "success", "Registerd Successfully!"))
  console.log("Registerd Successfully!")
  navigate("/login")
}
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit
  });
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      formik.handleSubmit();
    }
  };
  return (
    <Grid2
      container
      className={classes.mainRoot}
    >
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
          <Avatar
           className={classes.avatarRoot}
            />
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginTop: 1, color: "#333" }}
          >
            Register
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#666", marginTop: 1, fontSize: "14px" }}
          >
            Create your account to get started
          </Typography>
        </Box>
          <TextField
            name="username"
            type="text"
            label="Username"
            fullWidth
            size="small"
            variant="outlined"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            className={classes.TextFieldRoot}
          />
          <TextField
            name="email"
            type="email"
            label="Email Address"
            fullWidth
            variant="outlined"
            size="small"
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
            className={classes.btnRoot}
            onClick={formik.handleSubmit}
          >
            Register
          </Button>
        <Typography
          variant="body2"
          textAlign="center"
          sx={{ marginTop: 3, color: "#666" }}
        >
          Already have an account?{" "}
          <Button
            variant="text"
            onClick={() => navigate("/login")}
            sx={{ color: "#2575fc", textTransform: "none", fontWeight: 600 }}
          >
            Sign In
          </Button>
        </Typography>
      </Grid2>
    </Grid2>
  );
};

export default Register;
