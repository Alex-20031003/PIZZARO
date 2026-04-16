type Props = {
  children: React.ReactNode
}

export default function Container({ children }: Props) {
  return (
    <div className='mx-auto w-[83.33vw] max-w-400 min-w-75'>
      {children}
    </div>
  )
}