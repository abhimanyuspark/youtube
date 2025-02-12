import React from "react";
import { useState } from "react";
import { FaSearch } from "../assets/Icons";
import { useClickOutside, useMediaQuery } from "../hooks";

const NavSearch = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 640px)");

  const onSet = () => {
    setOpen(!open);
  };

  const ref = useClickOutside(() => {
    setOpen(false);
  });

  return (
    <div ref={ref}>
      {isMobile ? (
        <div>
          {open ? (
            <div className="absolute top-0 left-0 z-10 bg-gray-950 w-screen h-full flex items-center px-2">
              <SearchInput />
            </div>
          ) : (
            <div onClick={onSet}>
              <FaSearch className="size-6" />
            </div>
          )}
        </div>
      ) : (
        <SearchInput />
      )}
    </div>
  );
};

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [focus, setFocus] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (query !== "") {
      console.log(query);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className={`${
        focus ? "border-blue-500" : "border-gray-900"
      } pl-4 h-10 rounded-full bg-transparent border flex overflow-hidden`}
    >
      {focus && (
        <div className="h-full flex items-center pr-3">
          <FaSearch className="size-4" />
        </div>
      )}
      <input
        className="w-100 sm:w-120 outline-0"
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
      <button className="bg-gray-900 px-6 h-full flex items-center cursor-pointer">
        <FaSearch className="size-5" />
      </button>
    </form>
  );
};

export default NavSearch;
