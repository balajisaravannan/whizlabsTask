import {
  Box,
  Button,
  Chip,
  Dialog,
  Grid,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSnackbar } from "../components/redux/snackBar/snackBar";
import CustomTable from "../components/table/customTable";
import useStyle from "./style";
import { useFormik } from "formik";
import * as yup from "yup";
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CustomBox from "../components/Common/customBox";
const User = () => {
  const dispatch = useDispatch();
  const classes = useStyle();
  const pageOption = [10, 25, 50, 100];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pageOption[0]);
  const [pageCount, setPageCount] = useState(0);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [msg , setMsg] = useState(false)
  const [ customText , setCustomText] = useState("")
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [isEdit , setIsEdit] = useState(false)
  const handleCreate = () => {
    setOpen(true);
    setIsEdit(false)
    formik.resetForm()
  };

  const handleClose = () => {
    setOpen(false);
    formik.resetForm();
    setIsEdit(false)
  };

  const validationSchema = yup.object({
    taskName: yup.string("Enter task name").required("Task name is required").test(
      "is-unique",
      "Task name already exists",
      function (value) {
        if (isEdit) return true; 
        return !rows.some((row) => row.taskName.toLowerCase() === value?.toLowerCase());
      }
    ),
    taskDescription: yup
      .string("Enter task description")
      .required("Task description is required"),
    status: yup.string("Select status").required("Status is required"),
  });
  const formik = useFormik({
    initialValues: {
      taskName: "",
      taskDescription: "",
      status: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });
  function handleSubmit(){
      const newTask = {
        id: rows.length + 1,
        sno: rows.length + 1,
        taskName: formik.values.taskName,
        taskDescription: formik.values.taskDescription,
        status: formik.values.status,  
      };
  
      const updatedRows = [...rows, newTask];
      setRows(updatedRows);
      setFilteredRows(updatedRows);
      dispatch(setSnackbar(true, "success", "Task Created Successfully!"));
    setOpen(false);
    formik.resetForm();
  };
  
  function handleUpdate(row) {
    console.log("Update Row:", row);
    setOpen(true);
    setIsEdit(true);
    formik.setFieldValue("taskName", row.taskName);
    formik.setFieldValue("taskDescription", row.taskDescription);
    formik.setFieldValue("status", row.status);
    console.log(formik.values.status)
    console.log(rows)
    const updatedRows = rows.map((item) =>
      item.id === row.id ? { ...item, status: row.status } : item
    );
  
    setRows(updatedRows);
    setFilteredRows(updatedRows);
  };

  const handleDelete = (id) => {
    console.log(msg)
    setMsg(true)
    setCustomText("Are you sure want to Delete?")
    setTaskToDelete(id);
   
  };
  
  const handleSearch = (value) => {
    setSearch(value);

    if (!value) {
      setFilteredRows(rows);
    } else {
      const filtered = rows.filter((row) =>
        row.taskName.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredRows(filtered);
    }
  };
  const columns = [
    {
      field: "sno",
      headerName: "S.no",
      minWidth: 60,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "taskName",
      headerName: "Task Name",
      headerAlign: "center",
      align: "center",
      minWidth:200
    },
    {
      field: "taskDescription",
      headerName: "Task Description",
      headerAlign: "center",
      align: "center",
      flex:1,
      minWidth:300
    },
    {
      field: "status",
      headerName: "Status",
      headerAlign: "center",
      align: "center",
      minWidth:150,
      renderCell: (params) => {
        const status = params.value; 
        let color = "default";
        if (status === "Active") {
          color = "primary"; 
        } else if (status === "In Progress") {
          color = "warning"; 
        } else if (status === "Completed") {
          color = "success"; 
        }
  
        return <Chip label={status} color={color} sx={{width:"100%",maxWidth:"100px"}}/>;
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      renderCell: (params) => (
        <Box sx={{ display: "flex", justifyContent:"space-evenly" }}>
          <IconButton
            color="primary"
            onClick={() => handleUpdate(params.row)}
          >
            <EditNoteIcon />
          </IconButton>
          <IconButton
            color="error"
            onClick={() => handleDelete(params.row.id)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];
  const handleCustomYes = () => {
    const updatedRows = rows.filter((row) => row.id !== taskToDelete);
    setRows(updatedRows);
    setFilteredRows(updatedRows);
    setMsg(false); 
    dispatch(setSnackbar(true, "success", "Task Deleted Successfully!"));
  };
  const handleCustomNo = () => {
    setMsg(false); 
  };
  const props = {
    rows: filteredRows,
    columns: columns,
    search: search,
    setSearch: setSearch,
    page: page,
    setPage: setPage,
    rowsPerPage: rowsPerPage,
    setRowsPerPage: setRowsPerPage,
    pageCount: pageCount,
    pageOption: pageOption,
    isLoading: isLoading,
    handleSearch: handleSearch,
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBlockEnd: "20px",
          alignItems: "center",
          paddingBottom: "20px",
          "@media (max-width: 426px)": {
            flexDirection: "column",
            alignItems: "flex-start", 
          },
        }}
      >
        <Typography sx={{"@media (max-width: 426px)": {
            marginBottom:"10px"
          },}}>User</Typography>
        
        <Button className={classes.btnRoot} onClick={handleCreate}>
        Create Task
        </Button>
      </Box>

      {open && (
        <Grid
          container
          spacing={2}
          sx={{
            backgroundColor: "#fff",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "5px",
          }}
        >
          <Grid item xs={12}>
            <Typography variant="h6">{isEdit ? "Update Task" : "Create Task"} </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              size="small"
              label="Task Name"
              name="taskName"
              value={formik.values.taskName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.taskName && Boolean(formik.errors.taskName)}
              helperText={formik.touched.taskName && formik.errors.taskName}
              disabled={isEdit}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              size="small"
              label="Task Description"
              name="taskDescription"
              value={formik.values.taskDescription}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.taskDescription &&
                Boolean(formik.errors.taskDescription)
              }
              helperText={
                formik.touched.taskDescription && formik.errors.taskDescription
              }
              disabled={isEdit}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              select
              size="small"
              fullWidth
              label="Status"
              name="status"
              value={formik.values.status}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.status && Boolean(formik.errors.status)}
              helperText={formik.touched.status && formik.errors.status}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </TextField>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={formik.handleSubmit}
              sx={{ marginRight: "10px" }}
            >
              Save
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      )}

      <CustomTable props={props} />

      <Dialog open={msg} sx={{zIndex:999}}>
        <CustomBox  handleCustomYes={handleCustomYes} handleCustomNo={handleCustomNo} customText={customText} />
      </Dialog>
    </div>
  );
};

export default User;
