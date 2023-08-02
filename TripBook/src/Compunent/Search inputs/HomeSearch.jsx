import React from "react";

const HomeSearch = () => {
  return (
    <div
      style={{ boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.16)" }}
      className=" rounded-[36px] md:h-[80px] p-[15px] bg-white items-center
      w-full mt-8 lg:w-[50rem] 
      flex flex-row justify-between shadow-sm"
    >
      <div className="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-9 text-[#EE685F]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
        <div className="flex flex-col gap-0">
          <label className="pl-[0.70rem] text-xl font-normal" htmlFor="">
            Location
          </label>
          <select
            className="border-none outline-none font-normal"
            name=""
            id=""
            placeholder=""
          >
            <option value="Search Destination">Search Destination</option>
            <option value="Search Destination">Search Destination</option>
            <option value="Search Destination">Search Destination</option>
            <option value="Search Destination">Search Destination</option>
            <option value="Search Destination">Search Destination</option>
          </select>
        </div>
      </div>
      <div className="md:flex gap-1 items-center hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-9 text-[#EE685F]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
          />
        </svg>
        <div className="flex flex-col gap-0">
          <label className="pl-[0.70rem] text-xl font-normal" htmlFor="">
            Date
          </label>
          <input
            style={{ color: "var(--paragraph, #666)", width: "200px" }}
            className="border-none rounded font-normal"
            type="text"
            placeholder="When you will go"
          />
        </div>
      </div>

      <button className="w-10 h-10 text-white bg-[#EE685F] rounded-full p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-center"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </div>
  );
};

export default HomeSearch;
