import React, { useState } from "react";
import { useClickOutside, useDropdownPosition } from "../hooks";
import { BsThreeDotsVertical } from "../assets/Icons";

const DropDown = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const ref = useClickOutside(() => {
    setToggle(false);
  });

  const dropdownRef = useDropdownPosition({
    toggle: toggle,
    top:44
  });

  return (
    <div ref={ref} className="relative">
      <div
        onClick={(e) => {
          e.stopPropagation();
          setToggle(!toggle);
        }}
        className="py-2.5 px-2 hover:bg-gray-900 rounded-xl cursor-pointer"
      >
        <BsThreeDotsVertical className="size-5" />
      </div>

      <ul
        ref={dropdownRef}
        className={`${
          toggle ? "block" : "hidden"
        } absolute rounded-xl w-60 right-0 h-auto bg-gray-900 py-2 shadow-md *:p-2 *:hover:bg-gray-800 *:flex *:gap-8 *:items-center *:cursor-pointer`}
      >
        {children}
      </ul>
    </div>
  );
};

export default DropDown;
