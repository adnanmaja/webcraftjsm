import React, { useState } from "react";
import fotoKantin from "../../assets/Foto Kantin.svg";

const kantinData = [
  {
    id: 1,
    image: fotoKantin,
    title: "Warung Bakso nakmantu",
    description:
      "Kantin favorit mahasiswa FMIPA dengan suasana sejuk dan harga terjangkau. Banyak pilihan makanan berat dan ringan.",
  },
  {
    id: 2,
    image: fotoKantin,
    title: "Pawon Hotplate Bu Yani",
    description:
      "Kantin Sastra yang terkenal dengan makanan kekiniannya dan spot nongkrong yang cozy banget buat anak FIB dan Filsafat.",
  },
  {
    id: 3,
    image: fotoKantin,
    title: "Warung B",
    description:
      "Pusat jajanan lengkap di area Teknik. Pujale dikenal dengan aneka nasi goreng, ayam geprek, dan minuman segar.",
  },
  {
    id: 4,
    image: fotoKantin,
    title: "Warung C",
    description:
      "Kantin di area Biologi yang dikelilingi pepohonan rindang, cocok buat makan sambil istirahat di siang hari.",
  },
];

export const Frame2 = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const actionButtons = [
    {
      id: "dine-in",
      label: "Dine In",
      gradient:
        "bg-[linear-gradient(90deg,rgba(221,181,50,1)_15%,rgba(118,74,29,1)_100%)]",
    },
    {
      id: "take-away",
      label: "Take Away",
      gradient:
        "bg-[linear-gradient(90deg,rgba(189,200,120,1)_15%,rgba(93,111,29,1)_100%)]",
    },
  ];

  const handleButtonClick = (buttonId) => {
    setSelectedOption(buttonId);
  };

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
            p-6 w-[90%] md:w-[600px] min-h-[340px]
            rounded-[10px] border border-solid border-[#d6bfa3]
            bg-[linear-gradient(90deg,rgba(252,250,235,1)_18%,rgba(239,221,162,1)_100%)]
            shadow-lg hover:scale-[1.03] transition-transform duration-300
          "
        >
          {/* Gambar kantin */}
          <div
            className="
              w-[228px] h-[278px] bg-[#f8f2df] flex items-center justify-center
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
            <p className="text-[#c3a987] text-sm md:text-base leading-relaxed">
              {kantin.description}
            </p>

            {/* Tombol baru: Dine In & Take Away */}
            <div
              className="inline-flex items-start gap-3 mt-3"
              role="group"
              aria-label="Dining options"
            >
              {actionButtons.map((button) => (
                <button
                  key={button.id}
                  onClick={() => handleButtonClick(button.id)}
                  className={`all-[unset] box-border w-[150px] h-[37px] gap-2.5 px-[19px] py-[5px] rounded-[20px] ${button.gradient} flex items-center justify-center relative cursor-pointer transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#653e1d] ${
                    selectedOption === button.id
                      ? "ring-2 ring-[#653e1d] opacity-90"
                      : ""
                  }`}
                  type="button"
                  aria-pressed={selectedOption === button.id}
                >
                  <span className="font-bold text-white text-base text-center">
                    {button.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};
