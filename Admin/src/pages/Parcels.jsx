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
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { allParcels, deleteParcel as delParcel } from "../redux/reducers/parcels";

const Parcels = () => {
  const parcelState = useSelector((state) => state.parcelsReducer.data);
  const isLoading = useSelector((state) => state.parcelsReducer.isLoading);

  const [open, setOpen] = useState(false);
  const [parcel, setParcel] = useState({});
  const [snackBar, setSnackBar] = useState(false);
  const [parcels, setParcels] = useState(parcelState);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 90,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "senderName",
      headerName: "Sender Name",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "recipientName",
      headerName: "Recipient Name",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "from",
      headerName: "From",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "to",
      headerName: "To",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "weight",
      headerName: "Weight (Kg)",
      width: 100,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "cost",
      headerName: "Cost ($)",
      width: 100,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "note",
      headerName: "Note",
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 100,
      sortable: false,
      renderCell: (params) => {
        return (
          <Link to={`/parcel/${params.row._id}`}>
            <Button variant="contained">Edit</Button>
          </Link>
          // <div className="flex items-center h-full justify-center">
          //   <button className="bg-blue-600 w-20 h-[20px] py-[15px] flex items-center justify-center rounded-md hover:bg-blue-500">Edit</button>
          // </div>
        );
      },
      align: "center",
      headerAlign: "center",
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 100,
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
      align: "center",
      headerAlign: "center",
    },
  ];

  const handleClickOpen = (row) => {
    setOpen(true);
    setParcel(row);
  };

  const closeModal = (option) => {
    setOpen(false);
    if (option === "delete") {
      setSnackBar(true);
      setParcels(parcels.filter((p) => p._id != parcel._id));
    }
  };

  const closeSnackBar = () => {
    setSnackBar(false);
  };

  const deleteParcel = () => {
    console.log("snackbar closed & deleted");
    dispatch(delParcel(parcel._id))
    .then((res) => console.log(res))
    .catch((err) =>console.error(err));
  };

  const undoDelete = () => {
    console.log("snackbar closed nothing deleted");
    setParcels(parcelState);
    closeSnackBar();
  };

  const dispatch = useDispatch();

  useEffect(() => {
    setParcels(parcelState);
  }, [parcelState]);

  useEffect(() => {
    dispatch(allParcels());
  }, [dispatch]);

  return (
    <div className="w-4/5 h-full p-2 flex flex-col gap-2 overflow-auto">
      <div className="flex justify-between items-center">
        <p>All Parcels</p>
        <Link to={"/new-parcel"}>
          {/* <button className="bg-black text-white p-1 px-2 rounded-md text-xs font-semibold">
            New Parcel
          </button> */}
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
            New Parcel
          </Button>
        </Link>
      </div>
      <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={parcels}
          columns={columns}
          getRowId={(row) => row._id}
          loading={isLoading}
          slotProps={{
            loadingOverlay: {
              variant: "skeleton",
              noRowsVariant: "skeleton",
            },
          }}
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
          {`Delete Parcel - ${parcel._id}`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className="flex flex-col"
          >
            <span className="text-center text-black">
              <span className="font-bold">Recipient: </span>
              {parcel.recipientName}
            </span>
            <span className="flex justify-around text-black">
              <span>
                <span className="font-bold">From: </span>
                {parcel.from}
              </span>
              <span>
                <span className="font-bold">To: </span>
                {parcel.to}
              </span>
            </span>
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
          deleteParcel();
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
          Parcel Deleted!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Parcels;
