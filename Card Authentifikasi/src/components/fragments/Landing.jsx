import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import GamadanG from "../../assets/GamadanG.svg";
import maskot from "../../assets/maskot.svg";
import Vector from "../../assets/Vector.svg";
import KenapaGamadang from "../../assets/Kenapa GamadanG_.svg";
import Frame4 from "../../assets/Frame 4.svg";


export default function Landing() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleButtonClick = () => {
    if (isAuthenticated) {
      navigate("/dashboard"); // nek udah log in, pergi ke dashboard
    } else {
      navigate("/login"); // klau belum login ya login lah
    }
  };

  return (
    <div
      // PERBAIKAN 1: Mengurangi jarak/gap antar bagian utama (misalnya dari gap-12 menjadi gap-6)
      className="min-h-screen w-full flex flex-col px-6 py-20 gap-6"
      style={{
        backgroundImage: `linear-gradient(to right, #F0BB78, #FFD39C), url(${Vector})`,
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* === BAGIAN ATAS: FLEX KIRI & KANAN === */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-14 w-full max-w-6xl mx-auto">
        {/* KIRI: Logo, Deskripsi, Tombol */}
        <div className="flex flex-col justify-center items-center md:items-start gap-8 md:basis-1/2 text-white animate-pulse">
          <img
            src={GamadanG}
            alt="Logo GamadanG"
            className="h-[120px] w-auto drop-shadow-[0_5px_15px_rgba(0,0,0,0.4)]"
          />
          <div className="text-center text-[12px] sm:text-[22px] md:text-[24px] font-medium leading-relaxed max-w-[500px] md:ml-[19px]">
            <span
              style={{
                fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              <strong>GAMADANG</strong> adalah website yang memudahkan mahasiswa Universitas Gadjah Mada dalam memesan makanan dan meja di kantin tanpa perlu antre terlebih dahulu. Praktis & cepat, buat waktu makan di kampus jadi lebih nyaman.
            </span>
          </div>
          <div className="flex justify-center w-full mt-4">

             <button
              onClick={handleButtonClick}
              className="relative w-[280px] md:w-[353px] h-[60px] md:h-[76px] group drop-shadow-[0_5px_15px_rgba(0,0,0,0.4)]"
            >
              <div className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-[#F08A07] via-[#F16B18] to-[#F1732F] transition-transform duration-300 group-hover:scale-100 group-hover:shadow-lg"></div>
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold text-[19px] md:text-[20px]"
                style={{
                  fontFamily: "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                Mulai Madang &gt;
              </div>
            </button>

          </div>
        </div>

        {/* KANAN: Maskot */}
        <div className="flex justify-center md:justify-end items-center md:basis-1/2 scale-75">
          <img
            src={maskot}
            alt="Maskot GamadanG"
            className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] drop-shadow-2xl animate-bounce"
          />
        </div>
      </div>

      {/* === BAGIAN GAMBAR BARU DI TENGAH === */}
      {/* PERBAIKAN 2: Mengubah mt-2 menjadi mt-0 untuk mengurangi jarak dengan bagian atas */}
      <div  id="kenapa-gamadang" className="flex flex-col justify-center items-center mt-0 gap-6">
        <img
          src={KenapaGamadang}
          alt="Kenapa Gamadang"
          className="w-[90%] md:w-[80%] max-w-[1500px] object-contain md:ml-[150px] z-10 animate-pulse drop-shadow-[0_5px_15px_rgba(0,0,0,0.4)]"
        />
        <img
          src={Frame4}
          alt="Frame 4"
          // PERBAIKAN 3: Menggunakan negative margin (-mt-12) agar gambar 'Frame4' tertarik ke atas dan mepet dengan gambar di atasnya
          className="w-[90%] md:w-[95%] max-w-[1000px] object-contain -mt-12 md:ml-[120px] top-[85%]"
        />
      </div>
    </div>
  );
}
