import "./App.css";
import rightArrowImage from "./assets/images/icon-arrow.svg";

const MainHeading = ({ text }) => (
  <h1 className="text-center text-white font-medium text-3xl p-8">{text}</h1>
);

const SearchBar = () => (
  <form
    action="#"
    className="flex align-center justify-center mx-8 mb-8 md:mb-14"
  >
    <input
      type="text"
      className="w-full max-w-xl px-8 py-4 rounded-l-xl text-lg focus:outline-none"
      placeholder="Search for any IP address or domain."
    />
    <button type="submit" className="bg-black rounded-r-xl px-6">
      <img src={rightArrowImage} alt="" className="w-4 h-4" />
    </button>
  </form>
);

const DetailsCard = ({ ipAddress, cityCountry, timeZone, isp }) => (
  <section className="flex justify-center mx-8 font-medium">
    <div className="bg-white max-w-xl w-full flex flex-col gap-5 items-center rounded-xl shadow-md py-8 px-4 md:flex-row md:max-w-7xl md:divide-x-2 md:gap-16 md:justify-center ">
      <div className="text-center md:text-left">
        <p className="uppercase text-gray-400 text-xs mb-1">Ip Address</p>
        <p className="text-xl md:text-xl lg:text-2xl">{ipAddress}</p>
      </div>

      <div className="text-center md:pl-7 md:text-left">
        <p className="uppercase text-gray-400 text-xs mb-1">Location</p>
        <p className="text-xl md:text-xl lg:text-2xl">{cityCountry}</p>
      </div>

      <div className="text-center md:pl-7 md:text-left">
        <p className="uppercase text-gray-400 text-xs mb-1">Timezone</p>
        <p className="text-xl md:text-xl lg:text-2xl">{timeZone}</p>
      </div>

      <div className="text-center md:pl-7 md:text-left">
        <p className="uppercase text-gray-400 text-xs mb-1">ISP</p>
        <p className="text-xl md:text-xl lg:text-2xl">{isp}</p>
      </div>
    </div>
  </section>
);

export default function App() {
  const ip = "192.212.147.101";
  const city = "Brooklyn, NY 10001";
  const timeZone = "UTC -5:00";
  const isp = "SpaceX starlink";

  return (
    <>
      <main className="bg-hero-pattern bg-no-repeat w-full bg-cover h-80 tracking-wider md:h-72">
        <MainHeading text="IP Address Tracker" />
        <SearchBar />
        <DetailsCard
          ipAddress={ip}
          cityCountry={city}
          timeZone={timeZone}
          isp={isp}
        />
      </main>
    </>
  );
}
