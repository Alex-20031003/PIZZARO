import type { LucideIcon } from 'lucide-react'
import { SOCIAL_ITEMS } from '../footer/footer.data'

interface ContactCardProps {
  icon: LucideIcon
  headline: string
  text?: string
}

export default function ContactCard({ icon: Icon, headline, text }: ContactCardProps) {
  return (
    <li className='bg-white flex flex-col items-center justify-center gap-6 2xl:max-w-120 max-w-90 sm:h-80 h-70 w-full rounded-lg shadow-[5px_0_20px_rgba(0,0,0,0.4)]'>
      <Icon stroke='#F05A24' size={64} />
      <h2 className='2xl:text-5xl xl:text-3xl sm:text-5xl text-3xl  tracking-[2%] font-medium'>{headline}</h2>
      { text && (<p className='2xl:text-2xl xl:text-xl sm:text-2xl text-base font-medium text-[#6b6b6b] hover:text-(--primary) transition-colors duration-300 ease-in-out cursor-pointer'>{text}</p> )}

      {!text && (
        <ul className='flex flex-row w-full items-center justify-center sm:gap-15 gap-10 mx-auto'>
          {SOCIAL_ITEMS.map(({ to, icon: Icon, label }) => (
            <li key={to}>
              <a href={to} aria-label={label} target="_blank" rel='noopener noreferrer' className='text-[#6b6b6b] hover:text-(--primary) transition-colors duration-300'>
                <Icon className='2xl:w-8 2xl:h-8 w-6 h-6' />
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}
