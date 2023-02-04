import { useState, useEffect } from "react";
import axios from "axios";

import MapView from "./Components/MapView";
import SearchBar from "./Components/SearchBar";
import DetailsCard from "./Components/DetailsCard";

const MainHeading = ({ text }) => (
  <h1 className="text-center text-white font-medium text-3xl p-8">{text}</h1>
);

export default function App() {
  const [ipAddress, setIpAddress] = useState("");
  const [apidata, setApiData] = useState(null);

  const checkIpAddress =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
  const checkDomain =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;

  const fetchAPIData = async () => {
    let geoIPLink = `https://geo.ipify.org/api/v2/country,city?apiKey=${
      import.meta.env.VITE_GEO_IP_API_KEY
    }&`;
    if (checkIpAddress.test(ipAddress)) geoIPLink += `ipAddress=${ipAddress}`;
    else if (checkDomain.test(ipAddress)) geoIPLink += `domain=${ipAddress}`;
    else if (ipAddress === "")
      geoIPLink += `ipAddress=`; // to move to your own location when empty
    else return;

    const res = await axios(geoIPLink);
    setApiData(res.data);
  };

  useEffect(() => {
    if (
      checkIpAddress.test(ipAddress) ||
      checkDomain.test(ipAddress) ||
      ipAddress === ""
    ) {
      document
        .getElementById("searchInput")
        .classList.add("border-transparent");
      return document
        .getElementById("searchInput")
        .classList.remove("border-red-500");
    }
    document.getElementById("searchInput").classList.add("border-red-500");
    document
      .getElementById("searchInput")
      .classList.remove("border-transparent");
  }, [ipAddress]);

  useEffect(() => {
    fetchAPIData();
  }, []);

  const onSearchClickHandler = (e) => {
    e.preventDefault();
    fetchAPIData();
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
