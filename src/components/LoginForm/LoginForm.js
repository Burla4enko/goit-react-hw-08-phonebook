import { unwrapResult } from '@reduxjs/toolkit';
import { FiLogIn } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { LoginFormStyled, LoginBtn, LoginInput } from './LofinForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      logIn({
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
    <LoginFormStyled onSubmit={handleSubmit} autoComplete="off">
      <LoginInput type="email" name="email" placeholder="email" />

      <LoginInput type="password" name="password" placeholder="password" />

      <LoginBtn type="submit">
        <FiLogIn size="24" />
      </LoginBtn>
    </LoginFormStyled>
  );
};
