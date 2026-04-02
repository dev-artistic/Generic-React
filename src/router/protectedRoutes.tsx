import { createRoute, lazyRouteComponent, redirect } from '@tanstack/react-router'
import { rootRoute } from './router'

export const requireAuth = ({ context, location }: { context: any, location: any }) => {
  if (!context.user) {
    throw redirect({ to: '/',
        search: {
          redirect: location.href,
        } })
  }
}

//Parent protected route
const userBundle = {
  user: lazyRouteComponent(() => import('../pages/user/User')),
  business: lazyRouteComponent(() => import('../pages/business/Business'))
};

const protectedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'user',
  component: userBundle.user,
  beforeLoad: requireAuth
})

const BusinessRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: 'business1',
  component:userBundle.business,
})

export const privateRoutes = [protectedRoute,BusinessRoute]