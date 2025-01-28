import React from "react";
import { useScrollToTop } from "../hooks";
import NavHeader from "./NavHeader";

const HomeNav = ({ handleToggle }) => {
  const scrollTop = useScrollToTop();

  return (
    <div
      className={`flex justify-between items-center h-15 px-7 ${
        scrollTop ? "bg-black" : "bg-gray-950"
      }`}
    >
      <NavHeader handleToggle={handleToggle} />
    </div>
  );
};

export default HomeNav;
