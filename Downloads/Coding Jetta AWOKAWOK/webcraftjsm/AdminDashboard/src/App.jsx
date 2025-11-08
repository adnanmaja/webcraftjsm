import React from "react";
import Navbar from "./components/Navbar";

const MenuCard = ({
  name,
  category,
  price,
  description,
  available,
  onDelete,
}) => (
  <div className="w-full bg-white rounded-2xl border-2 border-gray-200 p-4 sm:p-5 md:p-6 lg:p-6 xl:p-7 2xl:p-7 flex flex-col gap-3 xl:gap-3.5 hover:shadow-lg transition-shadow">
    {/* Header: Name and Price */}
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
      <div className="flex-1">
        <h3 className="text-yellow-900 text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-semibold font-poppins mb-1">
          {name}
        </h3>
        <p className="text-neutral-500 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg font-normal font-poppins">
          {category}
        </p>
      </div>
      <div className="text-orange-400 text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold sm:text-right whitespace-nowrap">
        {price}
      </div>
    </div>

    {/* Description */}
    <p className="text-yellow-900 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg font-normal font-poppins leading-relaxed">
      {description}
    </p>

    {/* Action Buttons */}
    <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 mt-auto pt-3">
      <div
        className={`flex-1 h-11 sm:h-12 md:h-14 lg:h-14 xl:h-14 2xl:h-16 ${
          available ? "bg-green-100" : "bg-gray-100"
        } rounded-2xl flex items-center justify-center`}
      >
        <span
          className={`text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-semibold font-poppins ${
            available ? "text-green-800" : "text-gray-600"
          }`}
        >
          {available ? "Tersedia" : "Tidak Tersedia"}
        </span>
      </div>
      <button
        onClick={onDelete}
        className="flex-1 h-11 sm:h-12 md:h-14 lg:h-14 xl:h-14 2xl:h-16 bg-red-600 rounded-2xl flex items-center justify-center hover:bg-red-700 active:bg-red-800 transition-colors"
        aria-label={`Hapus menu ${name}`}
      >
        <span className="text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-semibold font-poppins">
          Hapus
        </span>
      </button>
    </div>
  </div>
);

export default function App() {
  const menuItems = [
    {
      id: 1,
      name: "Ayam sayur",
      category: "Makanan berat",
      price: "Rp15.000",
      description:
        "Nasi dipadukan dengan ayam sayur, gratis sambel dan nasi sepuasnya",
      available: true,
    },
    {
      id: 2,
      name: "Nasi Goreng",
      category: "Makanan berat",
      price: "Rp12.000",
      description:
        "Nasi goreng spesial dengan telur, sayuran segar dan bumbu pilihan",
      available: true,
    },
    {
      id: 3,
      name: "Mie Ayam",
      category: "Makanan berat",
      price: "Rp10.000",
      description:
        "Mie ayam dengan topping ayam cincang, pangsit goreng dan bakso",
      available: false,
    },
    {
      id: 4,
      name: "Soto Ayam",
      category: "Makanan berat",
      price: "Rp13.000",
      description: "Soto ayam kuah bening dengan nasi, emping dan sambal",
      available: true,
    },
  ];

  const handleDeleteMenu = (id) => {
    console.log("Delete menu item:", id);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-300 to-orange-300 relative overflow-x-hidden">
      {/* Background decorative elements - hidden on mobile */}
      <div
        className="hidden lg:block absolute w-full h-[500px] -left-20 -top-40 opacity-10 bg-orange-300 rounded-full blur-3xl"
        aria-hidden="true"
      ></div>
      <div
        className="hidden lg:block absolute w-full h-[500px] -left-20 bottom-0 opacity-10 bg-orange-300 rounded-full blur-3xl"
        aria-hidden="true"
      ></div>

      {/* Navigation Header */}
      <Navbar />

      {/* Page Content */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-20 sm:py-24 lg:py-28 xl:py-32">
        {/* Page Title */}
        <h2
          className="text-center text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-normal font-javassoul mb-8 sm:mb-10 lg:mb-12 xl:mb-16 drop-shadow-lg"
          style={{
            textShadow: `
                  -5px -5px 0 #E7A24A,
                  5px -5px 0 #E7A24A,
                  -5px 5px 0 #E7A24A,
                  5px 5px 0 #E7A24A,
                  -5px 0 0 #E7A24A,
                  5px 0 0 #E7A24A,
                  0 -5px 0 #E7A24A,
                  0 5px 0 #E7A24A,
                  0 0 10px rgba(240, 138, 6, 0.5)
                `,
          }}
        >
          Manajemen Menu
        </h2>

        {/* Main Content Container */}
        <main className="bg-white rounded-3xl border border-gray-200 shadow-xl p-4 sm:p-6 lg:p-8 xl:p-10 2xl:p-12">
          {/* Section Header with Add Button */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-5 xl:gap-6 mb-6 sm:mb-8 xl:mb-10">
            <h3 className="text-yellow-900 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold font-poppins">
              Menu Warung Gauza
            </h3>

            {/* Add Menu Button */}
            <button
              className="w-full sm:w-auto px-5 sm:px-6 lg:px-8 xl:px-8 2xl:px-10 py-2.5 sm:py-3 lg:py-3.5 xl:py-4 2xl:py-4 bg-yellow-900 rounded-2xl hover:bg-yellow-800 active:bg-yellow-950 transition-colors shadow-md whitespace-nowrap"
              aria-label="Tambah menu baru"
            >
              <span className="block text-center text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-semibold font-poppins">
                Tambah Menu
              </span>
            </button>
          </div>

          {/* Menu Cards Grid - Responsive */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 xl:gap-8 2xl:gap-10">
            {menuItems.map((item) => (
              <MenuCard
                key={item.id}
                name={item.name}
                category={item.category}
                price={item.price}
                description={item.description}
                available={item.available}
                onDelete={() => handleDeleteMenu(item.id)}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
