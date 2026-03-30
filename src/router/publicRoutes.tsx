import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./router"
import Hero from "../pages/hero/Hero"
import Business from "../pages/business/Business"

const heroRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Hero
})

const businessRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/business',
  component:Business
})

export const publicRoutes = [heroRoute,businessRoute]