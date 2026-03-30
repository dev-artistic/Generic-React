import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./router"
import Hero from "../pages/hero/Hero"
import Business from "../pages/business/Business"
import Login from "../pages/login/Login"

// Parent PUblic route
export const heroRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Hero
})

const loginRoute = createRoute({
  getParentRoute: () => heroRoute,
  path: 'login',
  component:Login
})

const businessRoute = createRoute({
  getParentRoute: () => heroRoute,
  path: 'business',
  component:Business
})

export const publicRoutes = [heroRoute, businessRoute, loginRoute]