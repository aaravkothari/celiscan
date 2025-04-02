import React, { useEffect, useState } from "react";
import { FiActivity } from "react-icons/fi";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Line,
  LineChart,
} from "recharts";

const getStaticData = () => {
  return [
    { name: "2015", Cases: 65280 },
    { name: "2020", Cases: 77785 },
    { name: "2025", Cases: 90440 },
  ];
};

export const ActivityGraph = () => {
  const [data, setData] = useState<{ name: string; Cases: number }[]>([]);

  useEffect(() => {
    const staticData = getStaticData();
    setData(staticData);
  }, []);

  return (
    <div className="col-span-12 overflow-hidden rounded border border-stone-300">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiActivity /> Celiac Disease Cases
        </h3>
      </div>

      <div className="h-64 px-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid stroke="#e4e4e7" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              className="text-xs font-bold"
              padding={{ right: 4 }}
            />
            <YAxis
              className="text-xs font-bold"
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              wrapperClassName="text-sm rounded"
              labelClassName="text-xs text-stone-500"
            />
            <Line
              type="monotone"
              dataKey="Cases"
              stroke="#39C68A"
              fill="#39C68A"
              dot={{ fill: "#18181b", stroke: "none" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
