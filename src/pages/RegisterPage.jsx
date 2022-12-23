import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage({ title }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ email, name, password }) => {
    dispatch(asyncRegisterUser({ email, name, password }));
    navigate('/');
  };

  return (

    <main className="relative flex-1 flex flex-col justify-center min-h-screen overflow-hidden">
      <section className="w-full p-6 m-auto bg-white rounded-xl shadow-md lg:max-w-xl">
        <h2 className="text-3xl font-semibold text-center">{title}</h2>
        <RegisterInput register={onRegister} />
        <p className="mt-8 text-xs font-light text-center text-gray-700">Sudah punya akun ? <Link to="/login" className="font-medium text-blue-600 hover:underline">Halaman Login.</Link></p>
      </section>
    </main>
  );
}
RegisterPage.propTypes = {
  title: PropTypes.string.isRequired,
};
export default RegisterPage;
