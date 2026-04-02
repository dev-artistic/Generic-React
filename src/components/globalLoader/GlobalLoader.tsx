import { useRouterState } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

function GlobalLoader() {
  const isPending = useRouterState({
    select: (s) => s.status === 'pending',
  })

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let timeout: any

    if (isPending) {
      timeout = setTimeout(() => setVisible(true), 150) // delay
    } else {
      setVisible(false)
    }

    return () => clearTimeout(timeout)
  }, [isPending])

  if (!visible) return null

  return <div className="overlay">Loading...</div>
}

export default GlobalLoader;