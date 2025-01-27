import React, { Suspense } from "react";
import Nav from "./Nav";
import { Outlet } from "react-router";
import { Loader, Offline } from "../components";
import { useIternetCheck } from "../hooks";

const Layout = () => {
  const isOnline = useIternetCheck();

  return (
    <div>
      <nav className={`sticky z-10 top-0`}>
        <Nav />
      </nav>

      <main>
        <Suspense fallback={<Loader />}>
          {isOnline ? <Outlet /> : <Offline />}
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
