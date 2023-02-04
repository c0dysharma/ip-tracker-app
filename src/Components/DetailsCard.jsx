const DetailsCard = ({ ipAddress, cityCountry, timeZone, isp }) => (
  <section className="flex justify-center mx-8 font-medium">
    <div className="bg-white max-w-xl w-full flex flex-col gap-5 items-center rounded-xl shadow-md py-10 px-8 md:flex-row md:max-w-7xl md:divide-x-2 md:gap-16 md:justify-evenly ">
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

export default DetailsCard;
