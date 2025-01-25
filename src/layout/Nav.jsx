import React from "react";
import {
  FaBars,
  TiHome,
  FaFire,
  BsCollectionPlay,
  MdPlaylistPlay,
} from "../Icons/Icons";
import { useClickOutside, useScrollToTop, useToggle } from "../hooks";
import { Link } from "react-router";

const Nav = () => {
  const [toggle, handleToggle] = useToggle();
  const scrollTop = useScrollToTop();
  const ref = useClickOutside(() => {
    if (toggle) {
      handleToggle();
    }
  });

  return (
    <div className="flex justify-between items-center px-7 py-4">
      <div className="flex items-center gap-6">
        <FaBars onClick={handleToggle} className="size-5 cursor-pointer" />
        <h2 className="text-lg font-semibold">Youtube</h2>
      </div>

      {toggle && (
        <ul ref={ref} className={`${scrollTop ? "bg-black" : "bg-gray-300"} w-60 fixed top-0 left-0 h-full`}>
          {/* headers */}
          <div className="flex items-center gap-6 px-7 py-4">
            <FaBars onClick={handleToggle} className="size-5 cursor-pointer" />
            <h2 className="text-lg font-semibold">Youtube</h2>
          </div>
          {/* content */}
          <Contant />
        </ul>
      )}
    </div>
  );
};

const data = [
  {
    title: "Home",
    icon: TiHome,
    path: "/",
  },
  {
    title: "Trending",
    icon: FaFire,
    path: "/trending",
  },
  {
    title: "Subscriptions",
    icon: BsCollectionPlay,
    path: "/subscriptions",
  },
  {
    title: "PlayList",
    icon: MdPlaylistPlay,
    path: "/playlist",
  },
];

const Contant = () => {
  return (
    <ul className="px-4.5 py-2">
      {data.map((n, i) => (
        <li key={i}>
          <Item n={n} />
        </li>
      ))}
    </ul>
  );
};

const Item = ({ n }) => {
  return (
    <Link to={n.path} className="flex gap-6 p-2 rounded-lg items-center hover:bg-[rgba(0,0,0,0.1)]">
      <n.icon className="size-7" />
      <span className="text-sm">{n.title}</span>
    </Link>
  );
};

export default Nav;
