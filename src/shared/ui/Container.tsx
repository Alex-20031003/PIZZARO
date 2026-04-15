type Props = {
  children: React.ReactNode
}

export default function Container({ children }: Props) {
  return (
    <div className='mx-auto w-full max-w-300 xl:max-w-350 2xl:max-w-400'>
      {children}
    </div>
  )
}