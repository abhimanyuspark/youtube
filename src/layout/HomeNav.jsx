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
<<<<<<< HEAD
        <h2 className="text-lg font-semibold">YouTube</h2>
=======
        <h2 className="text-lg font-semibold">Youtube</h2>
>>>>>>> 62f829320ff2b1c9c3c95ea855db46131bd723ea
      </div>
    </div>
  );
};

export default HomeNav;
