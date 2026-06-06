"use client";

import React from 'react';

interface Ambulance {
  id: string;
  eta: string;
  patient: {
    name: string;
    age: string;
    complaint: string;
    triage: string;
  };
}

interface AmbulanceQueuePanelProps {
  ambulances: Ambulance[];
  selectedId: string;
  onSelect: (ambulance: any) => void;
}

export default function AmbulanceQueuePanel({ ambulances, selectedId, onSelect }: AmbulanceQueuePanelProps) {
  return (
    <section className="w-64 bg-[#f0f0f0] flex flex-col h-full border-r border-[#808080] text-sm">
      
      <div className="bg-[#808080] text-white px-3 py-1 font-bold text-[10px] uppercase tracking-wider">
        Daftar Unit Masuk
      </div>

      <div className="flex-1 overflow-y-auto bg-white border-inset border-2 m-2">
        {ambulances.map((amb) => {
          const isSelected = selectedId === amb.id;
          const isTriageRed = amb.patient.triage === "MERAH";

          return (
            <button
              key={amb.id}
              onClick={() => onSelect(amb)}
              className={`w-full text-left p-2 border-b border-[#e0e0e0] ${
                isSelected 
                  ? 'bg-[#000080] text-white' 
                  : 'bg-white text-black hover:bg-[#e8e8e8]'
              }`}
            >
              <div className="flex justify-between items-center mb-1 text-[9px] font-bold uppercase opacity-80">
                <span>{amb.id}</span>
                <span>ETA: {amb.eta}</span>
              </div>

              <h3 className="font-bold text-xs uppercase leading-tight mb-2">
                {amb.patient.name}
              </h3>
              
              <div className="flex items-center">
                <div className={`text-[9px] font-bold uppercase border px-1 ${
                  isSelected 
                    ? 'border-white/50 text-white' 
                    : (isTriageRed ? 'border-red-600 text-red-700 bg-red-50' : 'border-amber-600 text-amber-700 bg-amber-50')
                }`}>
                  T-STATUS: {amb.patient.triage}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="p-2 bg-[#d4d0c8] border-t border-white text-[9px] font-bold text-slate-600 uppercase">
        SINKRONISASI UNIT: AKTIF
      </div>
    </section>
  );
}