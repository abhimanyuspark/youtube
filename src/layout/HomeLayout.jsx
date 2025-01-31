import React, { Suspense } from "react";
import { Outlet } from "react-router";
import { Loader, Offline } from "../components";
import {
  useIternetCheck,
  useLocalStorage,
  useMediaQuery,
  useScrollToTop,
  useToggle,
} from "../hooks";
import HomeNav from "./HomeNav";
import NavContent from "./NavContent";

const HomeLayout = () => {
  const isOnline = useIternetCheck();
  const isMobile = useMediaQuery("(max-width: 640px)");

  const [localStorage, setLocalStorage] = useLocalStorage("menu", false);
  const [toggle, handleToggle] = useToggle(localStorage);

  const onToggle = () => {
    handleToggle();
    setLocalStorage(!toggle);
  };

  return (
    <div>
      <nav className={`sticky z-50 top-0`}>
        <HomeNav toggle={toggle} isMobile={isMobile} handleToggle={onToggle} />
      </nav>

      <div className="flex">
        <Side toggle={toggle} />

        <main className="flex-1">
          <Suspense fallback={<Loader />}>
            {isOnline ? <Outlet /> : <Offline />}
          </Suspense>
        </main>
      </div>
    </div>
  );
};

const Side = ({ toggle }) => {
  const scrollTop = useScrollToTop();

  return (
    <aside
      className={`${scrollTop ? "bg-black" : ""} ${
        toggle ? "w-60" : "w-20"
      } hidden sm:block sticky z-10 top-15 h-[calc(100vh-60px)]`}
    >
      {/* content */}
      <NavContent toggle={toggle} />
    </aside>
  );
};

export default HomeLayout;
