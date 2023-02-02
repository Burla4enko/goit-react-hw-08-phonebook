import styled from 'styled-components';

export const LoginFormStyled = styled.form`
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

export const LoginBtn = styled.button`
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

  :hover {
    color: rgb(0, 126, 165);
    box-shadow: 0 0 10px rgb(0, 126, 165);
    border-color: rgb(0, 126, 165);
  }

  svg {
    color: currentColor;
    transition: color 0.3s ease;
  }
`;

export const LoginInput = styled.input`
  position: relative;
  display: block;
  width: 280px;
  height: 40px;
  border: 0;
  outline: 0;
  top: -2px;
  padding: 0 0 0 20px;
  font-weight: 700;
  background-color: rgb(28, 30, 33);
  box-shadow: inset -100px -100px 0 rgb(28, 30, 33);
  color: gray;
  transition: color 0.3s ease;

  :focus {
    color: rgb(0, 126, 165);
  }
`;

// export const LoginLabel = styled.label`
//   display: block;
//   padding: 3px 5px;
//   position: absolute;
//   top: -10px;
//   right: 20px;
//   text-transform: uppercase;
//   color: gray;
//   z-index: 3;
//   background-color: rgb(28, 30, 33);
//   border-radius: 4px;
// `;
