import { createRoute, lazyRouteComponent, redirect } from "@tanstack/react-router"
import { rootRoute } from "./router"
import Hero from "../pages/hero/Hero"
import type { User } from "firebase/auth"

export const SuccessfulAuth = ({ context, search }: { context: { user: User|null }, search: { redirect?: string }}) => {
    if (context.user) {
      throw redirect({
        to: search.redirect || '/', // fallback if no redirect
      })
    }
  }

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
  beforeLoad: SuccessfulAuth,
})


// Parent Public route, same as starting component, do not lazy load
const publicRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'view',
  component: Hero,
})

export const publicRoutes = [heroRoute, loginRoute, publicRoute]