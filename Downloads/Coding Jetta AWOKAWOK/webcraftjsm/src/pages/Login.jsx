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
import { LogIn, Mail, Lock, ArrowRight } from "lucide-react";
import bgImage from "@/assets/Background.svg";
import { authService } from "@/services";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Login with auth service
      await authService.login(formData.email, formData.password);

      // Navigate to menu page
      navigate("/menu");
    } catch (err) {
      setError(
        err.response?.data?.detail ||
          "Login failed. Please check your credentials."
      );
      console.error("Login error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full relative overflow-hidden flex items-center justify-center"
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

      {/* Login Card */}
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
              <LogIn className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-800">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-base">
              Sign in to access your dashboard
            </CardDescription>
          </CardHeader>

          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

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
                  placeholder="Enter your password"
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
                  {isSubmitting ? "Signing in..." : "Sign In"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>

              {/* Register Link */}
              <p className="text-center text-sm text-gray-600 font-poppins mt-6">
                Don't have an account?{" "}
                <a
                  href="/register"
                  className="text-orange-500 font-semibold hover:text-orange-600 underline transition-colors"
                >
                  Register here
                </a>
              </p>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;
