import React from "react";
import { useNavigate } from "react-router-dom";
import Text from "../../assets/Text.svg";
import maskot from "../../assets/maskot.svg";
import Vector from "../../assets/Group 4.svg";
import KenapaGamadang from "../../assets/Kenapa GamadanG_.svg";
import Frame4 from "../../assets/Frame 4.svg";
import MM from "../../assets/Mau Madang Dimana_.svg";
import { Frame } from "./Frame";



export default function Landing() {
  const navigate = useNavigate();

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
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 w-full max-w-6xl mx-auto"> {/* KIRI: Logo, Deskripsi, Tombol */} <div className="flex flex-col justify-center items-center md:items-start gap-4 md:basis-1/2 text-white animate-pulse mt-40 ml-20"> <img src={Text} alt="Gambar Text" className="w-[300px] sm:w-[450px] md:w-[600px] lg:w-[750px] scale-150 drop-shadow-[0_5px_15px_rgba(0,0,0,0.4)]" /> </div> {/* KANAN: Maskot */} <div className="flex justify-center md:justify-end items-center md:basis-1/2 scale-75"> <img src={maskot} alt="Maskot GamadanG" className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] drop-shadow-2xl animate-bounce" /> </div> </div>

      {/* === BAGIAN GAMBAR BARU DI TENGAH === */}
      {/* PERBAIKAN 2: Mengubah mt-2 menjadi mt-0 untuk mengurangi jarak dengan bagian atas */}
      <div className="flex flex-col justify-center items-center mt-0 gap-6">
        <img
          src={MM}
          alt="Mau Madang Dimana ?"
          className="w-[90%] md:w-[70%] max-w-[1500px] object-contain md:ml-[18px] z-10 animate-pulse drop-shadow-[0_5px_15px_rgba(0,0,0,0.4)]"
        />
      </div>
      <div className=" border-white p-8 flex justify-center items-center">
        <Frame />
      </div>


    </div>
  );
}