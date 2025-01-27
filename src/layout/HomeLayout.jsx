import React, { Suspense } from "react";
import { Outlet } from "react-router";
import { Loader, Offline } from "../components";
import { useIternetCheck, useScrollToTop, useToggle } from "../hooks";
import HomeNav from "./HomeNav";
import NavContent from "./NavContent";

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
      } sticky top-15 left-0 h-[calc(100vh-60px)]`}
    >
      {/* content */}
      <NavContent toggle={toggle} />
    </aside>
  );
};

export default HomeLayout;
