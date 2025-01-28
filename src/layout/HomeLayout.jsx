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
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [localStorage, setLocalStorage] = useLocalStorage("menu", false);
  const [toggle, handleToggle] = useToggle(localStorage);

  const onToggle = () => {
    handleToggle();
    if (!isMobile) {
      setLocalStorage(!toggle);
    }
  };

  return (
    <div>
      <nav className={`sticky z-10 top-0`}>
        <HomeNav toggle={toggle} handleToggle={onToggle} />
      </nav>

      <main className="flex">
        <Side toggle={toggle} isMobile={isMobile} />

        <div className="flex-1">
          <Suspense fallback={<Loader />}>
            {isOnline ? <Outlet /> : <Offline />}
          </Suspense>
        </div>
      </main>
    </div>
  );
};

const Side = ({ toggle, isMobile }) => {
  const scrollTop = useScrollToTop();

  return (
    <aside
      className={`${scrollTop ? "bg-black" : ""} ${
        isMobile
          ? toggle
            ? "left-0 bg-gray-950"
            : "-left-60"
          : toggle
            ? "w-60"
            : "w-20"
      } absolute sm:sticky top-15 sm:left-0 h-[calc(100vh-60px)]`}
    >
      {/* content */}
      <NavContent toggle={toggle} />
    </aside>
  );
};

export default HomeLayout;
