import { AuthLayout } from "../layouts"
import { Login, Register } from "../module/auth"

const createAuthRouter = (element: React.ReactNode) => (
  <AuthLayout>{element}</AuthLayout>
)


const authRouter = [
    {
      path: "/login",
      element: createAuthRouter(<Login />)
    },
    {
      path: "/register",
      element: createAuthRouter(<Register />)
    },
  ]

export default authRouter