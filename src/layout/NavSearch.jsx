import React from "react";
import { useState } from "react";
import { FaSearch } from "../assets/Icons";

const NavSearch = () => {
  const [query, setQuery] = useState("");
  const [focus, setFocus] = useState(false);

  return (
    <div
      className={`${focus ? "border-blue-500" : "border-gray-900"} w-auto pl-4 h-10 rounded-full bg-transparent border  flex overflow-hidden`}
    >
      {focus && (
        <div className="h-full flex items-center pr-2">
          <FaSearch className="size-4" />
        </div>
      )}
      <input
        className="w-120 outline-0"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        onFocus={() => {
          setFocus(true);
        }}
      />
      <div className="bg-gray-900 px-6 h-full flex items-center">
        <FaSearch className="size-5" />
      </div>
    </div>
  );
};

export default NavSearch;
