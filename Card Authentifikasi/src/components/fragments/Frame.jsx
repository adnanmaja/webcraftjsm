import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 🔹 Import gambar kantin (fallback jika API tidak menyediakan gambar)
import fotoKantin from "../../assets/Foto Kantin.svg";

export const Frame = () => {
  const navigate = useNavigate();
  const [kantinData, setKantinData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔹 Fetch data dari API
  useEffect(() => {
    const fetchKantinData = async () => {
      try {
        const API_URL = "https://webcraftapi.vercel.app/api/kantin"; 
      
        console.log("Fetching from:", API_URL);
        const response = await fetch(API_URL);
        
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        

        console.log("Response status:", response.status);
        console.log("Response headers:", response.headers);
        
        // Get the raw text first to see what we're actually getting
        const data = await response.json();
        console.log("Data response:", data);
      
        // 🔹 Map data dari API ke format yang diharapkan komponen
        const mappedData = data.map(kantin => ({
          id: kantin.id,
          image: fotoKantin, // Fallback image
          title: kantin.name,
          description: kantin.description,
          // Tambahkan field lain jika diperlukan
          location: kantin.location,
          owner_id: kantin.owner_id
        }));
        
        console.log("Mapped data:", mappedData)
        setKantinData(mappedData);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching kantin data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchKantinData();
  }, []);

  // 🔸 Fungsi klik tombol berdasarkan ID
  const handleClick = (id) => {
    switch (id) {
      case 1:
        navigate("/Warung1");
        break;
      default:
        alert("Halaman kantin belum tersedia 😅");
    }
  };

  // 🔹 Tampilkan loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center w-full max-w-[1445px] min-h-[744px] bg-[#704443] rounded-[25px] border-[5px] border-dashed border-white">
        <div className="text-white text-xl">Memuat data kantin...</div>
      </div>
    );
  }

  // 🔹 Tampilkan error state
  if (error) {
    return (
      <div className="flex items-center justify-center w-full max-w-[1445px] min-h-[744px] bg-[#704443] rounded-[25px] border-[5px] border-dashed border-white">
        <div className="text-white text-xl text-center">
          Error: {error}<br />
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:opacity-70"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="
        flex flex-wrap items-center justify-center
        w-full max-w-[1445px] min-h-[744px] gap-7 p-10
        bg-[#704443] rounded-[25px] border-[5px] border-dashed border-white
      "
    >
      {kantinData.map((kantin) => (
        <article
          key={kantin.id}
          className="
            flex flex-col md:flex-row items-center gap-6
            p-6 w-[90%] md:w-[600px] min-h-[320px]
            rounded-[10px] border border-solid border-[#d6bfa3]
            bg-[linear-gradient(90deg,rgba(252,250,235,1)_18%,rgba(239,221,162,1)_100%)]
            shadow-lg hover:scale-[1.03] transition-transform duration-300
          "
        >
          {/* Gambar kantin */}
          <div
            className="
              w-[228px] h-[278px] bg-white flex items-center justify-center
              rounded-md flex-shrink-0 overflow-hidden
            "
          >
            <img
              className="max-w-full max-h-full object-contain"
              alt={`Foto ${kantin.title}`}
              src={kantin.image}
            />
          </div>

          {/* Teks dan tombol */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 flex-1">
            <h2 className="font-bold text-[#653e1d] text-2xl md:text-[40px] leading-tight">
              {kantin.title}
            </h2>
            <p className="text-[#c3a987] text-sm md:text-base leading-relaxed line-clamp-3">
              {kantin.description}
            </p>
            
            {/* Tampilkan lokasi jika tersedia */}
            {kantin.location && (
              <p className="text-[#8a6d3b] text-sm">
                📍 {kantin.location}
              </p>
            )}

            <button
              onClick={() => handleClick(kantin.id)}
              className="
                mt-3 w-[180px] h-10 rounded-[20px]
                bg-[linear-gradient(90deg,rgba(240,138,7,1)_15%,rgba(241,115,47,1)_100%)]
                flex items-center justify-center
                text-white font-bold text-base
                hover:opacity-70 transition
              "
              aria-label={`Kunjungi ${kantin.title}`}
            >
              Kunjungi Kantin &gt;
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};