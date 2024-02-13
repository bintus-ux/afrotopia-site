// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // Perform any server-side logic here
  const data = { message: 'yoooooooooooo!' }

  // Send a JSON response
  res.status(200).json(data)
}
