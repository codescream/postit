import { useState, useEffect } from "react";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { PieChart } from "@mui/x-charts/PieChart";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) navigate("/login");
  }, [loggedIn]);

  return (
    <div className="bg-[#aaa9ad] gap-2 w-4/5 py-6 px-10 h-full flex flex-col">
      <div className="flex gap-1">
        <div className="flex-1 shadow-lg p-12 items-center justify-center flex flex-col gap-3">
          <p className="text-center">Users</p>
          <div className="flex gap-1">
            <FaLongArrowAltUp className="text-green-500" />
            <FaLongArrowAltDown className="text-red-600" />
          </div>
          <span>200</span>
        </div>
        <div className="flex-1 shadow-lg p-12 items-center justify-center flex flex-col gap-3">
          <p className="text-center">Delivered Parcels</p>
          <div className="flex gap-1">
            <FaLongArrowAltUp className="text-green-500" />
            <FaLongArrowAltDown className="text-red-600" />
          </div>
          <span>2000</span>
        </div>
        <div className="flex-1 shadow-lg p-12 items-center justify-center flex flex-col gap-3">
          <p className="text-center">Pending Parcels</p>
          <div className="flex gap-1">
            <FaLongArrowAltUp className="text-green-500" />
            <FaLongArrowAltDown className="text-red-600" />
          </div>
          <span>100</span>
        </div>
      </div>
      <div className="flex gap-1">
        <div className="w-2/3 shadow-lg p-4 items-center justify-center flex gap-4">
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "series A" },
                  { id: 1, value: 15, label: "series B" },
                  { id: 2, value: 15, label: "series C" },
                  { id: 3, value: 20, label: "series D" },
                ],
                innerRadius: 30,
                outerRadius: 100,
                paddingAngle: 5,
                cornerRadius: 5,
                startAngle: -90,
                endAngle: 180,
                cx: 150,
                cy: 150,
              },
            ]}
            height={270}
            width={420}
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
