import styled from 'styled-components';

export const FilterLabel = styled.label`
position:relative;
  color: gray;
  border-radius: 50%;
  
  :hover {
    color: rgb(0, 126, 165);
    box-shadow: 0 0 10px rgb(0, 126, 165);
    border-color: rgb(0, 126, 165);
  }

  svg {
    position absolute;
    left: 240px;
    top: 50%;
    transform: translateY(-50%);
    color: currentColor;
    transition: color 0.3s ease;
  }
`;

export const FilterInput = styled.input`
  display: block;
  width: 280px;
  height: 40px;
  padding-left: 20px;
  padding-right: 40px;

  border: 0;
  border-radius: 8px;
  outline: 0;
  background-color: rgb(28, 30, 33);
  box-shadow: inset -100px -100px 0 rgb(28, 30, 33);
  color: gray;
  font-weight: 700;

  transition: color 0.3s ease;

  :focus {
    color: rgb(0, 126, 165);
  }
`;
