import { ChangeEvent } from 'react'

type InputsType = {
  firstName: string
  lastName: string
  email: string
  phone: string
  city: string
  password: string
}

const AuthModalInputs = ({
  isSignIn,
  inputs,
  handelChangeInput,
}: {
  isSignIn: boolean
  inputs: InputsType
  handelChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
}) => {
  const { firstName, lastName, email, password, phone, city } = inputs
  return (
    <div>
      {isSignIn ? null : (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="w-[49%] rounded border px-2 py-3"
            placeholder="First name"
            value={firstName}
            name="firstName"
            onChange={handelChangeInput}
          />
          <input
            type="text"
            className="w-[49%] rounded border px-2 py-3"
            placeholder="Last name"
            value={lastName}
            name="lastName"
            onChange={handelChangeInput}
          />
        </div>
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          className="w-full rounded border px-2 py-3"
          placeholder="Enter your email"
          value={email}
          name="email"
          onChange={handelChangeInput}
        />
      </div>
      {isSignIn ? null : (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="w-[49%] rounded border px-2 py-3"
            placeholder="Phone"
            value={phone}
            name="phone"
            onChange={handelChangeInput}
          />
          <input
            type="text"
            className="w-[49%] rounded border px-2 py-3"
            placeholder="City"
            value={city}
            name="city"
            onChange={handelChangeInput}
          />
        </div>
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          type="password"
          className="w-full rounded border px-2 py-3"
          placeholder="Enter your password"
          value={password}
          name="password"
          onChange={handelChangeInput}
        />
      </div>
    </div>
  )
}

export default AuthModalInputs
