import { useRoutes } from "react-router-dom"

import appRouter from "./app"
import authRouter from "./auth"

const AppRoutes = () => {
    return useRoutes([...authRouter, ...appRouter])
}

export default AppRoutes