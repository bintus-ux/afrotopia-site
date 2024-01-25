import React, { useState, useRef, useEffect } from 'react'

export const MensWear = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    // Attach the event listeners to the container
    const container = dropdownRef.current

    const openDropdown = () => {
      setDropdownOpen(true)
    }

    const closeDropdown = () => {
      setDropdownOpen(false)
    }

    if (container) {
      container.addEventListener('mouseenter', openDropdown)
      container.addEventListener('mouseleave', closeDropdown)
    }

    return () => {
      // Cleanup event listeners
      if (container) {
        container.removeEventListener('mouseenter', openDropdown)
        container.removeEventListener('mouseleave', closeDropdown)
      }
    }
  }, [])

  return (
    <div
      className='h-[50px] cursor-pointer flex items-center hover:text-purple-600'
      ref={dropdownRef}>
      <span className='mr-2'>Menswear</span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='currentColor'
        className={`w-6 h-6 mb-1  ${
          isDropdownOpen ? 'rotate-180 pb-2 ' : 'pt-2'
        }`}>
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='m19.5 8.25-7.5 7.5-7.5-7.5'
        />
      </svg>
      {isDropdownOpen && (
        <div className='w-[350px] p-3 py-5 absolute top-[34px] bg-white text-black bg-opacity-75 shadow-md transition-all duration-500 ease-in-out mt-2'>
          <div className='flex justify-center text-start items-center gap-2 mb-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-7 h-7'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
              />
            </svg>
            <div className='w-[300px] border-2 border-red-600 border-solid'>
              <h3 className='text-lg'>T-shirts</h3>
              <p className='text-gray-500 text-sm'>
                Checkout your trendy wears here, refined to fit your unique
                exquisite taste as always!
              </p>
            </div>
          </div>
          <div className='flex justify-center text-start items-center gap-2 mb-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-7 h-7'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
              />
            </svg>
            <div className='w-[300px] '>
              <h3 className='text-lg'>Suits</h3>
              <p className='text-gray-500 text-sm'>
                Checkout your trendy wears here, refined to fit your unique
                exquisite taste as always!
              </p>
            </div>
          </div>{' '}
          <div className='flex justify-center text-start items-center gap-2 mb-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-7 h-7'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
              />
            </svg>
            <div className='w-[300px] '>
              <h3 className='text-lg'>Camos</h3>
              <p className='text-gray-500 text-sm'>
                Checkout your trendy wears here, refined to fit your unique
                exquisite taste as always!
              </p>
            </div>
          </div>{' '}
          <div className='flex justify-center text-start items-center gap-2 mb-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-7 h-7'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
              />
            </svg>
            <div className='w-[300px] '>
              <h3 className='text-lg'>Footwears</h3>
              <p className='text-gray-500 text-sm'>
                Checkout your trendy wears here, refined to fit your unique
                exquisite taste as always!
              </p>
            </div>
          </div>{' '}
        </div>
      )}
    </div>
  )
}

export const WomensWear = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    // Attach the event listeners to the container
    const container = dropdownRef.current

    const openDropdown = () => {
      setDropdownOpen(true)
    }

    const closeDropdown = () => {
      setDropdownOpen(false)
    }

    if (container) {
      container.addEventListener('mouseenter', openDropdown)
      container.addEventListener('mouseleave', closeDropdown)
    }

    return () => {
      // Cleanup event listeners
      if (container) {
        container.removeEventListener('mouseenter', openDropdown)
        container.removeEventListener('mouseleave', closeDropdown)
      }
    }
  }, [])

  return (
    <div
      className='h-[50px] cursor-pointer flex items-center hover:text-purple-600'
      ref={dropdownRef}>
      <span className='mr-2'>Womenwear</span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='currentColor'
        className={`w-6 h-6 mb-1  ${
          isDropdownOpen ? 'rotate-180 pb-2' : 'pt-2'
        }`}
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(true)}>
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='m19.5 8.25-7.5 7.5-7.5-7.5'
        />
      </svg>
      {isDropdownOpen && (
        <div className='w-[350px] p-3 py-5 absolute left-[50px] top-[34px] bg-white text-black bg-opacity-75 shadow-md transition-all duration-500 ease-in-out mt-2'>
          <div className='flex justify-center text-start items-center gap-2 mb-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-7 h-7'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
              />
            </svg>
            <div className='w-[300px] border-2 border-red-600 border-solid'>
              <h3 className='text-lg'>T-shirts</h3>
              <p className='text-gray-500 text-sm'>
                Checkout your trendy wears here, refined to fit your unique
                exquisite taste as always!
              </p>
            </div>
          </div>
          <div className='flex justify-center text-start items-center gap-2 mb-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-7 h-7'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
              />
            </svg>
            <div className='w-[300px]'>
              <h3 className='text-lg'>Suits</h3>
              <p className='text-gray-500 text-sm'>
                Checkout your trendy wears here, refined to fit your unique
                exquisite taste as always!
              </p>
            </div>
          </div>{' '}
          <div className='flex justify-center text-start items-center gap-2 mb-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-7 h-7'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
              />
            </svg>
            <div className='w-[300px]'>
              <h3 className='text-lg'>Camos</h3>
              <p className='text-gray-500 text-sm'>
                Checkout your trendy wears here, refined to fit your unique
                exquisite taste as always!
              </p>
            </div>
          </div>{' '}
          <div className='flex justify-center text-start items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-7 h-7'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
              />
            </svg>
            <div className='w-[300px] mb-2'>
              <h3 className='text-lg'>Footwears</h3>
              <p className='text-gray-500 text-sm'>
                Checkout your trendy wears here, refined to fit your unique
                exquisite taste as always!
              </p>
            </div>
          </div>{' '}
        </div>
      )}
    </div>
  )
}
