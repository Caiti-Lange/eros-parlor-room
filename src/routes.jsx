import { createBrowserRouter } from 'react-router-dom'
import ParlorRoom from './screens/ParlorRoom'
import AddMuse from './screens/AddMuse'
import MuseDetails from './screens/MuseDetails'
import Guests from './screens/Guests'
import CrossedPaths from './screens/CrossedPaths'

export const router = createBrowserRouter([
  { path: '/', element: <ParlorRoom /> },
  { path: '/add', element: <AddMuse /> },
  { path: '/muse/:id', element: <MuseDetails /> },
  { path: '/guests', element: <Guests /> },
  { path: '/crossed/:id', element: <CrossedPaths /> }
])
