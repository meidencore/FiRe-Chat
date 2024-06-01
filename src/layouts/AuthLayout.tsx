interface Props {
    children: React.ReactNode
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="relative w-screen h-screen bg-muted">
        {children}
    </div>
  )
}

export default AuthLayout