import { useRoutes } from "react-router-dom"

import appRouter from "./app"
import authRouter from "./auth"
import designRouter from "./design"

const AppRoutes = () => {
    return useRoutes([...authRouter, ...appRouter, ...designRouter])
}

export default AppRoutes