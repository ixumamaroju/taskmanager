import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await axios.post("http://localhost:5000/login", {
      email,
      password
    });

    localStorage.setItem("user", JSON.stringify(res.data));

    if (res.data.role === "admin") {
      window.location = "/admin";
    } else {
      window.location = "/user";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center px-6">

        {/* Left Section */}
        <div>
          <span className="bg-white px-4 py-1 rounded-full text-sm shadow">
            Manage all your task in one place!
          </span>

          <h1 className="text-5xl font-bold mt-6 text-blue-600">
             Task Manager
          </h1>
        </div>

        {/* Right Login Card */}
        <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

          <h2 className="text-2xl font-bold text-center text-blue-600">
            Welcome back!
          </h2>
          <p className="text-center text-gray-400 text-sm mb-6">
            Keep all your credentials safe!
          </p>

          <input
            className="w-full border p-3 rounded mb-4"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full border p-3 rounded mb-4"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="text-sm text-blue-500 cursor-pointer mb-4">
            Forget Password?
          </p>

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
