import { Navigate } from "react-router-dom"
import { AppLayout } from "../layouts"
import { Home } from "../module/chat/pages"

const createAppRouter = (element: React.ReactNode) => (
  <AppLayout>{element}</AppLayout>
)

const appRouter = [
  {
    path: "/",
    element: createAppRouter(<Home />)
  },
  {
    path: "*",
    element: createAppRouter(<Navigate to={'/'} />)
  },
]

export default appRouter