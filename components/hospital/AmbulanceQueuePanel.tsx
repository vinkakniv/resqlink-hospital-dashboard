"use client";

import React from 'react';
import { Clock } from 'lucide-react';

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
    <section className="w-80 bg-white border-r border-slate-200 flex flex-col">
      <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-left">
        <h2 className="font-bold text-xs uppercase tracking-wider text-slate-500">Ambulans Menuju Rujukan</h2>
        <span className="bg-slate-200 px-2 py-0.5 rounded-none text-xs font-bold text-slate-700">
          {ambulances.length} Rujukan
        </span>
      </div>

      <div className="flex-1 p-3 overflow-y-auto space-y-2">
        {ambulances.map((amb) => {
          const isSelected = selectedId === amb.id;
          const triageIndicator = amb.patient.triage === "MERAH" ? "bg-red-500" : "bg-amber-500";

          return (
            <div
              key={amb.id}
              onClick={() => onSelect(amb)}
              className={`p-4 rounded-none border transition-all cursor-pointer text-left ${
                isSelected 
                  ? 'bg-amber-50/40 border-amber-500 shadow-xs' 
                  : 'bg-white border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-xs font-bold text-slate-500">{amb.id}</span>
                <span className="text-xs font-bold text-slate-600 flex items-center gap-1">
                  <Clock size={12} className="text-slate-400" /> ETA: {amb.eta}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {/* Indikator titik triase tetap berbentuk lingkaran (rounded-full) agar estetik sebagai penanda */}
                <div className={`w-2 h-2 rounded-full ${triageIndicator}`} />
                <h3 className="font-bold text-sm text-slate-900">{amb.patient.name}</h3>
              </div>
              <div className="text-xs text-slate-500 mt-1 pl-4">
                {amb.patient.complaint} • {amb.patient.age}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}