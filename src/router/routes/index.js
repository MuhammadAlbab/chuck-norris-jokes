import { lazy } from "react";

const Routes = [
  {
    path: "/",
    component: lazy(() => import("../../pages/Home")),
  },
  {
    path: "/search",
    component: lazy(() => import("../../pages/Search")),
  },
  {
    path: "/category",
    component: lazy(() => import("../../pages/Category")),
  },
];

export default Routes;
