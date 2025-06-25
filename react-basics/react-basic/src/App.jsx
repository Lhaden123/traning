// import { AuthProvider } from "./context/AuthContext";
// import { ThemeProvider } from "./context/ThemeContext";
// import AppRoutes from "./routes/AppRoutes";

// import { useEffect, useState } from "react";

// const App = () => {
//   return (
//     <>
//       <ThemeProvider>
//         <AuthProvider>
//           <AppRoutes />
//         </AuthProvider>
//       </ThemeProvider>
//     </>
//   );
// };

// export default App;

const countries = [
  "Bhutan",
  "China",
  "India",
  "France",
  "Nepal",
  "Bhutan",
  "Australia",
  "Germany",
  "Mexico",
  "Brazil",
];

const URL = `http://api.weatherapi.com/v1/current.json?key=75f20d03234d4a77bbd52508250206`;

import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(0);
  const [temperatureReading, setTemperatureReading] = useState("C");
  const [country, setCountry] = useState("Bhutan");

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`${URL}&q=${country}&aqi=no`);
      result.json().then((json) => {
        setData(json.current);
      });
    };
    fetchData();
  }, [country]);

  return (
    <div className="App">
      <div>
        <p>Select Country</p>

        <select
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        >
          {countries.map((item) => (
            <option id={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <p>Select temp reading</p>
        <select
          value={temperatureReading}
          onChange={(event) => setTemperatureReading(event.target.value)}
        >
          {["C", "F"].map((item) => (
            <option id={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div>
        {data ? (
          <p>
            current country: {country} and the temperature is currently{" "}
            {temperatureReading === "C" ? data.temp_c : data.temp_f}{" "}
          </p>
        ) : (
          <p>Loading Data</p>
        )}
      </div>
    </div>
  );
}

export default App;
