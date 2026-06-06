"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; 
import HospitalSidebar from '@/components/hospital/HospitalSidebar';
import AmbulanceQueuePanel from '@/components/hospital/AmbulanceQueuePanel';
import PatientVitalsTable from '@/components/hospital/PatientVitalsTable';
import PreHospitalActionsLog from '@/components/hospital/PreHospitalActionsLog';

const incomingAmbulancesDummy = [
  {
    id: "UNIT-AMB-001",
    eta: "5 MENIT",
    patient: {
      name: "JOYNEY DISSY",
      age: "30 TAHUN",
      gender: "PEREMPUAN",
      triage: "MERAH",
      triageDesc: "GAWAT DARURAT",
      complaint: "SESAK NAPAS BERAT / RESPIRATORY DISTRESS",
    },
    vitals: {
      consciousness: "COMPOS MENTIS (SADAR)",
      bloodPressure: "130/85 MMHG",
      spo2: "88%", 
      heartRate: "110 BPM",
      bloodSugar: "150 MG/DL"
    },
    actions: [
      { name: "OKSIGEN TAMBAHAN (MASKER)", status: true },
      { name: "PEMASANGAN JALUR INFUS IV", status: true },
      { name: "MONITORING EKG TERPASANG", status: true },
      { name: "PERSIAPAN INTUBASI", status: false },
    ]
  },
  {
    id: "UNIT-AMB-002",
    eta: "12 MENIT",
    patient: {
      name: "TONO SUTRISNO",
      age: "65 TAHUN",
      gender: "LAKI-LAKI",
      triage: "KUNING",
      triageDesc: "DARURAT TIDAK GAWAT",
      complaint: "DUGAAN STROKE / DEFISIT NEUROLOGIS AKUT",
    },
    vitals: {
      consciousness: "SOMNOLEN (RESPON SUARA)",
      bloodPressure: "145/95 MMHG",
      spo2: "96%",
      heartRate: "92 BPM",
      bloodSugar: "125 MG/DL"
    },
    actions: [
      { name: "TERAPI OKSIGEN KANUL", status: true },
      { name: "PEMASANGAN JALUR INFUS IV", status: true },
      { name: "FAST-POSITIVE SCAN", status: true },
      { name: "ADMINISTRASI ASPIRIN", status: false },
    ]
  }
];

