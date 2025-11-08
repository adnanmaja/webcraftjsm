import React from "react";
import image3 from "../../assets/image 3.svg";
import download from "../../assets/download 2.svg";

// ✅ Data menu
const menuList = [
  {
    name: "Nasi Sayur + Rendang",
    description: "Nasi dipadukan dengan sayur dan rendang. Nikmat dan lezat.",
    price: "Rp17.000",
    image: image3,
    buttonText: "Tambah Keranjang",
  },
  {
    name: "Mie Goreng Spesial",
    description: "Mie goreng dengan telur, sayur, dan topping ayam.",
    price: "Rp15.000",
    image: image3,
    buttonText: "Tambah Keranjang",
  },
  {
    name: "Ayam Geprek",
    description: "Ayam goreng tepung dengan sambal pedas dan nasi.",
    price: "Rp18.000",
    image: image3,
    buttonText: "Tambah Keranjang",
  },
  {
    name: "Soto Ayam",
    description: "Soto ayam hangat dengan nasi dan kerupuk.",
    price: "Rp14.000",
    image: image3,
    buttonText: "Tambah Keranjang",
  },
];

// ✅ Komponen kartu menu
const MenuCard = ({ menuItem }) => {
  const handleAddToCart = () => {
    console.log(`Added ${menuItem.name} to cart`);
  };

  return (
    <article
      className="
        flex flex-col items-center gap-4
        w-[300px] sm:w-[320px] md:w-[340px] lg:w-[360px]
        bg-[linear-gradient(90deg,rgba(252,250,235,1)_18%,rgba(239,221,162,1)_100%)]
        border border-[#d6bfa3] rounded-[10px] p-4 shadow-lg
        hover:scale-[1.03] transition-transform duration-300
      "
    >
      <img
        className="w-full h-[180px] object-cover rounded-md"
        alt={menuItem.name}
        src={menuItem.image}
      />

      <h2 className="font-bold text-[#653e1d] text-lg text-center">
        {menuItem.name}
      </h2>

      <p className="text-[#c3a987] text-sm text-center leading-relaxed">
        {menuItem.description}
      </p>

      <div className="flex justify-between items-center w-full mt-2">
        <span className="font-bold text-[#e7a249] text-base">
          {menuItem.price}
        </span>

        <button
          className="
            px-4 py-2 rounded-[10px]
            bg-[linear-gradient(127deg,rgba(231,162,74,1)_0%,rgba(255,200,130,1)_100%)]
            text-white text-sm font-medium
            transition-opacity hover:opacity-90 active:opacity-80
          "
          onClick={handleAddToCart}
          aria-label={`Add ${menuItem.name} to cart`}
          type="button"
        >
          {menuItem.buttonText}
        </button>
      </div>
    </article>
  );
};

// ✅ Komponen utama
export const Frame3 = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {menuList.map((item, index) => (
        <MenuCard key={index} menuItem={item} />
      ))}
    </div>
  );
};