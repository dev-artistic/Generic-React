import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Hero from './pages/hero/hero.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Hero />
  </StrictMode>,
)
