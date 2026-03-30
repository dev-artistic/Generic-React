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

//Parent protected route
const protectedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'user',
  component:Business,
  beforeLoad: requireAuth
})

const BusinessRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: 'business1',
  component:Business,
})

export const privateRoutes = [protectedRoute,BusinessRoute]