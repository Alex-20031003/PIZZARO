type CardBoxProps = {
  children: React.ReactNode
  className?: string
}

export default function CardBox({ children, className }: CardBoxProps) {
  return (
    <li className={`bg-(--light-grey) rounded-lg w-full ${className}`}>
      {children}
    </li>
  )
}
