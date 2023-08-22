'use client'

import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import AuthModalInputs from './AuthModalInputs'
import useAuth from '@/hooks/useAuth'
import { AuthenticationContext } from '../context/AuthContext'
import { Alert, CircularProgress } from '@mui/material'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
}

export default function AuthModal({ isSignIn }: { isSignIn: boolean }) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const { signIn, signUp } = useAuth()
  const { data, error, loading } = useContext(AuthenticationContext)

  const handelChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    password: '',
  })

  const [disabled, setDisable] = useState(true)

  useEffect(() => {
    if (isSignIn) {
      if (inputs.email && inputs.password) {
        return setDisable(false)
      }
    } else {
      if (
        inputs.firstName &&
        inputs.lastName &&
        inputs.email &&
        inputs.password &&
        inputs.city &&
        inputs.phone
      ) {
        return setDisable(false)
      }
    }

    return setDisable(true)
  }, [inputs, isSignIn])

  const renderContent = (signInContent: string, signUpContent: string) =>
    isSignIn ? signInContent : signUpContent

  const handelSubmit = () => {
    if (isSignIn) {
      return signIn(
        { email: inputs.email, password: inputs.password },
        handleClose,
      )
    } else {
      return signUp(inputs, handleClose)
    }
  }

  return (
    <div>
      {isSignIn ? (
        <button
          className="flex items-center gap-1 rounded-md border bg-blue-500 px-4 py-2 text-white transition hover:opacity-80"
          onClick={handleOpen}
        >
          <FontAwesomeIcon icon={faRightToBracket} className="w-4" />
          <span className="hidden font-medium md:block">Sign in</span>
        </button>
      ) : (
        <button
          className="flex items-center gap-1 rounded-md border px-4 py-2 transition hover:border-blue-500"
          onClick={handleOpen}
        >
          <FontAwesomeIcon icon={faUserPlus} className="w-4" />
          <span className="hidden font-medium md:block">Sign up</span>
        </button>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="p-2">
            <div className="mb-4 border-b pb-2 text-center font-bold uppercase">
              <p className="text-sm">
                {renderContent('Sign In', 'Create an account')}
              </p>
            </div>
            <div className="mx-auto">
              <h2 className="text-center text-2xl font-light">
                {renderContent(
                  'Log Into Your Account',
                  'Create Your OpenTable Account',
                )}
              </h2>
              <AuthModalInputs
                isSignIn={isSignIn}
                inputs={inputs}
                handelChangeInput={handelChangeInput}
              />
              {error && (
                <Alert severity="error" className="mb-2">
                  {error}
                </Alert>
              )}
              <button
                className="grid w-full place-content-center rounded bg-red-600 p-3 text-sm uppercase text-white disabled:bg-gray-400"
                disabled={disabled}
                onClick={handelSubmit}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : (
                  renderContent('Sign In', 'Create Account')
                )}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
