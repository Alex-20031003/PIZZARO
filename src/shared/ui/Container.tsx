type Props = {
  children: React.ReactNode
}

export default function Container({ children }: Props) {
  return (
    <div className='mx-auto w-full max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px]'>
      {children}
    </div>
  )
}