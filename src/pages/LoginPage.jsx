import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginInput from '../components/LoginInput';

function LoginPage({ title }) {
  return (
    <main className="relative flex-1 flex flex-col justify-center min-h-screen overflow-hidden">
      <section className="w-full p-6 m-auto bg-white rounded-xl shadow-md lg:max-w-xl">
        <h2 className="text-3xl font-semibold text-center">{title}</h2>
        <LoginInput />
        <p className="mt-8 text-xs font-light text-center text-gray-700">Tidak punya akun ? <Link to="/register" className="font-medium text-blue-600 hover:underline">Daftar disini.</Link></p>
      </section>
    </main>
  );
}
LoginPage.propTypes = {
  title: PropTypes.string.isRequired,
};
export default LoginPage;
