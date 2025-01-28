// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "./redux/store/store.jsx";
import { lazy, Suspense } from "react";
import { Loader } from "./components";
const App = lazy(() => import("./App.jsx"));

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </Provider>
    </BrowserRouter>
  // </StrictMode>
);
