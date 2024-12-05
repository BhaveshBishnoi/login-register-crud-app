import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { UserCircle } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", formData);
      const data = response.data;
      if (data.token) {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Login failed:", error.response.data.message || error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-500 to-teal-700">
      <div className="w-[400px] p-8 space-y-6 bg-white shadow-lg rounded-lg border border-gray-300">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-teal-600">SIGN IN</h1>
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
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 bg-gray-100 border border-gray-300 text-gray-800 placeholder:text-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
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
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="remember" className="text-gray-300" />
              <label htmlFor="remember" className="text-gray-600">
                Remember me
              </label>
            </div>
            <Link to="/forgot-password" className="text-teal-500 hover:text-teal-400">
              Forgot your password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded transition duration-200"
          >
            LOGIN
          </button>
        </form>

        <div className="text-center text-gray-600 text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-teal-500 hover:text-teal-400">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
