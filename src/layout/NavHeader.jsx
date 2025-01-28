import React from "react";
import { FaBars, FaYoutube } from "../assets/Icons";

const NavHeader = ({ handleToggle, className = "" }) => {
  return (
    <div className={"flex items-center gap-6 " + className}>
      <div onClick={handleToggle} className="cursor-pointer menu-click">
        <FaBars className="size-5 sticky z-10" />
      </div>
      <h2 className="text-lg font-semibold flex gap-2 items-center">
        <div className="logo-after">
          <FaYoutube className="text-red-600 size-10 sticky z-10" />
        </div>
        <span>YouTube</span>
      </h2>
    </div>
  );
};

export default NavHeader;
