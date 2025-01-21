import { lazy } from "react";

const Dashboard = lazy(() => import("./__root/Dashboard"));
const Notfound = lazy(() => import("./__auth/Notfound"));

export { Dashboard ,Notfound };
