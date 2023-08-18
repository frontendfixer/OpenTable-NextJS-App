'use client'

import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'

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

  const renderContent = (signInContent: string, signUpContent: string) =>
    isSignIn ? signInContent : signUpContent

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
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
