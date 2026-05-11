type CardBoxProps = {
  children: React.ReactNode
}

export default function CardBox({ children }: CardBoxProps) {
  return (
    <li className='bg-(--light-grey) rounded-lg w-full'>
      {children}
    </li>
  )
}
