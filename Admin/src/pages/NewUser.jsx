import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Snackbar, Alert, Slide } from "@mui/material";
import { FaUserPlus } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/reducers/auth";

const NewUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    country: "",
    address: "",
    password: "",
    role: "",
  });

  const [openSnackBar, setOpenSnackBar] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    
    dispatch(registerUser({...formData}))
    .then((res) => {
      console.log(res);
      setOpenSnackBar(true);
    })
    .catch((err) => console.log(err));
  }

  return (
    <div className="outlet justify-center items-center">
      <p className='text-center mb-5 text-lg font-bold'>Create New User</p>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2 items-center'>
        <div className="flex gap-2 w-3/4 justify-center">
          <TextField 
            label="First Name"
            name="firstname"
            type="text"
            size="small"
            className="w-1/2"
            value={firstName}
            onChange={(e) => {setFirstName(e.target.value); setFormData({...formData, name: `${e.target.value} ${lastName}`})}}
            required
          />
          <TextField 
            label="Last Name"
            name="lastname"
            type="text"
            size="small"
            className="w-1/2"
            value={lastName}
            onChange={(e) => {setLastName(e.target.value); setFormData({...formData, name: `${firstName} ${e.target.value}`})}}
            required
          />
        </div>
        <div className="flex gap-2 w-3/4 justify-center">
          <TextField 
            label="Email"
            name="email"
            type="email"
            size="small"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-1/2"
            required
          />
          <TextField 
            label="Age"
            name="age"
            size="small"
            type="number"
            value={formData.age}
            onChange={(e) => setFormData({...formData, age: e.target.value})}
            className="w-1/2"
            required
          />
        </div>
        <div className="flex gap-2 w-3/4 justify-center">
          <TextField 
            label="Country"
            name="country"
            type="text"
            size="small"
            value={formData.country}
            onChange={(e) => setFormData({...formData, country: e.target.value})}
            className="w-1/2"
            required
          />
          <TextField 
            label="Address"
            name="address"
            type="text"
            size="small"
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
            className="w-1/2"
            required
          />
        </div>
        <div className="flex gap-2 w-3/4 justify-center">
          <TextField 
            label="Password"
            name="password"
            type="password"
            size="small"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            className="w-1/2"
            required
          />
          <FormControl className="w-1/2" size="small">
                <InputLabel id="role-label">
                  Role
                </InputLabel>
                <Select
                  value={formData.role}
                  labelId="role-label"
                  id="role"
                  label="Role"
                  name="role"
                  required
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                >
                  <MenuItem value="user">
                    User
                  </MenuItem>
                  <MenuItem value="admin">
                    Admin
                  </MenuItem>
                </Select>
              </FormControl>
        </div>
        <div className="text-right w-3/4">
          <Button
            variant="outlined"
            type="submit"
            endIcon={<FaUserPlus />}
            sx={{ backgroundColor: 'black', color: 'white', "&:hover": {bgcolor: 'white', color: 'black', borderColor: 'black' } }}
          >
            Create
          </Button>
        </div>
      </form>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        TransitionComponent={Slide}
        onClose={() => setOpenSnackBar(false)}
      >
        <Alert
          // onClose={closeSnackBar}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
          // action={
          //   <Button color="inherit" size="small" onClick={undoDelete}>
          //     UNDO
          //   </Button>
          // }
        >
          User Create Successfully
        </Alert>
      </Snackbar>
    </div>
  )
}

export default NewUser;