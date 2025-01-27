import React from "react";
import { FaBars } from "../assets/Icons";
import { useScrollToTop } from "../hooks";

const HomeNav = ({ handleToggle }) => {
  const scrollTop = useScrollToTop();

  return (
    <div
      className={`flex justify-between items-center px-7 py-4 ${
        scrollTop ? "bg-black" : ""
      }`}
    >
      <div className="flex items-center gap-6">
        <div onClick={handleToggle} className="click cursor-pointer">
          <FaBars className="size-5" />
        </div>
        <h2 className="text-lg font-semibold">YouTube</h2>
      </div>
    </div>
  );
};

export default HomeNav;
