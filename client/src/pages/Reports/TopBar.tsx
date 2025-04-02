import { Home } from 'lucide-react';
import React from 'react'
import { FiCalendar } from 'react-icons/fi'
import { HiOutlineHome } from 'react-icons/hi';
import { TbReportSearch } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <div className="border-b px-4 mb-4 mt-2 pb-2 pt-2 border-stone-200">
      <div className="flex items-center justify-between p-0.5">
        <div>
          <span className="text-md font-bold block">Welcome!</span>
          <span className="text-xs block text-stone-500">
            Diagnostic Form
          </span>
        </div>
        <Link to="/dashboard" className="flex text-sm items-center gap-1.5 bg-stone-100 transition-colors hover:bg-[#c9efdf] px-3 py-1.5 rounded">
                  <HiOutlineHome size="18"/>
                  <span>Return to Dashboard</span>
                </Link>
      </div>
    </div>
  );
};

export default TopBar;