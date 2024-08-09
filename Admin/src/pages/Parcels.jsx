import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { allParcels } from "../redux/reducers/parcels";
// import { parcelAPI } from "../api/parcels";

const columns = [
  { field: "_id", headerName: "ID", width: 90, align: 'center', headerAlign: 'center' },
  { field: "senderName", headerName: "Sender Name", width: 150, align: 'center', headerAlign: 'center' },
  { field: "recipientName", headerName: "Recipient Name", width: 150, align: 'center', headerAlign: 'center' },
  { field: "from", headerName: "From", width: 150, align: 'center', headerAlign: 'center' },
  { field: "to", headerName: "To", width: 150, align: 'center', headerAlign: 'center' },
  { field: "weight", headerName: "Weight (Kg)", width: 100, align: 'center', headerAlign: 'center' },
  { field: "cost", headerName: "Cost ($)", width: 100, align: 'center', headerAlign: 'center' },
  { field: 'note', headerName: 'Note', width: 200, align: 'center', headerAlign: 'center' },
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
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: "delete",
    headerName: "Delete",
    width: 100,
    sortable: false,
    renderCell: () => {
      return (
          <Button variant="contained" color="error">Del</Button>
      );
    },
    align: 'center',
    headerAlign: 'center'
  },
];


const Parcels = () => {
  const parcels = useSelector(state => state.parcelsReducer.data);
  const isLoading = useSelector(state => state.parcelsReducer.isLoading)
  console.log('all parcels: ', parcels);
  console.log(isLoading);

  // const [parcels, setParcels] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
  //   parcelAPI.get('/')
  // .then((res) => {
  //   setParcels(res.data);
  //   console.log(res);
  // })
  // .catch((error) => console.error(error));
  dispatch(allParcels())
  }, [dispatch]);
    
  return (
    <div className="w-4/5 h-full p-2 flex flex-col gap-2 overflow-auto">
      <div className="flex justify-between items-center">
        <p>All Parcels</p>
        <Link to={'/new-parcel'}>
          {/* <button className="bg-black text-white p-1 px-2 rounded-md text-xs font-semibold">
            New Parcel
          </button> */}
          <Button 
            variant="outlined" 
            size="small"
            sx={{ backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: 'white', color: 'black', borderColor: 'black' } }}
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
              variant: 'skeleton',
              noRowsVariant: 'skeleton'
            }
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
    </div>
  );
};

export default Parcels;
