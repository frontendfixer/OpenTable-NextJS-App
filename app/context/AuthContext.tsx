'use client'

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
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

  return (
    <AuthenticationContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthenticationContext.Provider>
  )
}
