import React from "react";
import { useScrollToTop } from "../hooks";
import NavHeader from "./NavHeader";

const HomeNav = ({ handleToggle }) => {
  const scrollTop = useScrollToTop();

  return (
    <div
      className={`flex justify-between items-center px-7 py-4 ${
        scrollTop ? "bg-black" : ""
      }`}
    >
      <NavHeader handleToggle={handleToggle} />
    </div>
  );
};

export default HomeNav;
