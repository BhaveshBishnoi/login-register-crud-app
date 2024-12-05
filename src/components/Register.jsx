import { useState } from "react";
import { Link } from "react-router-dom";
import { UserCircle } from "lucide-react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    try {
      console.log("Submitting registration with data:", formData);
      const response = await axios.post("http://localhost:5000/api/register", {
        name: formData.name,
        dateOfBirth: formData.dateOfBirth,
        email: formData.email,
        password: formData.password,
      });
      console.log(response.data.message);
      
    } catch (error) {
      console.error("Registration failed:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-500 to-teal-700">
      <div className="w-[400px] p-8 space-y-6 bg-white shadow-lg rounded-lg border border-gray-300">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-teal-600">SIGN UP</h1>
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center shadow-md">
              <UserCircle className="w-10 h-10 text-teal-600" />
            </div>
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-100 border border-gray-300 text-gray-800 placeholder:text-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="space-y-2">
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full p-3 bg-gray-100 border border-gray-300 text-gray-800 placeholder:text-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="space-y-2">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-100 border border-gray-300 text-gray-800 placeholder:text-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="space-y-2">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 bg-gray-100 border border-gray-300 text-gray-800 placeholder:text-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="space-y-2">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 bg-gray-100 border border-gray-300 text-gray-800 placeholder:text-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded transition duration-200"
          >
            CREATE ACCOUNT
          </button>
        </form>

        <div className="text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-teal-500 hover:text-teal-400">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
