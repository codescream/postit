import { Pagination, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetchParcelsQuery } from "../../services/api";

const Card = ({ parcel, id }) => {
  const status = {
    0: {name: "pending", color: "bg-gray-500"},
    1: {name: "delivered", color: "bg-green-400"},
    2: {name: "in-transit", color: "bg-yellow-300"},
    3: {name: "unknown", color: "bg-red-500"},
  };

  return (
    <Link
      to={`/myparcels/${id}`}
      className="flex w-full lg:w-3/5 h-fit p-2 py-3 bg-black rounded-sm"
    >
      <div className="flex flex-1 flex-col">
        <p>
          <span className="font-semibold">From:</span> {parcel?.from}
        </p>
        <p>
          <span className="font-semibold">Weight:</span> {parcel?.weight}Kg
        </p>
        <p>
          <span className="font-semibold">Date Sent:</span> {parcel?.date.split('T')[0]}
        </p>
        <p>
          <span className="font-semibold">Recipient:</span> {parcel?.recipientName}
        </p>
      </div>
      <div className="flex w-fit flex-col items-start">
        <p>{parcel?.to}</p>
        <p className={`${status[parcel?.status].color} rounded-sm px-2`}>
          {status[parcel?.status].name}
        </p>
      </div>
    </Link>
  );
};

const MyParcels = () => {
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const [array, setArray] = useState(null);
  const user = JSON.parse(localStorage.getItem("userData"));
  const {
    data: parcels,
    isLoading,
    refetch
  } = useFetchParcelsQuery(user?._id, user?.accessToken);

  const step = 5;
  const pages = Math.ceil(parcels?.length / step) || 0;

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    refetch();
    setStart((page - 1) * step);
    setEnd(page * step);
    setArray(parcels?.slice(start, end));
  }, [page, start, end, parcels, refetch]);

  // console.log(`page: ${page}`);
  // console.log(`start: ${start}, end: ${end}`);

  return (
    <div className="flex flex-col gap-2 items-center p-4 text-white">
      <p className="w-full lg:w-3/5 font-semibold">My Parcels</p>
      {isLoading ? (
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
        array?.map((parcel) => (
          <Card key={parcel?._id} parcel={parcel} id={parcel?._id} />
        ))
      )}

      <Pagination
        color="primary"
        count={pages}
        page={page}
        onChange={handleChange}
        sx={{ "& .MuiPaginationItem-root": { color: "white" } }}
      />
    </div>
  );
};

export default MyParcels;
