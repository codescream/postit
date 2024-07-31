import { TextField, Button } from "@mui/material";
import { FaUserPlus } from "react-icons/fa";
import { useState } from "react";

const NewUser = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(null);
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const handleSubmit = () => {

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
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField 
            label="Last Name"
            name="lastname"
            type="text"
            size="small"
            className="w-1/2"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-3/4 justify-center">
          <TextField 
            label="Email"
            name="email"
            type="email"
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-1/2"
          />
          <TextField 
            label="Age"
            name="age"
            size="small"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-1/2"
          />
        </div>
        <div className="flex gap-2 w-3/4 justify-center">
          <TextField 
            label="Country"
            name="country"
            type="text"
            size="small"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-1/2"
          />
          <TextField 
            label="Address"
            name="address"
            type="text"
            size="small"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-1/2"
          />
        </div>
        <div className="text-right w-3/4">
          <Button
            variant="outlined"
            endIcon={<FaUserPlus />}
            sx={{ backgroundColor: 'black', color: 'white', "&:hover": {bgcolor: 'white', color: 'black', borderColor: 'black' } }}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  )
}

export default NewUser;