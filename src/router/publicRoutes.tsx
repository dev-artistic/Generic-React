import { createRoute, lazyRouteComponent } from "@tanstack/react-router"
import { rootRoute } from "./router"
import Hero from "../pages/hero/Hero"

// The starting component, do not lazy load
export const heroRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Hero
})


// Login route
const loginBundle = {
  login: lazyRouteComponent(() => import("../pages/login/Login"))
};

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'login',
  component: loginBundle.login,
})


// Parent Public route, same as starting component, do not lazy load
const publicRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'view',
  component: Hero,
})

export const publicRoutes = [heroRoute, loginRoute, publicRoute]