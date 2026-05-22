"use client";

import React from 'react';
import { Shield, Check } from 'lucide-react';

interface Action {
  name: string;
  status: boolean;
}

interface PreHospitalActionsLogProps {
  actions: Action[];
}

export default function PreHospitalActionsLog({ actions }: PreHospitalActionsLogProps) {
  return (
    <div className="text-left">
      <div className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-3 flex items-center gap-1.5">
        <Shield size={14} className="text-slate-500" /> Log Tindakan Pra-Rumah Sakit (Ambulans)
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {actions.map((act, index) => (
          <div 
            key={index}
            className={`p-3 rounded-none border flex items-center justify-between text-xs font-semibold ${
              act.status 
                ? 'bg-emerald-50 border-emerald-300 text-emerald-800' 
                : 'bg-slate-50 border-slate-200 text-slate-400'
            }`}
          >
            <span>{act.name}</span>
            <div className={`w-5 h-5 rounded-none flex items-center justify-center border ${
              act.status 
                ? 'bg-emerald-600 border-emerald-600 text-white' 
                : 'bg-white border-slate-300'
            }`}>
              {act.status && <Check size={12} strokeWidth={3} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}