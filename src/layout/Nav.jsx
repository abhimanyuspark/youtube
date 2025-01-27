import React from "react";
import { FaBars } from "../assets/Icons";
import { useClickOutside, useScrollToTop, useToggle } from "../hooks";
import { NavLink } from "react-router";
import { NavigationData as data } from "../utils/constants";

const Nav = () => {
  const [toggle, handleToggle] = useToggle();
  const scrollTop = useScrollToTop();
  const ref = useClickOutside(handleToggle);

  return (
    <div
      className={`flex justify-between items-center px-7 py-4 ${
        scrollTop ? "bg-black" : ""
      }`}
    >
      <div className="flex items-center gap-6">
        <div onClick={handleToggle} className="click cursor-pointer">
          <FaBars className="size-5" />
        </div>
        <h2 className="text-lg font-semibold">YouTube</h2>
      </div>

      {toggle && (
        <ul
          ref={ref}
          className={`${
            scrollTop ? "bg-black" : "bg-gray-900"
          } w-60 fixed z-10 top-0 left-0 h-full`}
        >
          {/* headers */}
          <li className="flex items-center gap-6 px-7 py-4">
            <div onClick={handleToggle} className="click cursor-pointer">
              <FaBars className="size-5" />
            </div>
            <h2 className="text-lg font-semibold">YouTube</h2>
          </li>
          {/* content */}
          <Content />
        </ul>
      )}
    </div>
  );
};

const Content = () => {
  return (
    <ul className="px-2 py-2 flex flex-col gap-0.5 h-[calc(100vh-60px)] overflow-y-scroll scroll">
      {data.map((n, i) => (
        <li key={i}>
          <Item n={n} />
          {n?.divider === true && (
            <hr className="border-t border-gray-700 mt-2.5 mb-2" />
          )}
        </li>
      ))}
    </ul>
  );
};

const Item = ({ n }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `${
          isActive ? "bg-gray-700" : "hover:bg-gray-700"
        } flex gap-6 py-2 px-4.5 rounded-md items-center`
      }
      to={n.path}
    >
      <n.icon className="size-7" />
      <span className="text-sm">{n.title}</span>
    </NavLink>
  );
};

export default Nav;
