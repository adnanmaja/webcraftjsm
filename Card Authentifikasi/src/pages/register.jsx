import React, { useState } from "react";
import Button from "../components/elements/Button";
import InputForm from "../components/elements/Index";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      // Replace with your actual API endpoint
      const response = await fetch("https://webcraftapi.vercel.app/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      // Registration successful
      setSuccess(true);
      console.log("Registration successful:", data);
      
      // Optional: Redirect to login page or dashboard
      // navigate("/login");

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex justify-center bg-gradient-to-r from-[#F0BB78] to-[#FFD39C] h-32 w-full min-h-screen items-center">
        <div className="w-full max-w-xs bg-white shadow-lg rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-green-500 mb-4">Registration Successful!</h2>
          <p className="mb-4">Your account has been created successfully.</p>
          <Link to="/">
            <Button className="bg-green-500 w-full">Go to Login</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center bg-gradient-to-r from-[#F0BB78] to-[#FFD39C] h-32 w-full min-h-screen items-center">
      <div className="w-full max-w-xs bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-2 text-orange-500">Register</h1>
        <p className="font-medium text-slate-500 mb-8">
          Create your account by filling the details below
        </p>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <InputForm
            label="Nama"
            type="text"
            placeholder="John Doe"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <InputForm
            label="Nomor HP"
            type="tel"
            placeholder="08123456789"
            name="phone_number_number"
            value={formData.phone_number_number}
            onChange={handleChange}
            required
          />
          <InputForm
            label="Email"
            type="email"
            placeholder="example@gmail.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <InputForm
            label="Password"
            type="password"
            placeholder="******"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button 
            type="submit" 
            className="bg-orange-500 w-full mt-4"
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Register"}
          </Button>
        </form>
        <p className="mt-4 text-sm text-center">
          Sudah punya akun? <Link className="text-blue-500 underline" to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;