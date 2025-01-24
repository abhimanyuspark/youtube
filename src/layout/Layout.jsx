import React, { Suspense } from "react";
import Nav from "./Nav";
import { Outlet } from "react-router";
import { Loader } from "../components";
import Offline from "./Offline";
import { useIternetCheck } from "../hooks";

const Layout = () => {
  const isOnline = useIternetCheck();

  return (
    <div>
      <header className="">
        <Nav />
      </header>
      <main className="p-2">
        <Suspense fallback={<Loader />}>
          {isOnline ? <Outlet /> : <Offline />}
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
