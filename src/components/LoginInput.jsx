import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, handleEmailChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    login({
      email,
      password
    })
  }

  return (
    <form onSubmit={onSubmitHandler} className="appearance-none w-1/2">
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-md font-medium">Email</label>
        <input type="email" id="email" className="bg-slate-700 font-semibold text-lg rounded-md block w-full p-2.5 focus:outline focus:outline-pink-600" placeholder="(Your email)" value={email} onChange={handleEmailChange} />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-2 text-md font-medium">Password</label>
        <input type="password" id="password" className="bg-slate-700 font-semibold text-lg rounded-md block w-full p-2.5 focus:outline focus:outline-pink-600" placeholder="(Your password)" value={password} onChange={handlePasswordChange} />
      </div>
      <button type="submit" className="bg-gradient-to-r bg-pink-600 hover:bg-pink-700 px-4 py-2 font-bold rounded-md focus:outline focus:outline-pink-400">Login</button>
    </form>
  )
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}

export default LoginInput;