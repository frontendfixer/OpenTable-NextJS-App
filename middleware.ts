import { NextRequest, NextResponse } from 'next/server'
import * as jose from 'jose'

export default async function middleware(req: NextRequest, res: NextResponse) {
  const barerToken = req.headers.get('authorization') as string
  if (!barerToken) {
    return NextResponse.json(
      { errorMessage: 'Unauthorized request' },
      {
        status: 401,
      },
    )
  }

  const token = barerToken.split(' ')[1]
  if (!token) {
    return NextResponse.json(
      { errorMessage: 'Unauthorized request' },
      {
        status: 401,
      },
    )
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET)
  try {
    await jose.jwtVerify(token, secret)
  } catch (error) {
    return NextResponse.json(
      { errorMessage: 'Unauthorized request' },
      { status: 401 },
    )
  }
}

export const config = {
  matcher: ['/api/auth/me'],
}
