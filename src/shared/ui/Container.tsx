type Props = {
  children: React.ReactNode
}

export default function Container({ children }: Props) {
  return (
    <div className='mx-auto w-full px-2 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-30 max-w-400 min-w-75'>
      {children}
    </div>
  )
}