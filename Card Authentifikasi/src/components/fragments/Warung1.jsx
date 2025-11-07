import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "./Kantin"; // 🔹 Komponen kiri
import cihuy from "../../assets/cihuy.svg"; // 🔹 Gambar kanan
import Vector from "../../assets/Group 4.svg";
import { Frame2 } from "./Frame2"; // 🔹 Komponen tambahan

export default function Warung1() {
  const navigate = useNavigate();

  return (
    <div
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
      <div className="flex flex-col md:flex-row flex-wrap items-start justify-start gap-6 w-full max-w-6xl mx-auto mt-40">
        {/* KIRI: Box */}
        <div className="flex justify-start items-start md:basis-1/2">
          <Box className="w-[300px] sm:w-[450px] md:w-[600px] lg:w-[750px] scale-150 drop-shadow-[0_5px_15px_rgba(0,0,0,0.4)]" />
        </div>

        {/* KANAN: Maskot */}
        <div className="flex justify-center items-center md:basis-1/2 scale-75">
          <img
            src={cihuy}
            alt="Maskot GamadanG"
            className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] drop-shadow-2xl"
          />
        </div>
      </div>

      {/* === BAGIAN FRAME2 === */}
      <div className="border-white p-8 flex justify-center items-center">
        <Frame2 />
      </div>
    </div>
  );
}