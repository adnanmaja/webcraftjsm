import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus, Trash2, Check, X } from "lucide-react";
import bgImage from "@/assets/bg.svg";

const MenuCard = ({
  name,
  category,
  price,
  description,
  available,
  onDelete,
  onToggleAvailability,
  index,
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30, scale: 0.95 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
        },
      },
    }}
    whileHover={{
      scale: 1.02,
      y: -8,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    }}
    whileTap={{ scale: 0.98 }}
  >
    <Card className="relative overflow-hidden group border-2 hover:border-orange-300 transition-all duration-500">
      {/* Gradient overlay */}
      <motion.div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.8 }}
      />

      <CardHeader className="pb-3 relative">
        <div className="flex justify-between items-start gap-3">
          <div className="flex-1">
            <CardTitle className="text-2xl mb-1.5">{name}</CardTitle>
            <CardDescription className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                {category}
              </Badge>
            </CardDescription>
          </div>
          <div className="text-orange-500 text-3xl font-bold">{price}</div>
        </div>
      </CardHeader>

      <CardContent className="relative">
        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
          {description}
        </p>

        <Separator className="my-4" />

        <div className="flex gap-2.5">
          <Button
            onClick={onToggleAvailability}
            className={cn(
              "flex-1 h-12 rounded-xl transition-all duration-300",
              available
                ? "bg-green-100 hover:bg-green-200 text-green-800 border-2 border-green-300"
                : "bg-gray-100 hover:bg-gray-200 text-gray-600 border-2 border-gray-300"
            )}
            variant="outline"
          >
            {available ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Tersedia
              </>
            ) : (
              <>
                <X className="w-4 h-4 mr-2" />
                Tidak Tersedia
              </>
            )}
          </Button>
          <Button
            onClick={onDelete}
            className="flex-1 h-12 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-all duration-300"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Hapus
          </Button>
        </div>
      </CardContent>

      {/* Bottom accent line */}
      <motion.div
        className="h-1 bg-gradient-to-r from-orange-500 to-orange-400"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </Card>
  </motion.div>
);

