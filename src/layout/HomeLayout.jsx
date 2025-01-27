import React, { Suspense } from "react";
import { Outlet } from "react-router";
import { Loader, Offline } from "../components";
import { useIternetCheck, useScrollToTop, useToggle } from "../hooks";
import HomeNav from "./HomeNav";
import { NavLink } from "react-router";
import { NavigationData as data } from "../utils/constants";

const HomeLayout = () => {
  const isOnline = useIternetCheck();
  const [toggle, handleToggle] = useToggle();

  return (
    <div>
      <nav className={`sticky z-10 top-0`}>
        <HomeNav handleToggle={handleToggle} />
      </nav>

      <main className="flex">
        <Side toggle={toggle} />

        <div className="flex-1">
          <Suspense fallback={<Loader />}>
            {isOnline ? <Outlet /> : <Offline />}
          </Suspense>
        </div>
      </main>
    </div>
  );
};

const Side = ({ toggle }) => {
  const scrollTop = useScrollToTop();
  return (
    <aside
      className={`${scrollTop ? "bg-black" : ""} ${
        toggle ? "w-60" : "w-20"
      } transition-all sticky top-15 left-0 h-[calc(100vh-60px)]`}
    >
      {/* content */}
      <Content toggle={toggle} />
    </aside>
  );
};

const Content = ({ toggle }) => {
  return (
    <ul className="px-2 py-2 flex flex-col gap-0.5 h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden scroll">
      {data.slice(0, toggle ? data.length : 2).map((n, i) => (
        <li key={i}>
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
        `${isActive ? "bg-gray-700" : "hover:bg-gray-700"} ${
          toggle ? "gap-6" : "flex-col gap-2"
        } flex py-2 px-4.5 rounded-md items-center`
      }
      to={n.path}
    >
      <n.icon className="size-7" />
      <span className={`${toggle ? "text-md" : "text-xs"}`}>{n.title}</span>
    </NavLink>
  );
};

export default HomeLayout;
