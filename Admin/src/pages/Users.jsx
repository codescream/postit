import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Snackbar,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { allUsers, deleteUser as delUser } from "../redux/reducers/users";

const Users = () => {
  const usersState = useSelector((state) => state.usersReducer.data);
  const [open, setOpen] = useState(false);
  const [snackBar, setSnackBar] = useState(false);
  const [users, setUsers] = useState(usersState);
  const [user, setUser] = useState({});

  const dispatch = useDispatch();

  const handleClickOpen = (row) => {
    setOpen(true);
    setUser(row);
  };

  const closeModal = (option) => {
    setOpen(false);

    if (option === "delete") {
      setSnackBar(true);
      setUsers(users.filter((u) => u._id !== user._id));
    }
  };

  const closeSnackBar = () => {
    setSnackBar(false);
  };

  const deleteUser = () => {
    dispatch(delUser(user._id))
      .then((res) => {
        console.log(res);
        console.log("user deleted");
      })
      .catch((err) => {
        console.log(err);
        setUsers(usersState);
      });
  };

  const undoDelete = () => {
    setSnackBar(false);
    console.log("deletion undone");
    setUsers(usersState);
  };

  useEffect(() => {
    setUsers(usersState);
  }, [usersState]);

  useEffect(() => {
    dispatch(allUsers());
  }, [dispatch]);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 100,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      width: 100,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "country",
      headerName: "Country",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "address",
      headerName: "Address",
      width: 250,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 100,
      align: "center",
      headerAlign: "center",
      sortable: false,
      renderCell: (params) => {
        return (
          <Button
            variant="contained"
            color="error"
            onClick={() => handleClickOpen(params.row)}
          >
            Del
          </Button>
        );
      },
    },
  ];

  return (
    <div className="w-4/5 h-full p-2 flex flex-col gap-2 overflow-auto">
      <div className="flex justify-between items-center">
        <p>All Users</p>
        <Link to={"/new-user"}>
          <Button
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
                borderColor: "black",
              },
            }}
          >
            New User
          </Button>
        </Link>
      </div>
      <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={users}
          columns={columns}
          getRowId={(row) => row._id}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5, 10, 15]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
      <Dialog
        open={open}
        onClose={closeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Delete User - ${user._id} ?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className="flex flex-col"
          >
            {user.name}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => closeModal("cancel")}>Cancel</Button>
          <Button color="error" onClick={() => closeModal("delete")} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackBar}
        autoHideDuration={6000}
        TransitionComponent={Slide}
        onClose={() => {
          closeSnackBar();
          deleteUser();
        }}
      >
        <Alert
          // onClose={closeSnackBar}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
          action={
            <Button color="inherit" size="small" onClick={undoDelete}>
              UNDO
            </Button>
          }
        >
          User Deleted!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Users;
