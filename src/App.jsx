import { useState, useEffect } from "react";
import axios from "axios";

import MapView from "./Components/MapView";
import SearchBar from "./Components/SearchBar";
import DetailsCard from "./Components/DetailsCard";

const MainHeading = ({ text }) => (
  <h1 className="text-center text-white font-medium text-3xl p-8">{text}</h1>
);

export default function App() {
  const [ipAddress, setIpAddress] = useState("35.238.110.42");
  const [apidata, setApiData] = useState(null);

  const setAPIData = async () => {
    const geoIPurl = `https://geo.ipify.org/api/v2/country,city?apiKey=${
      import.meta.env.VITE_GEO_IP_API_KEY
    }&ipAddress=${ipAddress}`;

    const res = await axios(geoIPurl);
    setApiData(res.data);
  };

  useEffect(() => {
    try {
      setAPIData();
    } catch (error) {
      console.trace(error);
    }
  }, []);
  const onSearchClickHandler = (e) => {
    e.preventDefault();
    setAPIData(ipAddress);
    console.log(apidata);
  };

  return (
    <>
      <main className="bg-hero-pattern bg-no-repeat w-full bg-cover h-80 tracking-wider md:h-72">
        <MainHeading text="IP Address Tracker" />
        <SearchBar
          onInputChange={(e) => setIpAddress(e.target.value)}
          onSearch={onSearchClickHandler}
        />
        {apidata && (
          <DetailsCard
            ipAddress={apidata.ip}
            cityCountry={
              apidata.location.city +
              ", " +
              apidata.location.country +
              apidata.location.postalCode
            }
            timeZone={"UTC " + apidata.location.timezone}
            isp={apidata.isp}
          />
        )}
      </main>
      {apidata && (
        <section className="absolute -z-10 w-full">
          <MapView latLong={[apidata.location.lat, apidata.location.lng]} />
        </section>
      )}
    </>
  );
}
