import { configureStore } from "@reduxjs/toolkit";
import snackBar from "./snackBar/snackBar";
export default configureStore({
    reducer:{
        snackbar: snackBar
    }
})