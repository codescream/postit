import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90, align: 'center', headerAlign: 'center' },
  { field: "senderName", headerName: "Sender Name", width: 150, align: 'center', headerAlign: 'center' },
  { field: "recipientName", headerName: "Recipient Name", width: 150, align: 'center', headerAlign: 'center' },
  { field: "from", headerName: "From", width: 150, align: 'center', headerAlign: 'center' },
  { field: "to", headerName: "To", width: 150, align: 'center', headerAlign: 'center' },
  { field: "weight", headerName: "Weight (Kg)", width: 100, align: 'center', headerAlign: 'center' },
  { field: "cost", headerName: "Cost ($)", width: 100, align: 'center', headerAlign: 'center' },
  { field: 'notes', headerName: 'Notes', width: 200, align: 'center', headerAlign: 'center' },
  {
    field: "edit",
    headerName: "Edit",
    width: 100,
    sortable: false,
    renderCell: () => {
      return (
        <div className="flex items-center h-full justify-center">
          <button className="bg-blue-600 w-20 h-[20px] py-[15px] flex items-center justify-center rounded-md hover:bg-blue-500">Edit</button>
        </div>
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
        <div className="flex items-center h-full justify-center">
          <button className="bg-red-600 w-20 h-[20px] py-[15px] flex items-center justify-center rounded-md hover:bg-red-500">Del</button>
        </div>
      );
    },
    align: 'center',
    headerAlign: 'center'
  },
];

