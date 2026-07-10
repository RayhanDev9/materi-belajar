import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  return (
    <div>
      <WeatherCard />
    </div>
  );
}

const WeatherCard = () => {
  // State untuk menyimpan data, status loading, dan error
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = "438aae18b7b54cc02f4e168a86e7179f";
    const kota = "Jakarta";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${kota}&appid=${apiKey}&units=metric`;

    // Lakukan request ke server
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal mengambil data cuaca");
        }
        return response.json();
      })
      .then((data) => {
        setWeather(data); // Simpan data ke dalam state
        setLoading(false); // Matikan status loading
      })
      .catch((err) => {
        setError(err.message); // Simpan pesan error
        setLoading(false);
      });
  }, []); // Array kosong [] memastikan fetch hanya berjalan sekali saat komponen di-mount

  // Rendering bersyarat (Conditional Rendering)
  if (loading) {
    return <div className="p-4 text-gray-500">Memuat data cuaca...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  // Tampilan utama jika data berhasil didapat
  return (
    <div className="max-w-sm p-6 bg-blue-50 rounded-xl shadow-md border border-blue-100">
      <h2 className="text-xl font-bold text-gray-800">
        Cuaca di {weather.name}
      </h2>
      <div className="mt-4">
        <p className="text-3xl font-semibold text-blue-600">
          {weather.main.temp}°C
        </p>
        <p className="text-gray-600 capitalize mt-1">
          {weather.weather[0].description}
        </p>
      </div>
    </div>
  );
};

export default App;
