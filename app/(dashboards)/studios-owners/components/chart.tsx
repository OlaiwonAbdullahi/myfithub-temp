"use client";
import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";

const OverviewChart = () => {
  const [options, setOptions] = useState({
    data: [
      { Day: "Mon", bookings: 12, revenue: 15 },
      { Day: "Tue", bookings: 17, revenue: 16 },
      { Day: "Wed", bookings: 13, revenue: 17 },
      { Day: "Thurs", bookings: 12, revenue: 18 },
      { Day: "Fri", bookings: 14, revenue: 19 },
      { Day: "Sat", bookings: 16, revenue: 20 },
      { Day: "Sun", bookings: 18, revenue: 20 },
    ],

    series: [
      {
        type: "bar",
        xKey: "Day",
        yKey: "bookings",
        yName: "Bookings",
        fill: "#234E49",
        stroke: "#234E49",
        strokeWidth: 1,
        cornerRadius: 4,
      },
      {
        type: "bar",
        xKey: "Day",
        yKey: "revenue",
        yName: "Revenue",
        fill: "#419e85",
        stroke: "#419e85",
        strokeWidth: 1,
        cornerRadius: 4,
      },
    ],

    theme: {
      overrides: {
        common: {
          title: { fontFamily: "Fredoka, sans-serif" },
          subtitle: { fontFamily: "Fredoka, sans-serif" },
          legend: {
            item: {
              label: { fontFamily: "Fredoka, sans-serif" },
            },
          },
          axes: {
            category: {
              label: {
                fontFamily: "Fredoka, sans-serif",
                borderRadius: 4,
                border: "none",
              },
              gridLine: { enabled: false },
            },
            number: {
              label: { fontFamily: "Fredoka, sans-serif" },
              gridLine: { enabled: false },
            },
          },
        },
      },
    },
  });

  return <AgCharts options={options} className="h-[256px] font-fredoka" />;
};

export default OverviewChart;
