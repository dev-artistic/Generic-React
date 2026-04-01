import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./router"
import Hero from "../pages/hero/Hero"
import Business from "../pages/business/Business"
import Login from "../pages/login/Login"


export const heroRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Hero
})

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'login',
  component:Login
})

// Parent Public route
const publicRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'view',
  component:Business,
})

const businessRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'business',
  component:Business
})

export const publicRoutes = [heroRoute,loginRoute, businessRoute, publicRoute]