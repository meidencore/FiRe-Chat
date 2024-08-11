import { Navigate } from "react-router-dom"
import { AuthLayout } from "../layouts"
import { Login, Register } from "../module/auth"
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"

const createAuthRouter = (element: React.ReactNode) => (
  <AuthLayout>{element}</AuthLayout>
)

type Props = {
  children: React.ReactNode
}

function ProtectedRoute({children}: Props) {
  const { currentUser } = useContext(AuthContext)
  
  if (currentUser)
    {
      return <Navigate to={'/'} />
    }
  return children
} 

const authRouter = [
    {
      path: "/login",
      element: createAuthRouter(<ProtectedRoute><Login /></ProtectedRoute>)
    },
    {
      path: "/register",
      element: createAuthRouter(<ProtectedRoute><Register /></ProtectedRoute>)
    },
  ]

export default authRouter
