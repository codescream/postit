import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { LuPackagePlus } from "react-icons/lu";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputAdornment from "@mui/material/InputAdornment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUsers } from "../redux/reducers/users";
import { createParcel } from "../redux/reducers/parcels";
import dayjs from "dayjs";

const NewParcel = () => {
  const usersState = useSelector((state) => state.usersReducer.data);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    senderID: "",
    senderName: "",
    recipientName: "",
    senderEmail: "",
    recipientEmail: "",
    weight: "",
    cost: "",
    to: "",
    from: "",
    date: null,
    note: "",
  });

  const selectUser = (e) => {
    const sender = usersState.find((user) => user.name === e.target.value);
    setFormData({
      ...formData,
      senderName: e.target.value,
      senderID: sender._id,
      senderEmail: sender.email,
    });
  };

  const resetForm = () => {
    setFormData({
      senderID: "",
      senderName: "",
      recipientName: "",
      senderEmail: "",
      recipientEmail: "",
      weight: "",
      cost: "",
      to: "",
      from: "",
      date: null,
      note: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("for submiited");
    console.log(Date());
    console.log(formData.date.$d);
    dispatch(createParcel({ ...formData, date: formData.date.$d }))
      .then(() => resetForm())
      .catch((err) => console.log(err));
  };

  // useEffect(() => {
  //   setUsers(usersState);
  // }, [usersState]);

  useEffect(() => {
    dispatch(allUsers());
  }, [dispatch]);

  return (
    <div className="outlet">
      <p className="text-center mb-5 text-lg font-bold">Create New Parcel</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
        <div className="flex flex-row gap-2 w-full">
          <div className="flex gap-4 w-3/4 flex-col justify-center">
            <div className="flex gap-1">
              <FormControl className="w-1/2" size="small">
                <InputLabel id="demo-simple-select-label">
                  Sender Name
                </InputLabel>
                <Select
                  value={formData.senderName}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Sender Name"
                  name="senderName"
                  required
                  onChange={selectUser}
                >
                  {usersState?.map((user) => (
                    <MenuItem key={user.name} value={user.name}>
                      {user.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {/* <TextField 
                label="Sender Name"
                name='senderName'
                value={formData.senderName}
                onChange={(e) => setFormData({...formData, senderName: e.target.value})}
                size='small'
                className='w-1/2'
                required
              /> */}
              <TextField
                label="Recipient Name"
                name="recipientName"
                value={formData.recipientName}
                onChange={(e) =>
                  setFormData({ ...formData, recipientName: e.target.value })
                }
                size="small"
                className="w-1/2"
                required
              />
            </div>
            <div className="flex gap-1">
              <TextField
                label="Sender Email"
                name="senderEmail"
                value={formData.senderEmail}
                onChange={(e) =>
                  setFormData({ ...formData, senderEmail: e.target.value })
                }
                size="small"
                className="w-1/2"
                required
              />
              <TextField
                label="Recipient Email"
                name="recipientEmail"
                value={formData.recipientEmail}
                onChange={(e) =>
                  setFormData({ ...formData, recipientEmail: e.target.value })
                }
                size="small"
                className="w-1/2"
                required
              />
            </div>
            <div className="flex gap-1">
              <TextField
                label="From"
                name="from"
                value={formData.from}
                onChange={(e) =>
                  setFormData({ ...formData, from: e.target.value })
                }
                size="small"
                className="w-1/2"
                required
              />
              <TextField
                label="To"
                name="to"
                value={formData.to}
                onChange={(e) =>
                  setFormData({ ...formData, to: e.target.value })
                }
                size="small"
                className="w-1/2"
                required
              />
            </div>
          </div>
          <div className="flex gap-4 w-1/3 flex-col">
            <TextField
              label="Weight"
              name="weight"
              value={formData.weight}
              onChange={(e) =>
                setFormData({ ...formData, weight: e.target.value })
              }
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">Kg</InputAdornment>
                ),
              }}
              required
            />
            <TextField
              label="Cost"
              name="cost"
              value={formData.cost}
              onChange={(e) =>
                setFormData({ ...formData, cost: e.target.value })
              }
              size="small"
              fullWidth
              InputProps={{
                endAdornment: <InputAdornment position="end">$</InputAdornment>,
              }}
              required
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date"
                name="date"
                value={formData.date ? dayjs(formData.date) : formData.date}
                onChange={(newDate) =>
                  setFormData({ ...formData, date: newDate })
                }
                slotProps={{ textField: { size: "small" } }}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div>
          <TextField
            label="Note"
            multiline
            rows={5}
            fullWidth
            name="note"
            value={formData.note}
            onChange={(e) => setFormData({ ...formData, note: e.target.value })}
          />
        </div>
        <div className="text-right">
          <Button
            className="w-fit"
            variant="outlined"
            type="submit"
            endIcon={<LuPackagePlus />}
            sx={{
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                bgcolor: "white",
                color: "black",
                borderColor: "black",
              },
            }}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewParcel;
