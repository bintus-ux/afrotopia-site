import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../../supabaseClient'

const SignUp = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [isValid, setIsValid] = useState(true)
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching message:', error))
  }, [])

  const [password, setPassword] = useState('')

  const handleChange = (e) => {
    const { value } = e.target
    setEmail(value)

    // Check if email contains '@'
    setIsValid(value.includes('@'))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      alert(JSON.stringify(error))
    } else {
      router.push('/auth/signin')
    }
  }

  return (
    <div className='h-screen flex items-center justify-center bg-gray-800'>
      <div className='max-w-lg w-full'>
        <h1 className='text-3xl font-semibold text-center text-white'>
          Create new account {message}
        </h1>

        <form className='mt-2 flex flex-col p-6' onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <label htmlFor='email' className='text-gray-200'>
              Email
            </label>
            <input
              className='py-2 px-4 rounded-md focus:outline-none focus:ring-2'
              type='email'
              id='email'
              value={email}
              onChange={handleChange}
            />
            {!isValid && (
              <p className='text-red-500'>Please enter a valid email address</p>
            )}
          </div>

          <div className='flex flex-col'>
            <label htmlFor='password' className='mt-6 text-gray-200'>
              Password
            </label>
            <input
              className='py-2 px-4 rounded-md focus:outline-none focus:ring-2'
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className='mt-10 text-lg text-white font-semibold bg-green-500 py-3 px-6 rounded-md focus:outline-none focus:ring-2'
            type='submit'>
            Sign up
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
