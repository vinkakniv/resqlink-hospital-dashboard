"use client";

import React, { useState } from 'react';
import Link from 'next/link'; 
import { ArrowLeft } from 'lucide-react'; 
import HospitalSidebar from '@/components/hospital/HospitalSidebar';
import AmbulanceQueuePanel from '@/components/hospital/AmbulanceQueuePanel';
import PatientVitalsTable from '@/components/hospital/PatientVitalsTable';
import PreHospitalActionsLog from '@/components/hospital/PreHospitalActionsLog';

const incomingAmbulancesDummy = [
  {
    id: "AMB-01",
    eta: "5 Menit",
    patient: {
      name: "Joyney Dissy",
      age: "Dewasa (30 Thn)",
      gender: "Perempuan",
      triage: "MERAH",
      triageDesc: "Gawat Darurat (Mengancam Nyawa)",
      complaint: "Sesak Napas Berat",
    },
    vitals: {
      consciousness: "Alert [A] - Sadar Penuh",
      bloodPressure: "130/85 mmHg",
      spo2: "88%", 
      heartRate: "110 BPM",
      bloodSugar: "150 mg/dL"
    },
    actions: [
      { name: "Oksigen Tambahan", status: true },
      { name: "Jalur Infus IV Terpasang", status: true },
      { name: "Resusitasi Jantung Paru (RJP)", status: false },
      { name: "Penyangga Leher (Collar Neck)", status: false },
    ]
  },
  {
    id: "AMB-02",
    eta: "12 Menit",
    patient: {
      name: "Tono Sutrisno",
      age: "Lansia (65 Thn)",
      gender: "Laki-laki",
      triage: "KUNING",
      triageDesc: "Darurat Tidak Gawat",
      complaint: "Suspect Stroke / Nyeri Dada",
    },
    vitals: {
      consciousness: "Verbal [V] - Sadar Dipanggil",
      bloodPressure: "140/90 mmHg",
      spo2: "96%",
      heartRate: "95 BPM",
      bloodSugar: "Belum Diperiksa"
    },
    actions: [
      { name: "Oksigen Tambahan", status: true },
      { name: "Jalur Infus IV Terpasang", status: true },
      { name: "Resusitasi Jantung Paru (RJP)", status: false },
      { name: "Penyangga Leher (Collar Neck)", status: false },
    ]
  }
];

export default function HospitalDashboard() {
  const [selectedAmb, setSelectedAmb] = useState(incomingAmbulancesDummy[0]);

  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-screen bg-[#F4F7F6] text-[#1E293B] antialiased font-sans w-full overflow-x-hidden">
      
      {/* 1. COMPLEMENTARY SIDEBAR */}
      <div className="hidden lg:block shrink-0">
        <HospitalSidebar availableBeds={4} totalBeds={10} />
      </div>

      {/* BODY SPLIT SYSTEM LAYOUT */}
      <main className="flex-1 flex flex-col lg:flex-row w-full min-w-0">
        
        {/* 2. PANEL ANTRIAN KIRI */}
        <div className="w-full lg:w-80 shrink-0 border-b lg:border-b-0 lg:border-r border-slate-200">
          <AmbulanceQueuePanel 
            ambulances={incomingAmbulancesDummy}
            selectedId={selectedAmb.id}
            onSelect={setSelectedAmb}
          />
        </div>

        {/* PANEL MONITOR UTAMA */}
        <section className="flex-1 bg-white p-4 sm:p-6 overflow-y-auto flex flex-col justify-between min-w-0">
          
          <div>
            {/* NAVIGASI KEMBALI */}
            <div className="mb-4 flex items-center text-left">
              <Link 
                href="/" 
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#192e59] hover:text-red-600 transition-colors font-mono uppercase tracking-wider"
              >
                <ArrowLeft size={14} strokeWidth={2.5} /> Kembali Ke Portal Utama
              </Link>
            </div>

            {/* 1. DATA IDENTITAS & KELUHAN UTAMA (FORM BAGIAN 1) */}
            <div className="border border-slate-200 rounded-none p-4 sm:p-5 bg-slate-50 mb-6 flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-0">
              <div className="text-left w-full sm:w-auto">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h1 className="text-lg sm:text-xl font-black tracking-tight text-slate-900 leading-tight">{selectedAmb.patient.name}</h1>
                  <span className={`inline-block px-2 py-0.5 rounded-none text-[10px] font-bold text-white tracking-wide w-max ${
                    selectedAmb.patient.triage === "MERAH" ? "bg-red-600" : "bg-amber-500"
                  }`}>
                    TRIASE {selectedAmb.patient.triage}
                  </span>
                </div>
                <div className="text-xs text-slate-500 font-mono mb-2 block sm:hidden">
                  {selectedAmb.patient.triageDesc}
                </div>
                <table className="text-xs text-slate-600 border-separate border-spacing-x-4 border-spacing-y-1 -ml-4">
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-400">Jenis Kelamin</td>
                      <td>: <span className="text-slate-800 font-medium">{selectedAmb.patient.gender}</span></td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-400">Estimasi Usia</td>
                      <td>: <span className="text-slate-800 font-medium">{selectedAmb.patient.age}</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Box Keluhan Kanan */}
              <div className="text-left sm:text-right w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 sm:border-l border-slate-200 sm:pl-6 flex flex-col items-start sm:items-end">
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mb-1">Keluhan Utama (Form)</span>
                <div className="px-3 py-1.5 bg-white border border-slate-200 rounded-none text-xs sm:text-sm font-bold text-slate-900 inline-block">
                  {selectedAmb.patient.complaint}
                </div>
              </div>
            </div>

            {/* 3. COMPONENT MONITOR TABEL PARAMETER TANDA VITAL (FORM BAGIAN 2) */}
            <PatientVitalsTable vitals={selectedAmb.vitals} />

            <div className="my-2" />

            {/* 4. COMPONENT LOG CEKLIST TINDAKAN MEDIS AMBULANS (FORM BAGIAN 3) */}
            <PreHospitalActionsLog actions={selectedAmb.actions} />
          </div>

          {/* 5. FOOTER DASHBOARD INTERNAL */}
          <footer className="mt-12 py-4 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] sm:text-[11px] text-slate-400 font-mono text-center sm:text-left">
            <div>
              &copy; 2026 RS Universitas Indonesia × ResQLink Platform.
            </div>
            <div className="text-slate-500 hidden sm:block">
              NODE_ID: LIVE-IGD-STATION-01
            </div>
          </footer>

        </section>
      </main>
    </div>
  );
}