import { TextField, Button } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { LuPackageCheck } from "react-icons/lu";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputAdornment from "@mui/material/InputAdornment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ParcelDetail = () => {
  const { parcelId } = useParams();
  const parcels = useSelector(state => state.parcelsReducer.data);
  console.log('parcels: ', parcels);

  const parcel = parcels.filter((parcel) => parcel._id == parcelId);
  const [formData, setFormData] = useState({
    senderName: "",
    recipientName: "",
    senderEmail: "",
    recipientEmail: "",
    weight: "",
    cost: "",
    to: "",
    from: "",
    note: "",
  });

  useEffect(() => {
    setFormData(parcel[0]);
  }, [parcelId, parcel]);

  // const [sender, setSender] = useState("");
  // const [recipient, setRecipient] = useState("");
  // const [senderEmail, setSenderEmail] = useState("");
  // const [recipientEmail, setRecipientEmail] = useState("");
  // const [weight, setWeight] = useState("");
  // const [cost, setCost] = useState("");
  // const [to, setTo] = useState("");
  // const [from, setFrom] = useState("");

  const handleSubmit = () => {
    console.log("for submiited");
  };
  return (
    <div className="outlet">
      <p className="text-center mb-5 text-lg font-bold">Edit Parcel</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
        <div className="flex flex-row gap-2 w-full">
          <div className="flex gap-4 w-3/4 flex-col justify-center">
            <div className="flex gap-1">
              <TextField
                label="Sender Name"
                name="sender"
                value={formData.senderName}
                onChange={(e) => {
                  setFormData({ ...formData, sender: e.target.value });
                }}
                size="small"
                className="w-1/2"
                required
              />
              <TextField
                label="Recipient Name"
                name="recipient"
                value={formData.recipientName}
                onChange={(e) => {
                  setFormData({ ...formData, recipient: e.target.value });
                }}
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
                value={formData.senderEmail}
                onChange={(e) => {
                  setFormData({ ...formData, senderEmail: e.target.value });
                }}
                rows={3}
                size="small"
                className="w-1/2"
                required
              />
              <TextField
                label="Recipient Email"
                name="recipientEmail"
                value={formData.recipientEmail}
                onChange={(e) => {
                  setFormData({ ...formData, recipientEmail: e.target.value });
                }}
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
                value={formData.from}
                onChange={(e) => {
                  setFormData({ ...formData, from: e.target.value });
                }}
                size="small"
                className="w-1/2"
                required
              />
              <TextField
                label="To"
                name="to"
                value={formData.to}
                onChange={(e) => {
                  setFormData({ ...formData, to: e.target.value });
                }}
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
              value={formData.weight}
              onChange={(e) => {
                setFormData({ ...formData, weight: e.target.value });
              }}
              rows={3}
              size="small"
              fullWidth
              InputProps={{
                endAdornment: <InputAdornment>Kg</InputAdornment>,
              }}
              required
            />
            <TextField
              label="Cost"
              name="cost"
              value={formData.cost}
              onChange={(e) => {
                setFormData({ ...formData, cost: e.target.value });
              }}
              rows={3}
              size="small"
              fullWidth
              InputProps={{
                endAdornment: <InputAdornment>$</InputAdornment>,
              }}
              required
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date"
                name="date"
                slotProps={{ textField: { size: "small" } }}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div>
          <TextField
            label="Notes"
            value={formData.note}
            onChange={(e) => {
              setFormData({ ...formData, notes: e.target.value });
            }}
            multiline
            rows={5}
            fullWidth
          />
        </div>
        <div className="flex justify-between items-start">
          <div className="flex flex-col font-semibold">
            <div className="flex">
              <h2>Status:</h2>
              <span className="pl-1 text-green-500">Delivered</span>
            </div>
            <div className="flex">
              <h2>Feedback:</h2>
              <span className="pl-1 text-blue-500">Love it a lot!</span>
            </div>
          </div>
          <Button
            className="w-fit h-fit"
            variant="outlined"
            endIcon={<LuPackageCheck />}
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
            Update
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ParcelDetail;