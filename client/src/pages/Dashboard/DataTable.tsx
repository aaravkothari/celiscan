import React, { useEffect, useState } from "react";
import { FiArrowUpRight, FiDollarSign, FiMoreHorizontal } from "react-icons/fi";
import axios from "axios";
import { Link } from "react-router-dom";
import { HiOutlineCreditCard } from "react-icons/hi";


export const DataTable = () => {

  return (
    <div className="col-span-12 p-4 rounded border border-stone-300">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-1.5 font-medium">
          <HiOutlineCreditCard className="mt-[2px]" size="20" /> Prevelant Information (Celiac Disease Foundation)
        </h3>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="text-sm font-normal text-stone-500">
            <th className="text-start p-1.5">Fact</th>
            <th className="text-start p-1.5">Statistic</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-stone-100 text-sm">
            <td className="p-1.5">Global prevalence (serology)</td>
            <td className="p-1.5">1.4%</td>
          </tr>
          <tr className="text-sm">
            <td className="p-1.5">Global prevalence (biopsy)</td>
            <td className="p-1.5">0.7%</td>
          </tr>
          <tr className="bg-stone-100 text-sm">
            <td className="p-1.5">US prevalence</td>
            <td className="p-1.5">1%</td>
          </tr>
          <tr className="text-sm">
            <td className="p-1.5">Prevalence in South America</td>
            <td className="p-1.5">0.4%</td>
          </tr>
          <tr className="bg-stone-100 text-sm">
            <td className="p-1.5">Prevalence in Africa</td>
            <td className="p-1.5">0.5%</td>
          </tr>
          <tr className="text-sm">
            <td className="p-1.5">Prevalence in North America</td>
            <td className="p-1.5">0.5%</td>
          </tr>
          <tr className="bg-stone-100 text-sm">
            <td className="p-1.5">Prevalence in Asia</td>
            <td className="p-1.5">0.6%</td>
          </tr>
          <tr className="text-sm">
            <td className="p-1.5">Prevalence in Europe and Oceania</td>
            <td className="p-1.5">0.8%</td>
          </tr>
          <tr className="bg-stone-100 text-sm">
            <td className="p-1.5">Female to male prevalence ratio</td>
            <td className="p-1.5">Approximately 1.5:1</td>
          </tr>
          <tr className="text-sm">
            <td className="p-1.5">Average time to diagnosis</td>
            <td className="p-1.5">6-10 years</td>
          </tr>
          <tr className="bg-stone-100 text-sm">
            <td className="p-1.5">Percentage of undiagnosed cases in US</td>
            <td className="p-1.5">83%</td>
          </tr>
          <tr className="text-sm">
            <td className="p-1.5">Number of known symptoms</td>
            <td className="p-1.5">Over 200</td>
          </tr>
          <tr className="bg-stone-100 text-sm">
            <td className="p-1.5">Annual increase in incidence</td>
            <td className="p-1.5">7.5%</td>
          </tr>
          <tr className="text-sm">
            <td className="p-1.5">
              Additional healthcare costs for undiagnosed (over 4 years)
            </td>
            <td className="p-1.5">$3,964</td>
          </tr>
          <tr className="bg-stone-100 text-sm">
            <td className="p-1.5">
              Percentage of children not healing on gluten-free diet
            </td>
            <td className="p-1.5">20%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
