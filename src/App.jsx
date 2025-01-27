import { Suspense } from "react";
// import "./App.css";
import { Dashboard, Notfound, Explore, Watch } from "./pages";
import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import { Loader } from "./components";
import { NavigationData as category } from "./utils/constants";
import HomeLayout from "./layout/HomeLayout";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Dashboard category={category[0].url} />} />
          {category?.slice(1)?.map((c, i) => (
            <Route key={i} path={c.path} element={<Explore category={c} />} />
          ))}
        </Route>

        <Route element={<Layout />}>
          <Route path="/watch/:id" element={<Watch />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
