import { createRoute, redirect } from '@tanstack/react-router'
import { rootRoute } from './router'
import Business from '../pages/business/Business'

export const requireAuth = ({ context, location }: { context: any, location: any }) => {
  if (!context.user) {
    throw redirect({ to: '/',
        search: {
          redirect: location.href,
        } })
  }
}

const businessRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/business1',
  component:Business,
  loader: requireAuth
})

export const privateRoutes = [businessRoute]