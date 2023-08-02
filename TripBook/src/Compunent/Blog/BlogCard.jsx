import React from "react";

const BlogCard = ({ img, name, date, detail, readTime }) => {
  return (
    <div className="w-[370px] rounded-xl flex flex-col">
      <img className="rounded-xl" src={img} alt="" />
      <div className="flex justify-between items-center mt-5 pb-[10px]">
        <p className="text-sm">{date}</p>
        <p className="text-xs text-[#2A90D9] flex items-center gap-[2px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-[#2A90D9]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>{" "}
          <span>{readTime}</span>
        </p>
      </div>
      <div>
        <h4 className="text-xl font-normal">{name}</h4>
        <p className="text-base font-normal">{detail}</p>
      </div>
    </div>
  );
};

export default BlogCard;
