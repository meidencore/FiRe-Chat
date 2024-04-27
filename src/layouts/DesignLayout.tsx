interface Props {
    children: React.ReactNode
}

const DesignLayout = ({ children }: Props) => {
  return (
    <div className="relative w-screen h-screen">
        {children}
    </div>
  )
}
export default DesignLayout