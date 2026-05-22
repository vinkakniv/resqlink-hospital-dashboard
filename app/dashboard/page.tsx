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
    <div className="flex h-screen bg-[#F4F7F6] text-[#1E293B] antialiased font-sans w-full overflow-hidden">
      
      {/* 1. COMPLEMENTARY SIDEBAR */}
      <HospitalSidebar availableBeds={4} totalBeds={10} />

      <main className="flex-1 flex overflow-hidden">
        
        {/* 2. PANEL ANTRIAN KIRI */}
        <AmbulanceQueuePanel 
          ambulances={incomingAmbulancesDummy}
          selectedId={selectedAmb.id}
          onSelect={setSelectedAmb}
        />

        {/* PANEL MONITOR UTAMA */}
        <section className="flex-1 bg-white pt-6 px-6 overflow-y-auto flex flex-col justify-between">
          
          <div>
            <div className="mb-4 flex items-center text-left">
              <Link 
                href="/" 
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#192e59] hover:text-red-600 transition-colors font-mono uppercase tracking-wider"
              >
                <ArrowLeft size={14} strokeWidth={2.5} /> Kembali Ke Portal Utama
              </Link>
            </div>

            {/* 1. DATA IDENTITAS & KELUHAN UTAMA (FORM BAGIAN 1) */}
            <div className="border border-slate-200 rounded-none p-5 bg-slate-50 mb-6 flex justify-between items-start">
              <div className="text-left">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-xl font-black tracking-tight text-slate-900">{selectedAmb.patient.name}</h1>
                  <span className={`px-2.5 py-1 rounded-none text-xs font-bold text-white tracking-wide ${
                    selectedAmb.patient.triage === "MERAH" ? "bg-red-600" : "bg-amber-500"
                  }`}>
                    TRIASE {selectedAmb.patient.triage} : {selectedAmb.patient.triageDesc}
                  </span>
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

              <div className="text-right border-l border-slate-200 pl-6">
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mb-1">Keluhan Utama (Form)</span>
                <div className="px-3 py-1.5 bg-white border border-slate-200 rounded-none text-sm font-bold text-slate-900 inline-block">
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

        </section>
      </main>
    </div>
  );
}