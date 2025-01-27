import { lazy } from "react";

const Dashboard = lazy(() => import("./__root/Dashboard"));
const Watch = lazy(() => import("./__root/Watch"));
const Explore = lazy(() => import("./__root/Explore"));
const Notfound = lazy(() => import("./__auth/Notfound"));

export { Dashboard ,Notfound, Watch, Explore };
