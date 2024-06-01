import { Navigate } from "react-router-dom"
import { AppLayout } from "../layouts"
import { Home } from "../module/chat/pages"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

type Props = {
  children: React.ReactNode
}

function ProtectedRoute({children}: Props) {
  const { currentUser } = useContext(AuthContext)
  
  if (!currentUser)
    {
      return <Navigate to={'/login'} />
    }
  return children
} 

const createAppRouter = (element: React.ReactNode) => (
  <AppLayout>{element}</AppLayout>
)

const appRouter = [
  {
    path: "/",
    element: createAppRouter(<ProtectedRoute><Home /></ProtectedRoute>)
  },
  {
    path: "*",
    element: createAppRouter(<Navigate to={'/'} />)
  },
]

export default appRouter