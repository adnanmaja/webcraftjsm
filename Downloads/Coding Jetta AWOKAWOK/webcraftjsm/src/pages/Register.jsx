import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { UserPlus, Mail, Lock, User, Phone, ArrowRight } from "lucide-react";
import bgImage from "@/assets/Background.svg";
import { authService } from "@/services";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess("");

    try {
      // Register new user
      await authService.register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: "customer", // Default role
      });

      setSuccess("Registration successful! Redirecting to login...");

      // Navigate to login after short delay
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      setError(
        err.response?.data?.detail || "Registration failed. Please try again."
      );
      console.error("Registration error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full relative overflow-hidden flex items-center justify-center py-12"
      style={{ background: "linear-gradient(to bottom, #F2BE7C, #FFFFFF)" }}
    >
      {/* Background Pattern */}
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

      {/* Register Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, ease: [0.19, 1.0, 0.22, 1.0] }}
        className="relative z-10 w-full max-w-md px-4"
      >
        <Card className="border-2 border-orange-200 shadow-2xl overflow-hidden">
          {/* Gradient Header */}
          <div className="h-2 bg-gradient-to-r from-orange-500 to-orange-400" />

          <CardHeader className="text-center pt-8">
            <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full w-16 h-16 flex items-center justify-center">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-800">
              Create Account
            </CardTitle>
            <CardDescription className="text-base">
              Join GamadanG today
            </CardDescription>
          </CardHeader>

          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {success && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-sm">
                  {success}
                </div>
              )}

              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 font-poppins flex items-center gap-2">
                  <User className="w-4 h-4 text-orange-500" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  disabled={isSubmitting}
                  className="w-full h-11 px-4 rounded-lg border-2 border-gray-200 focus:border-orange-400 focus:outline-none transition-all duration-300 font-poppins text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 font-poppins flex items-center gap-2">
                  <Mail className="w-4 h-4 text-orange-500" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  disabled={isSubmitting}
                  className="w-full h-11 px-4 rounded-lg border-2 border-gray-200 focus:border-orange-400 focus:outline-none transition-all duration-300 font-poppins text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 font-poppins flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange-500" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="08123456789"
                  required
                  disabled={isSubmitting}
                  className="w-full h-11 px-4 rounded-lg border-2 border-gray-200 focus:border-orange-400 focus:outline-none transition-all duration-300 font-poppins text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 font-poppins flex items-center gap-2">
                  <Lock className="w-4 h-4 text-orange-500" />
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  required
                  disabled={isSubmitting}
                  className="w-full h-11 px-4 rounded-lg border-2 border-gray-200 focus:border-orange-400 focus:outline-none transition-all duration-300 font-poppins text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <Separator className="my-6" />

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 font-poppins text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? "Creating Account..." : "Create Account"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>

              {/* Login Link */}
              <p className="text-center text-sm text-gray-600 font-poppins mt-6">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-orange-500 font-semibold hover:text-orange-600 underline transition-colors"
                >
                  Login here
                </a>
              </p>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Register;
