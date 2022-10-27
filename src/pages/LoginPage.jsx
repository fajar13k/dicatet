import React from 'react';
import PropTypes from 'prop-types';
import LoginInput from '../components/LoginInput';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/network-data';

function LoginPage({ loginSuccess }) {
  const navigate = useNavigate();

  const onLogin = async ({ email, password }) => {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
      navigate('/');
    }
  }

  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className="text-2xl font-semibold underline underline-offset-4 decoration-pink-400 mb-8">Introduce yourself!</h2>
      <LoginInput login={onLogin} />
    </section>
  )
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
}

export default LoginPage;