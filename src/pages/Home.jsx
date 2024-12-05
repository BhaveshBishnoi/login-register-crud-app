const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Application</h1>
      <p className="text-lg mb-8">Your one-stop solution for all your needs.</p>
      <div className="flex space-x-4">
        <a href="/login" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Login
        </a>
        <a href="/register" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Register
        </a>
      </div>
    </div>
  );
};

export default Home;