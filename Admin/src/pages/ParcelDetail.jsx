import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { LuPackageCheck } from "react-icons/lu";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputAdornment from "@mui/material/InputAdornment";
import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allUsers } from "../redux/reducers/users";
import dayjs from "dayjs";
import { allParcels, updateParcel } from "../redux/reducers/parcels";
import { deliveryStatus } from "../utils/data";

const ParcelDetail = () => {
  const { parcelId } = useParams();
  
  const parcels = useSelector(state => state.parcelsReducer.data);
  const usersState = useSelector(state => state.usersReducer.data);

  const defaultForm = {
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
  }
 
  const [formData, setFormData] = useState(parcels?.filter((parcel) => parcel._id == parcelId)[0] || defaultForm);
  const [formChanged, setFormChanged] = useState(false);

  let initFormState = useRef(formData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectUser = (e) => {
    const sender = usersState?.find(user => user.name === e.target.value);
    setFormData({...formData, senderName: e.target.value, senderID: sender._id, senderEmail: sender.email});
  };

  useEffect(() => {
    dispatch(allUsers());
    dispatch(allParcels());
  }, [dispatch]);

  useEffect(() => {
    setFormData(parcels?.filter((parcel) => parcel._id == parcelId)[0] || defaultForm);

    initFormState.current = formData;
  }, [parcels, parcelId]);

  useEffect(() => {
    const changed = JSON.stringify(initFormState.current) !== JSON.stringify(formData)
    setFormChanged(changed);
  }, [formData]);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateParcel({id: parcelId, data: formData}))
    .then(() => navigate("/parcels"))
    .catch((error) => console.error(error));
  };
  
  return (
    <div className="outlet">
      <p className="text-center mb-5 text-lg font-bold">Edit Parcel</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
        <div className="flex flex-row gap-2 w-full">
          <div className="flex gap-4 w-3/4 flex-col justify-center">
            <div className="flex gap-1">
            <FormControl className='w-1/2'  size='small'>
                <InputLabel id="demo-simple-select-label">Sender Name</InputLabel>
                <Select
                  value={`${formData?.senderName}`}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Sender Name"
                  name="senderName"
                  required
                  onChange={selectUser}
                >
                  {
                    usersState?.map((user) => 
                      <MenuItem key={user.name} value={`${user?.name}`}>{user.name}</MenuItem>
                    )
                  }
                </Select>
              </FormControl>
              <TextField
                label="Recipient Name"
                name="recipientName"
                value={formData?.recipientName}
                onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
                rows={3}
                size="small"
                className="w-1/2"
                required
              />
            </div>
            <div className="flex gap-1">
              <TextField
                label="Sender Email"
                name="senderEmail"
                value={formData?.senderEmail}
                onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })
                }
                rows={3}
                size="small"
                className="w-1/2"
                required
              />
              <TextField
                label="Recipient Email"
                name="recipientEmail"
                value={formData?.recipientEmail}
                onChange={(e) => setFormData({ ...formData, recipientEmail: e.target.value })
                }
                rows={3}
                size="small"
                className="w-1/2"
                required
              />
            </div>
            <div className="flex gap-1">
              <TextField
                label="From"
                name="from"
                value={formData?.from}
                onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                size="small"
                className="w-1/2"
                required
              />
              <TextField
                label="To"
                name="to"
                value={formData?.to}
                onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                rows={3}
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
              value={formData?.weight}
              onChange={(e) => setFormData({ ...formData, weight: Number(e.target.value) })}
              rows={3}
              size="small"
              fullWidth
              InputProps={{
                endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
              }}
              required
            />
            <TextField
              label="Cost"
              name="cost"
              value={formData?.cost}
              onChange={(e) => setFormData({ ...formData, cost: Number(e.target.value) })}
              rows={3}
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
                value={dayjs(formData?.date)}
                onChange={(newDate) => setFormData({...formData, date: newDate})}
                slotProps={{ textField: { size: "small" } }}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div>
          <TextField
            label="Note"
            name="note"
            value={formData?.note}
            onChange={(e) => setFormData({ ...formData, note: e.target.value })}
            multiline
            rows={5}
            fullWidth
          />
        </div>
        <div className="flex justify-between items-start">
          <div className="flex flex-col font-semibold">
            <div className="flex">
              <h2>Status: </h2>
              <span className="pl-1 text-green-500">{deliveryStatus[formData?.status]}</span>
            </div>
            <div className="flex">
              <h2>Feedback:</h2>
              <span className="pl-1 text-blue-500">Love it a lot!</span>
            </div>
          </div>
          <Button
            className="w-fit h-fit"
            variant="outlined"
            type="submit"
            disabled={!formChanged}
            endIcon={<LuPackageCheck />}
            sx={{
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                bgcolor: "white",
                color: "black",
                borderColor: "black",
              },
              "&.Mui-disabled": {
                backgroundColor: "black",
                color: "gray",
              },
            }}
          >
            Update
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ParcelDetail;