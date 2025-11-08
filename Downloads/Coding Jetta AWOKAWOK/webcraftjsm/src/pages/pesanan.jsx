import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
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
import { Clock, CheckCircle2, XCircle, Package } from "lucide-react";
import bgImage from "@/assets/bg.svg";

export default function Pesanan() {
  const initialOrdersData = [
    {
      orderId: "ORDER-001",
      userId: "user-1",
      items: [
        { name: "Jus kiding", quantity: 1, price: "Rp12.000" },
        { name: "Jus amma", quantity: 1, price: "Rp12.000" },
      ],
      total: "Rp24.000",
      status: "Selesai",
    },
    {
      orderId: "ORDER-002",
      userId: "user-2",
      items: [
        { name: "Es Teh Manis", quantity: 2, price: "Rp8.000" },
        { name: "Nasi Goreng", quantity: 1, price: "Rp15.000" },
      ],
      total: "Rp31.000",
      status: "Siap",
    },
    {
      orderId: "ORDER-003",
      userId: "user-3",
      items: [
        { name: "Kopi Susu", quantity: 1, price: "Rp10.000" },
        { name: "Roti Bakar", quantity: 2, price: "Rp12.000" },
        { name: "Jus Alpukat", quantity: 1, price: "Rp15.000" },
      ],
      total: "Rp49.000",
      status: "Proses",
    },
    {
      orderId: "ORDER-004",
      userId: "user-4",
      items: [
        { name: "Mie Goreng", quantity: 1, price: "Rp13.000" },
        { name: "Es Jeruk", quantity: 1, price: "Rp7.000" },
      ],
      total: "Rp20.000",
      status: "Proses",
    },
  ];

  const [ordersData, setOrdersData] = useState(initialOrdersData);
  const [confirmModal, setConfirmModal] = useState({
    isOpen: false,
    type: null,
    orderId: null,
  });

  const handleStatusChange = (orderId, newStatus) => {
    setOrdersData((prevOrders) =>
      prevOrders.map((order) =>
        order.orderId === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const openConfirmModal = (type, orderId) => {
    setConfirmModal({ isOpen: true, type, orderId });
  };

  const closeConfirmModal = () => {
    setConfirmModal({ isOpen: false, type: null, orderId: null });
  };

  const handleConfirm = () => {
    if (confirmModal.type === "cancel" || confirmModal.type === "decline") {
      setOrdersData((prevOrders) =>
        prevOrders.filter((order) => order.orderId !== confirmModal.orderId)
      );
    }
    closeConfirmModal();
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
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
      <Navbar />
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.19, 1.0, 0.22, 1.0] }}
      >
        {/* Header */}
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
                Kelola Pesanan
              </h1>
              <p className="text-gray-600 text-lg">
                Pantau dan kelola pesanan pelanggan Anda
              </p>
            </div>
            <Badge className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-4 py-2 text-sm">
              {ordersData.length} Pesanan Aktif
            </Badge>
          </div>
        </motion.div>

        {/* Orders Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5,
              },
            },
          }}
        >
          {ordersData.map((orderData, index) => (
            <motion.div
              key={orderData.orderId}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 60,
                  rotateX: -8,
                  scale: 0.95,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  scale: 1,
                  transition: {
                    duration: 1.0,
                    ease: [0.19, 1.0, 0.22, 1.0],
                  },
                },
              }}
              whileHover={{
                scale: 1.015,
                y: -8,
                boxShadow: "0 20px 60px -15px rgba(0, 0, 0, 0.15)",
                transition: {
                  duration: 0.5,
                  ease: [0.19, 1.0, 0.22, 1.0],
                },
              }}
              className="bg-white rounded-[30px] border border-gray-200 p-6 md:p-8 lg:p-10"
            >
              {/* Order Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h2 className="text-yellow-900 text-3xl md:text-4xl lg:text-5xl font-bold font-poppins">
                  {orderData.orderId}
                </h2>
                <div
                  className={`mt-4 md:mt-0 rounded-[30px] px-7 py-3 ${
                    orderData.status === "Selesai"
                      ? "bg-green-100"
                      : orderData.status === "Siap"
                      ? "bg-blue-100"
                      : "bg-yellow-100"
                  }`}
                >
                  <span
                    className={`text-xl md:text-2xl lg:text-3xl font-semibold font-poppins ${
                      orderData.status === "Selesai"
                        ? "text-green-800"
                        : orderData.status === "Siap"
                        ? "text-blue-800"
                        : "text-yellow-800"
                    }`}
                  >
                    {orderData.status}
                  </span>
                </div>
              </div>

              {/* Customer ID */}
              <p className="text-neutral-500 text-xl md:text-2xl lg:text-3xl font-poppins mb-6">
                Customer ID: {orderData.userId}
              </p>

              {/* Items List */}
              <div className="border-t-[5px] border-gray-200 pt-4">
                {orderData.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center mb-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-yellow-900 text-lg md:text-xl lg:text-2xl font-medium font-poppins">
                        {item.name}
                      </span>
                      <span className="text-yellow-900 text-lg md:text-xl lg:text-2xl font-medium font-poppins">
                        x{item.quantity}
                      </span>
                    </div>
                    <span className="text-yellow-900 text-lg md:text-xl lg:text-2xl font-medium font-poppins">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="border-t-[5px] border-gray-200 pt-4 mt-4">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-yellow-900 text-2xl md:text-3xl lg:text-4xl font-bold font-poppins">
                    Total
                  </span>
                  <span className="text-orange-400 text-2xl md:text-3xl lg:text-4xl font-bold font-arial">
                    {orderData.total}
                  </span>
                </div>
              </div>

              {/* Status Buttons */}
              <div className="flex flex-wrap gap-3 justify-center mt-6">
                <motion.button
                  onClick={() =>
                    handleStatusChange(orderData.orderId, "Proses")
                  }
                  whileHover={{
                    scale: 1.05,
                    y: -4,
                    borderWidth: "5px",
                    borderColor:
                      orderData.status === "Proses" ? "#fbbf24" : "#facc15",
                    boxShadow:
                      orderData.status === "Proses"
                        ? "0 15px 40px -10px rgba(251, 191, 36, 0.6)"
                        : "0 15px 40px -10px rgba(250, 204, 21, 0.5)",
                  }}
                  whileTap={{ scale: 0.96, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.19, 1.0, 0.22, 1.0] }}
                  className={`px-6 py-3 rounded-[20px] text-xl md:text-2xl font-semibold font-poppins ${
                    orderData.status === "Proses"
                      ? "bg-gradient-to-br from-yellow-400 to-yellow-300 text-white shadow-lg border-[3px] border-yellow-400"
                      : "bg-white border-[3px] border-gray-200 text-yellow-900"
                  }`}
                >
                  Proses
                </motion.button>
                <motion.button
                  onClick={() => handleStatusChange(orderData.orderId, "Siap")}
                  whileHover={{
                    scale: 1.05,
                    y: -4,
                    borderWidth: "5px",
                    borderColor:
                      orderData.status === "Siap" ? "#3b82f6" : "#60a5fa",
                    boxShadow:
                      orderData.status === "Siap"
                        ? "0 15px 40px -10px rgba(59, 130, 246, 0.6)"
                        : "0 15px 40px -10px rgba(96, 165, 250, 0.5)",
                  }}
                  whileTap={{ scale: 0.96, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.19, 1.0, 0.22, 1.0] }}
                  className={`px-6 py-3 rounded-[20px] text-xl md:text-2xl font-semibold font-poppins ${
                    orderData.status === "Siap"
                      ? "bg-gradient-to-br from-blue-400 to-blue-300 text-white shadow-lg border-[3px] border-blue-400"
                      : "bg-white border-[3px] border-gray-200 text-yellow-900"
                  }`}
                >
                  Siap
                </motion.button>
                <motion.button
                  onClick={() =>
                    handleStatusChange(orderData.orderId, "Selesai")
                  }
                  whileHover={{
                    scale: 1.05,
                    y: -4,
                    borderWidth: "5px",
                    borderColor:
                      orderData.status === "Selesai" ? "#22c55e" : "#4ade80",
                    boxShadow:
                      orderData.status === "Selesai"
                        ? "0 15px 40px -10px rgba(34, 197, 94, 0.6)"
                        : "0 15px 40px -10px rgba(74, 222, 128, 0.5)",
                  }}
                  whileTap={{ scale: 0.96, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.19, 1.0, 0.22, 1.0] }}
                  className={`px-6 py-3 rounded-[20px] text-xl md:text-2xl font-semibold font-poppins ${
                    orderData.status === "Selesai"
                      ? "bg-gradient-to-br from-green-500 to-green-400 text-white shadow-lg border-[3px] border-green-500"
                      : "bg-white border-[3px] border-gray-200 text-yellow-900"
                  }`}
                >
                  Selesai
                </motion.button>
              </div>

              {/* Cancel and Decline Buttons */}
              <div className="flex flex-wrap gap-3 justify-center mt-4 pt-4 border-t-2 border-gray-200">
                <motion.button
                  onClick={() => openConfirmModal("cancel", orderData.orderId)}
                  whileHover={{
                    scale: 1.04,
                    y: -4,
                    borderWidth: "5px",
                    borderColor: "#ef4444",
                    boxShadow: "0 15px 40px -10px rgba(239, 68, 68, 0.6)",
                  }}
                  whileTap={{ scale: 0.96, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.19, 1.0, 0.22, 1.0] }}
                  className="px-6 py-2 rounded-[20px] text-lg md:text-xl font-semibold font-poppins bg-gradient-to-br from-red-500 to-red-400 text-white shadow-lg border-[3px] border-red-500 hover:from-red-600 hover:to-red-500"
                >
                  Batal
                </motion.button>
                <motion.button
                  onClick={() => openConfirmModal("decline", orderData.orderId)}
                  whileHover={{
                    scale: 1.04,
                    y: -4,
                    borderWidth: "5px",
                    borderColor: "#71717a",
                    boxShadow: "0 15px 40px -10px rgba(113, 113, 122, 0.6)",
                  }}
                  whileTap={{ scale: 0.96, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.19, 1.0, 0.22, 1.0] }}
                  className="px-6 py-2 rounded-[20px] text-lg md:text-xl font-semibold font-poppins bg-gradient-to-br from-gray-500 to-gray-400 text-white shadow-lg border-[3px] border-gray-500 hover:from-gray-600 hover:to-gray-500"
                >
                  Tolak
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {confirmModal.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.19, 1.0, 0.22, 1.0] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={closeConfirmModal}
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
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-yellow-300 flex items-center justify-center shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
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
                {confirmModal.type === "cancel"
                  ? "Batalkan Pesanan?"
                  : "Tolak Pesanan?"}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center text-gray-600 mb-8 font-poppins"
              >
                {confirmModal.type === "cancel"
                  ? "Apakah Anda yakin ingin membatalkan pesanan ini? Tindakan ini tidak dapat dibatalkan."
                  : "Apakah Anda yakin ingin menolak pesanan ini? Tindakan ini tidak dapat dibatalkan."}
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex gap-3 justify-center"
              >
                <motion.button
                  onClick={closeConfirmModal}
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.19, 1.0, 0.22, 1.0] }}
                  className="px-6 py-3 rounded-[20px] text-lg font-semibold font-poppins bg-gray-200 text-gray-700 hover:bg-gray-300 border-2 border-gray-300"
                >
                  Tidak
                </motion.button>
                <motion.button
                  onClick={handleConfirm}
                  whileHover={{
                    scale: 1.04,
                    y: -3,
                    boxShadow: "0 15px 40px -10px rgba(239, 68, 68, 0.6)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.19, 1.0, 0.22, 1.0] }}
                  className="px-6 py-3 rounded-[20px] text-lg font-semibold font-poppins bg-gradient-to-br from-red-500 to-red-400 text-white border-2 border-red-500 hover:from-red-600 hover:to-red-500"
                >
                  Ya, {confirmModal.type === "cancel" ? "Batalkan" : "Tolak"}
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
