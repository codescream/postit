import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const columns = [
  {field: 'id', headerName: 'ID', width: 100, align: 'center', headerAlign: 'center' },
  { field: "name", headerName: "Name", width: 150, align: 'center', headerAlign: 'center' },
  { field: "email", headerName: "Email", width: 250, align: 'center', headerAlign: 'center' },
  { field: "age", headerName: "Age", width: 100, align: 'center', headerAlign: 'center' },
  { field: "country", headerName: "Country", width: 150, align: 'center', headerAlign: 'center' },
  { field: "address", headerName: "Address", width: 250, align: 'center', headerAlign: 'center' },
  {
    field: 'delete',
    headerName: "Delete", 
    width: 100, 
    align: 'center',
    headerAlign: 'center',
    sortable: false,
    renderCell: () => {
      return (
        <Button variant="contained" color="error">Del</Button>
      )
    }
  }
];

const rows = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 28,
    country: "USA",
    address: "123 Main St, Springfield",
  },
  {
    id: 2,
    name: "Maria Garcia",
    email: "maria.garcia@example.com",
    age: 34,
    country: "Spain",
    address: "456 Elm St, Madrid",
  },
  {
    id: 3,
    name: "Li Wei",
    email: "li.wei@example.com",
    age: 29,
    country: "China",
    address: "789 Oak St, Beijing",
  },
  {
    id: 4,
    name: "Yuki Tanaka",
    email: "yuki.tanaka@example.com",
    age: 24,
    country: "Japan",
    address: "101 Pine St, Tokyo",
  },
  {
    id: 5,
    name: "Olivia Brown",
    email: "olivia.brown@example.com",
    age: 31,
    country: "UK",
    address: "202 Cedar St, London",
  },
  {
    id: 6,
    name: "Carlos Santos",
    email: "carlos.santos@example.com",
    age: 27,
    country: "Brazil",
    address: "303 Maple St, Rio de Janeiro",
  },
  {
    id: 7,
    name: "Amina Ahmed",
    email: "amina.ahmed@example.com",
    age: 26,
    country: "Egypt",
    address: "404 Birch St, Cairo",
  },
  {
    id: 8,
    name: "Hans Müller",
    email: "hans.muller@example.com",
    age: 32,
    country: "Germany",
    address: "505 Walnut St, Berlin",
  },
  {
    id: 9,
    name: "Sofia Rossi",
    email: "sofia.rossi@example.com",
    age: 30,
    country: "Italy",
    address: "606 Ash St, Rome",
  },
  {
    id: 10,
    name: "Arjun Patel",
    email: "arjun.patel@example.com",
    age: 29,
    country: "India",
    address: "707 Cherry St, Mumbai",
  },
  {
    id: 11,
    name: "Emma Johnson",
    email: "emma.johnson@example.com",
    age: 28,
    country: "Canada",
    address: "808 Maple St, Toronto",
  },
  {
    id: 12,
    name: "Fatima Khan",
    email: "fatima.khan@example.com",
    age: 27,
    country: "Pakistan",
    address: "909 Oak St, Karachi",
  },
  {
    id: 13,
    name: "Luis Gonzalez",
    email: "luis.gonzalez@example.com",
    age: 33,
    country: "Mexico",
    address: "1010 Pine St, Mexico City",
  },
  {
    id: 14,
    name: "Sara Dubois",
    email: "sara.dubois@example.com",
    age: 25,
    country: "France",
    address: "1111 Cedar St, Paris",
  },
  {
    id: 15,
    name: "Mikhail Ivanov",
    email: "mikhail.ivanov@example.com",
    age: 35,
    country: "Russia",
    address: "1212 Birch St, Moscow",
  },
  {
    id: 16,
    name: "Anna Smirnova",
    email: "anna.smirnova@example.com",
    age: 24,
    country: "Russia",
    address: "1313 Walnut St, St. Petersburg",
  },
  {
    id: 17,
    name: "Emily Clark",
    email: "emily.clark@example.com",
    age: 31,
    country: "Australia",
    address: "1414 Ash St, Sydney",
  },
  {
    id: 18,
    name: "Ahmed Hassan",
    email: "ahmed.hassan@example.com",
    age: 28,
    country: "UAE",
    address: "1515 Cherry St, Dubai",
  },
  {
    id: 19,
    name: "Chin Ho",
    email: "chin.ho@example.com",
    age: 29,
    country: "South Korea",
    address: "1616 Maple St, Seoul",
  },
  {
    id: 20,
    name: "David Kim",
    email: "david.kim@example.com",
    age: 27,
    country: "South Korea",
    address: "1717 Oak St, Busan",
  },
];

const Users = () => {
  return (
    <div className="w-4/5 h-full p-2 flex flex-col gap-2 overflow-auto">
      <div className="flex justify-between items-center">
        <p>All Users</p>
        <Link to={'/new-user'}>
          <Button 
            variant="outlined" 
            size="small"
            sx={{ backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: 'white', color: 'black', borderColor: 'black' } }}
          >
            New User
          </Button>
        </Link>
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

export default Users;
