import React, { useState, useEffect } from "react";
import { StatCards } from "./StatCards";
import { ActivityGraph } from "./ActivityGraph";
import { DataTable } from "./DataTable";
import axios from "axios";
import ProgressBars from "./Components/ProgressBars";


export const Grid = () => {



  return (
    <div className="px-4 grid gap-3 grid-cols-12 ">
      <StatCards />
      <ProgressBars />
      <ActivityGraph/>
      <DataTable  />
    </div>
  );
};