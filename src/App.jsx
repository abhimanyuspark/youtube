import { Suspense } from "react";
// import "./App.css";
import { Dashboard, Notfound, Trending, Watch } from "./pages";
import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import { Loader } from "./components";
import SideBar from "./layout/SideBar";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<SideBar />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/trending" element={<Trending />} />
          </Route>

          <Route path="/watch/:id" element={<Watch />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
