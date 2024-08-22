import { Link, useParams } from "react-router-dom";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { Button, IconButton, Skeleton, TextField } from "@mui/material";
import { useEffect, useState } from "react";
// import { parcels } from "../utils/data";
import { useFetchParcelsQuery } from "../../services/api";

const ParcelDetails = () => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const { parcelId } = useParams();
  const [parcel, setParcel] = useState({});

  const {
    data: parcels,
    isLoading,
    refetch
  } = useFetchParcelsQuery(user?._id, user?.accessToken);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    refetch();
    if(!isLoading) {
      setParcel(parcels[parcels?.findIndex(t => t._id === parcelId)]);
    }
  }, [refetch, isLoading, parcelId, parcels]);

  useEffect(() => {
    if(!isLoading)
      setIndex(parcels?.findIndex(t => t._id === parcelId));
  }, [parcels, parcelId, isLoading]);

  const status = {
    0: {name: "pending", color: "bg-gray-500"},
    1: {name: "delivered", color: "bg-green-400"},
    2: {name: "in-transit", color: "bg-yellow-300"},
    3: {name: "unknown", color: "bg-red-500"},
  };

  const feedbackSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <div className="h-fit p-4 flex flex-col items-center text-white">
      {
        isLoading ? (
          <Skeleton
            variant="rectangular"
            width={"60%"}
            height={120}
            animation="pulse"
            style={{
              backgroundColor: "black",
            }}
          />
        ) : (
          <>
            <div className="w-full lg:w-3/5 h-fit mt-2 px-2 py-4 bg-black flex justify-between text-white text-3xl rounded-t-md items-center">
              <Link to={`/myparcels/${parcels[(index - 1) < 0 ? parcels?.length - 1 : index - 1]._id}`}>
                <IconButton color="primary">
                  <FaArrowCircleLeft className="text-white" />
                </IconButton>
              </Link>
              <p className={`${status[parcel?.status]?.color} rounded-sm px-2 font-semibold h-fit text-sm`}>
                {status[parcel?.status]?.name}
              </p>
              <Link to={`/myparcels/${parcels[(index + 1) == parcels?.length ? 0 : index + 1]._id}`}>
                <IconButton color="primary">
                  <FaArrowCircleRight className="text-white" />
                </IconButton>
              </Link>
            </div>
            <div className="w-full lg:w-3/5 flex flex-1 bg-black gap-1">
              {/* parcel details */}
              <div className="w-1/2 h-full p-4 flex flex-col gap-8">
                <p><span className="font-bold">From: </span>{parcel?.from}</p>
                <p><span className="font-bold">To: </span>{parcel?.to}</p>
                <p><span className="font-bold">Weight: </span>{parcel?.weight}Kg</p>
                <p><span className="font-bold">Date: </span>{parcel?.date?.split("T")[0]}</p>
                <p><span className="font-bold">Sender: </span>{parcel?.senderName}</p>
                <p><span className="font-bold">Recipient: </span>{parcel?.recipientName}</p>
                <p><span className="font-bold">Cost: </span>${parcel?.cost}</p>
                <p><span className="font-bold">Track ID: </span>{parcel?.trackId}</p>
                <p><span className="font-bold">Note: </span>{parcel?.note}</p>
              </div>
              <div className="w-1/2 h-full p-4 flex flex-col gap-8">
                <p><span className="font-bold">Sender Email: </span>{parcel?.senderEmail}</p>
                <p><span className="font-bold">Recipient Email: </span>{parcel?.recipientEmail}</p>
                <form onSubmit={feedbackSubmit}
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
          </>
        )
      }
    </div>
  )
}

export default ParcelDetails;