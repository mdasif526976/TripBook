import React from "react";

const Services = () => {
  return (
    <div className="py-[70px] px-14 bg-[#F7F7F7] mb-[100px]">
      {/* for headers */}
      <div className="text-center">
        <h1 className="text-[#262729] text-[30px]  md:text-[40px]">
          Why Choose Us
        </h1>
        <p className="pt-[26px] text-[14px] text-[#333] md:text-xl text-center md:px-[15%] mb-[54px]">
          {" "}
          The main reason is because our competitors have disgusting sites, but
          we can't write that here, so the text here will be different
        </p>
      </div>
      {/* ----------------All card Container---------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-[30px]">
        <div className="flex flex-col gap-5 w-[270px] items-center ">
          <div
            style={{ opacity: "0.159999996423721" }}
            className=" relative bg-[#2A90D9] w-[100px] rounded-full h-[100px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[50px] h-[50px] absolute top-[26%] left-[26%] rounded-full text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
              />
            </svg>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold">Payment methods</h4>
            <p className="text-[16px] font-normal">
              We have a lot of them, from cryptocurrencies to barter for
              potatoes
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-[270px] items-center">
          <div
            style={{ opacity: "0.159999996423721" }}
            className=" relative bg-[#2A90D9] w-[100px] rounded-full h-[100px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[50px] h-[50px] absolute top-[26%] left-[26%] rounded-full text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold">Simple search process</h4>
            <p className="text-[16px] font-normal">
              We checked it out, even the kid did it, but it was my mom's
              friend's son
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-[270px] items-center">
          <div
            style={{ opacity: "0.159999996423721" }}
            className=" relative bg-[#2A90D9] w-[100px] rounded-full h-[100px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[50px] h-[50px] absolute top-[26%] left-[26%] rounded-full text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold">24/7 Support</h4>
            <p className="text-[16px] font-normal">
              Is there something you don't understand? Feel free to call us.
              Phone number in the footer
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-[270px] items-center">
          <div
            style={{ opacity: "0.159999996423721" }}
            className=" relative bg-[#2A90D9] w-[100px] rounded-full h-[100px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[50px] h-[50px] absolute top-[26%] left-[26%] rounded-full text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold">We are nice</h4>
            <p className="text-[16px] font-normal">
              Fantasy is over, there will be something really convincing here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
