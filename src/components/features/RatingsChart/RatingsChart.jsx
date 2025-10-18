import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";

function RatingsChart({ratings}) {
    console.log("Array ratings: ", Array.isArray(ratings));
  return (
    <div className="w-full h-120">
      <h2 className="text-[1.8rem] lg:text-[2.4rem] font-semibold text-dark-04">
        Ratings
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={ratings}
          margin={{ top: 10, right: 30, left: 40, bottom: 0 }}
        >
          <YAxis
            type="category"
            dataKey="name"
            axisLine={true}
            tickLine={true}
            tick={{ fill: "#627382", fontSize: 18 }}
          />

          <XAxis
            type="number"
            axisLine={true}
            tickLine={true}
            tick={{ fill: "#627382", fontSize: 18 }}
          />
          
          <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />
          
          <Bar
            dataKey="count"
            fill="#FF8811"
            barSize={28}
            radius={[5, 5, 5, 5]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RatingsChart;