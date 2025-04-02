import React from "react";
import { TopBar } from "./TopBar";
import { Grid } from "./Grid";



export const Dashboard = () => {
  return (
    <div className="bg-white rounded-lg pb-4 shadow-lg min-w-[800px]">
      
      <TopBar />
      <Grid />
      
    </div>
  );
};