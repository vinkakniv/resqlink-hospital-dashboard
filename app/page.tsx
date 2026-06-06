"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HospitalHomepage() {
  const currentDateTime = "Sabtu, 23 Mei 2026 | 09:15 WIB";

  return (
    <div className="min-h-screen bg-[#d4d0c8] text-black antialiased flex flex-col w-full overflow-hidden text-sm">
      
      {/* SYSTEM TOP BAR */}
      <div className="w-full bg-[#000080] text-white px-2 py-1 flex justify-between items-center font-bold border-b border-white">
        <div className="flex gap-4 items-center">
          <div className="bg-white p-0.5">
             <Image src="/assets/images/ResQLink_Logo.png" alt="Logo" width={16} height={16} className="grayscale" />
          </div>
          <span>SISTEM INFORMASI RUMAH SAKIT UNIVERSITAS INDONESIA</span>
        </div>
        <div className="flex gap-4">
          <span>{currentDateTime}</span>
          <span className="border-l border-white/50 pl-4">LOGIN: ADMIN_01</span>
        </div>
      </div>

      {/* HEADER AREA */}
      <header className="bg-[#f0f0f0] border-b border-[#808080] p-4 flex items-center gap-6">
        <div className="bg-white border-2 border-inset p-2 shadow-inner">
          <Image src="/assets/images/ResQLink_Logo.png" alt="ResQLink" width={48} height={48} className="grayscale" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-[#000080] leading-none mb-1">ResQLink Medical Terminal</h1>
          <p className="font-bold text-[#404040] uppercase tracking-tighter">Terminal Pusat Kendali Gawat Darurat dan Respon Cepat</p>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="p-6 flex-1 overflow-auto">
        <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-6">
          
          {/* LEFT: MAIN MODULES */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            <div className="bg-[#c0c0c0] border-t border-l border-white border-r border-b border-[#404040]">
              <div className="bg-[#000080] text-white px-2 py-1 font-bold">Modul Aplikasi Tersedia</div>
              <div className="p-4 bg-[#f0f0f0] grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* MONITOR MODULE */}
                <div className="bg-[#d4d0c8] border-t border-l border-white border-r border-b border-[#404040] p-4 flex flex-col h-[220px]">
                  <h3 className="font-bold text-[#000080] border-b border-[#808080] pb-2 mb-3 underline">1. MONITOR PASIEN IGD</h3>
                  <p className="text-xs leading-tight mb-4 flex-1">
                    Pemantauan unit ambulans aktif. Akses tanda vital pasien, data triase, dan log tindakan medis secara langsung dari lapangan.
                  </p>
                  <Link 
                    href="/dashboard"
                    className="bg-[#d4d0c8] border-t-2 border-l-2 border-white border-r-2 border-b-2 border-[#404040] text-center py-2 font-bold hover:bg-[#c0c0c0] active:border-inset"
                  >
                    JALANKAN MONITOR
                  </Link>
                </div>

                {/* ARCHIVE MODULE */}
                <div className="bg-[#d4d0c8] border-t border-l border-white border-r border-b border-[#404040] p-4 flex flex-col h-[220px] opacity-60">
                  <h3 className="font-bold text-gray-600 border-b border-[#808080] pb-2 mb-3">2. REKAM MEDIS HISTORIS</h3>
                  <p className="text-xs leading-tight mb-4 flex-1">
                    Akses basis data pasien lama dan arsip rujukan. Memerlukan otorisasi Supervisor (Level 4).
                  </p>
                  <div className="bg-[#b4b0a8] border-2 border-gray-400 text-gray-500 text-center py-2 font-bold cursor-not-allowed">
                    AKSES DIBATASI
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-[#ffffcc] border border-[#808080] p-3 shadow-sm">
              <span className="font-bold underline uppercase block mb-1">Catatan Operasional:</span>
              <p className="text-xs leading-tight">
                Seluruh aktivitas terminal ini dipantau oleh server pusat. Harap lakukan verifikasi data unit lapangan setiap 15 menit. Laporan kegagalan sistem harus segera diteruskan ke bagian IT.
              </p>
            </div>
          </div>

          {/* RIGHT: SYSTEM STATUS */}
          <div className="col-span-12 lg:col-span-4 space-y-4">
            <div className="bg-[#c0c0c0] border-t border-l border-white border-r border-b border-[#404040]">
              <div className="bg-[#000080] text-white px-2 py-1 font-bold">Status Layanan Unit</div>
              <div className="p-3 bg-[#f0f0f0]">
                 <div className="bg-white border-2 border-inset p-2 mb-4">
                   <table className="w-full text-xs font-bold border-collapse">
                     <thead>
                       <tr className="bg-[#d4d0c8] border-b border-[#808080]">
                         <th className="p-1 text-left">PARAMETER</th>
                         <th className="p-1 text-right">VALUE</th>
                       </tr>
                     </thead>
                     <tbody>
                       <tr className="border-b border-[#e0e0e0]">
                         <td className="p-1">KAPASITAS IGD</td>
                         <td className="p-1 text-right">12 BED</td>
                       </tr>
                       <tr className="border-b border-[#e0e0e0] text-red-700">
                         <td className="p-1">BED TERPAKAI</td>
                         <td className="p-1 text-right">08 BED</td>
                       </tr>
                       <tr className="text-green-700 font-black">
                         <td className="p-1">BED TERSEDIA</td>
                         <td className="p-1 text-right text-lg">04 BED</td>
                       </tr>
                     </tbody>
                   </table>
                 </div>

                 <div className="bg-red-800 text-white p-3 border-2 border-white mb-2">
                    <span className="font-bold underline block mb-2">HOTLINE KOORDINASI</span>
                    <div className="text-2xl font-black mb-1">(021) 5711-00</div>
                    <p className="text-[10px] leading-none uppercase">Darurat Massal / Gangguan Sistem</p>
                 </div>

                 <button className="w-full bg-[#d4d0c8] border-t-2 border-l-2 border-white border-r-2 border-b-2 border-[#404040] py-2 font-bold hover:bg-[#c0c0c0] active:border-inset mt-4">
                   KELUAR DARI SISTEM
                 </button>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* FOOTER AREA */}
      <footer className="bg-[#f0f0f0] border-t border-[#808080] px-4 py-2 flex justify-between items-center text-[11px] font-bold text-[#404040]">
        <div>COPYRIGHT &copy; 2026 RS UNIVERSITAS INDONESIA • VER 2.4.0L</div>
        <div className="flex gap-6 uppercase">
          <a href="#" className="underline">Kebijakan Privasi</a>
          <a href="#" className="underline">Pusat Bantuan</a>
        </div>
      </footer>

    </div>
  );
}