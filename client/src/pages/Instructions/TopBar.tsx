import React from 'react'
import { HiOutlineHome } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const InstructionsTopBar = () => {
  return (
    <div className="border-b px-4 mt-2 pb-2 pt-2 border-stone-200">
      <div className="flex items-center justify-between p-0.5">
        <div>
          <span className="text-md font-bold block">Welcome!</span>
          <span className="text-xs block text-stone-500">
            Instructions
          </span>
        </div>
      </div>
    </div>
  );
};

export default InstructionsTopBar;