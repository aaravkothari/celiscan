import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { parse } from 'date-fns';
import { Link } from 'react-router-dom';

const ProgressBars = () => {

  return (
    <>
    <Link to="/studentmastery" className="col-span-12 border border-stone-300 p-3 rounded-md transition-all duration-300 hover:shadow-md h-full">
      <div className="flex items-center justify-between">
        <h2 className="text-md font-medium mb-2">Undiagnosed Patients</h2>
        <h2 className="text-md font-medium mb-2">85%</h2>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 m-1 mb-4 relative">
        <div className="bg-red-600 h-3 rounded-full" style={{ width: `85%` }}></div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xs text-stone-500">Global</p>
        <p className="text-xs text-stone-500">85.00 / 100.00</p>
      </div>
    </Link>

    
    </>
  );
};

export default ProgressBars;
