import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form action="" className="mt-6">
      <div className="mb-2">
        <label htmlFor="name" className="block text-sm font-semibold text-gray-800">Name
          <input id="name" value={name} onChange={onNameChange} type="text" className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </label>
      </div>
      <div className="mb-2">
        <label htmlFor="email" className="block text-sm font-semibold text-gray-800">Email
          <input id="email" value={email} onChange={onEmailChange} type="email" className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </label>
      </div>
      <div className="mb-2">
        <label htmlFor="password" className="block text-sm font-semibold text-gray-800">Password
          <input id="password" value={password} onChange={onPasswordChange} type="password" className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </label>
      </div>
      <div className="mt-6">
        <button type="button" onClick={() => register({ name, email, password })} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Register</button>
      </div>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