export default function Menu() {
  const initialMenuItems = [
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

  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [confirmModal, setConfirmModal] = useState({
    isOpen: false,
    menuId: null,
    menuName: "",
  });
  const [addMenuModal, setAddMenuModal] = useState(false);
  const [newMenu, setNewMenu] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  });

  const handleToggleAvailability = (id) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, available: !item.available } : item
      )
    );
  };

  const openDeleteModal = (id, name) => {
    setConfirmModal({ isOpen: true, menuId: id, menuName: name });
  };

  const closeDeleteModal = () => {
    setConfirmModal({ isOpen: false, menuId: null, menuName: "" });
  };

  const handleConfirmDelete = () => {
    setMenuItems((prevItems) =>
      prevItems.filter((item) => item.id !== confirmModal.menuId)
    );
    closeDeleteModal();
  };

  const openAddMenuModal = () => {
    setAddMenuModal(true);
  };

  const closeAddMenuModal = () => {
    setAddMenuModal(false);
    setNewMenu({
      name: "",
      category: "",
      price: "",
      description: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMenu((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddMenu = () => {
    console.log("Attempting to add menu:", newMenu);

    if (
      newMenu.name &&
      newMenu.category &&
      newMenu.price &&
      newMenu.description
    ) {
      const newId =
        menuItems.length > 0
          ? Math.max(...menuItems.map((item) => item.id)) + 1
          : 1;
      const menuToAdd = {
        id: newId,
        name: newMenu.name,
        category: newMenu.category,
        price: newMenu.price.startsWith("Rp")
          ? newMenu.price
          : `Rp${newMenu.price}`,
        description: newMenu.description,
        available: true,
      };

      console.log("Adding menu item:", menuToAdd);
      setMenuItems((prevItems) => [...prevItems, menuToAdd]);
      closeAddMenuModal();
    } else {
      console.log("Validation failed. Missing fields:", {
        name: !newMenu.name,
        category: !newMenu.category,
        price: !newMenu.price,
        description: !newMenu.description,
      });
      alert("Harap isi semua field yang diperlukan!");
    }
  };

  return (
    <div
      className="min-h-screen w-full relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #F2BE7C, #FFFFFF)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.9,
        }}
      />
      {/* Navigation Header */}
      <Navbar />

      {/* Page Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        {/* Page Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.19, 1.0, 0.22, 1.0] }}
          className="mb-12"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1
                className="font-javassoul text-7xl font-bold text-white mb-2"
                style={{
                  WebkitTextStroke: "5px #E7A24A",
                  paintOrder: "stroke fill",
                  textShadow: "0 0 20px rgba(249, 115, 22, 0.3)",
                }}
              >
                Manajemen Menu
              </h1>
              <p className="text-gray-600 text-lg">
                Kelola menu dan produk Anda
              </p>
            </div>
            <Button
              onClick={openAddMenuModal}
              className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white px-6 py-6 rounded-xl text-base shadow-lg"
              size="lg"
            >
              <Plus className="w-5 h-5 mr-2" />
              Tambah Menu
            </Button>
          </div>
        </motion.div>

        {/* Main Content Container */}
        <motion.main
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: [0.19, 1.0, 0.22, 1.0],
          }}
        >
          {/* Menu Cards Grid */}
          <AnimatePresence mode="popLayout">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              {menuItems.map((item, index) => (
                <MenuCard
                  key={item.id}
                  name={item.name}
                  category={item.category}
                  price={item.price}
                  description={item.description}
                  available={item.available}
                  onDelete={() => openDeleteModal(item.id, item.name)}
                  onToggleAvailability={() => handleToggleAvailability(item.id)}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.main>
      </div>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {confirmModal.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.19, 1.0, 0.22, 1.0] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={closeDeleteModal}
          >
            {/* Backdrop with blur */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

            {/* Modal */}
            <motion.div
              initial={{ scale: 0.92, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 30, opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.19, 1.0, 0.22, 1.0],
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-[30px] p-8 max-w-md w-full shadow-2xl border-4 border-orange-400"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.19, 1.0, 0.22, 1.0],
                }}
                className="flex justify-center mb-6"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-400 flex items-center justify-center shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </div>
              </motion.div>

              {/* Message */}
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl font-bold text-center mb-3 font-poppins text-gray-800"
              >
                Hapus Menu?
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center text-gray-600 mb-2 font-poppins"
              >
                Apakah Anda yakin ingin menghapus menu
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="text-center text-orange-600 font-bold mb-6 font-poppins text-lg"
              >
                "{confirmModal.menuName}"?
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-gray-500 text-sm mb-8 font-poppins"
              >
                Tindakan ini tidak dapat dibatalkan.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="flex gap-3 justify-center"
              >
                <motion.button
                  onClick={closeDeleteModal}
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.19, 1.0, 0.22, 1.0] }}
                  className="px-6 py-3 rounded-[20px] text-lg font-semibold font-poppins bg-gray-200 text-gray-700 hover:bg-gray-300 border-2 border-gray-300"
                >
                  Batal
                </motion.button>
                <motion.button
                  onClick={handleConfirmDelete}
                  whileHover={{
                    scale: 1.04,
                    y: -3,
                    boxShadow: "0 15px 40px -10px rgba(239, 68, 68, 0.6)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.19, 1.0, 0.22, 1.0] }}
                  className="px-6 py-3 rounded-[20px] text-lg font-semibold font-poppins bg-gradient-to-br from-red-500 to-red-400 text-white border-2 border-red-500 hover:from-red-600 hover:to-red-500"
                >
                  Ya, Hapus
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add Menu Modal */}
      <AnimatePresence>
        {addMenuModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.19, 1.0, 0.22, 1.0] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={closeAddMenuModal}
          >
            {/* Backdrop with blur */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

            {/* Modal Form */}
            <motion.div
              initial={{ scale: 0.92, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 30, opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.19, 1.0, 0.22, 1.0],
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-[30px] border border-gray-200 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 md:p-12">
                {/* Header */}
                <div className="relative pb-6 mb-6 border-b-[5px] border-gray-200">
                  <h2 className="text-yellow-900 text-4xl md:text-6xl font-bold font-poppins">
                    Tambah Menu
                  </h2>
                </div>

                {/* Form Fields */}
                <div className="space-y-8">
                  {/* Nama Menu */}
                  <div>
                    <label className="block text-yellow-900 text-2xl md:text-3xl font-semibold font-poppins mb-3">
                      Nama Menu
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={newMenu.name}
                      onChange={handleInputChange}
                      className="w-full h-20 md:h-24 bg-white rounded-[20px] border-[5px] border-gray-200 px-6 text-yellow-900 text-xl md:text-2xl font-poppins focus:outline-none focus:border-orange-400 transition-colors"
                      placeholder="Masukkan nama menu"
                    />
                  </div>

                  {/* Kategori Menu */}
                  <div>
                    <label className="block text-yellow-900 text-2xl md:text-3xl font-semibold font-poppins mb-3">
                      Kategori Menu
                    </label>
                    <input
                      type="text"
                      name="category"
                      value={newMenu.category}
                      onChange={handleInputChange}
                      className="w-full h-20 md:h-24 bg-white rounded-[20px] border-[5px] border-gray-200 px-6 text-yellow-900 text-xl md:text-2xl font-poppins focus:outline-none focus:border-orange-400 transition-colors"
                      placeholder="Contoh: Makanan berat, Minuman, dll"
                    />
                  </div>

                  {/* Deskripsi Menu */}
                  <div>
                    <label className="block text-yellow-900 text-2xl md:text-3xl font-semibold font-poppins mb-3">
                      Deskripsi Menu
                    </label>
                    <textarea
                      name="description"
                      value={newMenu.description}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full bg-white rounded-[20px] border-[5px] border-gray-200 px-6 py-4 text-yellow-900 text-xl md:text-2xl font-poppins focus:outline-none focus:border-orange-400 transition-colors resize-none"
                      placeholder="Masukkan deskripsi menu"
                    ></textarea>
                  </div>

                  {/* Harga Menu */}
                  <div>
                    <label className="block text-yellow-900 text-2xl md:text-3xl font-semibold font-poppins mb-3">
                      Harga Menu
                    </label>
                    <div className="relative">
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400 text-3xl md:text-4xl font-medium font-poppins">
                        Rp
                      </span>
                      <input
                        type="text"
                        name="price"
                        value={newMenu.price}
                        onChange={handleInputChange}
                        className="w-full h-20 md:h-24 bg-white rounded-[20px] border-[5px] border-gray-200 pl-20 pr-6 text-yellow-900 text-xl md:text-2xl font-poppins focus:outline-none focus:border-orange-400 transition-colors"
                        placeholder="0"
                      />
                    </div>
                  </div>

                  {/* Foto Menu */}
                  <div>
                    <label className="block text-yellow-900 text-2xl md:text-3xl font-semibold font-poppins mb-3">
                      Foto Menu
                    </label>
                    <div className="relative w-full h-20 md:h-24 bg-white rounded-[20px] border-[5px] border-gray-200 flex items-center overflow-hidden">
                      <div className="h-full w-48 bg-white border-r-[5px] border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                        <span className="text-zinc-400 text-2xl md:text-4xl font-medium font-poppins">
                          Pilih file
                        </span>
                      </div>
                      <span className="flex-1 px-6 text-zinc-400 text-xl md:text-4xl font-medium font-poppins">
                        Tidak ada file yang dipilih
                      </span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  onClick={handleAddMenu}
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                    boxShadow: "0 10px 30px -10px rgba(120, 53, 15, 0.5)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.19, 1.0, 0.22, 1.0] }}
                  className="w-full md:w-96 h-20 md:h-24 bg-yellow-900 rounded-[20px] mt-12 hover:bg-yellow-800 transition-colors"
                >
                  <span className="text-white text-3xl md:text-4xl font-semibold font-poppins">
                    Tambah Menu
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
