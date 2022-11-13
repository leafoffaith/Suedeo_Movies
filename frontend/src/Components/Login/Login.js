import React from 'react'
import useInput from '../../hooks/useInput'
import './Login.scss'

export default function Login() {
  const { email, emailOnchange } = useInput('')
  const { password, passwordOnChange } = useInput('')

  return (
    <div className='login__container'>
      Login Component
      <div className='login__email_container'>
        <label>Email Addressssss</label>
        <input type={'text'} value={email} onChange={(e) => emailOnchange(e)} />
      </div>
      <div className='login__email_container'>
        <label>Password</label>
        <input
          type={'password'}
          value={password}
          onChange={(e) => passwordOnChange(e)}
        />
      </div>
      <button>Login</button>
    </div>
  )
}
