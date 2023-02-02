import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import {
  RegistrationBtn,
  RegistrationForm,
  RegistrationInput,
} from './RegisterForm.styled';
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .then(unwrapResult)
      .catch(() =>
        toast.error(
          `Ups! Something wrong... Please, check your email or password and try again.`
        )
      );
  };
  return (
    <RegistrationForm onSubmit={handleSubmit} autoComplete="off">
      <RegistrationInput
        id="name"
        type="text"
        name="name"
        placeholder="user name"
      />

      <RegistrationInput type="email" name="email" placeholder="email" />

      <RegistrationInput
        type="password"
        name="password"
        placeholder="password"
      />

      <RegistrationBtn type="submit">
        <FaPlus size="20" />
      </RegistrationBtn>
    </RegistrationForm>
  );
};
