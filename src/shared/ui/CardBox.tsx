type CardBoxProps = {
  children: React.ReactNode
}

export default function CardBox({ children }: CardBoxProps) {
  return (
    <li className='bg-(--light-grey) rounded-lg max-w-70 w-full'>
      {children}
    </li>
  )
}
