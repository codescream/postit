import { Link, useParams } from "react-router-dom";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { Button, IconButton, TextField } from "@mui/material";
import { Header } from "../components";
import { useEffect, useState } from "react";
import { parcels } from "../utils/data";

const ParcelDetails = () => {
  const { parcelId } = useParams();
  const [parcel, setParcel] = useState({
    sender: "",
    recipient: "",
    from: "",
    to: "",
    weight: 0,
    dateSent: "",
    estimatedDateOfDelivery: "",
    status: "",
    cost: 0
  });

  const status = {
    pending: "bg-gray-500",
    delivered: "bg-green-400",
    "in-transit": "bg-yellow-300",
    unknown: "bg-red-500",
  };

  useEffect(() => {
    setParcel(parcels[parcelId]);
  }, [parcelId, parcel]);
  
  return (
    <div className="w-screen h-screen p-4 flex flex-col items-center text-white">
      <Header />
      <div className="w-full lg:w-3/5 h-fit mt-2 px-2 py-4 bg-black flex justify-between text-white text-3xl rounded-t-md items-center">
        <Link to={`/myparcels/${(Number(parcelId) - 1) < 0 ? parcels.length - 1 : Number(parcelId) - 1}`}>
          <IconButton color="primary">
            <FaArrowCircleLeft className="text-white" />
          </IconButton>
        </Link>
        <p className={`${status[parcel.status]} rounded-sm px-2 font-semibold h-fit text-sm`}>
          {parcel.status}
        </p>
        <Link to={`/myparcels/${(Number(parcelId) + 1) == parcels.length ? 0 : Number(parcelId) + 1}`}>
          <IconButton color="primary">
            <FaArrowCircleRight className="text-white" />
          </IconButton>
        </Link>
      </div>
      <div className="w-full lg:w-3/5 flex flex-1 bg-black gap-1">
        {/* parcel details */}
        <div className="w-1/2 h-full p-4 flex flex-col gap-8">
          <p><span className="font-bold">From: </span>{parcel.from}</p>
          <p><span className="font-bold">To: </span>{parcel.to}</p>
          <p><span className="font-bold">Weight: </span>{parcel.weight}Kg</p>
          <p><span className="font-bold">Date: </span>{parcel.dateSent}</p>
          <p><span className="font-bold">Sender: </span>{parcel.sender}</p>
          <p><span className="font-bold">Recipient: </span>{parcel.recipient}</p>
          <p><span className="font-bold">Cost: </span>${parcel.cost}</p>
          <p><span className="font-bold">Track ID: </span>{parcel.trackId}</p>
          <p><span className="font-bold">Note: </span>{parcel.note}</p>
        </div>
        <div className="w-1/2 h-full p-4 flex flex-col gap-8">
          <p><span className="font-bold">Sender Email: </span></p>
          <p><span className="font-bold">Recipient Email: </span></p>
          <form onSubmit={()=>{}}
            className="flex flex-col gap-4 text-white"
          >
            <TextField 
              label="Feedback"
              name="feedback"
              variant="outlined"
              color="secondary"
              multiline
              rows={5}
              focused
              fullWidth
              inputProps={{ style: { color: "white" } }}
            />
            <Button 
              type="submit"
              variant="outlined"
              sx={{ bgcolor: 'white', color: 'black', width: '30%', '&:hover': { bgcolor: 'black', color: 'white', borderColor: 'white' } }}
            >Submit</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ParcelDetails;