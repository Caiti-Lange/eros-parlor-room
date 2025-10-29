import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

export default function App() {
  return (
    <div className="min-h-screen bg-parchment">
      <header className="p-6 text-center">
        <h1 className="text-4xl font-serifish">Eros’ Parlor Room</h1>
        <p className="text-rose/80">A salon for your beloved muses</p>
      </header>
      <RouterProvider router={router}/>
    </div>
  )
}

