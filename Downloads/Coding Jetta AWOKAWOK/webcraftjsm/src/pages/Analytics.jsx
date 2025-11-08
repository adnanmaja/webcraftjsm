import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  CheckCircle2,
  XCircle,
  DollarSign,
  Users,
  Clock,
  Package,
} from "lucide-react";
import bgImage from "@/assets/bg.svg";

export default function Analytics() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [counter, setCounter] = useState({
    totalOrders: 0,
    completedOrders: 0,
    cancelledOrders: 0,
    revenue: 0,
  });

  // Animated counter effect
  useEffect(() => {
    const targets = {
      totalOrders: 127,
      completedOrders: 98,
      cancelledOrders: 12,
      revenue: 5420000,
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounter({
        totalOrders: Math.floor(targets.totalOrders * progress),
        completedOrders: Math.floor(targets.completedOrders * progress),
        cancelledOrders: Math.floor(targets.cancelledOrders * progress),
        revenue: Math.floor(targets.revenue * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounter(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const analyticsData = [
    {
      id: 1,
      title: "Total Pesanan",
      value: counter.totalOrders,
      change: "+12.5%",
      trend: "up",
      icon: ShoppingCart,
      color: "from-orange-500 to-orange-400",
      textColor: "text-orange-600",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      description: "Total pesanan bulan ini",
    },
    {
      id: 2,
      title: "Pesanan Selesai",
      value: counter.completedOrders,
      change: "+8.2%",
      trend: "up",
      icon: CheckCircle2,
      color: "from-green-500 to-green-400",
      textColor: "text-green-600",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      description: "Pesanan berhasil diselesaikan",
    },
    {
      id: 3,
      title: "Pesanan Dibatalkan",
      value: counter.cancelledOrders,
      change: "-3.1%",
      trend: "down",
      icon: XCircle,
      color: "from-red-500 to-red-400",
      textColor: "text-red-600",
      bgColor: "bg-red-50",
      iconBg: "bg-red-100",
      description: "Pesanan yang dibatalkan",
    },
    {
      id: 4,
      title: "Total Pendapatan",
      value: `Rp${counter.revenue.toLocaleString("id-ID")}`,
      change: "+15.3%",
      trend: "up",
      icon: DollarSign,
      color: "from-blue-500 to-blue-400",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      description: "Pendapatan bulan ini",
    },
  ];

  const statsData = [
    {
      icon: Users,
      label: "Total Pelanggan",
      value: "1,234",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: Clock,
      label: "Rata-rata Waktu",
      value: "12 menit",
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
    },
    {
      icon: Package,
      label: "Produk Terjual",
      value: "567",
      color: "text-pink-600",
      bgColor: "bg-pink-100",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
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
        className="relative z-10 p-8 pt-24 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.19, 1.0, 0.22, 1.0] }}
      >
        {/* Header Section */}
        <motion.div
          className="mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.19, 1.0, 0.22, 1.0] }}
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
                Dasbor Analitik
              </h1>
              <p className="text-gray-600 text-lg">
                Pantau kinerja bisnis Anda secara real-time
              </p>
            </div>
            <Badge className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-4 py-2 text-sm">
              Live Updates
            </Badge>
          </div>
        </motion.div>

        {/* Main Metrics Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {analyticsData.map((item, index) => {
            const Icon = item.icon;
            const TrendIcon = item.trend === "up" ? TrendingUp : TrendingDown;

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                onHoverStart={() => setHoveredCard(item.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <Card className="relative overflow-hidden group cursor-pointer border-2 hover:border-orange-300 transition-all duration-500">
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500",
                      item.color
                    )}
                  />

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={hoveredCard === item.id ? { x: "100%" } : {}}
                    transition={{ duration: 0.8 }}
                  />

                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardDescription className="text-sm font-medium text-gray-600">
                        {item.title}
                      </CardDescription>
                      <motion.div
                        className={cn("p-2 rounded-lg", item.iconBg)}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className={cn("w-5 h-5", item.textColor)} />
                      </motion.div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <motion.div
                      className={cn("text-3xl font-bold mb-2", item.textColor)}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                    >
                      {typeof item.value === "number"
                        ? item.value.toLocaleString("id-ID")
                        : item.value}
                    </motion.div>

                    <div className="flex items-center gap-2">
                      <Badge
                        className={cn(
                          "text-xs px-2 py-0.5",
                          item.trend === "up"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        )}
                      >
                        <TrendIcon className="w-3 h-3 inline mr-1" />
                        {item.change}
                      </Badge>
                      <span className="text-xs text-gray-500">
                        vs bulan lalu
                      </span>
                    </div>

                    <p className="text-xs text-gray-500 mt-3">
                      {item.description}
                    </p>
                  </CardContent>

                  {/* Bottom accent line */}
                  <motion.div
                    className={cn("h-1 bg-gradient-to-r", item.color)}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredCard === item.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <Separator className="my-8" />

        {/* Secondary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Statistik Tambahan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {statsData.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="hover:shadow-xl transition-all duration-500 border-2 hover:border-orange-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <motion.div
                          className={cn("p-3 rounded-full", stat.bgColor)}
                          animate={floatingAnimation}
                        >
                          <Icon className={cn("w-6 h-6", stat.color)} />
                        </motion.div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">
                            {stat.label}
                          </p>
                          <p className="text-2xl font-bold text-gray-800">
                            {stat.value}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
