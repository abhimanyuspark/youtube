import React from "react";
import { useScrollToTop } from "../hooks";
import NavHeader from "./NavHeader";
import NavSearch from "./NavSearch"
import NavFooter from "./NavFooter";

const HomeNav = ({ handleToggle }) => {
  const scrollTop = useScrollToTop();

  return (
    <div
      className={`flex justify-between items-center h-15 px-7 ${
        scrollTop ? "bg-black" : "bg-gray-950"
      }`}
    >
      <NavHeader handleToggle={handleToggle} />
      <NavSearch />
      <NavFooter />
    </div>
  );
};

export default HomeNav;
