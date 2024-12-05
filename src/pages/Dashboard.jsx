const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return (
      <div className="text-center p-4">Please log in to view this page.</div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
      <h2 className="text-xl mt-4">Your Information:</h2>
      <table className="min-w-full mt-4 border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Date of Birth</th>
            <th className="border border-gray-300 p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">{user.name}</td>
            <td className="border border-gray-300 p-2">
              {new Date(user.dateOfBirth).toLocaleDateString()}
            </td>
            <td className="border border-gray-300 p-2">{user.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
