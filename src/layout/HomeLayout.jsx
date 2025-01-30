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
      <nav className={`sticky z-50 top-0`}>
        <HomeNav toggle={toggle} handleToggle={onToggle} />
      </nav>

      <div className="flex">
        <Side toggle={toggle} isMobile={isMobile} handleToggle={handleToggle} />

        <main className="flex-1">
          <Suspense fallback={<Loader />}>
            {isOnline ? <Outlet /> : <Offline />}
          </Suspense>
        </main>
      </div>
    </div>
  );
};

const Side = ({ toggle, isMobile, handleToggle }) => {
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
      } fixed sm:sticky z-10 top-15 h-[calc(100vh-60px)]`}
    >
      {/* content */}
      <NavContent
        handleToggle={() => {
          if (isMobile) {
            handleToggle(false);
          }
        }}
        toggle={toggle}
      />
    </aside>
  );
};

export default HomeLayout;
