import React, { Suspense } from "react";
import Nav from "./Nav";
import { Outlet } from "react-router";
import { Loader } from "../components";

const Layout = () => {
  return (
    <div>
      <header className="">
        <Nav />
      </header>
      <main className="p-2">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