export default function HospitalDashboard() {
  const [ambulances, setAmbulances] = useState(incomingAmbulancesDummy);
  const [selectedAmb, setSelectedAmb] = useState(incomingAmbulancesDummy[0]);

  useEffect(() => {
    const fetchLiveData = async () => {
      try {
        const response = await fetch('https://api.npoint.io/3d8b5c9c9b1f2e3d4a5b');
        if (response.ok) {
          const liveData = await response.json();
          if (liveData && liveData.lastUpdated) {
            const updatedAmb = {
              ...incomingAmbulancesDummy[0],
              patient: {
                ...incomingAmbulancesDummy[0].patient,
                age: liveData.age ? `${liveData.age} TAHUN` : incomingAmbulancesDummy[0].patient.age,
                triage: liveData.triage ? liveData.triage.toUpperCase() : incomingAmbulancesDummy[0].patient.triage,
              },
              vitals: {
                consciousness: (liveData.consciousness || incomingAmbulancesDummy[0].vitals.consciousness).toUpperCase(),
                bloodPressure: liveData.bloodPressure || incomingAmbulancesDummy[0].vitals.bloodPressure,
                spo2: liveData.spo2 || incomingAmbulancesDummy[0].vitals.spo2,
                heartRate: liveData.heartRate || incomingAmbulancesDummy[0].vitals.heartRate,
                bloodSugar: liveData.bloodSugar || incomingAmbulancesDummy[0].vitals.bloodSugar,
              },
              actions: (liveData.actions || []).map((name: string) => ({ name: name.toUpperCase(), status: true })),
            };

            setAmbulances(prev => [updatedAmb, prev[1]]);
            if (selectedAmb.id.includes("001")) {
              setSelectedAmb(updatedAmb);
            }
          }
        }
      } catch (e) {
        console.error("KESALAHAN SINKRONISASI:", e);
      }
    };

    const interval = setInterval(fetchLiveData, 4000);
    return () => clearInterval(interval);
  }, [selectedAmb.id]);

  return (
    <div className="flex h-screen w-full bg-[#d4d0c8] text-black antialiased overflow-hidden text-sm">
      
      <HospitalSidebar availableBeds={4} totalBeds={12} />

      <AmbulanceQueuePanel 
        ambulances={ambulances}
        selectedId={selectedAmb.id}
        onSelect={setSelectedAmb}
      />

      {/* MONITOR AREA */}
      <section className="flex-1 flex flex-col min-w-0 bg-[#f0f0f0] border-l border-white shadow-[inset_1px_0_#808080]">
        
        {/* SUB-HEADER */}
        <header className="bg-[#000080] text-white px-3 py-1 flex items-center justify-between border-b border-white">
          <div className="flex items-center gap-4 font-bold text-[11px]">
            <Link 
              href="/" 
              className="hover:underline flex items-center gap-1"
            >
              [ KEMBALI KE PORTAL ]
            </Link>
            <div className="h-3 w-px bg-white/30" />
            <div className="flex items-center gap-2">
              <span>TERMINAL MONITOR:</span>
              <span className="bg-white text-[#000080] px-2 border border-black">{selectedAmb.id}</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-bold">
            <span className="flex items-center gap-1">
               ● SINKRONISASI AKTIF
            </span>
            <span className="border-l border-white/50 pl-4 uppercase">Koneksi Terenkripsi</span>
          </div>
        </header>

        {/* DATA SHEET */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          
          {/* PATIENT DATA PANEL */}
          <div className="bg-[#d4d0c8] border-t border-l border-white border-r border-b border-[#404040]">
            <div className="bg-[#808080] text-white px-2 py-0.5 font-bold text-[10px] uppercase">Data Identitas Pasien</div>
            <div className="p-4 bg-white grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
              <div className="lg:col-span-3 pr-4">
                <h1 className="text-2xl font-black text-black tracking-tight border-b-2 border-black pb-1 mb-4 uppercase">
                  {selectedAmb.patient.name}
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-bold text-[11px]">
                  <div>
                    <span className="text-gray-500 uppercase block mb-1">UMUR</span>
                    <p className="border-l-2 border-black pl-2">{selectedAmb.patient.age}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 uppercase block mb-1">GENDER</span>
                    <p className="border-l-2 border-black pl-2">{selectedAmb.patient.gender}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 uppercase block mb-1">NOMOR UNIT</span>
                    <p className="border-l-2 border-black pl-2">{selectedAmb.id}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 uppercase block mb-1">ESTIMASI TIBA</span>
                    <p className="border-l-2 border-blue-800 pl-2 text-blue-800">{selectedAmb.eta}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center p-4">
                 <div className={`w-full p-2 text-center border-2 border-inset mb-2 ${
                    selectedAmb.patient.triage === "MERAH" ? "bg-red-800 text-white" : "bg-yellow-500 text-black"
                 }`}>
                    <span className="text-[9px] font-bold uppercase block">STATUS TRIASE</span>
                    <span className="text-xl font-black uppercase">{selectedAmb.patient.triage}</span>
                 </div>
                 <p className="text-[10px] font-bold text-center leading-tight uppercase opacity-70">{selectedAmb.patient.triageDesc}</p>
              </div>
            </div>
            
            <div className="bg-[#f0f0f0] p-2 border-t border-[#808080]">
              <span className="text-[9px] font-bold text-gray-500 uppercase block mb-1">Laporan Keluhan Utama:</span>
              <p className="font-bold text-black border-l-4 border-[#808080] pl-3 italic">
                "{selectedAmb.patient.complaint}"
              </p>
            </div>
          </div>

          {/* VITALS SECTION */}
          <div className="bg-[#d4d0c8] border-t border-l border-white border-r border-b border-[#404040]">
             <div className="bg-[#808080] text-white px-2 py-0.5 font-bold text-[10px] uppercase">Pemantauan Tanda Vital (LIVE)</div>
             <div className="p-2 bg-[#f0f0f0]">
                <PatientVitalsTable vitals={selectedAmb.vitals} />
             </div>
          </div>

          {/* ACTIONS SECTION */}
          <div className="bg-[#d4d0c8] border-t border-l border-white border-r border-b border-[#404040]">
             <div className="bg-[#808080] text-white px-2 py-0.5 font-bold text-[10px] uppercase">Log Tindakan Lapangan</div>
             <div className="p-2 bg-[#f0f0f0]">
                <PreHospitalActionsLog actions={selectedAmb.actions} />
             </div>
          </div>

        </div>

        {/* STATUS FOOTER */}
        <footer className="bg-[#c0c0c0] border-t border-white px-3 py-1 flex justify-between items-center text-[10px] font-bold text-[#404040]">
           <div className="flex gap-4">
              <span>SISTEM: RESQLINK-TERMINAL-01</span>
              <span className="border-l border-[#808080] pl-4">STATUS: TERHUBUNG</span>
           </div>
           <div className="flex gap-4 uppercase">
              <span>Memory: 14.5 MB</span>
              <span>Uptime: 04:12:09</span>
           </div>
        </footer>

      </section>
    </div>
  );
}