import { useState, useEffect } from "react";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDispatch, useSelector } from "react-redux";
import { allUsers } from "../redux/reducers/users";
import { allParcels } from "../redux/reducers/parcels";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const usersState = useSelector((state) => state.usersReducer.data);
  const parcelState = useSelector((state) => state.parcelsReducer.data);

  const deliveredParcels = parcelState.filter(p => p.status === 3);
  const pendingParcels = parcelState.filter(p => p.status === 0);
  const shippedParcels = parcelState.filter(p => p.status === 1);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!loggedIn) navigate("/login");
    
    dispatch(allUsers())
    .then(() => {})
    .catch(() => {});

    dispatch(allParcels())
    .then(() => {})
    .catch(() => {});

  }, [loggedIn]);

  return (
    <div className="w-4/5 h-full p-5 px-10 flex flex-col gap-2">
      <div className="flex gap-1">
        <div className="flex-1 shadow-lg p-12 items-center justify-center flex flex-col gap-3">
          <p className="text-center">Users</p>
          <div className="flex gap-1">
            <FaLongArrowAltUp className="text-green-500" />
            <FaLongArrowAltDown className="text-red-600" />
          </div>
          <span>{usersState.length}</span>
        </div>
        <div className="flex-1 shadow-lg p-12 items-center justify-center flex flex-col gap-3">
          <p className="text-center">Delivered Parcels</p>
          <div className="flex gap-1">
            <FaLongArrowAltUp className="text-green-500" />
            <FaLongArrowAltDown className="text-red-600" />
          </div>
          <span>{deliveredParcels.length}</span>
        </div>
        <div className="flex-1 shadow-lg p-12 items-center justify-center flex flex-col gap-3">
          <p className="text-center">Pending Parcels</p>
          <div className="flex gap-1">
            <FaLongArrowAltUp className="text-green-500" />
            <FaLongArrowAltDown className="text-red-600" />
          </div>
          <span>{pendingParcels.length}</span>
        </div>
      </div>
      <div className="flex gap-1">
        <div className="w-2/3 shadow-lg p-4 items-center justify-center flex gap-4">
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: deliveredParcels.length, label: "Delivered Parcels" },
                  { id: 1, value: shippedParcels.length, label: "Shipped Parcels" },
                  { id: 2, value: pendingParcels.length, label: "Pending Parcels" },
                  { id: 3, value: usersState.length, label: "Users" },
                ],
                innerRadius: 30,
                outerRadius: 100,
                paddingAngle: 5,
                cornerRadius: 5,
                startAngle: -90,
                endAngle: 180,
                cx: 100,
                cy: 150,
              },
            ]}
            height={300}
            width={410}
          />
        </div>
        <div className="w-fit shadow-lg p-4 items-center justify-center flex flex-col">
          <p className="text-center">Recent Users</p>
          <ol>
            <li>1. Max Gangen</li>
            <li>2. Bero Man</li>
            <li>3. Andrew DaRuff</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Home;
