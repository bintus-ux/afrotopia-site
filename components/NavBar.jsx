'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'
import Avatar from './Avatar'
import { FiHeart } from 'react-icons/fi'
import { GoLock } from 'react-icons/go'

function NavBar() {
  const [navbar, setNavbar] = useState(false)
  const [user, setUser] = useState(null)
  const router = useRouter()

  // CHECKING FOR IF USER IS LOGGED IN
  useEffect(() => {
    const getUserProfile = async () => {
      const user = supabase.auth.getUser() // Check if user is logged in
      setUser(user)
    }

    getUserProfile()
  }, [])

  const toSignupPage = () => {
    router.push('/auth/signup')
  }
  const toLoginPage = () => {
    router.push('/auth/signin')
  }

  // LOG OUT FUNCTION
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut() // Call the signOut method
      setUser(null) // Set user state to null
      router.push('/') // Redirect to the home page or any other desired page
    } catch (error) {
      console.error('Error logging out:', error.message)
    }
  }

  return (
    <div>
      <nav className='w-full bg-black xl:h-auto fixed top-0 left-0 right-0 z-10'>
        <div className='justify-between px-3 mx-auto lg:max-w-8xl md:items-center md:flex md:px-3'>
          <div>
            <div className='flex items-center justify-between py-3 md:py-5 md:block'>
              {/* LOGO */}
              <Link href='/'>
                <h2 className='text-2xl text-cyan-600 font-bold '>Afrotopia</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className='md:hidden'>
                <button
                  className=' text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                  onClick={() => setNavbar(!navbar)}>
                  {navbar ? (
                    <Image src='/close.svg' width={30} height={30} alt='logo' />
                  ) : (
                    <Image
                      src='/hamburger-menu.svg'
                      width={30}
                      height={30}
                      alt='logo'
                      className='focus:border-none active:border-none'
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-0 md:p-0 block' : 'hidden'
              }`}>
              <ul className='h-screen w-full md:h-auto md:py-auto md:items-center md:justify-center md:flex'>
                {navbar ? (
                  <div className='text-white flex flex-col justify-center items-center gap-y-3 mb-5'>
                    <li className='text-xl'>Menswear</li>
                    <hr className=' border-1 border-purple-400 w-[200px]' />
                    <li className='text-xl'>Womenswear</li>
                    <hr className=' border-1 border-purple-600 w-[200px]' />
                    <li className='text-xl'>Camos</li>
                    <hr className=' border-1 border-purple-400 w-[200px]' />
                    <li className='text-xl'>Footwears</li>
                    <hr className=' border-1 border-purple-600 w-[200px]' />
                  </div>
                ) : (
                  <li className='pb-6 text-xl text-white py-2 px-3 text-center md:py-2  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent'>
                    <Link href='#blog' onClick={() => setNavbar(!navbar)}>
                      <FiHeart size={28} />
                    </Link>
                  </li>
                )}
                {!navbar && (
                  <li className='pb-6 text-xl text-white py-2 md:px-3 text-center md:py-2  border-b-2 md:border-b-0  hover:bg-purple-900 md:hover:text-purple-600 md:hover:bg-transparent border-r-2 border-cyan-600 p-10'>
                    <Link href='#about' onClick={() => setNavbar(!navbar)}>
                      <GoLock size={28} />
                    </Link>
                  </li>
                )}
                {navbar ? (
                  <li className='pb-6 text-xl text-white py-2 px-3'>
                    <button
                      className='w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded flex justify-center items-center transition duration-300 ease-in-out'
                      onClick={toSignupPage}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='w-6 h-6 mr-2'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                      <span className=' transition duration-300 ease-in-out'>
                        Sign Up
                      </span>

                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='w-6 h-6 ml-2 hidden transition duration-200 ease-in-out group-hover:inline'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z'
                        />
                      </svg>
                    </button>
                  </li>
                ) : user ? (
                  <li className='pb-6 text-xl text-white py-2 px-2 text-center md:py-2  border-b-2 md:border-b-0 group'>
                    <button
                      className='flex justify-between gap-x-2  items-center bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-5 rounded transition duration-300 ease-in-out'
                      onClick={toLoginPage}>
                      <div className='flex items-center justify-center'>
                        <Avatar
                          src='/images/dylan.png'
                          alt='Avatar'
                          borderColor='cyan-600'
                        />
                      </div>
                      <span className='transition duration-300 ease-in-out'>
                        Profile
                      </span>
                    </button>
                  </li>
                ) : (
                  <li className='pb-6 text-xl text-white py-2 px-3 text-center md:py-2 border-b-2 md:border-b-0 group transition-all duration-200 ease-in-out'>
                    <button
                      className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded flex items-center transition duration-300 ease-in-out'
                      onClick={toSignupPage}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='w-6 h-6 mr-2'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                      <span className='transition duration-300 ease-in-out'>
                        Sign Up
                      </span>

                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='w-6 h-6 ml-2 hidden transition duration-200 ease-in-out group-hover:inline'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z'
                        />
                      </svg>
                    </button>
                  </li>
                )}
                {navbar ? (
                  <li className='pb-6 text-xl text-white py-2 px-3 text-center md:py-2  border-b-2 md:border-b-0 group'>
                    <button
                      className='flex justify-center items-center w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded transition duration-300 ease-in-out'
                      onClick={toProfilePage}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='w-6 h-6 mr-2'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                      <span className='transition duration-300 ease-in-out'>
                        Log In
                      </span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='w-6 h-6 ml-2 hidden group-hover:inline'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                        />
                      </svg>
                    </button>
                  </li>
                ) : user ? (
                  <li className='pb-6 text-xl text-white py-2 px-3 text-center md:py-2 border-b-2 md:border-b-0 group transition-all duration-200 ease-in-out'>
                    <button
                      className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded flex items-center transition duration-300 ease-in-out'
                      onClick={handleLogout}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='w-6 h-6 mr-2'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                      <span className='transition duration-300 ease-in-out'>
                        Log out
                      </span>

                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        class=' w-6 h-6 ml-2 hidden transition duration-200 ease-in-out
                        group-hover:inline'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25'
                        />
                      </svg>
                    </button>
                  </li>
                ) : (
                  <li className='pb-6 text-xl text-white py-2 px-0 text-center md:py-2  border-b-2 md:border-b-0 group'>
                    <button
                      className='flex items-center bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded transition duration-300 ease-in-out'
                      onClick={toLoginPage}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='w-6 h-6 mr-2'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                      <span className='transition duration-300 ease-in-out'>
                        Log In
                      </span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='w-6 h-6 ml-2 hidden group-hover:inline'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                        />
                      </svg>
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
