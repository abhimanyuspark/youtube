import React from "react";
import { useClickOutside, useScrollToTop, useToggle } from "../hooks";
import NavContent from "./NavContent"
import NavHeader from "./NavHeader";

const Nav = () => {
  const [toggle, handleToggle] = useToggle();
  const scrollTop = useScrollToTop();
  const ref = useClickOutside(handleToggle);

  return (
    <div
      className={`flex justify-between items-center px-7 h-15 relative ${
        scrollTop ? "bg-black" : ""
      }`}
    >
      <NavHeader handleToggle={handleToggle}  />

      {toggle && (
        <div
          ref={ref}
          className={`${
            scrollTop ? "bg-black" : "bg-gray-900"
          } w-60 fixed z-10 top-0 left-0 h-full`}
        >
          {/* headers */}
          <NavHeader className="px-7 h-15" handleToggle={()=> {handleToggle(false)}}  />
          {/* content */}
          <NavContent />
        </div>
      )}
    </div>
  );
};



export default Nav;
