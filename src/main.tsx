import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './router/router.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useAuthUser } from './toolkits/auth/firebase.ts'
import { FullPageLoader } from './components/fullPageLoader/FullPageLoader.tsx'

const MainComponent = () => {
  const queryClient = new QueryClient();
  const {user, loading} = useAuthUser();
  return (
    <StrictMode>
      {loading && <FullPageLoader/>}
      {!loading && <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} context={{user}}/>
      </QueryClientProvider>}
    </StrictMode>
  )
}

createRoot(document.getElementById('root')!).render(
  <MainComponent />,
)


