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
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Changing ${name} to:`, value);

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    })
  );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending data to backend:", formData);
    setIsLoading(true);
    setMessage("");


    try {
      // Replace with your actual API endpoint
      const response = await fetch("https://yield-attending-rome-carter.trycloudflare.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log("Response status:", response.status);
      console.log("Response data:", data);

      console.log("Form data being sent:", formData);
      console.log("Email value:", formData.email);
      console.log("Email contains @:", formData.email.includes('@'));

      if (data.detail && Array.isArray(data.detail)) {
      console.log("Validation errors:", data.detail);
      data.detail.forEach(error => {
        console.log(`Field: ${error.loc.join('.')}, Error: ${error.msg}, Type: ${error.type}`);
      });
    }

      if (response.ok) {
        setMessage("Registration successful! You can now login.");
        // Clear form
        setFormData({
          name: "",
          phone_number: "",
          email: "",
          password: ""
        });
        // Optionally redirect to login page
        // navigate("/login");
      } else {
        setMessage(data.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please check your connection and try again.");
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center bg-orange-300 min-h-screen items-center">
      <div className="w-full max-w-xs bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-2 text-orange-500">Register</h1>
        <p className="font-medium text-slate-500 mb-8">
          Create your account by filling the details below
        </p>
        
        {message && (
          <div className={`mb-4 p-3 rounded ${message.includes("successful") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            {message}
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
            name="phone_number"
            value={formData.phone_number}
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