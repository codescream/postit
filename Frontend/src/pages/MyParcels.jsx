import { Pagination } from "@mui/material";
import { Header } from "../components";
import { parcels } from "../utils/data";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ parcel, id }) => {
  const status = {
    pending: "bg-gray-500",
    delivered: "bg-green-400",
    "in-transit": "bg-yellow-300",
    unknown: "bg-red-500",
  };

  return (
    <Link to={`/myparcels/${id}`} className="flex w-full lg:w-3/5 h-fit p-2 py-3 bg-black rounded-sm">
      <div className="flex flex-1 flex-col">
        <p>
          <span className="font-semibold">From:</span> {parcel.from}
        </p>
        <p>
          <span className="font-semibold">Weight:</span> {parcel.weight}Kg
        </p>
        <p>
          <span className="font-semibold">Date Sent:</span> {parcel.dateSent}
        </p>
        <p>
          <span className="font-semibold">Recipient:</span> {parcel.recipient}
        </p>
      </div>
      <div className="flex w-fit flex-col items-start">
        <p>{parcel.to}</p>
        <p className={`${status[parcel.status]} rounded-sm px-2`}>
          {parcel.status}
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
  const step = 5;
  const pages = Math.ceil(parcels.length / step);

  const handleChange = (event, value) => {
    setPage(value);
    // setStart((page - 1)*step);
    // setEnd(page*step);
    // setArray(parcels.slice(start, end));
  };

  useEffect(() => {
    setStart((page - 1) * step);
    setEnd(page * step);
    setArray(parcels.slice(start, end));
  }, [page, start, end]);

  console.log(`page: ${page}`);
  console.log(`start: ${start}, end: ${end}`);

  return (
    <div className="flex flex-col gap-2 items-center p-4 text-white">
      <Header />
      <p className="w-full lg:w-3/5 font-semibold">My Parcels</p>
      {array?.map((parcel, i) => (
        <Card key={parcel.recipient} parcel={parcel} id={i} />
      ))}
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
