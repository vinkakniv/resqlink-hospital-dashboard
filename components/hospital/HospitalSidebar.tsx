"use client";

import React from 'react';
import Image from 'next/image';

interface HospitalSidebarProps {
  availableBeds: number;
  totalBeds: number;
}

export default function HospitalSidebar({ availableBeds, totalBeds }: HospitalSidebarProps) {
  return (
    <aside className="w-56 bg-[#d4d0c8] border-r border-[#808080] flex flex-col shrink-0 h-full text-sm shadow-[inset_-1px_0_#ffffff]">
      
      {/* SYSTEM BRANDING */}
      <div className="bg-[#000080] text-white p-2 font-bold border-b border-white">
        <div className="flex items-center gap-2">
          <div className="bg-white p-0.5 border border-black">
            <Image 
              src="/assets/images/ResQLink_Logo.png" 
              alt="Logo"
              width={14} 
              height={14}
              className="grayscale"
            />
          </div>
          <span className="text-[10px] tracking-tight uppercase">Terminal RSUI</span>
        </div>
      </div>
      
      {/* NAVIGATION MENU */}
      <nav className="flex-1 py-2 overflow-y-auto">
        <div className="mb-4">
          <div className="bg-[#808080] text-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider mb-1">Menu Utama</div>
          <div className="space-y-0.5">
            <button className="w-full text-left px-4 py-1.5 font-bold bg-[#ffffff] border-b border-[#808080] text-[#000080] shadow-[inset_1px_1px_#ffffff]">
              1. Monitor Pasien
            </button>
            <button className="w-full text-left px-4 py-1.5 font-bold hover:bg-[#c0c0c0] border-b border-[#808080]">
              2. Log Rujukan
            </button>
            <button className="w-full text-left px-4 py-1.5 font-bold hover:bg-[#c0c0c0] border-b border-[#808080]">
              3. Kapasitas Bed
            </button>
          </div>
        </div>

        <div>
          <div className="bg-[#808080] text-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider mb-1">Konfigurasi</div>
          <div className="space-y-0.5">
            <button className="w-full text-left px-4 py-1.5 font-bold hover:bg-[#c0c0c0] border-b border-[#808080]">
              4. Manajemen Node
            </button>
            <button className="w-full text-left px-4 py-1.5 font-bold hover:bg-[#c0c0c0] border-b border-[#808080]">
              5. Pengaturan
            </button>
          </div>
        </div>
      </nav>

      {/* OPERATOR INFO */}
      <div className="p-2 border-t border-white bg-[#d4d0c8]">
        <div className="bg-[#f0f0f0] border border-[#808080] p-2 mb-3">
          <div className="text-[9px] font-bold text-[#404040] uppercase mb-1">User Aktif:</div>
          <div className="text-[11px] font-bold text-black border-b border-[#808080] pb-1 truncate">ADMIN_IGD_01</div>
          <div className="text-[9px] font-bold text-blue-800 mt-1 uppercase italic">Administrator</div>
        </div>
        
        <div className="bg-white border-2 border-inset p-2">
          <div className="text-[9px] font-bold text-slate-500 uppercase mb-1">Status Bed IGD:</div>
          <div className="flex justify-between items-baseline border-b border-[#e0e0e0] pb-1 mb-1">
             <span className="text-lg font-black text-black tabular-nums leading-none">{availableBeds}</span>
             <span className="text-[10px] font-bold text-slate-400">/ {totalBeds} UNIT</span>
          </div>
          <div className="w-full bg-[#f0f0f0] border border-[#808080] h-3">
            <div 
              className="bg-[#008000] h-full shadow-[inset_1px_1px_#ffffff]" 
              style={{ width: `${(availableBeds / totalBeds) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* EXIT BUTTON */}
      <button className="w-full py-2 text-[10px] font-bold bg-[#d4d0c8] hover:bg-[#c0c0c0] border-t border-white active:border-inset uppercase">
        Logoff Sistem
      </button>
    </aside>
  );
}