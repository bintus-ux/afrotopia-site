// pages/api/validateEmail.js

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body

    // Check if email is valid (You can use a library like 'validator' for more robust validation)
    const isValidEmail = isValidEmailFormat(email)

    if (isValidEmail) {
      res.status(200).json({ isValid: true })
    } else {
      res.status(400).json({ isValid: false, message: 'Invalid email format' })
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}

function isValidEmailFormat(email) {
  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
