import React from "react";
import { TiHome } from "../Icons/Icons";
import { Link } from "react-router";

const SideData = [
  {
    title: "Home",
    icons: TiHome,
    path: "/",
  },
];

const SideBar = () => {
  return (
    <ul className="py-4 px-2 flex flex-col gap-6">
      {SideData.map((s, i) => (
        <li key={i}>
          <Link to={s.path} className="flex flex-col items-center gap-1">
            <s.icons className="size-7" />
            <span className="text-sm">{s.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SideBar;
