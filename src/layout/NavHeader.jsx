import React from "react";
import { FaBars } from "../assets/Icons";

const NavHeader = ({ handleToggle, className = "" }) => {
  return (
    <div className={"flex items-center gap-6 " + className}>
      <div onClick={handleToggle} className="click cursor-pointer">
        <FaBars className="size-5" />
      </div>
      <h2 className="text-lg font-semibold">YouTube</h2>
    </div>
  );
};

export default NavHeader;
