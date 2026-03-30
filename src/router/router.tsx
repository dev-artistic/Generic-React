
import {
  Outlet,
  createRouter,
  createRootRoute,
  Link,
} from '@tanstack/react-router'
import ErrorPage from '../pages/errorPage/ErrorPage'
import { privateRoutes } from './protectedRoutes'
import { publicRoutes } from './publicRoutes'
import type { ReactNode } from 'react'
import "./router.css";
import Navbar from '../components/navbar/Navbar'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'


//root route
const user = null;
export const rootRoute = createRootRoute({
  component: () => (
    <>
      <Navbar/>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent:ErrorPage,
  context: ()=> ({
        user
    })
})


//  Router link component
export const RouterLink = ({ href = "/",key, children }: { href?: string, key:string, children: ReactNode }) => {
    return (
        <Link to={href} key={key} className="navbar__desktop-link">
            {children}
        </Link>
    )
}


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