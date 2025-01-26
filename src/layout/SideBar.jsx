import React from "react";
import { NavLink, Outlet } from "react-router";
import { NavigationData as data } from "../utils/constants";

const SideBar = () => {
  return (
    <div className="grid grid-cols-[0px_1fr] sm:grid-cols-[80px_1fr]">
      <aside className="sticky top-15 h-[calc(100dvh-60px)] overflow-y-auto">
        <ul className="py-2 px-2 flex flex-col gap-0.5">
          {data
            .filter((s) => s.type === "both")
            .map((s, i) => (
              <li key={i} title={s.title}>
                <Item s={s} />
              </li>
            ))}
        </ul>
      </aside>

      <Outlet />
    </div>
  );
};

const Item = ({ s }) => {
  return (
    <NavLink
      to={s.path}
      className={({ isActive }) =>
        `${
          isActive ? "bg-gray-700" : "hover:bg-gray-700"
        } flex flex-col items-center gap-1 rounded-md p-2`
      }
    >
      <s.icon className="size-7" />
      <span className="text-xs text-center w-full truncate">{s.title}</span>
    </NavLink>
  );
};

export default SideBar;
