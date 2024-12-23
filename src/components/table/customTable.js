import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Autocomplete, Grid, Pagination, PaginationItem, TextField, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { memo } from "react";

const CustomTable = ({ props }) => {
  const theme = useTheme();
  const { page, pageCount, pageOption, rowsPerPage, isLoading, rows, columns } = props;

  const handleChange = (event, newValue) => {
    props.setRowsPerPage(newValue);
  };

  const handleSearch = (e) => {
    props.handleSearch(e)
  };

  const CustomFooter = () => (
    <Grid className="flex justify-between items-center p-2" sx={{display:"flex",justifyContent:"space-between",alignItem:"center",padding:"10px"}}>
      <Grid className="flex items-center max-h-fit">
        <Autocomplete
          disablePortal
          id="page"
          size="small"
          value={rowsPerPage}
          onChange={handleChange}
          options={pageOption}
          getOptionLabel={(option) => option.toString()}
          disableClearable
          renderInput={(params) => <TextField {...params} size="small" sx={{ width: '70px' }} />}
        />
        <Typography variant="body1" ml="6px" color="GrayText" sx={{fontSize:"13px"}}>rows per page</Typography>
      </Grid>
      <Pagination
        color="primary"
        size="small"
        count={Math.ceil(pageCount / rowsPerPage)}
        page={props.page + 1}
        onChange={(event, newPage) => props.setPage(newPage - 1)}
        boundaryCount={1}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowLeft, next: ArrowRight }}
            {...item}
            sx={{
              borderRadius: "5px",
              padding: "10px",
              "&.Mui-selected": {
                backgroundColor: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: "#ccc",
                  color: "#000",
                },
              },
              "& .MuiSvgIcon-root": { fontSize: 28 },
            }}
          />
        )}
      />
    </Grid>
  );

  return (
    <Grid>
      <Grid className="flex justify-end mb-3" sx={{display:"flex",justifyContent:"end",marginBottom:"10px"}}>
        <TextField size="small" placeholder="Search" onChange={(e) => handleSearch(e.target.value)} />
      </Grid>
      <DataGrid
        columns={columns}
        rows={rows}
        loading={isLoading}
        density="compact"
        disableColumnMenu
        disableRowSelectionOnClick
        showColumnVerticalBorder
        slots={{ footer: CustomFooter }}
        paginationModel={{ page, pageSize: rowsPerPage }}
        sx={{
          "--DataGrid-overlayHeight": "200px",
          "& .MuiDataGrid-columnHeaderTitle": { color: theme.palette.primary.main },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "#E5F2FF",
            borderRight: "1px solid #ccc",
          },
          "& .MuiDataGrid-columnSeparator": { display: "none" },
          "& .MuiDataGrid-cell": {
            borderRight: "1px solid #ccc",
            textAlign: "center",
          },
          "& .MuiDataGrid-main": { width: "100%", height: "calc(100dvh - 280px)" },
        }}
      />
    </Grid>
  );
};

export default memo(CustomTable);
