import { useEffect, useState } from "react";

const App = () => {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/schoolsapi")
      .then((response) => response.json())
      .then((data) => {
        setSchools(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold text-blue-600 mb-5">NCAA Division III Schools</h1>
      {loading ? (
        <p className="text-gray-700">Loading...</p>
      ) : (
        <div className="w-full max-w-4xl bg-white p-4 shadow-lg rounded-lg">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">School Name</th>
                <th className="border px-4 py-2">State</th>
              </tr>
            </thead>
            <tbody>
              {schools.map((school, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{school.memberId}</td>
                  <td className="border px-4 py-2">{school.name}</td>
                  <td className="border px-4 py-2">{school.state}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;
