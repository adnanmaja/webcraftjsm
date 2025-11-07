import React, { useState } from "react";
import Button from "../components/elements/Button";
import InputForm from "../components/elements/Index";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://yield-attending-rome-carter.trycloudflare.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log('Login successful:', result);
        // Handle successful login (redirect, store token, etc.)
        // Example: localStorage.setItem('token', result.token);
        // Example: window.location.href = '/dashboard';
      } else {
        const error = await response.json();
        console.error('Login failed:', error);
        alert(error.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center bg-orange-300 min-h-screen items-center">
      <div className="w-full max-w-xs bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-2 text-orange-500">Login</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        <form onSubmit={handleSubmit}>
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
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>
        <p className="mt-4 text-sm text-center">
          Belum punya akun? <Link className="text-blue-500 underline" to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;