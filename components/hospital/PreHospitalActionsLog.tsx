"use client";

import React from 'react';

interface Action {
  name: string;
  status: boolean;
}

interface PreHospitalActionsLogProps {
  actions: Action[];
}

export default function PreHospitalActionsLog({ actions }: PreHospitalActionsLogProps) {
  return (
    <div className="bg-white border-2 border-inset">
      <div className="bg-[#808080] text-white px-3 py-1 font-bold text-[10px] uppercase tracking-wider">
        Log Intervensi Medis
      </div>
      
      <div className="divide-y divide-[#e0e0e0]">
        {actions.map((act, index) => (
          <div 
            key={index}
            className={`flex items-center justify-between p-2 transition-colors ${
              act.status ? 'bg-white' : 'bg-[#f8f8f8]'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-4 h-4 border border-black flex items-center justify-center text-[10px] font-black ${act.status ? 'bg-white text-black' : 'bg-[#d4d0c8]'}`}>
                {act.status ? '✓' : ''}
              </div>
              <span className={`text-[11px] font-bold uppercase tracking-tight ${act.status ? 'text-black' : 'text-gray-400 italic'}`}>
                {act.name}
              </span>
            </div>
            <div className={`text-[9px] font-bold uppercase border px-1.5 py-0.5 ${
              act.status ? 'border-[#008000] text-[#008000] bg-green-50' : 'border-gray-300 text-gray-400'
            }`}>
              {act.status ? 'TERVERIFIKASI' : 'BELUM'}
            </div>
          </div>
        ))}
        {/* Empty fillers for consistency */}
        {[...Array(Math.max(0, 4 - actions.length))].map((_, i) => (
          <div key={`empty-${i}`} className="p-2 bg-white opacity-20">
             <div className="h-4 w-1/3 bg-gray-100" />
          </div>
        ))}
      </div>
      
      <div className="p-2 bg-[#d4d0c8] border-t border-[#808080] flex justify-between items-center">
        <span className="text-[9px] font-bold text-slate-600 italic">SUMBER DATA: UNIT LAPANGAN RESQLINK v2</span>
        <span className="text-[9px] font-black text-[#000080]">INTEGRITAS: 100%</span>
      </div>
    </div>
  );
}