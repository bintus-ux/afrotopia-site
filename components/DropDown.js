import { useState } from 'react'

export function mensWear() {
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div className='group relative cursor-pointer flex items-center'>
      <span className='mr-2'>Menswear</span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='currentColor'
        className='w-6 h-6 pt-2'
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}>
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='m19.5 8.25-7.5 7.5-7.5-7.5'
        />
      </svg>
      {isDropdownOpen && (
        <ul className='absolute bg-white p-2 shadow-md'>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
      )}
    </div>
  )
}

export function womensWear() {
  const [isDropdownOpen1, setDropdownOpen1] = useState(false)

  return (
    <div className='cursor-pointer flex items-center'>
      <span className='mr-2'>Womenwear</span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='currentColor'
        className='w-6 h-6 pt-2'
        onMouseEnter={() => setDropdownOpen1(true)}
        onMouseLeave={() => setDropdownOpen1(false)}>
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='m19.5 8.25-7.5 7.5-7.5-7.5'
        />
      </svg>
      {isDropdownOpen1 && (
        <ul className='absolute bg-white p-2 shadow-md'>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
      )}
    </div>
  )
}
