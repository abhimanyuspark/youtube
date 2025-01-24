import { Suspense } from "react";
import "./App.css";
import { Dashboard, Notfound, Watch } from "./pages";
import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import { Loader } from "./components";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/watch/:id" element={<Watch />} />
            {/* <Route path="/channel/:id" element={<Dashboard />} /> */}
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
