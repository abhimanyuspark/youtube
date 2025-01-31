import React, { useState } from "react";
import { useClickOutside, useScrollToTop } from "../hooks";
import NavHeader from "./NavHeader";
import NavSearch from "./NavSearch";
import NavFooter from "./NavFooter";
import { FaSearch } from "../assets/Icons";

const HomeNav = ({ handleToggle, isMobile }) => {
  const scrollTop = useScrollToTop();

  return (
    <div
      className={`flex justify-between items-center relative h-15 px-2 sm:px-7 ${
        scrollTop ? "bg-black" : "bg-gray-950"
      }`}
    >
      <NavHeader isMobile={isMobile} handleToggle={handleToggle} />
      {isMobile ? (
        <>
          <Search />
        </>
      ) : (
        <>
          <NavSearch />
          <NavFooter />
        </>
      )}
    </div>
  );
};

const Search = () => {
  const [search, setSearch] = useState(false);
  const onSet = () => {
    setSearch(!search);
  };

  const ref = useClickOutside(onSet);

  return (
    <div ref={ref} className="">
      {search ? (
        <div className="px-2 flex items-center absolute z-10 top-0 left-0 bg-gray-950 w-screen h-full">
          <NavSearch />
        </div>
      ) : (
        <div onClick={onSet}>
          <FaSearch className="size-5" />
        </div>
      )}
    </div>
  );
};

export default HomeNav;
