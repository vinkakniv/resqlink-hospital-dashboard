"use client";

import React from 'react';

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
  const spo2Val = parseInt(vitals.spo2);
  const isHypoxia = spo2Val < 92;

  const VitalCell = ({ label, value, unit, isAlert }: any) => (
    <div className={`border border-[#808080] p-2 bg-white ${isAlert ? 'bg-red-50 ring-1 ring-inset ring-red-200' : ''}`}>
      <div className={`text-[9px] font-bold uppercase border-b border-[#e0e0e0] mb-2 ${isAlert ? 'text-red-700' : 'text-gray-500'}`}>
        {label}
      </div>
      <div className="flex items-baseline gap-1">
        <span className={`text-2xl font-black tabular-nums ${isAlert ? 'text-red-700 underline' : 'text-black'}`}>
          {value}
        </span>
        <span className={`text-[10px] font-bold ${isAlert ? 'text-red-600' : 'text-gray-400'}`}>
          {unit}
        </span>
      </div>
    </div>
  );

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
        <VitalCell label="Saturasi O2" value={vitals.spo2.replace('%', '')} unit="%" isAlert={isHypoxia} />
        <VitalCell label="Detak Jantung" value={vitals.heartRate.split(' ')[0]} unit="BPM" />
        <VitalCell label="Tekanan Darah" value={vitals.bloodPressure.split(' ')[0]} unit="mmHg" />
        <VitalCell label="Gula Darah" value={vitals.bloodSugar.split(' ')[0]} unit="mg/dL" />
        <VitalCell label="Kesadaran" value={vitals.consciousness.split(' ')[0]} unit="Scale" />
      </div>
      
      {isHypoxia && (
        <div className="bg-red-800 text-white p-2 border-2 border-white text-xs font-bold uppercase text-center shadow-sm">
          PERINGATAN: KONDISI HIPOKSIA TERDETEKSI (SPO2 &lt; 92%)
        </div>
      )}
    </div>
  );
}