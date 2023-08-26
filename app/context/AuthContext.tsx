'use client'

import axios from 'axios'
import { getCookie } from 'cookies-next'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react'

type UserType = {
  id: number
  firstName: string
  lastName: string
  email: string
  city: string
  phone: string
}

type AuthStateType = {
  loading: boolean
  error: string | null
  data: UserType | null
}

interface SetAuthStateType extends AuthStateType {
  setAuthState: Dispatch<SetStateAction<AuthStateType>>
}

const initialAuthState: AuthStateType = {
  loading: false,
  data: null,
  error: null,
}

export const AuthenticationContext = createContext<SetAuthStateType>({
  ...initialAuthState,
  setAuthState: () => {},
})

export default function AuthContext({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState(initialAuthState)

  const fetchUser = async () => {
    setAuthState({ data: null, error: null, loading: true })
    try {
      const jwt = getCookie('jwt')

      if (!jwt) {
        return setAuthState({ data: null, error: null, loading: false })
      }
      const response = await axios.get(
        'https://open-table-next-js-app.vercel.app/api/auth/me',
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        },
      )

      axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`

      return setAuthState({
        data: response.data,
        error: null,
        loading: false,
      })
    } catch (error: any) {
      setAuthState({
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      })
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <AuthenticationContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthenticationContext.Provider>
  )
}
