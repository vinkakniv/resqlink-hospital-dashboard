"use client";

import React from 'react';
import { Activity } from 'lucide-react';

interface Vitals {
  consciousness: string;
  bloodPressure: string;
  spo2: string;
  heartRate: string;
  bloodSugar: string;
}

interface PatientVitalsTableProps {
  vitals: Vitals;
}

export default function PatientVitalsTable({ vitals }: PatientVitalsTableProps) {
  // Mengecek apakah saturasi oksigen rendah di bawah threshold klinis
  const isHypoxia = parseInt(vitals.spo2) < 92;

  return (
    <div className="mb-6 text-left">
      <div className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-3 flex items-center gap-1.5">
        <Activity size={14} className="text-slate-500" /> Tanda-Tanda Vital (Pra-RS)
      </div>
      
      <div className="border border-slate-200 rounded-none overflow-hidden">
        <table className="w-full text-sm text-left border-collapse bg-white">
          <thead>
            <tr className="bg-slate-100 text-slate-600 text-xs font-bold uppercase border-b border-slate-200">
              <th className="px-4 py-3">Parameter Medis</th>
              <th className="px-4 py-3">Nilai Input Form</th>
              <th className="px-4 py-3">Status Klinis Rumah Sakit</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            <tr>
              <td className="px-4 py-3.5 font-medium text-slate-500">Tingkat Kesadaran</td>
              <td className="px-4 py-3.5 font-bold font-mono text-slate-900">{vitals.consciousness}</td>
              <td className="px-4 py-3.5"><span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-none font-medium border border-blue-200">Terpantau</span></td>
            </tr>
            <tr>
              <td className="px-4 py-3.5 font-medium text-slate-500">Tekanan Darah (Sistolik / Diastolik)</td>
              <td className="px-4 py-3.5 font-bold font-mono text-slate-900">{vitals.bloodPressure}</td>
              <td className="px-4 py-3.5"><span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-none font-medium border border-slate-200">Normal Tinggi</span></td>
            </tr>
            <tr>
              <td className="px-4 py-3.5 font-medium text-slate-500">Saturasi Oksigen (SpO2)</td>
              <td className="px-4 py-3.5 font-bold font-mono text-red-600 text-md">{vitals.spo2}</td>
              <td className="px-4 py-3.5">
                {isHypoxia ? (
                  <span className="text-xs bg-red-50 text-red-700 px-2 py-0.5 rounded-none font-bold border border-red-200 animate-pulse">
                    🚨 Hipoksia / Butuh Oksigenasi
                  </span>
                ) : (
                  <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-none font-medium border border-emerald-200">
                    Normal
                  </span>
                )}
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3.5 font-medium text-slate-500">Detak Jantung (Pulse)</td>
              <td className="px-4 py-3.5 font-bold font-mono text-slate-900">{vitals.heartRate}</td>
              <td className="px-4 py-3.5"><span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-none font-medium border border-amber-200">Takikardia Ringan</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-[11px] text-slate-400 font-mono mt-2 pl-2">
        * Gula Darah Sewaktu (Opsional): <span className="font-bold text-slate-700">{vitals.bloodSugar}</span>
      </div>
    </div>
  );
}