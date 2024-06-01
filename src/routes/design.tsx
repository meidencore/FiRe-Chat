import { DesignLayout } from "../layouts"
import { DesignSystem } from "../module/design"

const createDesignRouter = (element: React.ReactNode) => (
    <DesignLayout>{element}</DesignLayout>
)

const designRouter =  [
    {
        path: '/design',
        element: createDesignRouter(<DesignSystem />)
    }
]

export default designRouter