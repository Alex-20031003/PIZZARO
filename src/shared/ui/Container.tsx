type Props = {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className }: Props) {
  return (
    <div className={`mx-auto w-full px-9 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-30 max-w-600 min-w-75 ${className ?? ''}`}>
      {children}
    </div>
  )
}