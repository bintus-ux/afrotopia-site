import { MensWear, WomensWear } from './DropDown'
import { useMediaQuery } from '@react-hook/media-query'

const SubHeader = () => {
  const isSmallScreen = useMediaQuery('(max-width: 767px)')

  return (
    <div>
      {!isSmallScreen && (
        <div className='w-full mt-[150px] h-[50px] md:mt-[-78px] mx-auto max-w-[700px] flex justify-left items-left bg-white bg-opacity-75 px-[30px] z-50 fixed border-r-2 border-b-4'>
          <ul className='relative h-auto w-full mx-auto text-xl text-black md:h-auto md:py-auto md:items-left md:justify-left md:flex gap-x-[50px] '>
            <li className='flex items-center cursor-pointer'>
              <MensWear />
            </li>{' '}
            <li className='flex items-center'>
              <WomensWear />
            </li>
            <li className='group relative cursor-pointer flex items-center hover:text-purple-600'>
              Brands
            </li>
            <li className='group relative cursor-pointer flex items-center text-purple-600 hover:text-purple-700'>
              New Year Sale
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-4 h-4 ml-2'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941'
                />
              </svg>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default SubHeader
