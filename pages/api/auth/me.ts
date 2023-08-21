import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const barerToken = req.headers['authorization'] as string
  const token = barerToken.split(' ')[1]

  const payload = jwt.decode(token) as { email: string }
  if (!payload.email)
    res.status(401).json({ errorMessage: 'Unauthorized request' })
  const user = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
    select: {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
      city: true,
      phone: true,
    },
  })

  return res.json({
    user,
  })
}
