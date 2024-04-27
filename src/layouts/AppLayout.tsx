interface Props {
    children: React.ReactNode
}

const AppLayout = ({children}: Props) => {
  return (
    <div className="relative w-screen h-screen">
        {children}
    </div>
  )
}

export default AppLayout