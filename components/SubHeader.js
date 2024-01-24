import React, { useState, useRef, useEffect } from 'react'

const MensWear = () => {
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
      className='h-[50px] cursor-pointer flex items-center '
      ref={dropdownRef}>
      <span className='mr-2'>Menswear</span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='currentColor'
        className={`w-6 h-6 mb-1  ${
          isDropdownOpen ? 'rotate-180 pb-2' : 'pt-2'
        }`}>
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='m19.5 8.25-7.5 7.5-7.5-7.5'
        />
      </svg>
      {isDropdownOpen && (
        <ul className='w-[150px]  absolute left-[50px] top-[30px] bg-white bg-opacity-75 p-2 shadow-md transition-all duration-500 ease-in-out mt-2'>
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

const WomensWear = () => {
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
      className='h-[50px] cursor-pointer flex items-center'
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
        <ul className='w-[150px] absolute left-[250px] top-[30px] bg-white bg-opacity-75 p-2 shadow-md transition-all duration-300 ease-in-out mt-2'>
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

const SubHeader = () => {
  return (
    <div className='w-full mt-[100px] md:mt-[70px] mx-auto max-w-2xl flex justify-left items-left bg-white bg-opacity-75 p-2 z-50 xl:h-auto fixed border-2 border-red-600 border-solid'>
      <ul className='relative h-auto w-full mx-auto text-xl text-black md:h-auto md:py-auto md:items-left md:justify-left md:flex gap-x-[50px] border-2 border-red-600 border-solid'>
        <li className='group relative cursor-pointer flex items-center'>
          <MensWear />
        </li>{' '}
        <li className='flex items-center'>
          <WomensWear />
        </li>
        <li className='group relative cursor-pointer flex items-center'>
          Brands
        </li>
        <li className='group relative cursor-pointer flex items-center text-purple-600'>
          New Year Sale
        </li>
      </ul>
    </div>
  )
}

export default SubHeader
