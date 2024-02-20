import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../../supabaseClient'

const SignUp = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [isValid, setIsValid] = useState(true)
  const [message, setMessage] = useState('')
  const [hrBackground, setHrBackground] = useState([
    'bg-gray-500',
    'bg-gray-500',
    'bg-gray-500',
    'bg-gray-500',
    'bg-gray-500',
  ])
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true)

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

  const handlePasswordChange = (e) => {
    const { value } = e.target
    setPassword(value)

    // Check if password length is at least 8 characters
    const hasValidLength = value.length >= 8

    // Check if password contains at least 2 special characters and one capital letter
    const hasSpecialCharacters =
      value.match(/[!@#$%^&*(),.?":{}|<>]/g)?.length >= 2
    const hasCapitalLetter = value.match(/[A-Z]/) !== null
    const hasNumber = value.match(/[0-9]/) !== null

    // Update hr background colors based on password conditions
    if (
      hasValidLength &&
      hasSpecialCharacters &&
      hasCapitalLetter &&
      hasNumber
    ) {
      setHrBackground([
        'bg-green-500',
        'bg-green-500',
        'bg-green-500',
        'bg-green-500',
        'bg-green-500',
      ])
      setIsSubmitDisabled(false) // Enable submit button if all conditions are met
    } else if (hasNumber && hasCapitalLetter) {
      // Check if password has special characters & capital letters
      setHrBackground([
        'bg-yellow-500',
        'bg-yellow-500',
        'bg-gray-500',
        'bg-gray-500',
        'bg-gray-500',
      ])
      setIsSubmitDisabled(true) // Disable submit button if password length is exactly 8 characters but other conditions are not met
    } else if (value.length >= 8) {
      // Check if password is exactly 8 characters in length
      setHrBackground([
        'bg-yellow-500',
        'bg-yellow-500',
        'bg-yellow-500',
        'bg-gray-500',
        'bg-gray-500',
      ])
      setIsSubmitDisabled(true) // Disable submit button if password length is exactly 8 characters but other conditions are not met
    } else {
      setHrBackground([
        'bg-gray-500',
        'bg-gray-500',
        'bg-gray-500',
        'bg-gray-500',
        'bg-gray-500',
      ])
      setIsSubmitDisabled(true) // Disable submit button if any other condition is not met
    }
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
  const hrElements = Array.from({ length: 5 }, (_, index) => (
    <hr
      key={index}
      className={`w-10 h-3 border-t-0 rounded-md ${hrBackground[index]}`}
    />
  ))

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
              onChange={handlePasswordChange}
            />
          </div>
          <div className='flex flex-row justify-between items-center gap-x-3 mt-5'>
            <div className='flex flex-row items-center gap-x-3'>
              {hrElements.map((hr, index) => (
                <div key={index}>{hr}</div>
              ))}
            </div>
            {/[A-Z]/.test(password) && /\d/.test(password) ? (
              <span className='text-green-500'>Good</span>
            ) : (
              <span className='text-red-500'>Weak</span>
            )}
          </div>

          <button
            className={`mt-10 text-lg text-white font-semibold py-3 px-6 rounded-md focus:outline-none focus:ring-2 ${
              isSubmitDisabled
                ? 'bg-green-700 cursor-not-allowed'
                : 'bg-green-500 cursor-pointer'
            }`}
            type='submit'
            disabled={isSubmitDisabled}>
            Sign up
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