const rows = [
  {
    id: 1,
    senderName: "Alice",
    recipientName: "Bob",
    from: "New York",
    to: "Los Angeles",
    weight: "2",
    cost: "20",
    notes: "Handle with care",
  },
  {
    id: 2,
    senderName: "Charlie",
    recipientName: "Dave",
    from: "Chicago",
    to: "Houston",
    weight: "5",
    cost: "50",
    notes: "Fragile",
  },
  {
    id: 3,
    senderName: "Eve",
    recipientName: "Frank",
    from: "San Francisco",
    to: "Seattle",
    weight: "3",
    cost: "30",
    notes: "Keep upright",
  },
  {
    id: 4,
    senderName: "Grace",
    recipientName: "Heidi",
    from: "Miami",
    to: "Boston",
    weight: "1",
    cost: "10",
    notes: "Do not stack",
  },
  {
    id: 5,
    senderName: "Ivan",
    recipientName: "Judy",
    from: "Denver",
    to: "Phoenix",
    weight: "4",
    cost: "40",
    notes: "Deliver before 5 PM",
  },
  {
    id: 6,
    senderName: "Mallory",
    recipientName: "Oscar",
    from: "Dallas",
    to: "Philadelphia",
    weight: "6",
    cost: "60",
    notes: "Leave at front door",
  },
  {
    id: 7,
    senderName: "Peggy",
    recipientName: "Trent",
    from: "Atlanta",
    to: "San Diego",
    weight: "2.5",
    cost: "25",
    notes: "Ring bell on arrival",
  },
  {
    id: 8,
    senderName: "Sybil",
    recipientName: "Victor",
    from: "Orlando",
    to: "Las Vegas",
    weight: "3.5",
    cost: "35",
    notes: "Signature required",
  },
  {
    id: 9,
    senderName: "Trudy",
    recipientName: "Wendy",
    from: "Austin",
    to: "San Jose",
    weight: "4.5",
    cost: "45",
    notes: "Keep refrigerated",
  },
  {
    id: 10,
    senderName: "Victor",
    recipientName: "Yvonne",
    from: "Salt Lake City",
    to: "Portland",
    weight: "5.5",
    cost: "55",
    notes: "Handle with care",
  },
  {
    id: 11,
    senderName: "Alice",
    recipientName: "Bob",
    from: "New York",
    to: "Los Angeles",
    weight: "2",
    cost: "20",
    notes: "Fragile",
  },
  {
    id: 12,
    senderName: "Charlie",
    recipientName: "Dave",
    from: "Chicago",
    to: "Houston",
    weight: "5",
    cost: "50",
    notes: "Deliver before 5 PM",
  },
  {
    id: 13,
    senderName: "Eve",
    recipientName: "Frank",
    from: "San Francisco",
    to: "Seattle",
    weight: "3",
    cost: "30",
    notes: "Leave at front door",
  },
  {
    id: 14,
    senderName: "Grace",
    recipientName: "Heidi",
    from: "Miami",
    to: "Boston",
    weight: "1",
    cost: "10",
    notes: "Ring bell on arrival",
  },
  {
    id: 15,
    senderName: "Ivan",
    recipientName: "Judy",
    from: "Denver",
    to: "Phoenix",
    weight: "4",
    cost: "40",
    notes: "Signature required",
  },
  {
    id: 16,
    senderName: "Mallory",
    recipientName: "Oscar",
    from: "Dallas",
    to: "Philadelphia",
    weight: "6",
    cost: "60",
    notes: "Keep refrigerated",
  },
  {
    id: 17,
    senderName: "Peggy",
    recipientName: "Trent",
    from: "Atlanta",
    to: "San Diego",
    weight: "2.5",
    cost: "25",
    notes: "Handle with care",
  },
  {
    id: 18,
    senderName: "Sybil",
    recipientName: "Victor",
    from: "Orlando",
    to: "Las Vegas",
    weight: "3.5",
    cost: "35",
    notes: "Fragile",
  },
  {
    id: 19,
    senderName: "Trudy",
    recipientName: "Wendy",
    from: "Austin",
    to: "San Jose",
    weight: "4.5",
    cost: "45",
    notes: "Deliver before 5 PM",
  },
  {
    id: 20,
    senderName: "Victor",
    recipientName: "Yvonne",
    from: "Salt Lake City",
    to: "Portland",
    weight: "5.5",
    cost: "55",
    notes: "Leave at front door",
  },
  {
    id: 21,
    senderName: "Alice",
    recipientName: "Bob",
    from: "New York",
    to: "Los Angeles",
    weight: "2",
    cost: "20",
    notes: "Ring bell on arrival",
  },
  {
    id: 22,
    senderName: "Charlie",
    recipientName: "Dave",
    from: "Chicago",
    to: "Houston",
    weight: "5",
    cost: "50",
    notes: "Signature required",
  },
  {
    id: 23,
    senderName: "Eve",
    recipientName: "Frank",
    from: "San Francisco",
    to: "Seattle",
    weight: "3",
    cost: "30",
    notes: "Keep refrigerated",
  },
  {
    id: 24,
    senderName: "Grace",
    recipientName: "Heidi",
    from: "Miami",
    to: "Boston",
    weight: "1",
    cost: "10",
    notes: "Handle with care",
  },
  {
    id: 25,
    senderName: "Ivan",
    recipientName: "Judy",
    from: "Denver",
    to: "Phoenix",
    weight: "4",
    cost: "40",
    notes: "Fragile",
  },
  {
    id: 26,
    senderName: "Mallory",
    recipientName: "Oscar",
    from: "Dallas",
    to: "Philadelphia",
    weight: "6",
    cost: "60",
    notes: "Deliver before 5 PM",
  },
  {
    id: 27,
    senderName: "Peggy",
    recipientName: "Trent",
    from: "Atlanta",
    to: "San Diego",
    weight: "2.5",
    cost: "25",
    notes: "Leave at front door",
  },
  {
    id: 28,
    senderName: "Sybil",
    recipientName: "Victor",
    from: "Orlando",
    to: "Las Vegas",
    weight: "3.5",
    cost: "35",
    notes: "Ring bell on arrival",
  },
  {
    id: 29,
    senderName: "Trudy",
    recipientName: "Wendy",
    from: "Austin",
    to: "San Jose",
    weight: "4.5",
    cost: "45",
    notes: "Signature required",
  },
  {
    id: 30,
    senderName: "Victor",
    recipientName: "Yvonne",
    from: "Salt Lake City",
    to: "Portland",
    weight: "5.5",
    cost: "55",
    notes: "Keep refrigerated",
  },
];
const Parcels = () => {
  return (
    <div className="w-4/5 h-full p-2 flex flex-col gap-2 overflow-auto">
      <div className="flex justify-between items-center">
        <p>All Parcels</p>
        <button className="bg-black text-white p-1 px-2 rounded-md text-xs font-semibold">
          New Parcel
        </button>
      </div>
      <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
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
