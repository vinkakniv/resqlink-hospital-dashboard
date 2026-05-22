"use client";

import React from 'react';
import Image from 'next/image';
import { Activity } from 'lucide-react';

interface HospitalSidebarProps {
  availableBeds: number;
  totalBeds: number;
}

export default function HospitalSidebar({ availableBeds, totalBeds }: HospitalSidebarProps) {
  return (
    <aside className="w-64 bg-[#192e59] text-white flex flex-col justify-between shadow-xs border-r border-white/5 shrink-0">
      <div>
        {/* Brand Header */}
        <div className="p-5 border-b border-white/10 bg-[#112244] flex items-center gap-3 text-left">
          <div className="shrink-0 rounded-none">
            <Image 
              src="/assets/images/ResQLink_Logo.png" 
              alt="ResQLink logo"
              width={32} 
              height={32}
              className="object-contain brightness-0 invert" 
            />
          </div>
          
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-black tracking-tight leading-none text-white font-mono break-words">
              RS UNIVERSITAS INDONESIA
            </span>
            <span className="text-[10px] text-amber-400 font-bold tracking-wider uppercase mt-1">
              RESQLINK INTEGRATED
            </span>
          </div>
        </div>
        
        {/* Navigation Menu */}
        <nav className="p-4 space-y-1">
          <div className="text-[11px] uppercase font-bold text-white/40 px-3 mb-2 tracking-widest text-left">Sistem IGD</div>
          <button className="w-full text-left px-4 py-2.5 bg-white/10 text-white font-semibold rounded-none text-sm flex items-center gap-3 transition-colors">
            <Activity size={16} className="text-red-500 shrink-0" /> Triase & Notifikasi Pra-RS
          </button>
        </nav>
      </div>

      {/* Status Indikator Kapasitas */}
      <div className="p-4 m-4 bg-[#112244] rounded-none border border-white/5 text-left">
        <div className="text-xs text-slate-300 font-medium">Alokasi Bed Kritis IGD</div>
        <div className="text-xl font-bold text-emerald-400 mt-1 font-mono">
          {availableBeds} / {totalBeds} Tersedia
        </div>
      </div>
    </aside>
  );
}