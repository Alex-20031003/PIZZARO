import type { LucideIcon } from 'lucide-react'
import { SOCIAL_ITEMS } from '../footer/footer.data'

interface ContactCardProps {
  icon: LucideIcon
  headline: string
  text?: string
}

export default function ContactCard({ icon: Icon, headline, text }: ContactCardProps) {
  return (
    <li className='bg-white py-15 flex flex-col items-center gap-6 max-w-100 w-full rounded-lg shadow-[5px_0_20px_rgba(0,0,0,0.4)]'>
      <Icon stroke='#F05A24' size={64} />
      <h2 className='text-5xl tracking-[2%] font-medium'>{headline}</h2>
      { text && (<p className='text-2xl font-medium text-[#6b6b6b] hover:text-(--primary) transition-colors duration-300 ease-in-out cursor-pointer'>{text}</p> )}

      {!text && (
        <ul className='flex flex-row w-full items-center justify-between px-25'>
          {SOCIAL_ITEMS.map(({ to, icon: Icon, label }) => (
            <li key={to}>
              <a href={to} aria-label={label} target="_blank" rel='noopener noreferrer' className='text-[#6b6b6b] hover:text-(--primary) transition-colors duration-300'>
                <Icon className='w-8 h-8' />
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}
