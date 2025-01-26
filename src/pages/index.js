import { lazy } from "react";

const Dashboard = lazy(() => import("./__root/Dashboard"));
const Watch = lazy(() => import("./__root/Watch"));
const Trending = lazy(() => import("./__root/Trending"));
const Notfound = lazy(() => import("./__auth/Notfound"));

export { Dashboard ,Notfound, Watch, Trending };
