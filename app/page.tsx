"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LayoutDashboard, Activity, Phone, ShieldAlert, Clock, ChevronRight } from 'lucide-react';

export default function HospitalHomepage() {
  const currentDateTime = "Jumat, 22 Mei 2026 | 20:38 WIB";

  return (
    <div className="min-h-screen bg-[#F4F7F6] text-[#1E293B] antialiased flex flex-col w-full overflow-x-hidden font-sans">
      
      {/* 1. TOP BAR INFO */}
      <div className="w-full bg-[#0A1224] text-slate-400 text-[11px] font-mono border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-9 flex justify-between items-center tracking-wider">
          <div>UNIT PELAYANAN TEKNOLOGI MEDIS INTEGRASI</div>
          <div className="flex items-center gap-2">
            <Clock size={12} className="text-slate-500" />
            <span>{currentDateTime}</span>
          </div>
        </div>
      </div>

      {/* 2. HEADER UTAMA */}
      <header className="w-full bg-[#192e59] text-white border-b-4 border-red-600 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-sm flex items-center justify-center border border-slate-200 shrink-0">
              <Image 
                src="/assets/images/ResQLink_Logo.png" 
                alt="ResQLink Logo"
                width={38}
                height={38}
                className="object-contain"
              />
            </div>
            <div className="text-left">
              <h1 className="text-base md:text-xl font-black tracking-tight leading-none font-mono text-white">
                RESQLINK INTEGRATED HOSPITAL
              </h1>
              <span className="text-[10px] md:text-xs text-slate-300 tracking-wider font-medium uppercase mt-2 block">
                Sistem Pusat Kontrol Informasi & Operasional Gawat Darurat
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#112244] px-4 py-2 border border-slate-700 rounded-sm shrink-0">
            <span className="text-[11px] text-white font-bold tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              IGD NODE ACTIVE
            </span>
          </div>
        </div>
      </header>

      {/* 3. HERO / DAERAH PENGUMUMAN UTAMA */}
      <section className="w-full bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 py-8 text-left">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-2 font-mono">
            <span>Portal Utama</span>
            <ChevronRight size={10} />
            <span>Rumah Sakit</span>
            <ChevronRight size={10} />
            <span className="text-[#192e59] font-bold">Beranda Operasional</span>
          </div>
          <h2 className="text-2xl font-bold text-[#192e59] tracking-tight mb-2">
            Sistem Pemantauan Pra-Rumah Sakit Terintegrasi
          </h2>
          <p className="text-slate-600 text-sm max-w-5xl leading-relaxed">
            Portal ini berfungsi sebagai pusat koordinasi taktis internal antara tim medis lapangan (Ambulans) dan unit gawat darurat (IGD). Pastikan petugas administrasi selalu memantau Dashboard Triase untuk mempersiapkan penanganan pasien rujukan kritis sebelum armada tiba di lokasi penjemputan rumah sakit.
          </p>
        </div>
      </section>

{/* 4. AREA SEKSI KONTEN: Diikat mati dengan pembungkus block agar tidak bocor kesamping */}
      <div className="w-full max-w-7xl mx-auto px-6 py-8 flex-1">
        <div className="flex flex-col lg:flex-row gap-6 items-start justify-between">
          
          {/* KOLOM KIRI & TENGAH (Aplikasi Utama) - Paksa ambil 66% lebar */}
          <div className="w-full lg:w-2/3 space-y-6 flex-shrink-0 text-left">
            <div className="bg-white border border-slate-200 rounded-sm shadow-xs">
              <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
                <LayoutDashboard size={16} className="text-[#192e59]" />
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-700">Aplikasi Sistem & Modul Utama</h3>
              </div>
              
              <div className="p-0 divide-y divide-slate-200">
                {/* ITEM MODUL 1: MONITOR TRIASE */}
                <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-slate-50/50 transition-colors">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-600" />
                      <h4 className="font-bold text-sm text-slate-900">
                        Monitor Triase & Notifikasi Pra-RS (IGD Live Feed)
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 pl-4 leading-relaxed">
                      Memantau form input data pasien secara real-time dari driver/perawat ambulans mencakup data identitas, status 4 parameter tanda vital, serta log tindakan pra-hospital.
                    </p>
                  </div>
                  <Link 
                    href="/dashboard"
                    className="bg-[#192e59] hover:bg-[#122242] text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors whitespace-nowrap shadow-xs"
                  >
                    Masuk Modul &rarr;
                  </Link>
                </div>

                {/* ITEM MODUL 2: LOG REKAM MEDIS (TERKUNCI) */}
                <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 opacity-60 bg-white">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-slate-400" />
                      <h4 className="font-bold text-sm text-slate-800">
                        Arsip Manifes & Data Klinis Pasien Rujukan
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 pl-4 leading-relaxed">
                      Eksplorasi data historis pasien gawat darurat yang telah divalidasi dan diselesaikan pembayarannya oleh pihak driver ambulans di lapangan.
                    </p>
                  </div>
                  <button disabled className="bg-slate-100 text-slate-400 border border-slate-200 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm cursor-not-allowed whitespace-nowrap">
                    Terkunci
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: Status Bed & Kontak Krisis - Paksa ambil 33% lebar */}
          <div className="w-full lg:w-1/3 space-y-6 flex-shrink-0 text-left">
            
            {/* PANEL KAPASITAS BED */}
            <div className="bg-white border border-slate-200 rounded-sm shadow-xs">
              <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
                <Activity size={16} className="text-emerald-600" />
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-700">Status Kapasitas Bed Kritis</h3>
              </div>
              <div className="p-4">
                <table className="w-full text-xs text-left border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 text-slate-600 font-bold font-mono">
                      <th className="p-2 border-r border-slate-200">Zonasi IGD</th>
                      <th className="p-2 text-center">Status Alokasi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-medium">
                    <tr>
                      <td className="p-2.5 border-r border-slate-200 text-slate-600">Total Ketersediaan Bed</td>
                      <td className="p-2.5 text-center font-bold font-mono text-slate-800">10 Bed</td>
                    </tr>
                    <tr className="bg-red-50/40">
                      <td className="p-2.5 border-r border-slate-200 text-slate-600">Terisi Pasien Live Feed</td>
                      <td className="p-2.5 text-center font-bold font-mono text-red-600">6 Unit</td>
                    </tr>
                    <tr className="bg-emerald-50/40">
                      <td className="p-2.5 border-r border-slate-200 text-slate-600">Sisa Kapasitas Kosong</td>
                      <td className="p-2.5 text-center font-bold font-mono text-emerald-600">4 Unit</td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-3 p-2.5 bg-emerald-50 text-emerald-800 text-[11px] font-medium border border-emerald-200 rounded-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse shrink-0" />
                  <span>Daya tampung IGD dalam ambang batas aman.</span>
                </div>
              </div>
            </div>

            {/* PANEL EMERGENCY HOTLINE */}
            <div className="bg-white border border-slate-200 rounded-sm shadow-xs">
              <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
                <ShieldAlert size={16} className="text-red-600" />
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-700">Pusat Komando Tanggap Krisis</h3>
              </div>
              <div className="p-4">
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Hubungi pusat kendali utama apabila ambulans eksternal mengalami kendala koordinasi atau membutuhkan rujukan penanganan trauma massal.
                </p>
                <div className="w-full flex items-center justify-center gap-2 bg-red-600 border border-red-700 text-white py-2.5 rounded-sm text-xs font-mono font-bold tracking-widest">
                  <Phone size={14} strokeWidth={2.5} /> HOTLINE: (021) 5711-00
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 5. FOOTER INSTITUSI */}
      <footer className="w-full bg-[#0A1224] text-slate-400 py-6 border-t border-slate-800 text-xs mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[11px]">
          <div>&copy; 2026 ResQLink Medical Integrator Platform. Terdaftar pada Pusat Sistem Kontrol IGD Kritis.</div>
          <div className="text-slate-600">Sistem Versi 2.4.0-Stable</div>
        </div>
      </footer>

    </div>
  );
}