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
    <aside className="w-64 bg-[#0F172A] text-white flex flex-col justify-between shadow-sm">
      <div>
        {/* Brand Header */}
        <div className="p-5 border-b border-slate-800 bg-[#192e59] flex items-center gap-3 text-left">
          {/* Logo ResQLink */}
          <div className="shrink-0">
            <Image 
              src="/assets/images/ResQLink_Logo.png" 
              alt="ResQLink logo"
              width={32} // Ukuran dikecilkan sedikit menjadi skala ikon sidebar agar muat berdampingan dengan teks
              height={32}
              className="object-contain brightness-0 invert" 
            />
          </div>
          
          {/* Detail Nama Rumah Sakit Instansi */}
          <div className="flex flex-col">
            <span className="text-sm font-black tracking-tight leading-none text-white font-mono">
              RS UNIVERSITAS INDONESIA
            </span>
            <span className="text-[10px] text-amber-400 font-bold tracking-wider uppercase mt-1">
              RESQLINK INTEGRATED
            </span>
          </div>
        </div>
        
        {/* Navigation Menu */}
        <nav className="p-4 space-y-1">
          <div className="text-[11px] uppercase font-bold text-slate-500 px-3 mb-2 tracking-widest">Sistem IGD</div>
          <button className="w-full text-left px-4 py-2.5 bg-slate-800/80 text-white font-semibold rounded-md text-sm flex items-center gap-3 transition-colors hover:bg-slate-800">
            <Activity size={16} className="text-amber-500" /> Triase & Notifikasi Pra-RS
          </button>
        </nav>
      </div>

      {/* Status Indikator Kapasitas */}
      <div className="p-4 m-4 bg-slate-900/60 rounded-lg border border-slate-800">
        <div className="text-xs text-slate-400 font-medium">Alokasi Bed Kritis IGD</div>
        <div className="text-xl font-bold text-emerald-400 mt-1">
          {availableBeds} / {totalBeds} Tersedia
        </div>
      </div>
    </aside>
  );
}