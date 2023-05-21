const Results = ({ weather }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold">
        {weather.name}, {weather.sys.country}
      </h2>
      <p className="text-gray-600">{weather.weather[0].description}</p>
      <p className="text-4xl font-bold">{Math.round(weather.main.temp)}°C</p>
    </div>
  );
};

export default Results;
