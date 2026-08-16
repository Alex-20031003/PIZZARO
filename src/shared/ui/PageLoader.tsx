import { LoaderCircle } from 'lucide-react'

export default function PageLoader() {
  return (
    <div
      className='flex flex-1 flex-col items-center justify-center gap-3'
      role='status'
      aria-live='polite'
    >
      <LoaderCircle
        size={48}
        className='animate-spin text-(--primary) motion-reduce:animate-none'
        aria-hidden='true'
      />
      <p className='text-sm font-medium text-(--dark-grey)'>Loading page...</p>
    </div>
  )
}
