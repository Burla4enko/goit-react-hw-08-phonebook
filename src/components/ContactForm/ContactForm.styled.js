import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const ContactFormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
  margin: 0 auto;
  position: relative;
  background-color: rgb(28, 30, 33);
  border-radius: 8px;

  :before {
    display: block;
    margin-left: 20px;
    position: relative;
    top: 40px;
    height: 2px;
    background-color: rgb(52, 56, 61);
    content: '';

    z-index: 1;
  }
`;

export const Label = styled.label`
  position: absolute;
  font-size: 0;
`;

export const Input = styled(Field)`
  position: relative;
  display: block;
  width: 280px;
  height: 40px;
  border: 0;
  outline: 0;
  top: -2px;
  padding: 0 30px 0 20px;
  font-weight: 700;
  background-color: rgb(28, 30, 33);
  box-shadow: inset -100px -100px 0 rgb(28, 30, 33);
  color: gray;
  transition: color 0.3s ease;

  :focus {
    color: rgb(0, 126, 165);
  }
`;

export const MessageSpan = styled(ErrorMessage)`
  position: absolute;
  top: 100px;
  left: -10px;
  width: 300px;
  padding: 8px;

  background-color: rgb(28, 30, 33);
  color: #ff3038;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
`;

export const ContactFormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 52px;
  height: 52px;
  color: gray;
  border-radius: 50px;
  outline: 0;
  z-index: 2;
  top: 24px;
  right: -24px;
  border: 6px solid rgb(52, 56, 61);
  background-color: rgb(28, 30, 33);
  cursor: pointer;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;

  :hover,
  :focus {
    color: rgb(0, 126, 165);
    box-shadow: 0 0 10px rgb(0, 126, 165);
    border-color: rgb(0, 126, 165);
  }

  svg {
    color: currentColor;
    transition: color 0.3s ease;
  }
`;
