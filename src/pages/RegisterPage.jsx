import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { Text } from '../contexts/LanguageContext/LanguageContextWrapper';
import { register } from '../utils/network-data';

function RegisterPage() {
  const navigate = useNavigate();

  const onRegisterHandler = async (note) => {
    const { error } = await register(note);

    if (!error) {
      navigate('/login');
    }
  }
  
  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className="text-2xl font-semibold underline underline-offset-4 decoration-pink-400 mb-8 text-slate-700 dark:text-neutral-50"><Text tid="hello" /></h2>
      <RegisterInput register={onRegisterHandler} />
    </section>
  )
}

export default RegisterPage;
