import { AuthenticationContext } from '@/app/context/AuthContext'
import axios from 'axios'
import { useContext } from 'react'

const useAuth = () => {
  const { setAuthState } = useContext(AuthenticationContext)

  const signIn = async (
    {
      email,
      password,
    }: {
      email: string
      password: string
    },
    handleClose: () => void,
  ) => {
    try {
      setAuthState({ data: null, error: null, loading: true })
      const response = await axios.post(
        'http://localhost:3000/api/auth/signin',
        {
          email,
          password,
        },
      )
      setAuthState({ data: response.data, error: null, loading: false })
      handleClose()
    } catch (error: any) {
      console.log(error)
      setAuthState({
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      })
    }
  }

  return { signIn }
}

export default useAuth
