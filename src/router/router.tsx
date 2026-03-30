
import {
  Outlet,
  createRouter,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import ErrorPage from '../pages/errorPage/errorPage'
import { privateRoutes } from './protectedRoutes'
import { publicRoutes } from './publicRoutes'

//root route
const user = {"name":"Manish"};
export const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent:ErrorPage,
  context: ()=> ({
        user
    })
})


// Add all routes here
const routeTree = rootRoute.addChildren([...publicRoutes,...privateRoutes])


//no need to edit, export and declarations are required
export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: typeof router
  }
}