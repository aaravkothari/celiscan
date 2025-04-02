import React, { useState, useEffect } from "react";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";



export const StatCards = () => {
  const [worldPopulation, setWorldPopulation] = useState<number | null>(null);

  useEffect(() => {
    const fetchPopulation = async () => {
      const url = "https://get-population.p.rapidapi.com/population";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "6a0e6da50fmsh42e2ea624e0d440p16fdd6jsnd8025642b514no",
          "x-rapidapi-host": "get-population.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(parseInt(result.substring(9,19)));
        setWorldPopulation(parseInt(result.substring(9,19)));
      } catch (error) {
        console.error(error);
      }
    };

    fetchPopulation();

    const interval = setInterval(fetchPopulation, 60000000); // Update every 60 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <Card
        title="Current Global Population"
        value={
          worldPopulation
            ? `${(worldPopulation).toLocaleString()}`
            : "Loading..."
        }
        pillText={``}
        trend={"up"}
      />

      <Card
        title="Estimated Individuals with Celiac Disease"
        value={
          worldPopulation
            ? `${(worldPopulation * 0.01).toLocaleString().substring(0,10)}`
            : "Loading..."
        }
        pillText={`$${Math.abs(7.5).toFixed(2)}%`}
        trend={"up"}
      />
    </>
  );
};

const Card = ({
  title,
  value,
  pillText,
  trend,
}: {
  title: string;
  value: string;
  pillText: string;
  trend: "up" | "down";
}) => {
  return (
    <div className="col-span-6 p-4 rounded border border-stone-300 h-24">
      <div className="flex mb-8 items-start justify-between">
        <div className="w-7/12">
          <h3 className="text-stone-500 mb-2 text-sm">{title}</h3>
          <p className="text-3xl font-semibold">{value}</p>
        </div>

        <div className="group">
          <span
            className={`text-xs flex items-center gap-1 font-medium px-2 py-1 rounded ${
              trend === "up"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-[#C63975]"
            }`}
          >
            {trend === "up" ? <FiTrendingUp /> : <FiTrendingDown />} {pillText}
          </span>
        </div>
      </div>
    </div>
  );
};
