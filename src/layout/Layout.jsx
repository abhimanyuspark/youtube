import React, { Suspense } from "react";
import Nav from "./Nav";
import { Outlet } from "react-router";
import { Loader } from "../components";
import Offline from "./Offline";
import { useIternetCheck, useScrollToTop } from "../hooks";

const Layout = () => {
  const isOnline = useIternetCheck();
  const scrollTop = useScrollToTop();

  return (
    <div className="">
      <nav className={`${scrollTop ? "bg-black text-white" : "bg-gray-300"} sticky z-10 top-0`}>
        <Nav />
      </nav>

      <main className="">
        <Suspense fallback={<Loader />}>
          {isOnline ? <Outlet /> : <Offline />}
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
