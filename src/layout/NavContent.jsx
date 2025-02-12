import React from "react";
import { NavLink } from "react-router";
import { NavigationData as data } from "../utils/constants";

const NavContent = ({ handleToggle, toggle = true }) => {
  return (
    <ul className="px-2 py-2 flex flex-col gap-0.5 h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden scroll">
      {data.slice(0, toggle ? data.length : 3).map((n, i) => (
        <li key={i} onClick={handleToggle} title={n.title}>
          <Item n={n} toggle={toggle} />
          {n?.divider === true && toggle && (
            <hr className="border-t border-gray-700 mt-2.5 mb-2" />
          )}
        </li>
      ))}
    </ul>
  );
};

const Item = ({ n, toggle }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `${isActive ? "bg-gray-700" : "hover:bg-gray-800"} ${
          toggle ? "gap-6" : "flex-col gap-2"
        } flex py-2 px-5 rounded-md items-center`
      }
      to={n.path}
    >
      <n.icon className="size-6" />
      <span className={`${toggle ? "text-md" : "text-[10px] text-center"}`}>{n.title}</span>
    </NavLink>
  );
};

export default NavContent;
