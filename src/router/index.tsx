import { createHashRouter, Navigate } from 'react-router-dom'
import { FlayerCreator, LogoCreator } from '@/pages'

const router = createHashRouter([
  {
    path: '/',
    element: <Navigate to="/flayer-creator" replace={true} />,
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
