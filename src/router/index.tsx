import { createBrowserRouter, Navigate } from 'react-router-dom'
import { FlayerCreator, LogoCreator } from '@/pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/logo-creator" replace={true} />,
  },
  {
    path: '/logo-creator',
    element: <LogoCreator/>,
  },
  {
    path: '/flayer-creator',
    element: <FlayerCreator/>,
  }
])

export default router
