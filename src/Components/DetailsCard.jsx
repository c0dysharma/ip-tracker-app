const DetailsCard = ({ ipAddress, cityCountry, timeZone, isp }) => (
  <section className="flex justify-center mx-6 font-medium">
    <div className="bg-white w-full max-w-7xl grid grid-cols-1 gap-y-3 rounded-xl shadow-md py-4 px-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-28 lg:divide-x-2 md:mx-8 md:gap-y-5 md:py-10 md:px-8">
      <div className="text-center md:text-left">
        <p className="uppercase text-gray-400 text-xs mb-1 lg:mb-2">
          Ip Address
        </p>
        <p className="text-sm md:text-xl lg:text-2xl">{ipAddress}</p>
      </div>

      <div className="text-center lg:pl-7 md:text-left">
        <p className="uppercase text-gray-400 text-xs mb-1 lg:mb-2">Location</p>
        <p className="text-sm md:text-xl lg:text-2xl">{cityCountry}</p>
      </div>

      <div className="text-center lg:pl-7 md:text-left">
        <p className="uppercase text-gray-400 text-xs mb-1 lg:mb-2">Timezone</p>
        <p className="text-sm md:text-xl lg:text-2xl">{timeZone}</p>
      </div>

      <div className="text-center lg:pl-7 md:text-left">
        <p className="uppercase text-gray-400 text-xs mb-1 lg:mb-2">ISP</p>
        <p className="text-sm md:text-xl lg:text-2xl">{isp}</p>
      </div>
    </div>
  </section>
);

export default DetailsCard;
