import React, { useState } from "react";
import Button from "../components/elements/Button";
import InputForm from "../components/elements/Index";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // Import the hook

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); // Get login function from context

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch('https://webcraftapi.vercel.app/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log('Login successful:', result);
        
        // Use the context login function instead of direct localStorage
        login({
          user_id: result.user_id,
          email: result.email,
          name: result.name
        }, result.access_token);
        
        navigate("../../dashboard");
      } else if (response.status === 401) {
        setErrorMessage("Invalid email or password. Please try again.");
      } else {
        const error = await response.json();
        setErrorMessage(error.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error('Network error:', error);
      setErrorMessage("Network error. Please check your connection and try again.");
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