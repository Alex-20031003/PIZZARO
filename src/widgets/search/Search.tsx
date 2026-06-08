import search from '@/assets/menu-page/search.svg'

export default function Search() {
  return (
    <div className='flex flex-col gap-6 w-full pr-12'>
      <h2 className='font-medium text-4xl'>Search</h2>

      <div className='relative'>
        <input type='text' className='p-3 pl-10 bg-[#E6E6E6] rounded-lg text-lg w-full placeholder:text-lg' placeholder='Search...' />
        <img src={search} alt='Search Icon' className='absolute top-1/2 left-2 -translate-y-1/2 w-6 h-6' />
      </div>
    </div>
  )
}
